import { NextResponse } from 'next/server';
import { SCROLLSHIELD_RELEASE } from '@/lib/config/release';

export async function GET() {
  // Redirects /download/latest to the official release APK URL configured in lib/config/release.ts
  return NextResponse.redirect(new URL(SCROLLSHIELD_RELEASE.apkUrl, SCROLLSHIELD_RELEASE.officialDomain));
}
