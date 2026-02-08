import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, message } = formData;

    // Basic validation
    if (!name || !email || !message) {
      alert('Please fill in all fields before sending.');
      return;
    }

    try {
      console.log('Sending form data:', { name, email, message });
      
      const response = await fetch('https://formspree.io/f/mzdzndpa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      console.log('Response status:', response.status);
      console.log('Response ok:', response.ok);

      if (!response.ok) {
        const errorData = await response.json();
        console.error('Error response:', errorData);
        throw new Error(`Failed to send message: ${response.status}`);
      }

      const responseData = await response.json();
      console.log('Success response:', responseData);

      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('Error submitting contact form:', error);
      alert(`Something went wrong while sending your message: ${error instanceof Error ? error.message : 'Unknown error'}. Please try again later or email me directly at rajkamaledits@gmail.com.`);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 99495 92762',
      href: 'tel:+919949592762',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'rajkamaledits@gmail.com',
      href: 'mailto:rajkamaledits@gmail.com',
    },
  ];

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-600 rounded-full filter blur-[200px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-4">
              Hire Me
            </h2>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-red-600 to-transparent" />
          </div>
          <p className="text-gray-400 text-xl mt-6">Let's Create Something Amazing</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Ready to elevate your content? Whether it's a YouTube series, social media campaign,
                or educational content, I'm here to bring your vision to life.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="group flex items-center gap-4 p-4 bg-gray-900/50 border border-gray-800 transition-all duration-300 hover:border-red-600 hover:bg-gray-900/80 hover:transform hover:scale-105"
                >
                  <div className="w-12 h-12 bg-red-600/10 rounded-full flex items-center justify-center group-hover:bg-red-600/20 transition-colors duration-300">
                    <info.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 uppercase tracking-wide">{info.label}</p>
                    <p className="text-white font-semibold group-hover:text-red-500 transition-colors duration-300">
                      {info.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-xl font-bold text-white mb-4">Services Offered:</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  YouTube Long-form Video Editing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  Shorts / Reels / TikTok Editing
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  Educational Content Production
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  Promotional Videos & Ads
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8">
            {submitted ? (
              <div className="h-full flex items-center justify-center animate-fadeIn">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-scaleIn">
                    <Send className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">I'll get back to you within 24 hours.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-red-600 focus:outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-400 uppercase tracking-wide mb-2">
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-black border border-gray-800 text-white focus:border-red-600 focus:outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 bg-red-600 text-white font-semibold tracking-wide uppercase overflow-hidden transition-all duration-300 hover:bg-red-700 hover:shadow-[0_0_30px_rgba(220,38,38,0.5)]"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      <footer className="relative z-10 mt-24 border-t border-gray-900 pt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2025 Rajkamal. All rights reserved. | Crafted with precision & passion
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
