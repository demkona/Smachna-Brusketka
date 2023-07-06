import Image from "next/image";
import React from "react";
import hero from './hero.png'

export default function Hero() {
  return (
    <div>
      <Image src={hero} alt="Hero"></Image>
      <p>Антипаста</p>
      <Image src={hero}  alt="Hero"></Image>
      <p>Антипаста</p>
      <Image src={hero}  alt="Hero"></Image>
      <p>Антипаста</p>
      <Image src={hero}  alt="Hero"></Image>
      <p>Антипаста</p>
    </div>
  );
}
