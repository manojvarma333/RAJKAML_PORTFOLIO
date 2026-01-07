import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'GP English Grammar',
      role: 'YouTube Channel',
      quote:
        'Rajkamal, as the editor for the GP English Grammar YouTube Channel, delivers clean, clear, and engaging edits. His smooth transitions and well-structured visuals make even complex grammar topics easy and enjoyable to understand. He is consistent, professional, and always completes his work on time, adding real value to the channel.',
      avatar: '/thumbnails/gp-english.jpg',
    },
    {
      name: 'Anuvanuvuu Cover Song',
      role: 'Music Project',
      quote:
        'Rajkamal’s edit for the Anuvanuvuu Cover Song beautifully captures emotion through seamless transitions and clean visuals. His attention to detail and storytelling enhanced the overall viewing experience and brought the song to life.',
      avatar: '/thumbnails/anuvanuvu.jpg',
    },
    {
      name: 'VASTRA',
      role: 'Fashion & PR Brand',
      quote:
        'Rajkamal is highly professional and punctual in his work for VASTRA. He consistently delivers projects on time without compromising on aesthetics or quality. His reliability and strong visual sense make him a valuable creative contributor.',
      avatar: '/thumbnails/vastra.jpg',
    },
    {
      name: 'KL-Focus',
      role: 'Student Body',
      quote:
        'Rajkamal is a creative and dependable editor for KL-Focus. He quickly understands requirements and transforms ideas into engaging visuals. His edits consistently maintain high quality while perfectly aligning with the vision of our student body.',
      avatar: '/thumbnails/kl-focus.jpg',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600 rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              Client Voices
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <p className="text-gray-400 text-xl mt-6">What People Say About My Work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 transition-all duration-500 hover:border-red-600 hover:bg-gray-900/80 hover:transform hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.2)]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-red-600/30 group-hover:text-red-600/50 transition-colors duration-300" />
                </div>

                <p className="text-gray-300 leading-relaxed mb-8 italic text-lg">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gray-800 group-hover:border-red-600 transition-colors duration-300"
                  />
                  <div>
                    <h4 className="text-white font-bold group-hover:text-red-500 transition-colors duration-300">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-500 text-sm">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
