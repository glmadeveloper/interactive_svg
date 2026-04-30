import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 🔧 CONFIG
const IMAGES_DIR = path.join(__dirname, "public/images");
const OUTPUT_IMPORT_PATH = "public/images";

const VALID_EXT = [".png", ".jpg", ".jpeg", ".webp"];

// Convert file name → variable name (closer to your style)
function toVarName(filePath) {
  return filePath
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-zA-Z0-9]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "")
    .toLowerCase() + "_image";
}

// Recursively get files
function getFiles(dir, base = "") {
  const files = fs.readdirSync(dir);
  let results = [];

  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.join(base, file);

    if (fs.statSync(fullPath).isDirectory()) {
      results = results.concat(getFiles(fullPath, relativePath));
    } else {
      const ext = path.extname(file).toLowerCase();
      if (VALID_EXT.includes(ext)) {
        results.push(relativePath);
      }
    }
  });

  return results;
}

// Generate file
function generate() {
  const files = getFiles(IMAGES_DIR);

  let imports = [];
  let exportsArr = [];

  files.forEach((file) => {
    const varName = toVarName(file);
    const importPath = path
      .join(OUTPUT_IMPORT_PATH, file)
      .replace(/\\/g, "/");

    imports.push(`import ${varName} from "${importPath}";`);
    exportsArr.push(`    ${varName},`);
  });

  const output = `// 🔥 AUTO-GENERATED FILE - DO NOT EDIT

${imports.join("\n")}

export {
${exportsArr.join("\n")}
};
`;

  console.log(output);
}

generate();