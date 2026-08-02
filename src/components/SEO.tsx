import { Helmet } from "react-helmet-async";
import pullovaLogo from "@/assets/pullova_logo.jpg";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  noIndex?: boolean;
}

export default function SEO({
  title,
  description,
  canonical,
  image = pullovaLogo,
  noIndex = false,
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:locale" content="en_US" />

      <meta name="description" content={description} />

      {/* <link rel="canonical" href={canonical} /> */}
      {canonical && (
        <link rel="canonical" href={canonical} />
      )}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Pullova" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={canonical} />
      <meta property="og:locale" content="en_US" />

      {/* {noIndex && <meta name="robots" content="noindex, nofollow" />} */}
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta
        name="keywords"
        content="beauty, barber, salon, makeup, spa, Pullova, Best protective hairstyles for busy professionals, Why women prefer home beauty services"
      />
    </Helmet>
  );
}