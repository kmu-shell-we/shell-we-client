export function isPWAInstalled(): boolean {
  const isStandaloneDisplayMode = window.matchMedia('(display-mode: standalone)').matches;
  const isIOSStandalone = (window.navigator as Navigator & { standalone?: boolean }).standalone;

  return isStandaloneDisplayMode || !!isIOSStandalone;
}
