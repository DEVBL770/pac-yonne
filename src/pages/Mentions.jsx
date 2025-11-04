import React from 'react';
import Seo from '../components/Seo.jsx';
export default function Mentions(){
  return (
    <section className='section'>
      <Seo title='Mentions lÃ©gales | la plateforme' description='Mentions lÃ©gales du site la plateforme' />
      <div className='container'>
        <h1>Mentions lÃ©gales</h1>
        <p><strong>la plateforme</strong> est une plateforme de mise en relation. Aucun accueil du public.
        Contact : <a href='mailto:contact@la plateforme'>contact@la plateforme</a>.</p>
        <p>Les travaux sont rÃ©alisÃ©s par des <strong>artisans partenaires RGE</strong> indÃ©pendants. Le site ne fournit pas de prestations dâ€™installation.</p>
        <p>Ã‰diteur : la plateforme â€” HÃ©bergement : Vercel Inc.</p>
      </div>
    </section>
  );
}
