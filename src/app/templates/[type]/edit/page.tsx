import { Metadata } from 'next';
import EditTemplateClient from './EditTemplateClient';

export const metadata: Metadata = {
  title: 'Edit Template',
  description: 'Customize your website template',
};

type Props = {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export default async function EditTemplatePage({ params, searchParams }: Props) {
  const resolvedParams = await params;
  return <EditTemplateClient params={resolvedParams} />;
}
