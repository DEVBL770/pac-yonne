import React from "react";
import s from "./Header.module.css";

export default function Header(){
  return (
    <header className={s.wrap} role="banner">
      <div className={"container " + s.inner}>
        <a href="/" className={s.brand} aria-label="Aller à l’accueil">
          {/* Logo PNG transparent posé directement sur la barre */}
          <img src="/logo.png" alt="Logo" className={s.logo} loading="lazy" />
        </a>

        {/* Menu épuré : 1 seul CTA */}
        <nav className={s.nav} aria-label="Navigation principale">
          <a href="#form" className={s.ctaBtn} aria-label="Vérifier mon éligibilité">
            Vérifier mon éligibilité !
          </a>
        </nav>
      </div>
    </header>
  );
}
