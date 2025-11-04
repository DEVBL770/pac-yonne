import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
const posts = [
  { slug:'Pompe à chaleur-yonne-eligibilite-2025', title:'Pompe à chaleur dans lâ€™Yonne : Ãªtes-vous Ã©ligible en 2025 ?', excerpt:'Surfaces, chauffage, revenus : le point complet pour le 89.' },
  { slug:'h1b-Pompe à chaleur-air-eau-performance', title:'Zone H1b : la Pompe à chaleur air-eau est-elle pertinente ?', excerpt:'Dans lâ€™Yonne, oui â€” si dimensionnement sÃ©rieux.' },
  { slug:'aides-maprimerenov-cee-yonne', title:'MaPrimeRÃ©novâ€™ & CEE : cumuls et montants indicatifs', excerpt:'Comprendre la logique des barÃ¨mes Bleu/Jaune.' },
];
export default function Blog(){
  return (
    <section className='section'>
      <Seo title='Blog | la plateforme' description='Conseils Pompe à chaleur air-eau et aides dans lâ€™Yonne (89).' />
      <div className='container'>
        <h1>Blog</h1>
        <div className='grid' style={{gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))'}}>
          {posts.map(p=>(
            <article className='card' key={p.slug} style={{padding:16}}>
              <h2 style={{fontSize:20}}><Link to={/article/}>{p.title}</Link></h2>
              <p>{p.excerpt}</p>
              <Link className='btn' to={/article/}>Lire</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
