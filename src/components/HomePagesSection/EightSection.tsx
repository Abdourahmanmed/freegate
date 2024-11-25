import Image from "next/image";
import React from "react";
import Container from "../Container";

const EightSection = () => {
  return (
    <Container className="flex flex-col lg:flex-row justify-between items-center h-full py-6">
      {/* Section texte */}
      <div className="lg:w-[55%] w-full mb-6 lg:mb-0">
        <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
          Assurer la sécurité et la traçabilité des transactions
        </h1>
        <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
          Freegate met l'accent sur la sécurité et la traçabilité des
          transactions en utilisant des technologies de cryptage avancées et des
          protocoles de sécurité rigoureux.
        </p>

        {/* Sécurité des transactions */}
        <div className="bg-primary text-white p-6 lg:p-8 rounded-lg space-y-6 lg:space-y-8">
          {/* Feature 1 */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded">
              <span>1</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Cryptage des données</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Les données sensibles sont cryptées pour protéger les informations confidentielles.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded">
              <span>2</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Authentification à plusieurs facteurs</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Assurez la sécurité des comptes utilisateur avec une authentification à plusieurs facteurs.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex items-start space-x-4">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-800 text-white rounded">
              <span>3</span>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">Contrôles d'accès</h3>
              <p className="text-gray-300 text-sm sm:text-base">
                Gérez les accès aux données et aux fonctionnalités en fonction des rôles des utilisateurs.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Section image */}
      <div className="lg:w-[40%] w-full flex justify-center">
        <Image
          src="/animations/Private-data-bro.svg" // Chemin vers ton GIF
          alt="Illustration de commerce international"
          width={500}
          height={500}
          className="object-contain"
        />
      </div>
    </Container>
  );
};

export default EightSection;
