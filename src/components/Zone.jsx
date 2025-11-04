import React from "react";
import s from "./Zone.module.css";

export default function Zone(){
  const villes = [
    "Auxerre","Sens","Joigny","Avallon","Tonnerre","Migennes","Saint-Florentin","Villeneuve-sur-Yonne","Chablis",
    "Monéteau","Appoigny","Paron","Brienon-sur-Armançon","Charny","Toucy","Seignelay","Aillant-sur-Tholon","Saint-Julien-du-Sault"
  ];
  return (
    <section id="zone" className={s.wrap} aria-labelledby="zone-title">
      <div className="container">
        <h2 id="zone-title" className={s.title}>Zone d’intervention</h2>
        <p className={s.lead}>Intervention sur tout le département de l’Yonne (89) et ses alentours.</p>

        {/* Liste de villes au-dessus */}
        <div className={s.chips}>
          {villes.map((v,i)=>(<span key={i} className={s.chip}>{v}</span>))}
        </div>

        {/* Image hover pas trop grande */}
        <figure className={s.image}>
          <img src="/zone.png" alt="Carte de la zone d’intervention dans l’Yonne" loading="lazy" />
        </figure>
      </div>
    </section>
  );
}
