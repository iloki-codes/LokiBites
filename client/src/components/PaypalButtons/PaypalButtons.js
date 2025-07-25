import {
    PayPalButtons,
    PayPalScriptProvider,
    usePayPalScriptReducer,
  } from '@paypal/react-paypal-js';
  import React, { useEffect } from 'react';
  import { useLoading } from '../../hooks/useLoading';
  import { pay } from '../../services/orderService';
  import { useCart } from '../../hooks/useCart';
  import { toast } from 'react-toastify';
  import { Link, useNavigate } from 'react-router-dom';


  // const loadPayPalScript = () => {
  //   const script = document.createElement("script");
  //   script.src = "https://www.paypal.com/sdk/js?client-id=AZmEJRJ7o5rkR4k47WZpywE_XZtIJXgngEKoF_cPWAzlEMexpxEyA5KSXFY5TyTmFYOsNkRPUDSdMe25&currency=USD";
  //   script.async = true;
  //   script.id = "paypal-sdk";
  //   document.body.appendChild(script);
  // };

  export default function PaypalButtons({ order }) {

    // useEffect(() => {
    //   loadPayPalScript();
    // }, []);

    // useEffect(() => {
    //   if(!window.paypal) {
    //     console.error("paypal sdk failed");
    //     return;
    //   }
    //   window.paypal.Buttons(order).render(Buttons);
    // }, []);

    return (
      <PayPalScriptProvider
        options={{
          // secretKey: 'EB04SyjsHZrygsDQn7XuMZAI9DLz0Yde1CDmXdcZOWN09rQbZZlLj4ejdLiobcPITOF6FqRVSYPO1YIf',
          clientId:
            'AZmEJRJ7o5rkR4k47WZpywE_XZtIJXgngEKoF_cPWAzlEMexpxEyA5KSXFY5TyTmFYOsNkRPUDSdMe25',
            intent: 'capture',
            currency: 'USD'
        }}
      >
        <Buttons order={order} />
      </PayPalScriptProvider>
    );
  }

  function Buttons({ order }) {
    const { clearCart } = useCart();
    const navigate = useNavigate();
    const [{ isPending }] = usePayPalScriptReducer();
    const { showLoading, hideLoading } = useLoading();
    useEffect(() => {
      isPending ? showLoading() : hideLoading();
    });

    const createOrder = (data, actions) => {
      return actions.order.create({
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: (order.totalPrice + order.totalPrice*0.18 + order.totalPrice/order.items.map(item => item.quantity).toString() || "10" )
            }
          }
        ]
      }).then(orderID => {
        console.log('Order Created', orderID);
        return orderID;
      }).catch(error => {
        console.error('Error creating order', error);
      });
    };

    const onApprove = async (data, actions) => {

      try {
        console.log('Data recieved: ', data);
        const payment = await actions.order.capture();
        console.log("pay.id: ", payment);

        if (!payment || !payment.id) {
          throw new Error("Payment id is missing");
        }

        const orderId = await pay(payment.id);
        console.log('OrderID', orderId);

        clearCart();

        toast.success('Payment Saved Successfully', 'Success');

        navigate(`/track/${orderId}`);

      } catch (error) {
        console.error('failed to navigate further', error);
        toast.error('Payment Save Failed', 'Error');
      }

    };

    const onError = err => {
      toast.error('Payment Failed', 'Error');
    };

    // if(!window.paypal) {
    //   console.error('paypal sdk failed');
    // } else { console.log('paypal sdk loaded successfully');
    //     }

    return (

      <>
      <PayPalButtons
        createOrder={createOrder}
        onApprove={onApprove}
        onError={onError}
      />

      <Link to="/track/67cb7052dfedce4c05591b3e">

        <input style={{
          color: "#F2A896", fontSize: "1rem",
          fontWeight: "900", backgroundColor: "#358597",
          height: "4.7vw", width: "46vw",
          border: "none"
          }}
          type='submit' id="pay" value="Pay with LokiBites Wallet" />
      </Link>
      </>
    );
  };

