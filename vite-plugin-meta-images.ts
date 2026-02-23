import type { Plugin } from 'vite';
import fs from 'fs';
import path from 'path';

/**
 * Vite plugin that ensures og:image and twitter:image meta tags
 * use the correct local or production domain.
 */
export function metaImagesPlugin(): Plugin {
  return {
    name: 'vite-plugin-meta-images',
    transformIndexHtml(html) {
      // If we are in development, we don't need to rewrite URLs
      if (process.env.NODE_ENV !== 'production') {
        return html;
      }

      const baseUrl = process.env.APP_URL || ''; 
      
      // Check if opengraph image exists in public directory
      const publicDir = path.resolve(process.cwd(), 'client', 'public');
      const extensions = ['png', 'jpg', 'jpeg'];
      let imageExt: string | null = null;

      for (const ext of extensions) {
        if (fs.existsSync(path.join(publicDir, `opengraph.${ext}`))) {
          imageExt = ext;
          break;
        }
      }

      if (!imageExt || !baseUrl) {
        return html;
      }

      const imageUrl = `${baseUrl}/opengraph.${imageExt}`;

      // Update the meta tags with your actual domain
      html = html.replace(
        /<meta\s+property="og:image"\s+content="[^"]*"\s*\/>/g,
        `<meta property="og:image" content="${imageUrl}" />`
      );

      html = html.replace(
        /<meta\s+name="twitter:image"\s+content="[^"]*"\s*\/>/g,
        `<meta name="twitter:image" content="${imageUrl}" />`
      );

      return html;
    },
  };
}