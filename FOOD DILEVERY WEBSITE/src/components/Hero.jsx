import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden min-h-[921px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-tertiary-container text-on-tertiary-container text-xs font-bold tracking-wider mb-6 uppercase">
            Premium Gourmet Experience
          </span>
          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 text-on-background">
            ENJOY YOUR MEAL WITH <span className="text-primary">FOODIE</span>
          </h1>
          <p className="text-lg text-on-surface-variant max-w-md mb-10 leading-relaxed font-body">
            The finest flavors from the city's top chefs, delivered to your doorstep with the momentum of a kinetic kitchen.
          </p>
          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => navigate('/checkout')}
              className="kinetic-gradient text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-primary/20 scale-100 hover:scale-105 active:scale-95 transition-all"
            >
              Order Now
            </button>
            <button className="bg-surface-container-highest text-on-surface px-8 py-4 rounded-full font-bold text-lg hover:bg-surface-container-high transition-colors">
              View Menu
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-20"></div>
          <div className="relative z-10 scale-110">
            <img 
              alt="Gourmet Platter" 
              className="rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-700" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBXKHePmHwCwv2N52mYCQTmbmmJBeGIQXdmXWranDIgtBxzpkTl-qZd_dDI1l4C9vYXUZTbpvG3mwe8n2xLrisTKiP4h4zXIVVhBwU28MxhSE-W5Bo4RTf3RPU_SrbMugJyztnrWSXI8QMfKXITU5GTmUmiVP4OBBFAthXtrS5a62AARkSrhVYPoXc-qTUBnWP6ayT_-6s1HVRco3pFTSJK_LEmqKmb0yw5io00GAs2hMgh5k5lyWP8-mXG3EyuC7sCf3cmyyerNMI"
            />
            <div className="absolute -bottom-8 -left-8 bg-surface-container-lowest p-6 rounded-lg shadow-2xl flex items-center gap-4 max-w-xs animate-bounce">
              <div className="bg-primary-container p-3 rounded-full">
                <span className="material-symbols-outlined text-on-primary-container" data-icon="delivery_dining">delivery_dining</span>
              </div>
              <div>
                <p className="text-xs font-bold text-outline uppercase tracking-widest">Fastest Delivery</p>
                <p className="text-lg font-bold">24 mins average</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
