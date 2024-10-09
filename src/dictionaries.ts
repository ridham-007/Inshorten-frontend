// import "server-only";
import type { Locale } from "./i18n-config";

// We enumerate all dictionaries here for better linting and typescript support
// We also get the default import for cleaner types
const dictionaries = {
  da: () => import("../dictionaries/da.json").then((module) => module.default),
  de: () => import("../dictionaries/de.json").then((module) => module.default),
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
  id: () => import("../dictionaries/id.json").then((module) => module.default),
  it: () => import("../dictionaries/it.json").then((module) => module.default),
  ja: () => import("../dictionaries/ja.json").then((module) => module.default),
  pt: () => import("../dictionaries/pt.json").then((module) => module.default),
  ru: () => import("../dictionaries/ru.json").then((module) => module.default),
  tr: () => import("../dictionaries/tr.json").then((module) => module.default),
};

export const getDictionary = async (locale: Locale): Promise<Record<string, string>> =>
  dictionaries[locale]?.() ?? dictionaries.en();

