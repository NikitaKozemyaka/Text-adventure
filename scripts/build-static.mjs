import { spawnSync } from "node:child_process";
import { existsSync, mkdirSync, renameSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const apiDir = join(root, "app", "api");
const parkRoot = join(root, ".static-export-park");
const parkedApi = join(parkRoot, "api");

function parkApiRoutes() {
  if (!existsSync(apiDir)) return false;
  rmSync(parkRoot, { recursive: true, force: true });
  mkdirSync(parkRoot, { recursive: true });
  renameSync(apiDir, parkedApi);
  return true;
}

function restoreApiRoutes(parked) {
  if (!parked) return;
  if (existsSync(parkedApi) && !existsSync(apiDir)) {
    renameSync(parkedApi, apiDir);
  }
  rmSync(parkRoot, { recursive: true, force: true });
}

const parked = parkApiRoutes();

try {
  const result = spawnSync(
    "npx",
    ["cross-env", "OUTPUT_MODE=export", "USE_DATABASE=false", "next", "build"],
    {
      cwd: root,
      stdio: "inherit",
      env: {
        ...process.env,
        OUTPUT_MODE: "export",
        USE_DATABASE: "false",
      },
      shell: process.platform === "win32",
    },
  );
  process.exitCode = result.status === null ? 1 : result.status;
} finally {
  restoreApiRoutes(parked);
}
