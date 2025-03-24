import { Metadata } from 'next';
import EditTemplateClient from './EditTemplateClient';

export const metadata: Metadata = {
  title: 'Edit Template',
  description: 'Customize your website template',
};

type Props = {
  params: Promise<{ type: string }>;
};

export default async function EditTemplatePage({ params }: Props) {
  const resolvedParams = await params;
  return <EditTemplateClient params={resolvedParams} />;
}
