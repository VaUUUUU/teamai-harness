import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
import { inventory, root } from './inventory.mjs';

const recorded = JSON.parse(fs.readFileSync(path.join(root, 'inventory.json'), 'utf8'));
const actual = inventory();
assert.deepEqual(recorded, actual, 'Resource files changed; review and regenerate inventory.json');
const sources = JSON.parse(fs.readFileSync(path.join(root, 'sources.json'), 'utf8'));
const skillDirs = fs.readdirSync(path.join(root, 'skills'), { withFileTypes:true }).filter(e=>e.isDirectory()).map(e=>e.name).sort();
assert.deepEqual(skillDirs, sources.skills.map(s=>s.name).sort(), 'Every shipped skill needs a provenance entry');
assert(!skillDirs.includes('lieflat-charts'), 'Noncommercial-only skill is excluded from this baseline');
for (const source of sources.skills) {
  assert(source.version && source.license && source.importedAt && source.source, `Incomplete provenance: ${source.name}`);
  const base = path.join(root, 'skills', source.name);
  const text = fs.readFileSync(path.join(base, 'SKILL.md'), 'utf8');
  assert(/^---\r?\n/.test(text) && /^name:\s*.+$/m.test(text) && /^description:\s*.+$/m.test(text), `Invalid skill metadata: ${source.name}`);
  assert(fs.existsSync(path.join(base, 'LICENSE')), `Missing LICENSE: ${source.name}`);
}
for (const [name, metadata] of Object.entries(actual.files)) {
  assert(metadata.bytes < 95 * 1024 * 1024, `File too large for normal GitHub Git: ${name}`);
  assert(!/(^|\/)(auth\.json|\.env|config\.yaml|state\.json)$/.test(name), `Private state filename: ${name}`);
  if (!/\.(md|json|yaml|yml|toml|py|js|mjs|cjs|ts|tsx|sh|ps1|txt)$/.test(name)) continue;
  const text = fs.readFileSync(path.join(root, name), 'utf8');
  assert(!/(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{40,}|-----BEGIN (?:RSA |OPENSSH )?PRIVATE KEY-----)/.test(text), `Credential pattern: ${name}`);
  assert(!/[A-Z]:[\\/]Users[\\/](?:Administrator|xyl0)[\\/]/i.test(text), `Machine-specific user path: ${name}`);
}
for (const name of ['README.md','CATALOG.md','CHANGELOG.md','LICENSES.md','teamai.yaml','.github/pull_request_template.md']) {
  assert(fs.statSync(path.join(root,name)).size > 0, `Required file: ${name}`);
}
console.log(`PASS: ${skillDirs.length} skills, ${Object.keys(actual.files).length} resource files; provenance, licenses, hashes and credential/path patterns checked.`);
