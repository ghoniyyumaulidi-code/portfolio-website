import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './src/sanity/schemas';

export default defineConfig({
  name: 'portfolio',
  title: 'Ghoniyyu Maulidi Portfolio',
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('caseStudy').title('Selected Case'),
            S.documentTypeListItem('work').title('Works'),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
});
