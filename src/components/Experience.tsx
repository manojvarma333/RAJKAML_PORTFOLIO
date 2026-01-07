import { Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      year: '2025',
      title: 'Advanced Premiere Pro Mastery',
      description: 'Completed comprehensive training from basic to advanced editing techniques',
      highlight: 'Professional certification',
    },
    {
      year: '2024',
      title: 'Mentorship with Karthik Raghavarapu',
      description: 'Learned advanced storytelling and editing workflows from industry expert',
      highlight: 'YouTube optimization expert',
    },
    {
      year: '2023',
      title: 'Training with Tharun Speaks',
      description: 'Specialized training in content creation and audience engagement strategies',
      highlight: 'Content strategy & growth',
    },
    {
      year: '2022-Present',
      title: 'CIIE - Social & Digital Media Editor',
      description: 'Creating impactful content and managing campaigns for educational initiatives',
      highlight: 'Ongoing role',
    },
    {
      year: '2021',
      title: 'Collaborated with GP English Grammar',
      description: 'Contributed to growth from 0 to 19K subscribers through strategic video editing',
      highlight: 'Major milestone achievement',
    },
  ];

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:100%_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              The Journey
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <p className="text-gray-400 text-xl mt-6">Experience & Learning</p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-red-600 via-red-500 to-red-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative pl-0 md:pl-24 group"
                style={{
                  animationDelay: `${index * 150}ms`,
                }}
              >
                <div className="absolute left-0 top-8 w-16 h-16 bg-gray-900 border-4 border-red-600 rounded-full flex items-center justify-center hidden md:flex group-hover:scale-110 group-hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all duration-300">
                  <Calendar className="w-6 h-6 text-red-600" />
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 transition-all duration-500 group-hover:border-red-600 group-hover:bg-gray-900/80 group-hover:transform group-hover:scale-[1.02] group-hover:shadow-[0_0_40px_rgba(220,38,38,0.2)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div className="text-red-500 font-bold text-sm uppercase tracking-wider mb-2 md:mb-0">
                        {exp.year}
                      </div>
                      <div className="inline-block px-3 py-1 bg-red-600/10 border border-red-600/30 text-red-400 text-xs font-semibold uppercase tracking-wide">
                        {exp.highlight}
                      </div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors duration-300">
                      {exp.title}
                    </h3>

                    <p className="text-gray-400 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </div>

                <div className="absolute -left-2 top-8 w-4 h-4 bg-red-600 rounded-full animate-pulse hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
