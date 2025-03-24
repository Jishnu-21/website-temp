'use client';

import { useState } from 'react';
import { TemplateData, Project, SkillCategory } from '@/types/template';

interface TemplateEditorProps {
  initialData: TemplateData;
  onSave: (data: TemplateData) => void;
}

export default function TemplateEditor({ initialData, onSave }: TemplateEditorProps) {
  const [data, setData] = useState<TemplateData>(initialData);
  const [activeTab, setActiveTab] = useState('basic');

  const updateData = (updates: Partial<TemplateData>) => {
    setData(prev => ({ ...prev, ...updates }));
  };

  const addProject = () => {
    setData(prev => ({
      ...prev,
      projects: [...prev.projects, { title: '', description: '', image: '', tags: [] }]
    }));
  };

  const updateProject = (index: number, updates: Partial<Project>) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.map((p, i) => i === index ? { ...p, ...updates } : p)
    }));
  };

  const addSkillCategory = () => {
    setData(prev => ({
      ...prev,
      skills: [...prev.skills, { name: '', skills: [] }]
    }));
  };

  const updateSkillCategory = (index: number, updates: Partial<SkillCategory>) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.map((s, i) => i === index ? { ...s, ...updates } : s)
    }));
  };

  const addSocialLink = () => {
    setData(prev => ({
      ...prev,
      socialLinks: [...prev.socialLinks, { platform: '', url: '', icon: '' }]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Customize Your Website</h1>
          <button
            onClick={() => onSave(data)}
            className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition-colors"
          >
            Save Changes
          </button>
        </div>

        {/* Editor Tabs */}
        <div className="flex gap-4 mb-8 border-b border-gray-800">
          {['basic', 'projects', 'skills', 'social'].map((tabName) => (
            <button
              key={tabName}
              onClick={() => setActiveTab(tabName)}
              className={`px-4 py-2 ${
                activeTab === tabName
                  ? 'border-b-2 border-purple-500 text-purple-500'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tabName.charAt(0).toUpperCase() + tabName.slice(1)}
            </button>
          ))}
        </div>

        {/* Basic Information */}
        {activeTab === 'basic' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Website Name</label>
                <input
                  type="text"
                  value={data.name}
                  onChange={e => updateData({ name: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  value={data.title}
                  onChange={e => updateData({ title: e.target.value })}
                  className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subtitle</label>
              <input
                type="text"
                value={data.subtitle}
                onChange={e => updateData({ subtitle: e.target.value })}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Hero Image URL</label>
              <input
                type="text"
                value={data.heroImage}
                onChange={e => updateData({ heroImage: e.target.value })}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">About</label>
              <textarea
                value={data.about}
                onChange={e => updateData({ about: e.target.value })}
                rows={4}
                className="w-full bg-gray-900 border border-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>
        )}

        {/* Projects */}
        {activeTab === 'projects' && (
          <div className="space-y-8">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Project Title</label>
                    <input
                      type="text"
                      value={project.title}
                      onChange={e => updateProject(index, { title: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Image URL</label>
                    <input
                      type="text"
                      value={project.image}
                      onChange={e => updateProject(index, { image: e.target.value })}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2">Description</label>
                  <textarea
                    value={project.description}
                    onChange={e => updateProject(index, { description: e.target.value })}
                    rows={2}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
                  <input
                    type="text"
                    value={project.tags.join(', ')}
                    onChange={e => updateProject(index, { tags: e.target.value.split(',').map(t => t.trim()) })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addProject}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Add Project
            </button>
          </div>
        )}

        {/* Skills */}
        {activeTab === 'skills' && (
          <div className="space-y-8">
            {data.skills.map((category, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div>
                  <label className="block text-sm font-medium mb-2">Category Name</label>
                  <input
                    type="text"
                    value={category.name}
                    onChange={e => updateSkillCategory(index, { name: e.target.value })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <div className="mt-4">
                  <label className="block text-sm font-medium mb-2">Skills (comma-separated)</label>
                  <input
                    type="text"
                    value={category.skills.join(', ')}
                    onChange={e => updateSkillCategory(index, { skills: e.target.value.split(',').map(s => s.trim()) })}
                    className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
            ))}
            <button
              onClick={addSkillCategory}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Add Skill Category
            </button>
          </div>
        )}

        {/* Social Links */}
        {activeTab === 'social' && (
          <div className="space-y-8">
            {data.socialLinks.map((link, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Platform</label>
                    <input
                      type="text"
                      value={link.platform}
                      onChange={e => {
                        const socialLinks = [...data.socialLinks];
                        socialLinks[index] = { ...link, platform: e.target.value };
                        updateData({ socialLinks });
                      }}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">URL</label>
                    <input
                      type="text"
                      value={link.url}
                      onChange={e => {
                        const socialLinks = [...data.socialLinks];
                        socialLinks[index] = { ...link, url: e.target.value };
                        updateData({ socialLinks });
                      }}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>
            ))}
            <button
              onClick={addSocialLink}
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Add Social Link
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
