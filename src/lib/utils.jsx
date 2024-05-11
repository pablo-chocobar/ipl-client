import clsx from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

async function getPlayerImageDict(name){
  const imagesDict = {};
  const playersWithImages = {};

  const folders = await cloudinary.api.rootFolders();
  const filteredFolders = folders.folders.filter(folder => folder.name !== 'samples');

  for (const folder of filteredFolders) {
    imagesDict[folder.name] = [];
  }

  for (const folder of filteredFolders) {
    const resources = await cloudinary.api.resources({
      type: 'upload',
      prefix: folder.name,
      maxResults: 30
    });

    for (const resource of resources.resources) {
      const publicId = resource.public_id.replace(`${folder.name}//`, '');
      imagesDict[folder.name].push(publicId);
      playersWithImages[publicId] = resource.secure_url;
    }
  }

  return [imagesDict, playersWithImages];
}



