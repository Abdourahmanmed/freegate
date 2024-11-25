import { NextResponse } from "next/server";
import {
  public_routes,
  api_routes,
  protected_routes,
  default_redirect,
} from "@/routes";

export default function middleware(req) {
  const { nextUrl } = req;
  const url = nextUrl.clone();

  const isLoggedIn = !!req.auth; // Assurez-vous que `req.auth` est correctement défini dans votre solution d'auth.
  const pathname = nextUrl.pathname;
   console.log(isLoggedIn);

  // Vérifier si la route est une route API
  const isApiRoute = pathname.startsWith(api_routes);

  // Vérifier si la route est publique
  const isPublicRoute = public_routes.includes(pathname);

  // Vérifier si la route est protégée
  const isProtectedRoute = protected_routes.includes(pathname);

  // Autoriser les routes API
  if (isApiRoute) {
    return NextResponse.next();
  }

  // Si l'utilisateur est connecté
  if (isLoggedIn) {
    // Autoriser l'accès aux routes protégées
    if (isProtectedRoute) {
      return null;
    }

    // Rediriger vers `default_redirect` si une route publique est visitée

    url.pathname = default_redirect;
    return NextResponse.redirect(url);
  }

  // Si l'utilisateur n'est pas connecté et tente d'accéder à une route protégée
  if (!isLoggedIn && isProtectedRoute) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Autoriser les utilisateurs non connectés à accéder aux routes publiques
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Inclure toutes les routes sauf les fichiers statiques internes ou externes
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Toujours inclure les routes API
    "/(api|trpc)(.*)",
  ],
};
