import {
  siFlutter,
  siReact,
  siTailwindcss,
  siNextdotjs,
  siFirebase,
  siArduino,
  siTypescript,
  siGoogle,
  siFigma,
  siNodedotjs,
  siGit,
  siLaravel,
  siPostgresql,
  siMysql,
  siPhp,
  siJavascript,
  siLeaflet,
  siBootstrap,
  siHtml5,
  siCss,
  siGooglesheets,
} from "simple-icons";

export interface SimpleIconData {
  title: string;
  slug: string;
  hex: string;
  path: string;
}

// Tree-shakable static dictionary mapping slugs/aliases to explicitly imported icons
const iconMap: Record<string, SimpleIconData> = {
  flutter: siFlutter,
  react: siReact,
  reactjs: siReact,
  tailwindcss: siTailwindcss,
  tailwind: siTailwindcss,
  nextjs: siNextdotjs,
  nextdotjs: siNextdotjs,
  firebase: siFirebase,
  arduino: siArduino,
  arduinoide: siArduino,
  typescript: siTypescript,
  googlestitch: siGoogle,
  stitch: siGoogle,
  figma: siFigma,
  nodejs: siNodedotjs,
  nodedotjs: siNodedotjs,
  git: siGit,
  laravel: siLaravel,
  postgresql: siPostgresql,
  mysql: siMysql,
  php: siPhp,
  javascript: siJavascript,
  js: siJavascript,
  leaflet: siLeaflet,
  leafletmap: siLeaflet,
  map: siLeaflet,
  bootstrap: siBootstrap,
  html: siHtml5,
  html5: siHtml5,
  css: siCss,
  css3: siCss,
  spreadsheet: siGooglesheets,
  googlesheets: siGooglesheets,
};

/**
 * Resolves a technology name or slug to its corresponding SimpleIcon definition.
 * 100% tree-shakable: bundler excludes thousands of unused icons from simple-icons.
 */
export function getTechIcon(nameOrSlug: string): SimpleIconData | null {
  if (!nameOrSlug) return null;
  const raw = nameOrSlug.toLowerCase();
  const normalized = raw.replace(/[\s\-_.]/g, "");
  return iconMap[normalized] || iconMap[raw] || null;
}
