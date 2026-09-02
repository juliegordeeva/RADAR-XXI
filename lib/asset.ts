const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** next/image при unoptimized + static export не добавляет basePath сам. */
export function assetPath(path: string) {
  if (
    !path ||
    path.startsWith("http://") ||
    path.startsWith("https://") ||
    path.startsWith("data:")
  ) {
    return path;
  }
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${normalized}`;
}
