import React from "react";

export default function Disclaimer(){
  return (
    <section className="section" aria-label="Informations importantes">
      <div className="container">
        <div style={{
          background:"linear-gradient(135deg, rgba(58,137,232,.05), rgba(0,184,148,.05))",
          border:"1px solid var(--border)",
          borderRadius:"16px",
          padding:"18px 22px",
          color:"var(--muted)",
          fontSize:"14px",
          boxShadow:"var(--shadow)"
        }}>
          <p style={{margin:0}}>
            <strong>Information :</strong> Les aides sont attribuées sous conditions de revenus,
            de type de logement (≥ 100&nbsp;m²) et du diagnostic énergétique réalisé par l’artisan partenaire RGE.
            Cette plateforme assure la mise en relation entre particuliers et professionnels qualifiés.
          </p>
        </div>
      </div>
    </section>
  );
}
