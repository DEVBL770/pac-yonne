import React from "react";
import Hero from "../components/Hero.jsx";
import Eligibility from "../components/Eligibility.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import Advantages from "../components/Advantages.jsx";
import FAQ from "../components/FAQ.jsx";
import Zone from "../components/Zone.jsx";
import Trust from "../components/Trust.jsx";

export default function Home(){
  return (
    <>
      <Hero />
      <Eligibility />
      <HowItWorks />
      <Advantages />
      <Zone />
      <Trust />
      <section className="section" aria-label="Informations importantes">
        <div className="container">
          <div className="card" style={{background:"linear-gradient(135deg, rgba(58,137,232,.05), rgba(0,184,148,.05))"}}>
            <p style={{fontSize:14,color:"var(--muted)",margin:0}}>
              <strong>Disclaimer aides :</strong> Sous rÃ©serve dâ€™Ã©ligibilitÃ© (revenus Bleu/Jaune, logement &gt; 100 mÂ², chauffage fioul/gaz),
              des barÃ¨mes en vigueur et du diagnostic rÃ©alisÃ© par lâ€™artisan partenaire. Les montants dâ€™aides varient selon votre profil et le devis final.
              Plateforme dâ€™intermÃ©diation : la rÃ©alisation des travaux est assurÃ©e par des artisans partenaires RGE indÃ©pendants.
            </p>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}

