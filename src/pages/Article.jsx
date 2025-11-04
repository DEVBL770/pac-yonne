import React from "react";
import { useParams } from "react-router-dom";
import Seo from "../components/Seo.jsx";
import Breadcrumbs from "../components/Breadcrumbs.jsx";

const content = {
  "Pompe à chaleur-yonne-eligibilite-2025": {
    title: "Pompe à chaleur dans lâ€™Yonne : Ãªtes-vous Ã©ligible en 2025 ?",
    body: [
      "Dans lâ€™Yonne (89), prioritÃ© aux logements > 100 mÂ² chauffÃ©s au gaz/fioul.",
      "Les revenus Ã©ligibles relÃ¨vent des barÃ¨mes Bleu/Jaune MaPrimeRÃ©novâ€™.",
      "Simulez votre dossier puis un artisan RGE rÃ©alise un diagnostic avant devis."
    ]
  },
  "h1b-Pompe à chaleur-air-eau-performance": {
    title: "Zone H1b : la Pompe à chaleur air-eau est-elle pertinente ?",
    body: [
      "En H1b (Yonne), la Pompe à chaleur air-eau fonctionne trÃ¨s bien si le dimensionnement est rigoureux.",
      "Le choix de lâ€™unitÃ© extÃ©rieure et des Ã©metteurs intÃ©rieurs est dÃ©terminant.",
      "La qualitÃ© de pose par un artisan RGE local conditionne la performance rÃ©elle."
    ]
  },
  "aides-maprimerenov-cee-yonne": {
    title: "MaPrimeRÃ©novâ€™ & CEE : cumuls et montants indicatifs",
    body: [
      "Les aides peuvent couvrir jusquâ€™Ã  ~90% selon profil et devis final.",
      "Le cumul dÃ©pend de la catÃ©gorie de revenus (Bleu/Jaune) et de la configuration du logement.",
      "Un conseiller vÃ©rifie votre Ã©ligibilitÃ© avant lâ€™intervention de lâ€™artisan RGE."
    ]
  }
};

export default function Article() {
  const { slug } = useParams();
  const article = content[slug] || { title: "Article", body: ["Contenu indisponible."] };
  const crumbs = [
    { name: "Accueil", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: article.title, url: `/article/${slug}` }
  ];

  return (
    <section className="section">
      <Seo
        title={`${article.title} | la plateforme`}
        description="Article dâ€™information Pompe à chaleur dans lâ€™Yonne."
        type="Article"
      />
      <div className="container">
        <Breadcrumbs items={crumbs} />
        <h1>{article.title}</h1>
        {article.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

