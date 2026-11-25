import { defineField, defineType, defineArrayMember } from 'sanity';

// Shared building blocks for long content: text, headings, single images,
// two images side by side, and muted looping videos.
const mediaImage = defineArrayMember({
  type: 'image',
  name: 'image',
  title: 'Image',
  options: { hotspot: true },
  fields: [{ name: 'caption', type: 'string', title: 'Caption (optional)' }],
});

const imagePair = defineArrayMember({
  type: 'object',
  name: 'imagePair',
  title: 'Two images side by side',
  fields: [
    { name: 'left', type: 'image', title: 'Left image' },
    { name: 'right', type: 'image', title: 'Right image' },
    { name: 'caption', type: 'string', title: 'Caption (optional)' },
  ],
  preview: { select: { media: 'left', title: 'caption' }, prepare: (v) => ({ ...v, title: v.title || 'Two images' }) },
});

const video = defineArrayMember({
  type: 'object',
  name: 'video',
  title: 'Video (MP4 loop)',
  fields: [
    { name: 'file', type: 'file', title: 'MP4 file', options: { accept: 'video/mp4' } },
    { name: 'poster', type: 'image', title: 'Poster image (first frame)' },
    { name: 'caption', type: 'string', title: 'Caption (optional)' },
  ],
  preview: { select: { media: 'poster', title: 'caption' }, prepare: (v) => ({ ...v, title: v.title || 'Video' }) },
});

const richText = defineArrayMember({
  type: 'block',
  styles: [
    { title: 'Normal', value: 'normal' },
    { title: 'Section heading', value: 'h2' },
  ],
  lists: [{ title: 'Bullets', value: 'bullet' }],
  marks: { decorators: [{ title: 'Bold', value: 'strong' }, { title: 'Italic', value: 'em' }] },
});

export const caseStudy = defineType({
  name: 'caseStudy',
  title: 'Selected Case',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({ name: 'company', type: 'string', description: 'Shown on the right of the list, e.g. Vida' }),
    defineField({ name: 'summary', type: 'text', rows: 3, description: 'One sentence under the title. Outcome first.' }),
    defineField({ name: 'role', type: 'string' }),
    defineField({ name: 'year', type: 'string' }),
    defineField({ name: 'platform', type: 'string' }),
    defineField({ name: 'team', type: 'array', of: [{ type: 'string' }], validation: (r) => r.max(3), description: 'Up to 3 names' }),
    defineField({ name: 'cover', type: 'image', options: { hotspot: true }, description: 'Best at 16:10 (1600×1000). Other ratios are shown whole.' }),
    defineField({ name: 'metricValue', title: 'Outcome number', type: 'string', description: 'e.g. 15% → 23% (optional)' }),
    defineField({ name: 'metricLabel', title: 'Outcome label', type: 'string', description: 'e.g. Conversion rate' }),
    defineField({
      name: 'body',
      title: 'Content',
      type: 'array',
      description: 'Use "Section heading" for each part (Overview, The problem…). They become the jump links on the right.',
      of: [richText, mediaImage, imagePair, video],
    }),
    defineField({ name: 'order', type: 'number', description: 'Lower numbers show first' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'company', media: 'cover' } },
});

export const work = defineType({
  name: 'work',
  title: 'Works',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: (r) => r.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' }, validation: (r) => r.required() }),
    defineField({
      name: 'category',
      type: 'string',
      options: { list: ['Branding', 'Website', 'Apps', 'Dashboard', 'AI Product'] },
      validation: (r) => r.required(),
    }),
    defineField({ name: 'client', type: 'string' }),
    defineField({ name: 'year', type: 'string' }),
    defineField({ name: 'background', type: 'text', rows: 4, description: '2 to 3 sentences: what it is, the challenge, how you solved it.' }),
    defineField({ name: 'cover', type: 'image', options: { hotspot: true }, description: 'Any ratio. The list keeps its real shape.', validation: (r) => r.required() }),
    defineField({ name: 'gallery', type: 'array', of: [mediaImage, imagePair, video] }),
    defineField({ name: 'order', type: 'number', description: 'Lower numbers show first' }),
  ],
  orderings: [{ title: 'Order', name: 'order', by: [{ field: 'order', direction: 'asc' }] }],
  preview: { select: { title: 'title', subtitle: 'category', media: 'cover' } },
});

export const schemaTypes = [caseStudy, work];
