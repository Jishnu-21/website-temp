'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TemplateData } from '@/types/template';

const defaultData: TemplateData = {
  name: 'John.dev',
  title: 'Full-Stack Developer & UI/UX Designer',
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
  about: 'I am a passionate developer who loves creating amazing web experiences.',
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
      <header className="fixed w-full bg-gray-950/80 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <Link href="/templates/portfolio/edit" className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                {data.name}
              </Link>
              <nav className="hidden md:flex space-x-8">
                <a href="#work" className="text-sm text-gray-300 hover:text-white">Work</a>
                <a href="#about" className="text-sm text-gray-300 hover:text-white">About</a>
                <a href="#skills" className="text-sm text-gray-300 hover:text-white">Skills</a>
                <a href="#contact" className="text-sm text-gray-300 hover:text-white">Contact</a>
              </nav>
            </div>
            <Link 
              href="/templates/portfolio/edit"
              className="text-sm bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600"
            >
              Edit Template
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-gray-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                {data.title}
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                {data.subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a href="#work" className="bg-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-600 transition-colors">
                  View My Work
                </a>
                <a href="#contact" className="bg-gray-800 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-700 transition-colors">
                  Get in Touch
                </a>
              </div>
            </div>
            <div className="flex-1 relative">
              <Image
                src={data.heroImage}
                alt="Hero Image"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl border border-gray-800"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Here are some of my recent works. Each project is crafted with attention to detail and modern technologies.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.projects.map((project, index) => (
              <div key={index} className="group relative bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all">
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-xl text-gray-400">The tools and technologies I use to bring projects to life.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.skills.map((category, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                <h3 className="text-lg font-semibold text-white mb-4">{category.name}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-400">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-gray-900/50 to-gray-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Let's Work Together</h2>
          <p className="text-xl text-gray-400 mb-12">
            {data.about}
          </p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Name"
                className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <textarea
              placeholder="Message"
              rows={6}
              className="w-full bg-gray-800 border border-gray-700 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
            <button className="bg-purple-500 text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-purple-600 transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-2">
                {data.name}
              </h3>
              <p className="text-sm">{data.footerText}</p>
            </div>
            <div className="flex space-x-6">
              {data.socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  <span className="sr-only">{link.platform}</span>
                  {link.platform === 'GitHub' && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                  {link.platform === 'LinkedIn' && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  )}
                  {link.platform === 'Twitter' && (
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p> 2025 {data.name}. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
