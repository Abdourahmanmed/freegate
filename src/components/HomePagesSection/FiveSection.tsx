import React from "react";
import Container from "../Container";
import Image from "next/image";

const FiveSection = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between items-center h-full py-6 bg-blue-100">
      {/* Section texte */}
      <div className="lg:w-[55%] w-full">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
          Faciliter les opérations de transit, de <br />
          transport et de transbordement
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
          Freegate facilite les opérations de transit, de transport et de transbordement des marchandises importées. La
          plateforme met en relation les importateurs avec des transporteurs maritimes, aériens et terrestres fiables.
        </p>

        {/* Étapes */}
        <div className="py-4 space-y-4">
          {/* Étape 1 */}
          <div className="flex gap-4 items-start">
            <div className="w-[50px] h-[80px] bg-primary flex items-center justify-center text-white font-semibold rounded-lg">
              1
            </div>
            <div>
              <h1 className="text-lg font-semibold text-primary">Transit</h1>
              <p className="text-primary text-sm sm:text-base">
                Organisez le transport de vos marchandises des ports d'arrivée aux entrepôts.
              </p>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="flex gap-4 items-start">
            <div className="w-[50px] h-[80px] bg-primary flex items-center justify-center text-white font-semibold rounded-lg">
              2
            </div>
            <div>
              <h1 className="text-lg font-semibold text-primary">Transport</h1>
              <p className="text-primary text-sm sm:text-base">
                Choisissez parmi une variété d'options de transport pour vos marchandises.
              </p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="flex gap-4 items-start">
            <div className="w-[50px] h-[80px] bg-primary flex items-center justify-center text-white font-semibold rounded-lg">
              3
            </div>
            <div>
              <h1 className="text-lg font-semibold text-primary">Transbordement</h1>
              <p className="text-primary text-sm sm:text-base">
                Gérez les changements de mode de transport pour vos marchandises.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section image */}
      <div className="lg:w-[40%] w-full mt-8 lg:mt-0">
        <Image
          src="/animations/Electric-transport-bro.svg" // Chemin vers le GIF
          alt="Illustration de commerce international"
          width={500} // Largeur de l'image
          height={500} // Hauteur de l'image
          className="object-contain mx-auto lg:mx-0" // Centré sur mobile
        />
      </div>
    </Container>
  );
};

export default FiveSection;
