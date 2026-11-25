import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import type { Block, CaseStudy, Media, Work } from './types';
import { sampleCases, sampleWorks } from './sample';

const projectId = import.meta.env.PUBLIC_SANITY_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || 'production';

const client = projectId
  ? createClient({ projectId, dataset, apiVersion: '2025-01-01', useCdn: false })
  : null;
const builder = client ? imageUrlBuilder(client) : null;

// Images are served as WebP/AVIF automatically (auto=format), sized for the screen.
function img(source: any, width = 2000): Media | undefined {
  if (!source?.asset || !builder) return undefined;
  return {
    url: builder.image(source).width(width).auto('format').quality(85).url(),
    ratio: source.asset?.metadata?.dimensions?.aspectRatio,
    alt: source.alt,
  };
}

const imageFields = `{..., asset->{_id, url, metadata{dimensions}}}`;
const bodyQuery = `[]{
  ...,
  _type == "image" => {..., asset->{_id, url, metadata{dimensions}}},
  _type == "imagePair" => {..., left${imageFields}, right${imageFields}},
  _type == "video" => {..., "url": file.asset->url, poster${imageFields}}
}`;

function mapBody(body: any[] = []): Block[] {
  return body.map((b) => {
    if (b._type === 'image') return { _type: 'image', _key: b._key, image: img(b, 1600)!, caption: b.caption };
    if (b._type === 'imagePair') return { _type: 'imagePair', _key: b._key, left: img(b.left, 1200)!, right: img(b.right, 1200)!, caption: b.caption };
    if (b._type === 'video') return { _type: 'video', _key: b._key, url: b.url, poster: img(b.poster, 1600), caption: b.caption };
    return b;
  });
}

let casesCache: CaseStudy[] | null = null;
let worksCache: Work[] | null = null;

export async function getCases(): Promise<CaseStudy[]> {
  if (casesCache) return casesCache;
  if (!client) return (casesCache = sampleCases);
  const rows = await client.fetch(`*[_type == "caseStudy" && defined(slug.current)] | order(order asc, _createdAt desc){
    ..., "slug": slug.current, cover${imageFields}, body${bodyQuery}
  }`);
  if (!rows.length) return (casesCache = sampleCases);
  return (casesCache = rows.map((r: any) => ({
    ...r,
    team: r.team ?? [],
    cover: img(r.cover) ?? { placeholder: 'No cover yet', ratio: 16 / 10 },
    body: mapBody(r.body),
  })));
}

export async function getWorks(): Promise<Work[]> {
  if (worksCache) return worksCache;
  if (!client) return (worksCache = sampleWorks);
  const rows = await client.fetch(`*[_type == "work" && defined(slug.current)] | order(order asc, _createdAt desc){
    ..., "slug": slug.current, cover${imageFields}, gallery${bodyQuery}
  }`);
  if (!rows.length) return (worksCache = sampleWorks);
  return (worksCache = rows.map((r: any) => ({
    ...r,
    cover: img(r.cover) ?? { placeholder: 'No cover yet', ratio: 4 / 3 },
    gallery: mapBody(r.gallery),
  })));
}

export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
