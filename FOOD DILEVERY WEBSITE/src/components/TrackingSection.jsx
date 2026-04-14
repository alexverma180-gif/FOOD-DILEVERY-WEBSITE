import { useNavigate } from 'react-router-dom';

const TrackingSection = () => {
  const navigate = useNavigate();
  // We can use the environment variable here for MAP API keys if we implement real tracking later
  const mapApiKey = import.meta.env.VITE_MAP_API_KEY || 'dummy_api_key';

  return (
    <section className="py-32 overflow-hidden bg-surface-bright">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto bg-surface-container rounded-3xl overflow-hidden border-8 border-surface-container-lowest shadow-2xl">
              <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #735800 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
              <svg className="absolute inset-0 w-full h-full" fill="none" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <path className="path-animated" d="M50,350 C100,300 80,200 180,180 S250,100 350,50" stroke="#fbc51f" strokeLinecap="round" strokeWidth="4"></path>
              </svg>
              <div className="absolute top-[50px] right-[50px] animate-pulse-slow">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-2xl" data-icon="person_pin_circle">person_pin_circle</span>
                </div>
              </div>
              <div className="absolute bottom-[50px] left-[50px] flex flex-col items-center">
                <div className="bg-primary-container p-4 rounded-full shadow-xl animate-float" style={{ animationDuration: '4s' }}>
                  <span className="material-symbols-outlined text-4xl text-on-primary-container" data-icon="moped">moped</span>
                </div>
                <div className="mt-2 bg-on-background text-white px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase">On the way</div>
              </div>
              <div className="absolute top-1/2 left-8 -translate-y-1/2 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-primary-container/30 max-w-[140px] animate-float">
                <p className="text-[10px] font-bold text-primary uppercase mb-1">Status</p>
                <p className="text-xs font-semibold">Crossing 5th Ave</p>
              </div>
            </div>
            <div className="absolute -z-10 -bottom-10 -left-10 w-40 h-40 bg-primary-container/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 -top-10 -right-10 w-40 h-40 bg-tertiary-container/20 rounded-full blur-3xl"></div>
          </div>
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary-container text-on-primary-container text-xs font-bold tracking-wider mb-6 uppercase">Precision Logistics</span>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tighter leading-tight mb-8">
              KINETIC TRACKING FOR THE <span className="text-primary">ULTIMATE PEACE OF MIND</span>
            </h2>
            <p className="text-xl text-on-surface-variant mb-10 leading-relaxed font-body">
              Our high-energy tracking system doesn't just show a dot on a map. Experience every turn, every acceleration, and every mile in real-time. We've synchronized our kitchens with our kinetic routing engines to ensure you're never left wondering where your meal is.
            </p>
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div>
                <h4 className="text-primary font-bold text-2xl mb-1">99.9%</h4>
                <p className="text-sm font-medium opacity-70">Tracking Accuracy</p>
              </div>
              <div>
                <h4 className="text-primary font-bold text-2xl mb-1">Real-time</h4>
                <p className="text-sm font-medium opacity-70">GPS Telemetry</p>
              </div>
            </div>
            <button 
              onClick={() => navigate('/checkout')}
              className="flex items-center gap-3 bg-inverse-surface text-white px-8 py-4 rounded-full font-bold hover:bg-stone-800 transition-all group"
            >
              Start Your Order
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingSection;
