import React from 'react';
export default function Breadcrumbs({items=[]}){
  if(!items.length) return null;
  const jsonLd = { '@context':'https://schema.org','@type':'BreadcrumbList',
    itemListElement: items.map((it,idx)=>({ '@type':'ListItem', position:idx+1, name:it.name, item:new URL(it.url, location.origin).href }))
  };
  return (
    <>
      <nav aria-label='Fil dâ€™Ariane' style={{fontSize:14,margin:'8px 0'}}>
        {items.map((it,i)=>(<span key={i}><a href={it.url}>{it.name}</a>{i<items.length-1?' / ':''}</span>))}
      </nav>
      <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}} />
    </>
  );
}
