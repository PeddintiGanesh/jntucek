
import fs from 'fs';
import path, { resolve } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your dynamic routes (edit as needed)
const routes = ['/', '/about', '/departments', '/contact', '/courses', '/faculty', '/admissions'];

const baseUrl = 'https://jntucek.vercel.app';
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    route => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`
  )
  .join('\n')}
</urlset>`;

const filePath = resolve(__dirname, '../public/sitemap.xml');
fs.writeFileSync(filePath, sitemap);

console.log('✅ Sitemap generated at:', filePath);
