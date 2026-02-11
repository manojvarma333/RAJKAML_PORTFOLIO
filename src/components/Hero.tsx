import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openRandomShowreel = () => {
    const urls = [
      'https://www.instagram.com/gangsters_of_kl/reel/DSsbW3YAekK/', // KLU Temple
      'https://www.instagram.com/kl_vastraa/reel/DSjWCVukgph/', // GREEN GLAM
      'https://www.youtube.com/watch?v=ER9sogxzpDI', // ANUVANUVU COVER SONG
      'https://www.instagram.com/reel/DQUJXQuktql/?igsh=MWprODN2ODk5Z2VoZg==', // PR Reel
      'https://youtube.com/shorts/bsV7uR1Ul4U?feature=share', // DTI Expo at KLU
    ];

    const randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.open(randomUrl, '_blank', 'noopener,noreferrer');
  };
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10" />

      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JhaW4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIyMDAiIGhlaWdodD0iMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzAwMCIvPjxjaXJjbGUgY3g9IjEwMCIgY3k9IjEwMCIgcj0iMSIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIwLjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JhaW4pIi8+PC9zdmc+')] animate-grain" />
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
        <div className="space-y-6 animate-fadeInUp">
          <div className="overflow-hidden animate-fadeIn">
            <img 
              src="/thumbnails/3.png" 
              alt="RAJKAMAL" 
              className="h-48 w-48 md:h-56 md:w-56 object-cover rounded-full mx-auto"
            />
          </div>
          
          <div className="overflow-hidden">
            <h1 className="text-7xl md:text-9xl font-black tracking-tighter text-white uppercase animate-slideDown">
              Rajkamal
            </h1>
          </div>

          <div className="overflow-hidden">
            <div className="h-1 w-32 bg-gradient-to-r from-red-600 via-red-500 to-red-600 mx-auto animate-expandWidth" />
          </div>

          <div className="overflow-hidden">
            <p className="text-2xl md:text-4xl font-bold text-gray-300 tracking-wide animate-slideUp animation-delay-300">
              Video Editor
            </p>
          </div>

          <div className="overflow-hidden">
            <p className="text-lg md:text-xl text-gray-400 font-light tracking-wider animate-fadeIn animation-delay-600">
              4+ Years | 200+ Videos Edited
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-8 justify-center animate-fadeIn animation-delay-900">
            <button
              className="group relative px-8 py-4 bg-red-600 text-white font-semibold tracking-wide uppercase overflow-hidden transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
              onClick={openRandomShowreel}
            >
              <span className="relative z-10">Watch Showreel</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              className="group relative px-8 py-4 border-2 border-white text-white font-semibold tracking-wide uppercase overflow-hidden transition-all duration-300 hover:bg-white hover:text-black hover:scale-105"
              onClick={scrollToContact}
            >
              <span className="relative z-10">Hire Me</span>
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/50" />
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-600 to-transparent opacity-50" />
      </div>
    </section>
  );
};

export default Hero;
