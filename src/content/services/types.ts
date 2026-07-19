export interface ServiceContent {
  id: string;
  seo: {
    title: string;
    description: string;
  };
  title: string;
  definition: string;
  targetGroup?: string;
  indications: string[];
  specifications: {
    service: string;
    materials: string;
    technology: string;
  };
  steps: Array<{
    title: string;
    description: string;
  }>;
  benefits: {
    practice: string;
    patient: string;
  };
  qualityText: string;
  faqs: Array<{
    question: string;
    answer: string;
  }>;
  cta: {
    heading: string;
    text: string;
    primary: { text: string; pageId: string; search?: string };
    secondary: { text: string; pageId: string; search?: string };
  };
  related: Array<{ id: string; title: string }>;
}
