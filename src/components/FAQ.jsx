import React from 'react';
import s from './FAQ.module.css';
const faqs = [
  { q:'Quelles aides pour une Pompe à chaleur dans lâ€™Yonne ?', a:'MaPrimeRÃ©novâ€™ + CEE, selon votre profil (revenus Bleu/Jaune) et le diagnostic de lâ€™artisan RGE.' },
  { q:'Maison de 110 mÂ² Ã  Sens : suis-je Ã©ligible ?', a:'Oui si chauffage gaz/fioul et revenus Bleu/Jaune. Un conseiller vÃ©rifie votre dossier.' },
  { q:'Quels revenus pour MaPrimeRÃ©novâ€™ Jaune ?', a:'Selon le barÃ¨me en vigueur. RÃ©fÃ©rez-vous Ã  lâ€™illustration Bleu/Jaune et simulez votre Ã©ligibilitÃ©.' },
  { q:'Comment la plateforme sÃ©lectionne ses partenaires RGE ?', a:'Sur critÃ¨res RGE, avis, qualitÃ© de pose, garanties et conformitÃ© administrative.' },
  { q:'la plateforme est-il un installateur ?', a:'Non. Câ€™est une plateforme dâ€™intermÃ©diation ; les travaux sont rÃ©alisÃ©s par des artisans RGE partenaires.' },
  { q:'Quels dÃ©lais ?', a:'AprÃ¨s validation, le diagnostic peut intervenir rapidement, selon disponibilitÃ© locale.' },
  { q:'La Pompe à chaleur air-eau convient-elle Ã  H1b ?', a:'Oui, en Yonne (H1b), la Pompe à chaleur air-eau est performante si bien dimensionnÃ©e.' },
  { q:'Dois-je avancer le montant des aides ?', a:'Selon dossiers, les aides peuvent Ãªtre dÃ©duites du devis ; un conseiller vous informe.' },
  { q:'Garanties ?', a:'Garantie fabricant + parfait achÃ¨vement par lâ€™artisan partenaire RGE.' },
  { q:'DonnÃ©es personnelles ?', a:'Vos donnÃ©es servent Ã  la mise en relation avec des partenaires RGE, selon notre politique.' }
];
export default function FAQ(){
  return (
    <section id='faq' className='section' aria-labelledby='faq-title'>
      <div className='container'>
        <h2 id='faq-title'>FAQ</h2>
        <div data-aos='fade-up'>
          {faqs.map((f,i)=>(
            <div className={s.item} key={i}>
              <div className={s.q}>{f.q}</div>
              <div className={s.a}>{f.a}</div>
            </div>
          ))}
        </div>
        <script type='application/ld+json' dangerouslySetInnerHTML={{__html: JSON.stringify({
          '@context':'https://schema.org','@type':'FAQPage',
          mainEntity: faqs.map(f=>({'@type':'Question','name':f.q,'acceptedAnswer':{'@type':'Answer','text':f.a}}))
        })}} />
      </div>
    </section>
  );
}
