import { NextSeo } from "next-seo";
import SEO from "seo.config";

interface PageSEOProps {
  title: string;
  description: string;
  slug: string;
}

const PageSEO = ({ title, description, slug }: PageSEOProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`${SEO.url}/${slug}`}
      openGraph={{
        url: `${SEO.url}/${slug}`,
        title,
        description,
      }}
    />
  );
};

export default PageSEO;
