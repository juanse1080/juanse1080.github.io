import {
  existsSync,
  readdirSync,
  readFileSync,
  statSync,
} from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const srcRoot = join(root, "src");

const fail = (message: string): never => {
  throw new Error(message);
};

const readSource = (relativePath: string) =>
  readFileSync(join(root, relativePath), "utf8");

const sourceFiles = (directory: string): string[] =>
  readdirSync(directory).flatMap((entry) => {
    const path = join(directory, entry);
    const stats = statSync(path);

    if (stats.isDirectory()) {
      return sourceFiles(path);
    }

    if (!/\.(tsx?|css)$/.test(entry)) {
      return [];
    }

    return [path];
  });

const includes = (content: string, expected: string, context: string) => {
  if (!content.includes(expected)) {
    fail(`${context}: expected to include ${expected}`);
  }
};

const excludes = (content: string, forbidden: RegExp, context: string) => {
  const match = content.match(forbidden);
  if (match) {
    fail(`${context}: must not include ${match[0]}`);
  }
};

const removedClientScrollFiles = [
  "src/app/[locale]/_components/HashScroll.tsx",
  "src/app/[locale]/hooks/useHashScroll.tsx",
];

for (const file of removedClientScrollFiles) {
  if (existsSync(join(root, file))) {
    fail(`${file}: custom hash scroll client code must be removed`);
  }
}

const bannedSourcePatterns: Array<[RegExp, string]> = [
  [/\bHashScroll\b/, "custom hash scroll component"],
  [/\buseHashScroll\b/, "custom hash scroll hook"],
  [/window\.location\.hash/, "window hash inspection"],
  [/window\.(?:top\.)?scroll\s*\(/, "manual window scroll"],
  [/window\.(?:top\.)?scrollTo\s*\(/, "manual window scrollTo"],
  [/\.scrollIntoView\s*\(/, "manual element scrollIntoView"],
  [/\buseChangeLocale\b/, "client-side locale switching hook"],
  [/\buseCurrentLocale\b/, "client-side current-locale hook"],
  [/\bI18nProviderClient\b/, "client-side i18n provider"],
  [/from\s+["']locales\/client["']/, "client i18n imports"],
];

for (const file of sourceFiles(srcRoot)) {
  const content = readFileSync(file, "utf8");
  const context = relative(root, file);

  for (const [pattern, description] of bannedSourcePatterns) {
    excludes(content, pattern, `${context}: ${description}`);
  }
}

const changeLanguage = readSource(
  "src/app/[locale]/_components/ChangeLanguage.tsx",
);

excludes(
  changeLanguage,
  /["']use client["']/,
  "ChangeLanguage.tsx: Static Language Switch",
);
includes(
  changeLanguage,
  'component="a"',
  "ChangeLanguage.tsx: Static Language Switch",
);
includes(
  changeLanguage,
  "href={`/${language}${path}`}",
  "ChangeLanguage.tsx: Static Language Switch",
);
includes(
  changeLanguage,
  "hrefLang={language}",
  "ChangeLanguage.tsx: Static Language Switch",
);

const globalCss = readSource("src/theme/global.css");
includes(
  globalCss,
  "scroll-behavior: smooth",
  "global.css: Native Anchor Navigation",
);

const copyButton = readSource("src/components/molecules/CopyButton.tsx");
includes(copyButton, '"use client"', "CopyButton.tsx: Client JavaScript Exception");
includes(
  copyButton,
  "navigator.clipboard.writeText",
  "CopyButton.tsx: Client JavaScript Exception",
);

console.log("Static interaction verification passed.");
