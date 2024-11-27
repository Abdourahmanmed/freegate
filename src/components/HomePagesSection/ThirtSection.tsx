import React from "react";
import Container from "../Container";
import Image from "next/image";

const ThirtSection = () => {
  return (
    <Container className="flex flex-col-reverse lg:flex-row justify-between items-center h-full py-6 bg-blue-100 gap-8">
      {/* Section texte principal */}
      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary">
          Offrir des services d&apos;entreposage pour <br /> les marchandises
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary">
          Fregate propose des solutions d&apos;entreposage sécurisées et flexibles pour les marchandises importées. Les
          entrepôts partenaires de la plateforme offrent une variété de services, y compris l&apos;emballage, l&apos;étiquetage et la gestion des stocks.
        </p>

        {/* Cartes de services */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {/* Carte 1 : Stockage sécurisé */}
          <div className="w-full sm:w-[48%] rounded-lg bg-white shadow-lg p-4">
            <h1 className="text-lg font-semibold text-primary flex items-center">
              <span className="text-white bg-primary rounded-full p-2 inline-block mr-2">1</span>
              Stockage sécurisé
            </h1>
            <p className="text-primary py-2">
              Protégez vos marchandises dans des entrepôts sécurisés et surveillés.
            </p>
          </div>

          {/* Carte 2 : Gestion des stocks */}
          <div className="w-full sm:w-[48%] rounded-lg bg-white shadow-lg p-4">
            <h1 className="text-lg font-semibold text-primary flex items-center">
              <span className="text-white bg-primary rounded-full p-2 inline-block mr-2">2</span>
              Gestion des stocks
            </h1>
            <p className="text-primary py-2">
              Suivez les mouvements de vos marchandises en temps réel grâce à un système de gestion des stocks.
            </p>
          </div>
        </div>

        {/* Carte 3 : Services d'emballage et d'étiquetage */}
        <div className="w-full rounded-lg bg-white shadow-lg p-4 mt-4">
          <h1 className="text-lg font-semibold text-primary flex items-center">
            <span className="text-white bg-primary rounded-full p-2 inline-block mr-2">3</span>
            Services d&apos;emballage et d&apos;étiquetage
          </h1>
          <p className="text-primary py-2">
            Bénéficiez de services professionnels d&apos;emballage et d&apos;étiquetage pour vos marchandises.
          </p>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full lg:w-[40%] flex justify-center">
        <Image
          src="/animations/Memory-storage-bro.svg" // Chemin vers ton GIF
          alt="Illustration de services d&apos;entreposage"
          width={400}
          height={400}
          className="object-contain"
          priority
        />
      </div>
    </Container>
  );
};

export default ThirtSection;
