import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

export const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const ignored = new Set(['node_modules', '.git', '__pycache__', '.venv']);
export function inventory() {
  const files = {};
  const walk = relative => {
    const absolute = path.join(root, relative);
    if (!fs.existsSync(absolute)) return;
    for (const entry of fs.readdirSync(absolute, { withFileTypes: true }).sort((a,b)=>a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
      if (ignored.has(entry.name)) continue;
      const name = `${relative}/${entry.name}`;
      if (entry.isSymbolicLink()) throw new Error(`Symlink is not allowed: ${name}`);
      if (entry.isDirectory()) walk(name);
      else {
        const data = fs.readFileSync(path.join(root, name));
        files[name] = { bytes: data.length, sha256: crypto.createHash('sha256').update(data).digest('hex') };
      }
    }
  };
  for (const name of ['skills', 'claudemd', 'mcp']) walk(name);
  return { schemaVersion: 1, algorithm: 'sha256', files };
}

if (process.argv.includes('--write')) {
  fs.writeFileSync(path.join(root, 'inventory.json'), JSON.stringify(inventory(), null, 2) + '\n');
  console.log('Updated inventory.json');
}
