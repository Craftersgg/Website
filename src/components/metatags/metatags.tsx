import { component$ } from "@builder.io/qwik";

interface MetaTagsProps {
  Description: string;
  Link: string;
  Author?: string;
  Keywords?: string;
  Viewport?: string;
  Robots?: string;
  CanonicalLink?: string;
  OpenGraphDescription?: string;
  OpenGraphImage?: string;
  TwitterDescription?: string;
  TwitterImage?: string;
  TwitterCardType?: string;
}

export default component$<MetaTagsProps>((props: MetaTagsProps) => {
  // Default values for meta tags
  const defaultValues: Partial<MetaTagsProps> = {
    Description: "My personal website",
    Author: "G9 Aerospace",
    Keywords: "g9 aerospace, website",
    Viewport: "width=device-width, initial-scale=1.0",
    Robots: "index,follow",
    OpenGraphDescription: props.Description,
    OpenGraphImage: "https://github.com/g9militantsYT/g9aerospace.in/blob/main/assets/images/g9aerospace.png?raw=true",
    TwitterDescription: props.Description,
    TwitterImage: "https://github.com/g9militantsYT/g9aerospace.in/blob/main/assets/images/g9aerospace.png?raw=true",
    TwitterCardType: "summary",
  };
  

  // Merge default values with provided props
  const mergedProps = { ...defaultValues, ...props };

  // Define meta tags using the input values
  const metaTags = [
    { name: "description", content: mergedProps.Description },
    { name: "author", content: mergedProps.Author },
    { name: "keywords", content: mergedProps.Keywords },
    { name: "viewport", content: mergedProps.Viewport },
    { name: "robots", content: mergedProps.Robots },
    { rel: "canonical", href: mergedProps.CanonicalLink },
    { property: "og:description", content: mergedProps.OpenGraphDescription },
    { property: "og:image", content: mergedProps.OpenGraphImage },
    { name: "twitter:description", content: mergedProps.TwitterDescription },
    { name: "twitter:image", content: mergedProps.TwitterImage },
    { name: "twitter:card", content: mergedProps.TwitterCardType },
    // Add more meta tags as needed
  ];

  // Function to generate meta tag elements
  const renderMetaTags = () => {
    return metaTags.map((tag, index) => {
      if (tag.rel) {
        return <link key={index} rel={tag.rel} href={tag.href} />;
      } else if (tag.property) {
        return <meta key={index} property={tag.property} content={tag.content} />;
      } else {
        return <meta key={index} name={tag.name} content={tag.content} />;
      }
    });
  };

  return (
    <>
      {/* Render meta tags */}
      {renderMetaTags()}
    </>
  );
});