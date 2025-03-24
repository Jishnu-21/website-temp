import { Metadata } from 'next';
import EditTemplateClient from './EditTemplateClient';

export const metadata: Metadata = {
  title: 'Edit Template',
  description: 'Customize your website template',
};

interface PageProps {
  params: { type: string };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export default async function EditTemplatePage(props: PageProps) {
  return <EditTemplateClient {...props} />;
}
