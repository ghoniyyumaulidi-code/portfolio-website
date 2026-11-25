// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import react from '@astrojs/react';
import sanity from '@sanity/astro';
import vercel from '@astrojs/vercel';

const env = loadEnv(process.env.NODE_ENV ?? 'production', process.cwd(), '');
const projectId = env.PUBLIC_SANITY_PROJECT_ID;
const dataset = env.PUBLIC_SANITY_DATASET || 'production';

// Without a Sanity project ID the site still builds, using the sample content
// in src/lib/sample.ts. Add the ID (see README) to switch on the CMS at /studio.
const integrations = [react()];
if (projectId) {
  integrations.unshift(
    sanity({ projectId, dataset, useCdn: false, studioBasePath: '/studio' })
  );
}

export default defineConfig({
  output: 'static',
  adapter: vercel(),
  integrations,
});
