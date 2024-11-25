import Image from "next/image";
import React from "react";
import Container from "../Container";

const Sixsection = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between items-center h-full py-6">
      {/* Section texte */}
      <div className="lg:w-[55%] w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
          Simplifier les démarches administratives <br />
          liées à l'importation
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
          Freegate simplifie les démarches administratives liées à l'importation en fournissant des outils et des
          informations pour les formalités douanières, les certifications et les licences.
        </p>

        {/* Grille des informations */}
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 border text-center sm:text-left">
              <strong>Formalités douanières</strong>
            </div>
            <div className="p-4 border text-center sm:text-left">
              Obtenez des informations et des guides sur les procédures douanières.
            </div>
            <div className="bg-blue-100 p-4 border text-center sm:text-left">
              <strong>Certifications et licences</strong>
            </div>
            <div className="bg-blue-100 p-4 border text-center sm:text-left">
              Accédez aux informations et aux ressources pour obtenir les certifications et les licences nécessaires.
            </div>
            <div className="p-4 border text-center sm:text-left">
              <strong>Documentation</strong>
            </div>
            <div className="p-4 border text-center sm:text-left">
              Gérez facilement les documents d'importation.
            </div>
          </div>
        </div>
      </div>

      {/* Section image */}
      <div className="lg:w-[40%] w-full mt-8 lg:mt-0 flex justify-center">
        <Image
          src="/animations/Office-management-bro.svg" // Chemin vers l'image
          alt="Illustration de commerce international"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </Container>
  );
};

export default Sixsection;
