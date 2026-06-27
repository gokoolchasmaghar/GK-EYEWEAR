import heroImage from '../../../assets/hero-banner.jpg';

function HeroSection() {
  return (
    <section className="relative bg-[#0a0a14] min-h-[600px] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Models wearing sunglasses"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <p className="text-white text-2xl md:text-4xl font-light mb-6">
          NOW AVAILABLE ON
        </p>

        <div className="flex items-center gap-6 flex-wrap">
          <div className="bg-black px-8 py-6 flex items-center justify-center min-w-[180px]">
            <span className="text-white font-bold text-lg">
              TATA CLiQ <br /> LUXURY
            </span>
          </div>

          <span className="text-white text-3xl">&</span>

          <div className="bg-white px-8 py-6 flex items-center justify-center min-w-[180px]">
            <span className="text-pink-600 font-bold text-2xl italic">
              Myntra
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;