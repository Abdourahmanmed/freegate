import React from "react";
import Image from "next/image";
import Container from "../Container";

const HeroPage = () => {
  return (
    <div className="relative h-[100vh] w-full bg-primary">
      {/* Contenu principal */}
      <Container className="flex flex-col lg:flex-row justify-between items-center h-full mt-[50px]">
        {/* Texte principal */}
        <div className="w-full lg:w-[55%] text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white py-4">
            <span className="uppercase">freegate:</span> <br />
            La plateforme web pour <br /> les professionnels <br /> de l&apos;importation
          </h1>
          <p className="py-4 text-sm sm:text-base text-white">
            freegate est une plateforme web conçue pour simplifier et optimiser les opérations d&apos;importation pour les
            professionnels. Ce dernier offre une variété de services et d&apos;outils pour faciliter le commerce international.
          </p>
        </div>

        {/* Illustration GIF */}
        <div className="w-full lg:w-[40%] mt-6 lg:mt-0 flex justify-center">
          <Image
            src="/animations/international-trade-animate.svg" // Chemin vers ton GIF
            alt="Illustration de commerce international"
            width={400} // Largeur de l'image
            height={400} // Hauteur de l'image
            className="object-contain"
            priority
          />
        </div>
      </Container>
    </div>
  );
};

export default HeroPage;
