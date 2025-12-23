"use server";

import {getFilesFromPublicFolder} from "@/lib/getFilesFromFolder";

export async function getGalleryImages(folder: string): Promise<string[]> {
    return getFilesFromPublicFolder(folder);
}
