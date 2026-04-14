const WhyFoodie = () => {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="text-center group">
            <div className="w-20 h-20 bg-tertiary-container rounded-xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-12 transition-transform">
              <span className="material-symbols-outlined text-4xl text-on-tertiary-container" data-icon="speed">speed</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Kinetic Speed</h3>
            <p className="text-on-surface-variant leading-relaxed">Our advanced routing algorithms ensure your meal arrives at the peak of its temperature and flavor.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-primary-container rounded-xl flex items-center justify-center mx-auto mb-8 transform group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-4xl text-on-primary-container" data-icon="stars">stars</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Curation First</h3>
            <p className="text-on-surface-variant leading-relaxed">We don't partner with everyone. Only the city's highest-rated culinary artists make it onto Foodie.</p>
          </div>
          <div className="text-center group">
            <div className="w-20 h-20 bg-surface-container-highest rounded-xl flex items-center justify-center mx-auto mb-8 transform group-hover:-rotate-12 transition-transform">
              <span className="material-symbols-outlined text-4xl text-on-surface" data-icon="restaurant_menu">restaurant_menu</span>
            </div>
            <h3 className="text-2xl font-bold mb-4">Unlimited Variety</h3>
            <p className="text-on-surface-variant leading-relaxed">From street food staples to Michelin-star tasting menus, explore a world of flavors from home.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyFoodie;
