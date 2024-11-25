import { z } from "zod";
// Schéma de validation avec zod
export const productSchema = z.object({
  Nom: z.string().min(1, "Le nom est requis."),
  Description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères."),
  Prix: z.string().regex(/^\d+$/, "Le prix doit être un nombre."),
  Categorie: z.string().min(1, "Veuillez sélectionner une catégorie."),
  Image: z.string().url("L'URL de l'image doit être valide."),
});

// Schéma de validation Zod
export const letterOfCreditSchema = z.object({
  applicant: z.string().min(2, "Le nom de l'émetteur est requis."),
  beneficiary: z.string().min(2, "Le nom du bénéficiaire est requis."),
  amount: z
    .number({ invalid_type_error: "Le montant doit être un nombre." })
    .min(1, "Le montant doit être supérieur à 0."),
  currency: z.string().min(1, "La devise est requise."),
  expiryDate: z.string().refine(
    (date) => {
      const now = new Date();
      const inputDate = new Date(date);
      return inputDate > now;
    },
    { message: "La date d'expiration doit être dans le futur." }
  ),
  description: z
    .string()
    .min(10, "La description doit contenir au moins 10 caractères."),
});



// Schéma de validation Zod
export const contactFormSchema = z.object({
    name: z.string().min(2, "Le nom est requis et doit contenir au moins 2 caractères."),
    email: z
      .string()
      .email("Veuillez entrer une adresse email valide.")
      .nonempty("L'email est requis."),
    subject: z.string().min(3, "Le sujet est requis et doit contenir au moins 3 caractères."),
    message: z.string().min(10, "Le message est requis et doit contenir au moins 10 caractères."),
  });