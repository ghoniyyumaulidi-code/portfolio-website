// A media item is either a real asset from the CMS (url) or a grey placeholder.
export type Media = {
  url?: string;
  placeholder?: string;
  ratio?: number;
  alt?: string;
};

export type Block =
  | { _type: 'block'; _key: string; style?: string; listItem?: string; children: { text: string; marks?: string[] }[] }
  | { _type: 'image'; _key: string; image: Media; caption?: string }
  | { _type: 'imagePair'; _key: string; left: Media; right: Media; caption?: string }
  | { _type: 'video'; _key: string; url?: string; poster?: Media; caption?: string };

export type CaseStudy = {
  slug: string;
  title: string;
  company?: string;
  summary?: string;
  role?: string;
  year?: string;
  platform?: string;
  team?: string[];
  cover: Media;
  metricValue?: string;
  metricLabel?: string;
  body: Block[];
};

export type Work = {
  slug: string;
  title: string;
  category: string;
  client?: string;
  year?: string;
  background?: string;
  cover: Media;
  gallery: Block[];
};
