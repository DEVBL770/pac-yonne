import React from "react";
import s from "./Advantages.module.css";

export default function Advantages(){
  const list=[
    {icon:"💶",title:"Économies substantielles",txt:"Jusqu’à 70 % d’économies selon usage et isolation."},
    {icon:"🌿",title:"Confort & écologie",txt:"Chaleur douce, COP performant, moins d’émissions."},
    {icon:"🏠",title:"Valorisation du bien",txt:"Un équipement moderne améliore la valeur du logement."},
    {icon:"🛠️",title:"Artisans RGE locaux",txt:"Réseau sélectionné dans l’Yonne, SAV et suivi."}
  ];

  return (
    <section id="avantages" className="section" aria-labelledby="adv-title">
      <div className="container">
        <h2 id="adv-title" className={s.title}>Pourquoi choisir la Pompe à chaleur&nbsp;?</h2>
        <div className={s.grid}>
          {list.map((x,i)=>(
            <article key={i} className={s.item}>
              <div className={s.icon} aria-hidden="true">{x.icon}</div>
              <h3>{x.title}</h3>
              <p>{x.txt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
