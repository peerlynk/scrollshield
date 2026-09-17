import fs from 'node:fs';
import crypto from 'node:crypto';
import path from 'node:path';

const apkPath = process.argv[2];

if (!apkPath) {
  console.error('Usage: node scripts/release-metadata.mjs <path-to-apk>');
  process.exit(1);
}

const resolvedPath = path.resolve(apkPath);
if (!fs.existsSync(resolvedPath)) {
  console.error(`File not found: ${resolvedPath}`);
  process.exit(1);
}

const fileBuffer = fs.readFileSync(resolvedPath);
const hashSum = crypto.createHash('sha256');
hashSum.update(fileBuffer);
const sha256 = hashSum.digest('hex');
const stats = fs.statSync(resolvedPath);

console.log('--- APK METADATA ---');
console.log(`Filename: ${path.basename(resolvedPath)}`);
console.log(`Size (bytes): ${stats.size}`);
console.log(`Size (MB): ${(stats.size / (1024 * 1024)).toFixed(2)} MB`);
console.log(`SHA-256: ${sha256}`);
