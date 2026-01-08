import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
    api_key: process.env.CLOUDINARY_API_KEY!,
    api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export async function getImages() {
    const res = await cloudinary.search
        .expression(
            "folder:studio_kodak/portfolio AND resource_type:image AND type:upload"
        )
        .sort_by("public_id", "asc")
        .max_results(100)
        .execute();

    return res.resources;
}

