import fs from "fs";
import path from "path";

export function getGalleryImages() {
    const galleryDir = path.join(process.cwd(), "public/images/GalleryImages");
    
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".webp"];
    
    const files = fs.readdirSync(galleryDir)
        .filter(file => allowedExtensions.includes(
            path.extname(file).toLowerCase()
        ))
        .map((file, index) => ({
            id: index + 1,
            image: `/images/GalleryImages/${file}`,
            alt: path.basename(file, path.extname(file)).replace(/[-_]/g, " "),
        }));

    return files;
}