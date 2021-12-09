import { withKey } from "../axios"

const GET_EARTH_PICK_URL = process.env.REACT_APP_NASA_EARTH_PIC

export async function getEarthImages(date: string) {
  try {
    const { data } = await withKey(`${GET_EARTH_PICK_URL}/${date}`)
    return data
  } catch (error) {
    console.log(error)
  }
}