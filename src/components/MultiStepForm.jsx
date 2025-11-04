import React, { useState } from "react";
import s from "./MultiStepForm.module.css";

export default function MultiStepForm(){
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    nom: "", email: "", telephone: "",
    codePostal: "", surface: "", chauffage: "gaz",
    consent: false
  });

  const next = () => setStep((x)=> Math.min(x+1, 3));
  const prev = () => setStep((x)=> Math.max(x-1, 1));
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData((d)=> ({...d, [name]: type === "checkbox" ? checked : value}));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // TODO: connecter à GOOGLE_SCRIPT_URL via /api/send si besoin
    alert("Demande envoyée ✅");
  };

  return (
    <form className={s.wrap} onSubmit={onSubmit}>
      {step === 1 && (
        <div className={s.row}>
          <input className={s.input} name="nom" placeholder="Nom complet" value={data.nom} onChange={onChange} required />
          <input className={s.input} name="email" placeholder="Email" type="email" value={data.email} onChange={onChange} required />
          <input className={s.input} name="telephone" placeholder="Téléphone" value={data.telephone} onChange={onChange} />
        </div>
      )}

      {step === 2 && (
        <div className={s.row}>
          <input className={s.input} name="codePostal" placeholder="Code postal (Yonne)" value={data.codePostal} onChange={onChange} required />
          <input className={s.input} name="surface" placeholder="Surface (≥ 100 m²)" value={data.surface} onChange={onChange} required />
          <select className={s.select} name="chauffage" value={data.chauffage} onChange={onChange}>
            <option value="gaz">Chauffage actuel : Gaz</option>
            <option value="fioul">Chauffage actuel : Fioul</option>
          </select>
        </div>
      )}

      {step === 3 && (
        <div className={s.row}>
          <label className={s.small}>
            <input type="checkbox" name="consent" checked={data.consent} onChange={onChange} required /> 
            &nbsp;J’accepte d’être recontacté(e) par un artisan partenaire RGE.
          </label>
          <div className={s.actions}>
            <button type="button" className="btn" onClick={prev}>Retour</button>
            <button type="submit" className="btn">Envoyer</button>
          </div>
        </div>
      )}

      {step < 3 && (
        <div className={s.actions}>
          {step > 1 ? <button type="button" className="btn" onClick={prev}>Précédent</button> : <span />}
          <button type="button" className="btn" onClick={next}>Suivant</button>
        </div>
      )}
    </form>
  );
}
