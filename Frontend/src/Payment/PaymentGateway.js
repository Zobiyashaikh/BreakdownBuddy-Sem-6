// import React, { useState, useMemo } from 'react';
// // import { loadScript, Razorpay } from 'razorpay';
// import useRazorpay from "react-razorpay";

// const [Razorpay] = useRazorpay();

// const PaymentGateway = () => {
//   const [Razorpay, isLoaded] = useRazorpay();
//   const [paymentId, setPaymentId] = useState('');

//   const handlePayment = async () => {
    
//     const response = await fetch('/create-order', { method: 'POST' });
//     const data = await response.json();

//     const options = {
//       key: 'rzp_test_tcsuiVJevyHrA1',
//       amount: data?.amount || 10000, // amount in paise
//       currency: data?.currency || 'INR',
//       name: 'BREAKDOWN BUDDY',
//       description: 'Test Transaction',
//       order_id: data?.id,
//       handler: function (response) {
//         alert(response.razorpay_payment_id);
//         setPaymentId(response.razorpay_payment_id);
//       },
//       prefill: {
//         name: 'John Doe',
//         email: 'test@example.com',
//         contact: '9999999999',
//       },
//       theme: {
//         color: '#3399cc',
//       },
//     };

//     const razorpay = new Razorpay(options);
//     razorpay.open();
//   };

  
//   useEffect(() => {
//     if (isLoaded) {
//       handlePayment();
//     }
//   }, [isLoaded, handlePayment])

//   return (
//     <div>
//       <h2>Payment Gateway</h2>
//       <button onClick={handlePayment}>Pay Now</button>
//       {paymentId && <p>Payment Successful. Payment ID: {paymentId}</p>}
//     </div>
//   );
// };

// export default PaymentGateway;
