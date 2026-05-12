import React from 'react'
import { TarjetaPiloto } from '../TarjetaPiloto/TarjetaPiloto'
import react, {useState} from 'react'

export const ListaPiloto = () => {

    const [pilotos,setPilotos] = useState([])
    

    const llamarApi = async () => {
        const response = await fetch('https://api.jolpi.ca/ergast/f1/2026/drivers.json')
        const datosPiloto = await response.json()

        setPilotos(datosPiloto.MRData.DriverTable.Drivers)
    }

    llamarApi()



  return (
    <>
    <div
  style={{
    display: 'flex',
    flexWrap: 'wrap',
    gap: '30px',
    justifyContent: 'center'
  }}
  >
    {
      pilotos.map(piloto => (
        <TarjetaPiloto piloto={piloto}/>
      ))
    }
    </div>
    </>
  )
}
