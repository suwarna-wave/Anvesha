/** Resolve internal routes and assets for both a domain root and a Pages project path. */
export function sitePath(
  path: string,
  base = import.meta.env?.BASE_URL || '/',
) {
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  const prefix = base.replace(/\/+$/, '');
  const match = path.match(/^([^?#]*)(.*)$/s)!;
  let pathname = match[1];
  if (prefix && (pathname === prefix || pathname.startsWith(`${prefix}/`))) {
    pathname = pathname.slice(prefix.length) || '/';
  }
  if (!pathname.endsWith('/') && !/\/[^/]+\.[^/]+$/.test(pathname))
    pathname += '/';
  return `${prefix}${pathname}${match[2]}`;
}

export function withoutBase(
  path: string,
  base = import.meta.env?.BASE_URL || '/',
) {
  const prefix = base.replace(/\/+$/, '');
  return prefix && (path === prefix || path.startsWith(`${prefix}/`))
    ? path.slice(prefix.length) || '/'
    : path;
}
