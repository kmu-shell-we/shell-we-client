export type PlatformType = 'android' | 'ios-safari' | 'ios-not-safari' | 'other';

export function getPlatform(userAgent: string): PlatformType {
  const ua = userAgent.toLowerCase();

  const isAndroid = /android/.test(ua);
  const isSafari = /safari/.test(ua) && !/chrome|crios|fxios|edgios/.test(ua);

  if (isAndroid) return 'android';
  if (isSafari) return 'ios-safari';
  if (!isSafari) return 'ios-not-safari';
  return 'other';
}
