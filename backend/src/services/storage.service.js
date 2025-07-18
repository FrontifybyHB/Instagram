import ImageKit from "imagekit";
import config from '../config/config.js'

const imagekit = new ImageKit({
    publicKey: config.imagekit.publicKey,
    privateKey: config.imagekit.privateKey,
    urlEndpoint: config.imagekit.urlEndpoint,
});

export function uploadFile(file, filename) {
    return new Promise((resolve, reject) => {
        imagekit.upload({
            file: file,
            fileName: filename,
            folder: '/instagram/posts'
        })
        if (error) {
            reject(error);
        } else {
            resolve(response);
        }
    })
}