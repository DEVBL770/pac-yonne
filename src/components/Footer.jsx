import React from "react";
import s from "./Footer.module.css";

export default function Footer(){
  return (
    <footer className={s.wrap} role="contentinfo">
      <div className={"container " + s.inner}>
        <div className={s.top}>
          <div className={s.brand}>
            <img src="/logo.png" alt="" className={s.logo}/>
            <div>
              <strong>Pompe à chaleur — Yonne</strong>
              <div className={s.tag}>Réseau d’artisans partenaires RGE</div>
            </div>
          </div>

          <nav className={s.links} aria-label="Liens">
            <a href="/mentions-legales.html">Mentions légales</a>
            <a href="/politique-de-confidentialite.html">Politique de confidentialité</a>
            <a href="/conditions-generales-utilisation.html">CGU</a>
          </nav>
        </div>

        <div className={s.bottom}>
          <span>Yonne (89) • Zone climatique H1b</span>
          <span>© {new Date().getFullYear()} Tous droits réservés</span>
        </div>
      </div>
    </footer>
  );
}
