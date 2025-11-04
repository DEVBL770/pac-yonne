import React from 'react';
export default function Seo({title, description, type='WebPage'}){
  const siteName = 'la plateforme';
  const url = (typeof location!=='undefined') ? location.href : 'https://la plateforme/';
  const websiteLd = { '@context':'https://schema.org','@type':'WebSite','name':siteName,'url':'https://la plateforme' };
  const pageLd = { '@context':'https://schema.org','@type':type,'name':title,'description':description,'url':url };
  return (
    <>
      <title>{title}</title>
      <meta name='description' content={description} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(websiteLd)}} />
      <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(pageLd)}} />
    </>
  );
}
