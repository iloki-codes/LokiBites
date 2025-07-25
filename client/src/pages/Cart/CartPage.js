import React from 'react';
import { Link } from 'react-router-dom';
import Price from '../../components/Price/Price';
import Title from '../../components/Title/Title';
import { useCart } from '../../hooks/useCart';
import classes from './cartPage.module.css';
import NotFound from '../../components/NotFound/NotFound';
import bgVid from "../../assets/cartfoodvid.mp4";


export default function CartPage() {
  const { cart, removeFromCart, changeQuantity } = useCart();

  return (
    <>
          <div className={classes.vid}>
            <video autoPlay loop muted playsInline>
                <source src={bgVid} type='video/mp4' />
            </video>

          </div>
      <Title title="Cart Page" margin="1.5rem 0 0 2.5rem" color={"#358597"} />

      {cart.items.length === 0 ? (
        <NotFound message="Cart Page Is Empty!" />
      ) : (
        <div className={classes.container}>
          <ul className={classes.list}>
            {cart.items.map(item => (
              <li key={item.food.id}>
                <div>
                  <img src={`${item.food.imageUrl}`} alt={item.food.name} />
                </div>
                <div>
                  <Link to={`/food/${item.food.id}`}>{item.food.name}</Link>
                </div>

                <div>
                  <select
                    value={item.quantity}
                    onChange={e => changeQuantity(item, Number(e.target.value))}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </div>

                <div>
                  <Price price={item.price} />
                </div>

                <div>
                  <button
                    className={classes.remove_button}
                    onClick={() => removeFromCart(item.food.id)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div className={classes.checkout}>
            <div>
              <div className={classes.foods_count}>{cart.totalCount}</div>
              <div className={classes.total_price}>
                <Price price={cart.totalPrice} />
                <p>Delivery Charges:
                  <span>{cart.totalPrice/10}</span>
                </p>
                <p>Tax:
                  <span>{cart.totalPrice * 0.18 }</span>
                </p>
                <p>Total Bill Amount:
                  <span>{
                  Math.round(
                          cart.totalPrice +
                          cart.totalPrice/10 +
                          cart.totalPrice * 0.18)
                        }
                  </span>
                </p>
              </div>
            </div>

            <Link to="/checkout">Proceed To Checkout</Link>
          </div>
        </div>
      )}
    </>
  );
}