import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const publicDir = path.join(root, "public");
const sourceAssetsDir = path.join(root, "src", "assets");
const outputDir = path.join(root, "dist", "client");

await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });

await cp(publicDir, outputDir, { recursive: true });
await mkdir(path.join(outputDir, "assets"), { recursive: true });
await cp(sourceAssetsDir, path.join(outputDir, "assets"), { recursive: true });

const htaccess = `Options -MultiViews
RewriteEngine On

RewriteCond %{REQUEST_FILENAME} -f [OR]
RewriteCond %{REQUEST_FILENAME} -d
RewriteRule ^ - [L]

RewriteRule ^ index.html [L]

AddType video/mp4 .mp4
AddType image/jpeg .jpg .jpeg
AddType image/png .png
AddType image/webp .webp
AddType image/svg+xml .svg
AddType application/javascript .js
AddType text/css .css

<IfModule mod_headers.c>
  <FilesMatch "\\.(jpg|jpeg|png|webp|svg|mp4|woff2?|css|js)$">
    Header set Cache-Control "public, max-age=31536000, immutable"
  </FilesMatch>
  <Files "index.html">
    Header set Cache-Control "no-cache, no-store, must-revalidate"
  </Files>
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript image/svg+xml
</IfModule>
`;

await writeFile(path.join(outputDir, ".htaccess"), htaccess);

if (!existsSync(path.join(outputDir, "index.html"))) {
  throw new Error("Static build failed: dist/client/index.html was not created.");
}

console.log("Static website ready in dist/client");