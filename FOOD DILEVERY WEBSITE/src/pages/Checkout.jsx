import { Link } from 'react-router-dom';

const Checkout = () => {
  // Demo accessing environment variables
  const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:3000';
  const paymentGateway = import.meta.env.VITE_PAYMENT_GATEWAY_KEY || 'dummy_gateway_key';

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center space-y-6">
        <div className="w-20 h-20 bg-primary-container rounded-full flex items-center justify-center mx-auto">
          <span className="material-symbols-outlined text-4xl text-on-primary-container">shopping_cart</span>
        </div>
        <h1 className="text-3xl font-bold font-['Plus_Jakarta_Sans']">Checkout Simulator</h1>
        <p className="text-stone-600">
          This is a simulated checkout route. In production, this would securely process your transaction.
        </p>
        
        <div className="bg-stone-100 p-4 rounded-lg text-left text-sm font-mono overflow-auto">
          <p className="font-bold mb-2">Environment Setup verified:</p>
          <ul className="space-y-1">
            <li>Backend: {backendUrl}</li>
            <li>Payment Key: {paymentGateway.substring(0, 5)}...</li>
          </ul>
        </div>
        
        <Link to="/">
          <button className="w-full bg-primary text-white py-3 rounded-full font-bold hover:bg-primary/90 transition-colors mt-6">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
