// Builds a URL for a file under public/ (or a page route) that works both locally and under the
// GitHub Pages project path. BASE_URL may or may not end with "/", so normalize it.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export const asset = (path: string): string => `${base}/${path.replace(/^\//, '')}`;
