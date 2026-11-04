import { Buffer } from 'node:buffer';
import sharp from 'sharp';
import { writeFile } from 'node:fs/promises';
import brand from '../src/content/brand.json' with { type: 'json' };
const escape = (value) =>
  value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// Match the headline copy while fitting the landscape social-preview format.
const leadLines = brand.taglineLead.split(' ').reduce((lines, word) => {
  const last = lines.length - 1;
  if (last < 0 || `${lines[last]} ${word}`.length > 12) lines.push(word);
  else lines[last] += ` ${word}`;
  return lines;
}, []);
if (leadLines.length > 2)
  throw new Error('Review the social-preview layout for the updated tagline.');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#f8f9f5"/>
<path d="M64 119h1072M64 562h1072" stroke="#d8e2de"/>
<g stroke="#0e726c" stroke-width="2" fill="none"><path d="m84 49 20 20-20 20-20-20 20-20Zm0 0v40M64 69h40M74 59h20v20H74z"/><circle cx="84" cy="69" r="4" fill="#0e726c"/></g>
<text x="122" y="82" fill="#0e726c" font-family="Arial,sans-serif" font-size="38" font-weight="bold">${escape(brand.name)}</text>
<text x="330" y="75" fill="#536460" font-family="Arial,sans-serif" font-size="17">${escape(brand.descriptor)}</text>
<text x="64" y="190" fill="#536460" font-family="Arial,sans-serif" font-size="14" letter-spacing="3">${escape(brand.eyebrow.toUpperCase())}</text>
<g fill="#102638" font-family="Arial,sans-serif" font-size="70" font-weight="bold" letter-spacing="-3"><text x="60" y="295">${escape(leadLines[0])}</text><text x="60" y="380">${escape(leadLines[1] || '')}</text><text x="60" y="465" fill="#0e726c">${escape(brand.taglineAccent)}</text></g>
<g stroke="#0e726c" stroke-width="1" fill="none" opacity=".4"><circle cx="940" cy="330" r="170"/><circle cx="940" cy="330" r="130"/><circle cx="940" cy="330" r="90"/><circle cx="940" cy="330" r="50"/><path d="M940 160v340M770 330h340M940 160l147 255H793zM940 500 793 245h294zM770 330l255-147v294zM1110 330 855 477V183z"/></g>
<g fill="#d8a451" stroke="#0e726c"><circle cx="940" cy="160" r="6"/><circle cx="1087" cy="415" r="6"/><circle cx="793" cy="415" r="6"/></g>
<circle cx="940" cy="330" r="6" fill="#0e726c"/>
<text x="64" y="600" fill="#536460" font-family="Arial,sans-serif" font-size="16">Based in Nepal · Open to the world.</text>
</svg>`;
await writeFile('public/images/og-default.svg', svg + '\n');
await sharp(Buffer.from(svg)).png().toFile('public/images/og-default.png');
console.log(
  `Generated ${brand.name} social preview from shared brand settings.`,
);
