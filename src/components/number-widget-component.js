import axios from 'axios'
import { useEffect, useState } from 'react'

const NumberWidget = ({ data }) => {
  const [number, setNumber] = useState()
  useEffect(() => {
    axios({
      method: 'get',
      url: data.api
    })
      .then(result => {
        setNumber(result?.data?.pokemon_species_details?.length)
      })
  })

  return (
    <div className="block shadow p-4 m-4 rounded-md border">
      <h1 className="text-2xl font-bold">{data.title}</h1>
      <span className="block text-6xl font-bold">{number}</span>
    </div>
  )
}

export default NumberWidget
