import type { Locale } from "seo";

export type LocaleParams = { locale: Locale };
export type Params<T extends Record<string, any>> = { params: T };
