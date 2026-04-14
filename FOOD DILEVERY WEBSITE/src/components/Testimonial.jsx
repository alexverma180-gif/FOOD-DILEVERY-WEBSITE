const Testimonial = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-surface-container-low rounded-xl p-12 md:p-20 relative overflow-hidden">
          <div className="absolute top-10 right-10 opacity-10">
            <span className="material-symbols-outlined text-9xl">format_quote</span>
          </div>
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary-container mb-8">
              <img alt="Customer" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhy9eVSliWuGCVBK4BSzJBnnOSbeOB0X4j46MUOEeq360s_8UFA-cvFzm5UC4rFzee_GNqqdmZTVhWZ_ClyO2vpSWr31WKlnP1xoutnLO-X_uagdR9xv01ld51W-r3S9voriRwswcCzSLW6A4Y4kb8ywo0GF2i_UcrMqeRgdfltDLWX2H1aYUJ7vmt_x6r9zauof969uLj1CidvVHjpfIL1WHjaaEpm88L5UUdmpgm9hhMwLLOCV0_-TJW_D2iTLZQHvAi-GgyScA"/>
            </div>
            <p className="text-2xl md:text-3xl font-medium leading-snug mb-10 italic">
              "Foodie has completely transformed how I host dinner parties. The quality of the restaurants is unparalleled, and the tracking experience is actually fun to watch!"
            </p>
            <div>
              <p className="font-bold text-xl">Elena Richardson</p>
              <p className="text-on-surface-variant uppercase tracking-widest text-xs mt-1">Gourmet Member since 2021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
