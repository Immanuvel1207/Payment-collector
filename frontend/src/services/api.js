import axios from 'axios';

// User Registration
export const register = async (userData) => {
  try {
    const response = await axios.post('/api/users/register', userData);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
};

// User Login
export const login = async (userData) => {
  try {
    const response = await axios.post('/api/users/login', userData);
    return response.data;
  } catch (error) {
    console.error('Error logging in:', error);
    throw error;
  }
};

// Create a new payment
export const createPayment = async (paymentData) => {
  try {
    const response = await axios.post('/api/payments/create', paymentData);
    return response.data;
  } catch (error) {
    console.error('Error creating payment:', error);
    throw error;
  }
};

// Get payment details by payment code
export const getPaymentDetails = async (paymentCode) => {
  try {
    const response = await axios.get(`/api/payments/${paymentCode}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching payment details:', error);
    throw error;
  }
};

// Create Stripe checkout session
export const createCheckoutSession = async (paymentData) => {
  try {
    const response = await axios.post('/create-checkout-session', paymentData);
    return response.data;
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    throw error;
  }
};

// My Payments (assuming you have this endpoint set up)
export const myPayments = async (userId) => {
  try {
    const response = await axios.get(`/api/payments/my-payments/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching my payments:', error);
    throw error;
  }
};
