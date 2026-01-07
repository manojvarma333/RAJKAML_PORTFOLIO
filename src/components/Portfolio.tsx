import { useState } from 'react';
import { Play, X } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  client: string;
  category: string;
  thumbnail: string;
  description: string;
  platform: string;
  style: string;
  videoUrl: string;
  embedUrl?: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'YouTube', 'Shorts/Reels'];

  const projects: Project[] = [
    {
      id: 7,
      title: 'KLU Temple 🙏🏻🕉',
      client: 'gangsters_of_kl',
      category: 'Shorts/Reels',
      thumbnail: '/thumbnails/klu-temple.jpg',
      description:
        '“Eternal beauty, infinite grace — Bala Tripura Sundari. Blessing devotees with faith and Shakti for 40+ years.”',
      platform: 'Instagram',
      style: 'Reels, Temple Film',
      videoUrl: 'https://www.instagram.com/gangsters_of_kl/reel/DSsbW3YAekK/',
      embedUrl: 'https://www.instagram.com/reel/DSsbW3YAekK/embed'
    },
    {
      id: 8,
      title: 'GREEN GLAM',
      client: 'kl_vastraa',
      category: 'Shorts/Reels',
      // local thumbnail image
      thumbnail: '/thumbnails/green-glam.jpg',
      description:
        'VASTRAA proudly presents GREEN GLAM, an eco-friendly fashion show where style meets sustainability, celebrating conscious fashion, creative expression, and a greener future—because true glamour respects the planet.',
      platform: 'Instagram',
      style: 'Reels, Fashion Show',
      videoUrl: 'https://www.instagram.com/kl_vastraa/reel/DSjWCVukgph/',
      embedUrl: 'https://www.instagram.com/reel/DSjWCVukgph/embed'
    },
    {
      id: 9,
      title: 'ANUVANUVU COVER SONG',
      client: 'ANUVANUVU Team',
      category: 'YouTube',
      // local thumbnail image
      thumbnail: '/thumbnails/anuvanuvu-cover.jpg',
      description: 'I will edit this message again',
      platform: 'YouTube',
      style: 'Cover Song, Music Video',
      videoUrl: 'https://www.youtube.com/watch?v=ER9sogxzpDI',
      embedUrl: 'https://www.youtube.com/embed/ER9sogxzpDI'
    },
    {
      id: 10,
      title: 'PR Reel',
      client: 'kl_focus',
      category: 'Shorts/Reels',
      // local thumbnail image
      thumbnail: '/thumbnails/pr-reel.jpg',
      description:
        'In a world full of noise, clarity is power. Every message we craft, every story we tell, is built with purpose and precision. Because PR isn’t just about visibility — it’s about connection, credibility, and impact.',
      platform: 'Instagram',
      style: 'Reels, PR Story',
      videoUrl: 'https://www.instagram.com/reel/DQUJXQuktql/?igsh=MWprODN2ODk5Z2VoZg==',
      embedUrl: 'https://www.instagram.com/reel/DQUJXQuktql/embed'
    },
    {
      id: 11,
      title: 'DTI Expo at KLU',
      client: 'CIIE',
      category: 'YouTube',
      // local thumbnail image
      thumbnail: '/thumbnails/dti-expo.jpg',
      description:
        'DTI Expo 5.0 at KL University was a huge success! The Y24 batch showcased their groundbreaking innovations crafted through a rigorous design thinking journey, from tech innovations to socially impactful designs.',
      platform: 'YouTube',
      style: 'Event Highlight, Showcase',
videoUrl: 'https://youtube.com/shorts/bsV7uR1Ul4U?feature=share',
      embedUrl: 'https://www.youtube.com/embed/bsV7uR1Ul4U'
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="relative bg-gradient-to-b from-black via-gray-900 to-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600 rounded-full filter blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              My Edits
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <p className="text-gray-400 text-xl mt-6">200+ Videos. Countless Stories.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 font-semibold uppercase tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-[0_0_20px_rgba(220,38,38,0.5)]'
                  : 'bg-gray-900 text-gray-400 hover:bg-gray-800 hover:text-white border border-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative aspect-video overflow-hidden bg-gray-900 cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shadow-[0_0_30px_rgba(220,38,38,0.8)] group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.client}</p>
                <div className="mt-2 inline-block px-3 py-1 bg-red-600/80 text-white text-xs font-semibold uppercase tracking-wide">
                  {project.category}
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-6 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <button
            className="absolute top-6 right-6 w-12 h-12 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 z-10"
            onClick={() => setSelectedProject(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <div
            className="max-w-5xl w-full bg-gray-900 border border-gray-800 overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="aspect-video bg-black relative group">
              <img
                src={selectedProject.thumbnail}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <a
                href={selectedProject.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="w-20 h-20 rounded-full bg-red-600 flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </a>
              <div className="absolute bottom-4 right-4 bg-black/70 text-white text-sm px-3 py-1 rounded">
                Click to watch on {selectedProject.platform} →
              </div>
            </div>

            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {selectedProject.title}
              </h3>
              <p className="text-gray-400 mb-6">{selectedProject.client}</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Platform</p>
                  <p className="text-white font-semibold">{selectedProject.platform}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Category</p>
                  <p className="text-white font-semibold">{selectedProject.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Style</p>
                  <p className="text-white font-semibold">{selectedProject.style}</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed">
                {selectedProject.description}
              </p>

              {selectedProject.videoUrl && (
                <div className="mt-6">
                  <a
                    href={selectedProject.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-5 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full transition-colors duration-300"
                  >
                    Watch Video
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
