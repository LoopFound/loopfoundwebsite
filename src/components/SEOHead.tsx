import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  path: string;
  type?: string;
  noIndex?: boolean;
}

const SITE_URL = "https://www.loopfound.in";
const OG_IMAGE = "https://www.loopfound.in/images/loopfound-logo.jpg";

const SEOHead = ({ title, description, path, type = "website", noIndex = false }: SEOHeadProps) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex ? <meta name="robots" content="noindex,follow" /> : null}

      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={OG_IMAGE} />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1053" />
      <meta property="og:image:alt" content="Loop Found web development agency" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={OG_IMAGE} />
      <meta name="twitter:image:alt" content="Loop Found web development agency" />
    </Helmet>
  );
};

export default SEOHead;
