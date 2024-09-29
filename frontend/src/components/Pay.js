import React, { useState } from 'react';
import { getPaymentDetails, createCheckoutSession } from '../services/api';
import { toast } from 'react-toastify';

const Pay = () => {
  const [paymentCode, setPaymentCode] = useState('');
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch payment details by payment code
  const fetchPaymentDetails = async () => {
    setLoading(true);
    try {
      const details = await getPaymentDetails(paymentCode);
      setPaymentDetails(details);
      toast.success('Payment details fetched');
    } catch (error) {
      toast.error('Error fetching payment details');
    } finally {
      setLoading(false);
    }
  };

  // Initiate payment via Stripe
  const handlePayment = async () => {
    try {
      const session = await createCheckoutSession({
        name: paymentDetails.name,
        amount: paymentDetails.amount,
      });
      window.location.href = `https://checkout.stripe.com/pay/${session.id}`;
    } catch (error) {
      toast.error('Error initiating payment');
    }
  };

  return (
    <div>
      <h2>Pay Your Bill</h2>
      <input
        type="text"
        placeholder="Enter Payment Code"
        value={paymentCode}
        onChange={(e) => setPaymentCode(e.target.value)}
      />
      <button onClick={fetchPaymentDetails} disabled={loading || !paymentCode}>
        Fetch Payment
      </button>

      {paymentDetails && (
        <div>
          <h3>Payment for: {paymentDetails.name}</h3>
          <p>Amount: ₹{paymentDetails.amount}</p>
          <button onClick={handlePayment}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Pay;
