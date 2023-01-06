import { NextSeo } from "next-seo";
import SEO from "seo.config";

interface PostSEOProps {
  title: string;
  description: string;
  slug: string;
}

const PostSEO = ({ title, description, slug }: PostSEOProps) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={`${SEO.url}/post/${slug}`}
      openGraph={{
        url: `${SEO.url}/${slug}`,
        title,
        description,
      }}
    />
  );
};

export default PostSEO;
