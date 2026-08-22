import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";
import { locales, primaryLocale } from "seo";

const I18nMiddleware = createI18nMiddleware({
  locales: [...locales],
  defaultLocale: primaryLocale,
  urlMappingStrategy: "rewriteDefault",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
