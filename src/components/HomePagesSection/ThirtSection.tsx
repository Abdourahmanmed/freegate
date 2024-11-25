import React from "react";
import Container from "../Container";
import Image from "next/image";

const ThirtSection = () => {
  return (
    <Container className="flex flex-col-reverse lg:flex-row justify-between items-center h-full py-6 bg-blue-100 gap-8">
      {/* Texte principal et cartes */}
      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary">
          Offrir des services d'entreposage pour <br /> les marchandises
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary">
          Fregate propose des solutions d'entreposage sécurisées et flexibles pour les marchandises importées. Les entrepôts partenaires de la plateforme offrent une variété de services, y compris l'emballage, l'étiquetage et la gestion des stocks.
        </p>

        {/* Cartes de services */}
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          {/* Carte 1 */}
          <div className="w-full sm:w-[48%] rounded-lg bg-white shadow-lg p-4">
            <h1 className="text-lg font-semibold text-primary">
              <span className="text-white bg-primary rounded-full p-2 inline-block mr-2">1</span>
              Stockage sécurisé
            </h1>
            <p className="text-primary py-2">
              Protégez vos marchandises dans des entrepôts sécurisés et surveillés.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="w-full sm:w-[48%] rounded-lg bg-white shadow-lg p-4">
            <h1 className="text-lg font-semibold text-primary">
              <span className="text-white bg-primary rounded-full p-2 inline-block mr-2">2</span>
              Gestion des stocks
            </h1>
            <p className="text-primary py-2">
              Suivez les mouvements de vos marchandises en temps réel grâce à un système de gestion des stocks.
            </p>
          </div>
        </div>

        {/* Carte 3 */}
        <div className="w-full rounded-lg bg-white shadow-lg p-4 mt-4">
          <h1 className="text-lg font-semibold text-primary">
            <span className="text-white bg-primary rounded-full p-2 inline-block mr-2">3</span>
            Services d'emballage et d'étiquetage
          </h1>
          <p className="text-primary py-2">
            Bénéficiez de services professionnels d'emballage et d'étiquetage pour vos marchandises.
          </p>
        </div>
      </div>

      {/* Illustration */}
      <div className="w-full lg:w-[40%] flex justify-center">
        <Image
          src="/animations/Memory-storage-bro.svg" // Chemin vers ton GIF
          alt="Illustration de commerce international"
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
