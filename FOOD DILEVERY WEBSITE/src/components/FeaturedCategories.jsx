const FeaturedCategories = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4">Featured Categories</h2>
            <p className="text-on-surface-variant">Curated selections for your cravings.</p>
          </div>
          <button className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            Browse all <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="group relative overflow-hidden rounded-lg bg-surface-container-lowest aspect-[4/5] cursor-pointer">
            <img alt="Pizza" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMJwb3AcEj2wm17GksEqyYQfSnCxCobxHbLEEx7xql_8bYGNSRxSh5rOUF3JikhpZE3mjmcGA2V5VgIKz9NvQbU4pqSiAniT_LDS1OAzK5bbfnPi84OdEy8tkd1PIL3Xfl1ivPxaknGq8vHLwID69BNUbCtH7c0ZzH9cX0PSxfptHdKCUKeJt3zHoGs-Qo3cEJs0KzbnuUjaH7KAXSc7f-VnVU0TyoPC-cyqtwYIETZFwDn8E3Tte0ep-ClHV1DVFF_rSj1925Oz8"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-white text-3xl font-bold mb-2">Pizza</h3>
              <p className="text-white/80 text-sm mb-4">Wood-fired authentic recipes</p>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container text-on-primary-container transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="material-symbols-outlined">chevron_right</span>
              </span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-surface-container-lowest aspect-[4/5] cursor-pointer translate-y-8">
            <img alt="Burgers" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuATHOLGnPHkzEKbmhmO-GxNJho3W-f4AcFuGte97iUVskIIgWtGcQU9l88_HA71jRjWotOXt-cvyYM8eHElzWMJDNW9fp-1U--RADM9EngaM36cKOcC-KKb97M83yG1nU6U5wJhUAPDqlXdNIWi6zznFiSlFnrRej-F0VO0PDSnukonEOgym7xUsgcgRNIh7mHQK9LIOcpughaaR7aGD84eUnxiHImf81iQuNA5o7_Ipy4dRVP1WUs_5mqpvctCI4Z7p54qqgZWSiY"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-white text-3xl font-bold mb-2">Burgers</h3>
              <p className="text-white/80 text-sm mb-4">Premium wagyu & craft patties</p>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container text-on-primary-container transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="material-symbols-outlined">chevron_right</span>
              </span>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg bg-surface-container-lowest aspect-[4/5] cursor-pointer">
            <img alt="Healthy" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfyV4fDXKQJTG1_2l5YrtEx4TFX7zK97KAXMmRRC8XnlYIl_FwvNCmMYvoMqg9p3eWVsPw8ba2WA17yKeTucxD9oepf3WHacYUwkhHq30a92CAZ2bzwhp_K-gu0X20VvEHitC2hxRWSVdhsBAI6rQpYnDTffm805o530Fw7f_63_I8z6-3rAjb56KpFTZxIIYodcnMQpTqhJw0I45XEBBKuGBoX_NAI1SQ3HUz1_iSlNmhqo3G9b-c0caRmiLGiNBb5RtFs4SWE1g"/>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <h3 className="text-white text-3xl font-bold mb-2">Healthy</h3>
              <p className="text-white/80 text-sm mb-4">Nutrient dense power bowls</p>
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-container text-on-primary-container transform translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <span className="material-symbols-outlined">chevron_right</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
