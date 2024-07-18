// Find the path and retrieve the content of package.json file of a Node.js project.
// Useful to then provide package.json informations inside some logic of a Node.js project  
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

export function getPackageJsonPath(importMetaUrl: string): string {
  const __filename = fileURLToPath(importMetaUrl);
  const __dirname = path.dirname(__filename);
  return path.resolve(__dirname, '../package.json'); // To change accordingly to the project structure
}

export function getPackageJson(importMetaUrl: string): Record<string, string> {
  const packageJsonPath = getPackageJsonPath(importMetaUrl);
  if (!fs.existsSync(packageJsonPath)) {
    throw new Error(`package.json not found at path: ${packageJsonPath}`);
  }
  
  const packageJsonContent = fs.readFileSync(packageJsonPath, 'utf8');
  try {
    return JSON.parse(packageJsonContent);
  } catch (error) {
    throw new Error(`Error parsing package.json: ${error.message}`);
  }
}
