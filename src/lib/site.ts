export const EMAIL = 'ghoniyyumaulidi@gmail.com';
// Put your resume PDF in /public as resume.pdf
export const RESUME_URL = '/resume.pdf';

export const SOCIALS = [
  { name: 'Dribbble', url: 'https://dribbble.com/ghoniyyumaulidi', meta: '12K followers' },
  { name: 'Behance', url: 'https://www.behance.net/', meta: '1 achievement' }, // TODO: your Behance profile link
  { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~0175f4cf8f669b5e0a', meta: '14 jobs' },
  { name: 'Medium', url: 'https://medium.com/@ghoniyyumaulidi', meta: '2 topics' },
  { name: 'Instagram', url: 'https://www.instagram.com/ghoniyyumaulidi/', meta: '@ghoniyyumaulidi' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ghoniyyu-maulidi-430644100/', meta: '' },
];

// Footer links on every page: links only, most relevant first.
export const FOOTER_SOCIALS = ['LinkedIn', 'Dribbble', 'Behance', 'Instagram'].map((n) => SOCIALS.find((s) => s.name === n)!);

// Companies for the "Worked with" row. Add a white logo file in /public/logos to replace the name.
// About page: freelance and community profiles, with details.
export const FREELANCE = ['Dribbble', 'Behance', 'Upwork', 'Medium'].map((n) => SOCIALS.find((s) => s.name === n)!);

export const CLIENTS = [
  { name: 'Vida', logo: '' },
  { name: 'Mola', logo: '' },
  { name: 'Kitani Studio', logo: '' },
  { name: 'Onigiri Design Studio', logo: '' },
  { name: 'Moselo', logo: '' },
  { name: 'Olride', logo: '' },
];

export const CATEGORIES = ['All', 'Branding', 'Website', 'Apps', 'Dashboard', 'AI Product'];
