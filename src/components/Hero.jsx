import React from "react";
import s from "./Hero.module.css";
import MultiStepForm from "./MultiStepForm.jsx";

export default function Hero(){
  return (
    <section className={s.wrap} aria-label="Introduction et formulaire">
      <div className="container">
        <div className={s.inner}>
          {/* Texte à gauche (en blanc) */}
          <div className={s.left} data-aos="fade-up">
            <div className={s.kicker}>Aides disponibles</div>
            <h1>Pompe à chaleur à 1&nbsp;€ dans l’Yonne</h1>
            <p>
              Plateforme d’intermédiation : mise en relation avec des
              <strong> artisans partenaires RGE</strong> sélectionnés dans l’Yonne (89).
              Éligible si logement <strong>&gt; 100&nbsp;m²</strong>, chauffage <strong>fioul/gaz</strong>,
              revenus <strong>Bleu/Jaune</strong>.
            </p>
            <ul className={s.bullets}>
              <li>✅ Économies d’énergie</li>
              <li>✅ Démarches simplifiées</li>
              <li>✅ Diagnostic offert</li>
            </ul>
            <div className={s.actions}>
              <a href="#form" className={s.ctaPrimary}>Vérifier mon éligibilité</a>
            </div>
          </div>

          {/* Formulaire à droite (carte) */}
          <div className={s.right} data-aos="fade-up">
            <div className={s.formCard} id="form">
              <h3 className={s.formTitle}>Devis gratuit — 2&nbsp;min</h3>
              <MultiStepForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
