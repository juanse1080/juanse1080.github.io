import type { Locale } from "../seo";

export const publicEmail = "juanmarcon1080@gmail.com";
export const publicEmailHref = `mailto:${publicEmail}`;
export const linkedInProfileUrl = "https://www.linkedin.com/in/juanmarcon";

export const resumePaths: Record<Locale, string> = {
  en: "/resume/Juan-Marcon-Resume.pdf",
  es: "/resume/Juan-Marcon-CV-ES.pdf",
};

export const getResumePath = (locale: Locale) => resumePaths[locale];
