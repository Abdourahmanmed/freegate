import React from "react";
import Container from "../Container";
import Image from "next/image";

const HeroSection = () => {
  return (
    <Container className="bg-primary h-[100%] lg:h-[80vh] flex flex-col lg:flex-row justify-between items-center mt-[50px]">
      <div className="w-full lg:w-[55%] text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white py-4">
          <span className="uppercase">freegate:</span> <br /> une plateforme
          unique où tous vos produits préférés sont réunis en un seul endroit.
        </h1>
      </div>

      {/* Illustration GIF */}
      <div className="w-full lg:w-[40%] mt-6 lg:mt-0 flex justify-center">
        <Image
          src="/animations/Happy-announcement-bro.svg" // Chemin vers ton GIF
          alt="Illustration de commerce international"
          width={350} // Largeur de l'image
          height={350} // Hauteur de l'image
          className="object-contain"
          priority
        />
      </div>
    </Container>
  );
};

export default HeroSection;
