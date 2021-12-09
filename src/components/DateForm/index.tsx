import React, { useState } from 'react'

import { FormWrapper, LabelWrapper } from "./styles";

 export function DateForm({
    handleGetEarthImages = (date: string) => {}
 }) {
  const [date, setDate] = useState('')

  function handleOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDate(event.target.value)
  }
  
   return (
     <>
      <FormWrapper>
        <LabelWrapper>
          <label>Data da foto</label>
          <input type='date' onChange={handleOnChange}/>
          {date}
          <button onClick={e => {
            e.preventDefault()
            handleGetEarthImages(date)}}>Buscar</button>
        </LabelWrapper>
      </FormWrapper>
     </>
   )
 }