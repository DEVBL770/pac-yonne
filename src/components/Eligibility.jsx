import React from "react";
import s from "./Eligibility.module.css";

export default function Eligibility(){
  const items = [
    { icon:"🏠", title:"Surface ≥ 100 m²", txt:"Maison individuelle située dans l’Yonne (89)." },
    { icon:"🔥", title:"Chauffage Gaz / Fioul", txt:"Remplacement par une Pompe à chaleur air-eau performante." },
    { icon:"💶", title:"Revenus Bleu / Jaune", txt:"Selon le barème MaPrimeRénov’ en vigueur." },
  ];

  return (
    <section id="eligibilite" className="section" aria-labelledby="elig-title">
      <div className="container">
        <h2 id="elig-title" className={s.title}>Êtes-vous éligible aux aides&nbsp;?</h2>

        <div className={s.grid}>
          {items.map((it, i)=>(
            <article key={i} className={s.card}>
              <div className={s.iconWrap} aria-hidden="true">{it.icon}</div>
              <h3 className={s.cardTitle}>{it.title}</h3>
              <p className={s.cardTxt}>{it.txt}</p>
            </article>
          ))}
        </div>

        <p className={s.note}>
          💡 Jusqu’à <strong>90&nbsp;% d’aides cumulées</strong> (MaPrimeRénov’ + CEE), sous réserve d’éligibilité
          et du diagnostic réalisé par l’artisan partenaire RGE.
        </p>

        <figure className={s.bar}>
          <img src="/mpr2025.png" alt="Barème Bleu/Jaune MaPrimeRénov’ — illustration" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
