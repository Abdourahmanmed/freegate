import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt", // Utilise les JWT pour les sessions (optionnel)
  },
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID, // Assurez-vous que la variable est définie dans votre environnement
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
});
