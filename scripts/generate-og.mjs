import sharp from 'sharp';
await sharp('public/images/og-default.svg')
  .png()
  .toFile('public/images/og-default.png');
console.log('Generated original 1200 × 630 social preview.');
