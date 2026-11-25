import cloudinary from "../config/cloudinary.js";

const uploadToCloudinary = (
  fileBuffer,
  folder = "laf/registrations"
) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: "auto",
        type: "authenticated",
      },
      (error, result) => {
        if (error) {
          return reject(error);
        }

        resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
};

export default uploadToCloudinary;