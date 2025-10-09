import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";

import {i18n} from "./i18n-config";

import {match as matchLocale} from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects a plain object, so we need to transform headers
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  // @ts-expect-error locales are readonly
  const locales: string[] = i18n.locales;

  // Use negotiator and intl-localematcher to get the best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages(
    locales,
  );

  return matchLocale(languages, locales, i18n.defaultLocale);
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) =>
      !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`,
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request);

    // e.g., incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith("/python") ? "" : "/"}${pathname}/python`,
        request.url,
      ),
    );
  }
}

export const config = {
    matcher: [
        // Match all paths except:
        // - /api/*
        // - /_next/static/*
        // - /_next/image/*
        // - /favicon.ico
        // - Any file ending with .png, .jpg, .jpeg, .svg, .gif, .ico, .webp
        "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|svg|gif|ico|webp)$).*)",
    ],
};