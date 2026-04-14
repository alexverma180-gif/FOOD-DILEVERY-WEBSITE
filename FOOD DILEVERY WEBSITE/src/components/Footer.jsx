const Footer = () => {
  return (
    <footer className="w-full py-12 px-6 bg-stone-100 dark:bg-stone-900 font-['Be_Vietnam_Pro'] text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="bg-stone-200 dark:bg-stone-800 h-px mb-8"></div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-bold text-stone-900 dark:text-stone-50 mb-4 brand-font">Foodie</div>
            <p className="text-stone-500 dark:text-stone-400 mb-6">Kinetic Gourmet. Delivering the world's finest flavors at the speed of life.</p>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-amber-800 dark:text-amber-600 uppercase tracking-widest text-xs">Platform</h4>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Explore</a>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Offers</a>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Membership</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-amber-800 dark:text-amber-600 uppercase tracking-widest text-xs">Partners</h4>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Restaurant Partner</a>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Delivery Rider</a>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Press Kit</a>
          </div>
          <div className="flex flex-col space-y-4">
            <h4 className="font-bold text-amber-800 dark:text-amber-600 uppercase tracking-widest text-xs">Legal</h4>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Privacy Policy</a>
            <a className="text-stone-500 dark:text-stone-400 hover:underline decoration-amber-500/50 opacity-80 hover:opacity-100 transition-all" href="#">Terms of Service</a>
          </div>
        </div>
        <div className="mt-16 text-center text-stone-500 dark:text-stone-400">
          <p>© 2024 Foodie Kinetic Gourmet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
