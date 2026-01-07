import { useState } from 'react';

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: 'Adobe Premiere Pro', level: 95, category: 'Advanced' },
    { name: 'YouTube Long-form Editing', level: 90, category: 'Expert' },
    { name: 'Shorts / Reels / Instagram', level: 92, category: 'Expert' },
    { name: 'Educational Content', level: 88, category: 'Advanced' },
    { name: 'Motion Cuts & Beat Sync', level: 85, category: 'Advanced' },
    { name: 'Color Grading', level: 80, category: 'Intermediate' },
  ];

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(220,38,38,0.1)_1px,transparent_1px),linear-gradient(rgba(220,38,38,0.1)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              The Toolkit
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <p className="text-gray-400 text-xl mt-6">Mastered Skills & Tools</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl md:text-2xl font-semibold text-white group-hover:text-red-500 transition-colors duration-300">
                  {skill.name}
                </h3>
                <span className="text-sm font-mono text-gray-500 group-hover:text-red-400 transition-colors duration-300">
                  {skill.category}
                </span>
              </div>

              <div className="relative h-3 bg-gray-900 rounded-full overflow-hidden border border-gray-800 group-hover:border-red-600/50 transition-colors duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900" />

                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-red-600 via-red-500 to-red-600 transition-all duration-1000 ease-out rounded-full"
                  style={{
                    width: hoveredSkill === index ? `${skill.level}%` : '0%',
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-shimmer" />
                </div>

                <div
                  className="absolute top-0 left-0 h-full w-1 bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all duration-1000 ease-out"
                  style={{
                    left: hoveredSkill === index ? `${skill.level}%` : '0%',
                  }}
                />

                {hoveredSkill === index && (
                  <div
                    className="absolute top-0 h-full flex items-center transition-all duration-1000"
                    style={{ left: `${skill.level}%` }}
                  >
                    <div className="absolute -top-8 left-0 -translate-x-1/2 bg-red-600 text-white text-xs px-2 py-1 rounded font-mono whitespace-nowrap">
                      {skill.level}%
                    </div>
                  </div>
                )}
              </div>

              <div className="flex justify-between mt-2 text-xs font-mono text-gray-600">
                <span>00:00</span>
                <span className="group-hover:text-red-500 transition-colors duration-300">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm uppercase tracking-wider">
            Hover over each skill to see proficiency timeline
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
