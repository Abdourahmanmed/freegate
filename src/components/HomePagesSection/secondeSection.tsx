import React from "react";
import Container from "../Container";
import Image from "next/image";

const SecondeSection = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between items-center h-full py-6 gap-8">
      {/* Illustration */}
      <div className="w-full lg:w-[40%] flex justify-center">
        <Image
          src="/animations/brand-construction-bro.svg" // Chemin vers ton GIF
          alt="Illustration de commerce international"
          width={400} // Largeur de l'image
          height={400} // Hauteur de l'image
          className="object-contain"
          priority
        />
      </div>

      {/* Texte principal et cartes */}
      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary">
          Faciliter le trade finance avec <br /> des services de financement <br /> intégrés
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary">
          Fregate permet aux importateurs d&apos;accéder à des solutions de financement dédiées au commerce international. La
          plateforme collabore avec des institutions financières pour offrir des options de crédit documentaire, de
          financement d&apos;achat, et de lettre de crédit.
        </p>

        {/* Cartes des services */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {/* Carte 1 */}
          <div className="w-full sm:w-[48%] rounded-lg bg-primary p-4">
            <h1 className="text-lg font-semibold text-white">Financement d&apos;achat</h1>
            <p className="text-white py-2">
              Obtenez un financement flexible pour financer l&apos;achat de marchandises.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="w-full sm:w-[48%] rounded-lg bg-primary p-4">
            <h1 className="text-lg font-semibold text-white">Lettre de crédit</h1>
            <p className="text-white py-2">
              Utilisez les lettres de crédit pour sécuriser les paiements et les transactions.
            </p>
          </div>
        </div>

        {/* Carte Crédit documentaire */}
        <div className="w-full rounded-lg bg-primary p-4 mt-4">
          <h1 className="text-lg font-semibold text-white">Crédit documentaire</h1>
          <p className="text-white py-2">
            Bénéficiez d&apos;un financement à court terme pour payer les <br />
            fournisseurs.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default SecondeSection;
