import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-stone-50/80 dark:bg-stone-950/80 backdrop-blur-xl shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="text-2xl font-bold tracking-tighter text-stone-900 dark:text-stone-50 brand-font">
          <Link to="/">Foodie</Link>
        </div>
        <div className="hidden md:flex items-center space-x-8 font-['Plus_Jakarta_Sans'] font-semibold">
          <a className="text-amber-700 dark:text-amber-500 border-b-2 border-amber-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Explore</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Offers</a>
          <a className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors" href="#">Tracking</a>
          <Link to="/checkout" className="text-stone-600 dark:text-stone-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">Membership</Link>
        </div>
        <div className="flex items-center space-x-4">
          <button className="p-2 text-stone-600 scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined" data-icon="shopping_cart">shopping_cart</span>
          </button>
          <button className="p-2 text-stone-600 scale-95 active:scale-90 transition-transform">
            <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
          </button>
        </div>
      </div>
      <div className="bg-stone-200/50 dark:bg-stone-800/50 h-px"></div>
    </nav>
  );
};

export default Navbar;
