import React, { useState } from "react";
import { DateForm } from "../../components/DateForm";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Image } from "../../components/Image/image";
import { getEarthImages } from "../../services/GetEartImage";
import { GlobalStyle } from "../../styles/globals";

type ImageType = {
  identifier: string
  image: string
}

export function Main() {
  const [images, setImages] = useState<ImageType[]>()
  const [date, setDate] = useState('')

  async function onGetImagesEarth(date: string) {
    setDate(date)
    const images: ImageType[] = await getEarthImages(date)
    console.log(images)
    setImages((current) => [ ...images ])
  } 
  return (
    <>
      <Header/>
      <DateForm handleGetEarthImages={onGetImagesEarth}/>
      {images?.map(image => (<Image key={image.identifier} image={image.image} date={date}/>))}
      <Footer/>
      <GlobalStyle/>
    </>
  )
}