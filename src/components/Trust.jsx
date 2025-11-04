import React from "react";
import s from "./Trust.module.css";

export default function Trust(){
  const avis=[
    {name:"Thomas L.",txt:"Artisan ponctuel, installation propre. Résultat conforme et silencieux.",stars:5},
    {name:"Nadia G.",txt:"Dossier d’aides géré du début à la fin. Communication parfaite.",stars:5},
    {name:"Bernard R.",txt:"Pompe à chaleur efficace, baisse notable de la facture.",stars:4},
    {name:"Claire F.",txt:"Conseils clairs, pose rapide. Très satisfaite.",stars:5},
    {name:"Yohan D.",txt:"Excellent accompagnement, mise en relation fluide.",stars:5},
    {name:"Lucie M.",txt:"Technicien pro et minutieux. Je recommande.",stars:4},
    {name:"Aline D.",txt:"Devis transparent, délais tenus.",stars:5},
    {name:"Sofiane R.",txt:"RGE sérieux dans l’Yonne, suivi impeccable.",stars:5},
    {name:"Michel V.",txt:"Travaux propres, équipe agréable.",stars:4}
  ];

  const initial = (n)=> n.split(" ")[0][0];

  return (
    <section id="avis" className="section" aria-labelledby="trust-title">
      <div className="container">
        <h2 id="trust-title" className={s.title}>Avis & Confiance</h2>
        <div className={s.grid}>
          {avis.map((a,i)=>(
            <article key={i} className={s.card}>
              <div className={s.avatar} aria-hidden="true">{initial(a.name)}</div>
              <div className={s.content}>
                <div className={s.stars} aria-label={`${a.stars} sur 5`}>{"⭐".repeat(a.stars)}</div>
                <p className={s.txt}>{a.txt}</p>
                <small className={s.sig}>— {a.name}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
