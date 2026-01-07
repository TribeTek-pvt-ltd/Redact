import fs from "fs";
import path from "path";

// Get absolute path to public folder
const partnersDir = path.join(process.cwd(), "public/patners");

export function getAllPartnerLogos(): string[] {
  if (!fs.existsSync(partnersDir)) return [];

  // Read all files in the folder
  const files = fs.readdirSync(partnersDir);

  // Return as public URLs
  return files.map((file) => `/patners/${file}`);
}
