import React from "react";
import s from "./HowItWorks.module.css";

export default function HowItWorks(){
  const steps = [
    { icon:"🧮", title:"Simulation en ligne", txt:"Répondez à quelques questions (surface, chauffage, code postal)."},
    { icon:"📞", title:"Rappel d’un conseiller", txt:"On vérifie votre éligibilité et les aides mobilisables."},
    { icon:"🧰", title:"Diagnostic sur place", txt:"Un artisan partenaire RGE visite votre logement gratuitement."},
    { icon:"💬", title:"Devis transparent", txt:"Offre détaillée, aides déduites, planning proposé."},
    { icon:"🏡", title:"Installation & suivi", txt:"Pose soignée, mise en service et conseils d’usage."},
  ];
  return (
    <section id="process" className="section" aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title" className={s.title}>Comment ça marche&nbsp;?</h2>

        <ol className={s.timeline}>
          {steps.map((st,i)=>(
            <li key={i} className={s.step}>
              <div className={s.stepIcon} aria-hidden="true">{st.icon}</div>
              <div className={s.stepContent}>
                <h3>{st.title}</h3>
                <p>{st.txt}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
