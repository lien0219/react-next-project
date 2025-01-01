export default function imageLoader({
  src,
  width,
  quality,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  // 如果是以 '/' 开头的本地图片
  if (src.startsWith("/")) {
    return src;
  }

  // 如果需要处理其他来源的图片，可以添加其他逻辑
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${
    quality || 75
  }`;
}
