import axios from 'axios';

const user = JSON.parse(localStorage.getItem("user"));
const token = user ? user.token : null;

const axiosConfig = () => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});


export const createOrder = async (order) => {
    try {
        console.log('Stored token:', token);
        if(!token) {
          throw new Error("no token has benn found");
        }

        const { data } = await axios.post(
            "/orders/create",
            order,
            axiosConfig()
        );
        return data;
    } catch (error) {
        console.error("Create Order Error:", error);
    }
};

export const getNewOrderForCurrentUser = async () => {
    try {
        const { data } = await axios.get("/orders/newOrderForCurrentUser", axiosConfig());
        return data;
    } catch (error) {
        console.error('Fetch New Order Error:', error);
    }
};

export const pay = async (paymentId) => {
    try {
    
        const { data } = await axios.put(
            "/orders/pay",
            { paymentId },
            axiosConfig()
        );
        return data;
    } catch (error) {
        console.error("Payment Error:", error);
    }
};

// Track Order by ID
export const trackOrderById = async (orderId) => {
  try {

      const { data } = await axios.get(`/orders/track/${orderId}`,
        axiosConfig()
      );
      return data;
  } catch (error) {
      console.error("Track Order Error:", error);
  }
};

// Get All Orders (with optional state filter)
export const getAll = async (state) => {
  try {
      const { data } = await axios.get(`/orders/${state ?? ''}`,
        {
          headers: {Authorization: `Bearer ${token}`}
        }
      );
      return data;
  } catch (error) {
      console.error("Get All Orders Error:", error);
  }
};

// Get All Order Statuses
export const getAllStatus = async () => {
  try {

      const { data } = await axios.get(`/orders/allstatus`,
        {
          headers: {Authorization: `Bearer ${token}`}
        }
      );
      return data;
  } catch (error) {
      console.error("Get All Status Error:", error);
  }
};

// export const createOrder = async order => {
//   try {
//     const { data } = axios.post('/orders/create', order);
//     return data;
//   } catch (error) {}
// };

// export const getNewOrderForCurrentUser = async () => {
//   const { data } = await axios.get('/orders/newOrderForCurrentUser');
//   return data;
// };

// export const pay = async paymentId => {
//   try {
//     const { data } = await axios.put('/orders/pay', { paymentId });
//     return data;
//   } catch (error) {}
// };

// export const trackOrderById = async orderId => {
//   const { data } = await axios.get('/orders/track/' + orderId);
//   return data;
// };

// export const getAll = async state => {
//   const { data } = await axios.get(`/orders/${state ?? ''}`);
//   return data;
// };

// export const getAllStatus = async () => {
//   const { data } = await axios.get(`/orders/allstatus`);
//   return data;
// };