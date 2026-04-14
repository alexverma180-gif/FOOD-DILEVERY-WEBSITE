import { useNavigate } from 'react-router-dom';

const AppCTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
        <div className="md:col-span-8 bg-inverse-surface rounded-lg p-12 flex flex-col justify-center text-white relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-5xl font-bold mb-6">Experience the app.</h2>
            <p className="text-white/70 max-w-sm text-lg mb-10">Unlock exclusive kinetic gourmet features and real-time culinary tracking on the Foodie mobile app.</p>
            <div className="flex gap-4">
              <div className="px-6 py-3 border border-white/20 rounded-full flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">ios</span>
                <span className="font-bold">App Store</span>
              </div>
              <div className="px-6 py-3 border border-white/20 rounded-full flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-colors">
                <span className="material-symbols-outlined">play_store_installed</span>
                <span className="font-bold">Play Store</span>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 w-1/2 h-full hidden md:block">
            <img alt="Food Bowl" className="absolute -right-20 -bottom-20 w-[120%] rotate-[-15deg] group-hover:rotate-0 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWcIlNjmf4tc0fPPAaK7UXfKHG6oHyFOveRyZWHI_-AJs1NaXs29r8cW0Xq0sTEnjDNiv9a0SllMmBo47gdKn5fJ5V5bLL2GWgZwderr8flflqRg0rukcP2kiLpf3JOLiRg4Hrsc1uFoKZNtO55wraztKbyLAXOqOsYqJz12oPnB1N0hToY-3MD4_0VcoRIn5ZbaPRlDw3TYXSCgvlOYHWjCvBAPrsDM8zQbeQKyhkaAdiXEoV7Mv2-yFQYtAyQPYPlvzdMq9omps"/>
          </div>
        </div>
        <div className="md:col-span-4 bg-primary-container rounded-lg p-10 flex flex-col justify-between">
          <span className="material-symbols-outlined text-5xl text-on-primary-container">loyalty</span>
          <div>
            <h3 className="text-3xl font-bold text-on-primary-container mb-4">Join Membership</h3>
            <p className="text-on-primary-container/80 mb-6 font-medium">Free delivery, zero service fees, and priority kitchen routing.</p>
            <button 
              onClick={() => navigate('/checkout')}
              className="w-full bg-on-primary-container text-white py-4 rounded-full font-bold"
            >
              Try 1 Month Free
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
