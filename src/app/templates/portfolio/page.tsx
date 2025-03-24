'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { TemplateData } from '@/types/template';

const defaultData: TemplateData = {
  name: 'John Portfolio',
  title: 'Full-Stack Developer & Designer',
  subtitle: 'I create beautiful, functional, and user-friendly digital experiences.',
  heroImage: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
  projects: [
    {
      title: 'E-commerce Platform',
      description: 'A modern e-commerce solution built with Next.js and Stripe',
      image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028',
      tags: ['Next.js', 'TypeScript', 'Stripe']
    },
    {
      title: 'AI Dashboard',
      description: 'Real-time analytics dashboard for machine learning models',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      tags: ['React', 'Python', 'TensorFlow']
    }
  ],
  skills: [
    {
      name: 'Frontend',
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      name: 'Backend',
      skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB']
    }
  ],
  socialLinks: [
    {
      platform: 'GitHub',
      url: 'https://github.com',
      icon: 'github'
    },
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com',
      icon: 'linkedin'
    }
  ],
  contactEmail: 'contact@example.com',
  about: 'I\'m passionate about creating amazing web experiences that delight users.',
  footerText: 'Building digital experiences that matter.'
};

export default function PortfolioTemplate() {
  const [data, setData] = useState<TemplateData>(defaultData);

  useEffect(() => {
    const savedData = localStorage.getItem('template_portfolio');
    if (savedData) {
      setData(JSON.parse(savedData));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-950">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-950/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">{data.name}</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#work" className="text-gray-300 hover:text-white transition-colors">Work</a>
              <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
              <Link href="/templates/portfolio/edit" className="text-purple-400 hover:text-purple-300 transition-colors">
                Edit Template
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={data.heroImage}
            alt="Hero Background"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-gray-950"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              {data.title}
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              {data.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#work" className="bg-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-600 transition-colors">
                View My Work
              </a>
              <a href="#contact" className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors">
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div key={index} className="group relative bg-gray-900/50 rounded-lg overflow-hidden border border-gray-800 hover:border-gray-700 transition-all">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90 group-hover:from-transparent group-hover:to-purple-900/90 transition-all"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-900/50 to-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-12">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.skills.map((category, index) => (
              <div key={index} className="bg-gray-900/50 rounded-lg p-6 border border-gray-800">
                <h3 className="text-xl font-semibold text-white mb-4">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-800/50 text-gray-300 px-3 py-1 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            {data.about}
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-gray-900/50 border border-gray-800 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 mb-4 md:mb-0">{data.footerText}</p>
            <div className="flex space-x-6">
              {data.socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
