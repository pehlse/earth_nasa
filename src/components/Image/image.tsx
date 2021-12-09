import React, { useCallback, useEffect, useState } from 'react'
import { getPhotos } from '../../services/GetPhotos'

export function Image({ image, date }: {image: String, date: String}) {
  const [srcImage, setSrcImage] = useState<Blob | MediaSource>(new Blob())
  
  const getPhoto = useCallback(async () => {
    const [year, month, day] = date.split('-')
    const photo = await getPhotos({year, month, day}, image)
    setSrcImage(photo)

    return photo
  }, [image, date])

  useEffect(() => {
    getPhoto()
  }, [])

  return (
    <img src={URL.createObjectURL(srcImage)} alt="foto da terra" width="683"/>
  )
}