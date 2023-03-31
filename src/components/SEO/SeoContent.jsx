import React from 'react';
import { Helmet } from 'react-helmet';
export default function SEO({ title, description, name, type, url, imageUrl }) {
  console.log(description);
  return (
    <Helmet
      title={title}
      htmlAttributes={{ lang: 'en' }}
      meta={[
        {
          name: `description`,
          content: description,
        },
        // FB META TAG
        {
          property: 'og:url',
          content: url,
        },
        {
          property: 'og:type',
          content: type,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          property: 'og:image',
          content: imageUrl,
        },
        // TWITTER META TAG

        {
          property: 'twitter:title',
          content: title,
        },
        {
          property: 'twitter:description',
          content: description,
        },
        {
          property: 'twitter:image',
          content: imageUrl,
        },
      ]}
    />
  );
}
