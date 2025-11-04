import React from "react";
import s from "./LogosCarousel.module.css";

export default function LogosCarousel(){
  const logos = [
    {src:"/anah.png", alt:"ANAH"},
    {src:"/cee.png", alt:"CEE"},
    {src:"/qualipac.png", alt:"QualiPAC"},
    {src:"/rge.png", alt:"RGE"},
    {src:"/anah.png", alt:"ANAH"},
    {src:"/cee.png", alt:"CEE"},
    {src:"/qualipac.png", alt:"QualiPAC"},
    {src:"/rge.png", alt:"RGE"},
  ];
  return (
    <section className={s.wrap} aria-label="Références et labels">
      <div className={s.track}>
        {logos.map((l,i)=>(
          <div key={i} className={s.logo}>
            <img src={l.src} alt={l.alt} loading="lazy" />
          </div>
        ))}
      </div>
    </section>
  );
}
