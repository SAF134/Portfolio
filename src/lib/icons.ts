import * as SimpleIcons from "simple-icons";

// Map normalized keys and raw slugs to SimpleIcons export names
const iconMap: Record<string, string> = {
  flutter: "siFlutter",
  react: "siReact",
  reactjs: "siReact",
  tailwindcss: "siTailwindcss",
  tailwind: "siTailwindcss",
  nextjs: "siNextdotjs",
  nextdotjs: "siNextdotjs",
  firebase: "siFirebase",
  arduino: "siArduino",
  arduinoide: "siArduino",
  typescript: "siTypescript",
  googlestitch: "siGoogle",
  stitch: "siGoogle",
  figma: "siFigma",
  nodejs: "siNodedotjs",
  nodedotjs: "siNodedotjs",
  git: "siGit",
  laravel: "siLaravel",
  postgresql: "siPostgresql",
  mysql: "siMysql",
  php: "siPhp",
  javascript: "siJavascript",
  js: "siJavascript",
  leaflet: "siLeaflet",
  leafletmap: "siLeaflet",
  map: "siLeaflet",
  bootstrap: "siBootstrap",
  html: "siHtml5",
  html5: "siHtml5",
  css: "siCss",
  css3: "siCss",
  spreadsheet: "siGooglesheets",
  googlesheets: "siGooglesheets",
};

export interface SimpleIconData {
  title: string;
  slug: string;
  hex: string;
  path: string;
}

/**
 * Resolves a technology name or slug to its corresponding SimpleIcon definition.
 */
export function getTechIcon(nameOrSlug: string): SimpleIconData | null {
  if (!nameOrSlug) return null;
  const raw = nameOrSlug.toLowerCase();
  const normalized = raw.replace(/[\s\-_.]/g, "");
  const key = iconMap[normalized] || iconMap[raw];
  if (!key) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return ((SimpleIcons as any)[key] as SimpleIconData) || null;
}
