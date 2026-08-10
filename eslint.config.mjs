import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  globalIgnores([
    '.next/**',
    '_next/**',
    'out/**',
    'node_modules/**',
    'obras/**',
    'politica-de-privacidade/**',
    'legacy-static/**',
    '*.html',
    '*.txt',
  ]),
]);
