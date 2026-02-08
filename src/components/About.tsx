import { Award, Users, GraduationCap, Briefcase } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: '4+ Years',
      description: 'Professional Experience',
    },
    {
      icon: Users,
      title: 'GP English Grammar',
      description: 'Collaborated with leading creators',
    },
    {
      icon: GraduationCap,
      title: 'B.Tech Graduate',
      description: 'KL University',
    },
    {
      icon: Briefcase,
      title: 'CIIE Editor',
      description: 'Social & Digital Media',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              About Me
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 md:p-12">
            <div className="space-y-6 text-gray-300">
              <p className="text-lg md:text-xl leading-relaxed">
                I'm a Video Editor who enjoys turning raw footage into engaging and well-structured videos. I focus on clean cuts, smooth pacing, and maintaining a natural flow to ensure each video communicates its message clearly.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                I've worked on promotional and event-based video projects with organizations such as KL CIIE and KL Focus. I aim to deliver polished, high-quality videos that meet client expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 transition-all duration-500 hover:border-red-600 hover:bg-gray-900/80 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,38,38,0.3)]"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                <div className="mb-6 inline-block p-4 bg-red-600/10 rounded-lg group-hover:bg-red-600/20 transition-colors duration-300">
                  <item.icon className="w-8 h-8 text-red-600 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-400 font-light">
                  {item.description}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
