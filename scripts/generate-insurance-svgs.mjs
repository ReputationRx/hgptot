import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const logos = [
  { file: "aetna.svg", text: "Aetna", color: "#7B2D8E" },
  { file: "cigna.svg", text: "Cigna", sub: "Ashlink", color: "#00874D" },
  { file: "fidelis.svg", text: "Fidelis", color: "#0057A8" },
  { file: "ghi.svg", text: "GHI", color: "#003DA5" },
  { file: "hip.svg", text: "HIP", color: "#003DA5" },
  { file: "humana.svg", text: "Humana", color: "#00A1E0" },
  { file: "medicare.svg", text: "Medicare", color: "#146DA7" },
  { file: "1199seiu.svg", text: "1199SEIU", color: "#6B2C91" },
  { file: "magnacare.svg", text: "Magnacare", color: "#1E4F8E" },
  { file: "multiplan.svg", text: "Multiplan", sub: "PHCS", color: "#003B71" },
  { file: "partners.svg", text: "Partners", sub: "Direct Health", color: "#0F5C8C" },
  { file: "railroad.svg", text: "Railroad", sub: "Medicare", color: "#146DA7" }
];

function svg({ text, sub, color }) {
  const subLine = sub
    ? `<text x="120" y="38" text-anchor="middle" font-family="Avenir Next, Helvetica Neue, Arial, sans-serif" font-size="11" font-weight="600" fill="${color}" opacity="0.85">${sub}</text>`
    : "";
  const y = sub ? 24 : 30;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="56" viewBox="0 0 240 56" role="img" aria-hidden="true">
  <text x="120" y="${y}" text-anchor="middle" font-family="Georgia, Times New Roman, serif" font-size="22" font-weight="700" fill="${color}">${text}</text>
  ${subLine}
</svg>`;
}

const dir = join(process.cwd(), "public", "insurance");
mkdirSync(dir, { recursive: true });
for (const logo of logos) {
  writeFileSync(join(dir, logo.file), svg(logo));
}
console.log(`Wrote ${logos.length} logos to public/insurance/`);
