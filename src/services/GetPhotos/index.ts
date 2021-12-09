import { withKey } from "../axios";
const GET_PHOTOS_EARTH = process.env.REACT_APP_NASA_GET_PHOTOS

type DateType = {
  year: String
  month: String
  day: String
}

export async function getPhotos(date: DateType, imageName: String) {
  try {
    const { data } = await withKey.get(`https://cors-anywhere.herokuapp.com/${GET_PHOTOS_EARTH}${date.year}/${date.month}/${date.day}/png/${imageName}.png`, {responseType: 'blob'})
    return data
  } catch (error) {
    
  }
}