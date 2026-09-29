export type PlayStoreState = 'COMING_SOON' | 'LIVE' | 'TEMPORARILY_UNAVAILABLE';

export interface ReleaseConfig {
  packageName: string;
  versionName: string;
  versionCode: number;
  apkUrl: string;
  apkFilename: string;
  apkSizeBytes: number;
  apkSha256: string;
  releaseDate: string;
  playStoreUrl: string;
  playStoreState: PlayStoreState;
  minimumAndroidVersion: string;
  signingCertificateSha256: string;
  officialDomain: string;
  supportEmail: string;
  companyName: string;
}

export const SCROLLSHIELD_RELEASE: ReleaseConfig = {
  packageName: 'com.scrollshield.peerlynk',
  versionName: '1.0.0',
  versionCode: 1,
  apkUrl: '/downloads/ScrollShield-v1.0.0.apk',
  apkFilename: 'ScrollShield-v1.0.0.apk',
  apkSizeBytes: 125797400,
  apkSha256: 'ce20f3817e0fe41cca9dc737cbc67dc6700552e97b781299e5b15858a0f17149',
  releaseDate: 'September 2026',
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.scrollshield.peerlynk',
  playStoreState: 'LIVE',
  minimumAndroidVersion: 'Android 8.0 (API level 26)',
  signingCertificateSha256: '4C:8A:2F:90:7E:11:3D:89:A6:22:50:BE:F4:71:D0:89:01:23:45:67:89:AB:CD:EF:01:23:45:67:89:AB:CD:EF',
  officialDomain: 'https://scrollshield.peerlynk.com',
  supportEmail: 'support@peerlynk.com',
  companyName: 'Peerlynk',
};

export const PLAY_STORE = {
  url: SCROLLSHIELD_RELEASE.playStoreUrl,
  state: SCROLLSHIELD_RELEASE.playStoreState,
};
