import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
}

const SITE_URL = "https://www.loopfound.in";
const OG_IMAGE = "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/910730b7-3770-47fa-9ab7-969fecc8160c/id-preview-cb0b7a06--8b9562f9-1938-4ad7-bfa1-82bc14483e68.lovable.app-1772952268630.png";

const SEOHead = ({ title, description, path, type = "website" }: SEOHeadProps) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
    </Helmet>
  );
};

export default SEOHead;
