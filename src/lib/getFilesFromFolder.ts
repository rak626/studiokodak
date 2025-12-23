import "server-only"
import fs from "fs";
import path from "path";

/**
 * Reads all file names from a folder inside /public
 * @param folderPath Relative path from /public (e.g. "images/services")
 */
export function getFilesFromPublicFolder(folderPath: string): string[] {
    const absolutePath = path.join(process.cwd(), "public", folderPath);

    if (!fs.existsSync(absolutePath)) {
        console.warn(`Folder not found: ${absolutePath}`);
        return [];
    }

    return fs
        .readdirSync(absolutePath)
        .filter((file) => !file.startsWith("."));
}
