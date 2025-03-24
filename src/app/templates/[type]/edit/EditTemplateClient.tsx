'use client';

import { useRouter } from 'next/navigation';
import TemplateEditor from '@/components/TemplateEditor';
import { TemplateData } from '@/types/template';

const defaultData: TemplateData = {
  name: 'My Website',
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

interface EditTemplateClientProps {
  params: { type: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default function EditTemplateClient({ params }: EditTemplateClientProps) {
  const router = useRouter();
  
  const handleSave = async (data: TemplateData) => {
    localStorage.setItem(`template_${params.type}`, JSON.stringify(data));
    router.push(`/templates/${params.type}`);
  };

  return (
    <TemplateEditor
      initialData={defaultData}
      onSave={handleSave}
    />
  );
}
