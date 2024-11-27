import React from "react";
import Container from "../Container";

const FourSection = () => {
  return (
    <Container className="py-6">
      {/* Titre principal */}
      <h1 className="text-2xl sm:text-3xl font-semibold text-primary text-center lg:text-left">
        Permettre la publication d&apos;annonces de <br /> marchandises
      </h1>
      <p className="py-4 text-sm sm:text-base text-primary text-center lg:text-left">
        Freegate dispose d&apos;une plateforme d&apos;annonces de marchandises permettant aux professionnels de
        l&apos;importation de trouver et d&apos;acheter des produits facilement. Les utilisateurs peuvent publier des
        annonces, rechercher des produits et contacter les vendeurs directement.
      </p>

      {/* Cartes d'annonces */}
      <div className="flex flex-col sm:flex-row justify-between gap-6 mt-6">
        {/* Carte 1 : Publication d'annonces */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold text-primary">
            Publication d&apos;annonces
          </h1>
          <p className="text-primary py-2 text-sm sm:text-base">
            Publiez facilement vos annonces de marchandises avec des photos et des descriptions détaillées.
          </p>
        </div>

        {/* Carte 2 : Recherche de produits */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold text-primary">
            Recherche de produits
          </h1>
          <p className="text-primary py-2 text-sm sm:text-base">
            Utilisez des filtres avancés pour rechercher les produits dont vous avez besoin.
          </p>
        </div>

        {/* Carte 3 : Contact avec les vendeurs */}
        <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
          <h1 className="text-lg font-semibold text-primary">
            Contact avec les vendeurs
          </h1>
          <p className="text-primary py-2 text-sm sm:text-base">
            Communiquez directement avec les vendeurs pour obtenir des informations et négocier des prix.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default FourSection;
