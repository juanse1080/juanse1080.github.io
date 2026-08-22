import { copyFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import { getPublicRoutePath, primaryLocale } from "../src/seo";

const distDir = join(process.cwd(), "dist");
const primaryLocaleHomePath = getPublicRoutePath(primaryLocale, "home")
  .replace(/^\//, "")
  .concat("index.html");
const primaryLocaleHomeFile = join(distDir, primaryLocaleHomePath);
const rootHomeFile = join(distDir, "index.html");

if (!existsSync(primaryLocaleHomeFile)) {
  throw new Error(
    `Cannot sync root route: missing primary locale artifact at dist/${primaryLocaleHomePath}`,
  );
}

copyFileSync(primaryLocaleHomeFile, rootHomeFile);
console.log(`Synced root route from ${primaryLocale} locale artifact.`);
