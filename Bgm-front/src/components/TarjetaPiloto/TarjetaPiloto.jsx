import React from 'react'

export const TarjetaPiloto = ({piloto}) => {
  return (
        <div
  style={{backgroundColor: '#15151E',border: '2px solid #E10600',borderRadius: '10px',padding: '20px',width: '300px',fontFamily: 'sans-serif',
    boxShadow: '6px 6px 0px black',margin: '10px',display: 'flex',flexDirection: 'column',alignItems: 'center',color: 'white'
  }}>
  <p
    style={{margin: 0,fontSize: '12px',fontWeight: 'bold',color: '#AAA',alignSelf: 'flex-start'
    }}
  >
    Piloto ID: {piloto.driverId}
  </p>

  <h1
    style={{margin: '2px 0',fontSize: '26px',color: '#e61313',textTransform: 'uppercase',borderBottom: '2px solid #E10600',width: '100%',
        textAlign: 'center'
    }}
  >
    {piloto.givenName} {piloto.familyName}
  </h1>

  <img src="/pilots/albon.jpg" alt={piloto.familyName}
    style={{width: '150px',height: '150px',objectFit: 'cover',borderRadius: '15px',border: '1px solid white',marginBottom: '2px'
    }}
  />
  <h3
    style={{fontSize: '16px',marginBottom: '4px',alignSelf: 'flex-start',color: '#E10600'
    }}
  >
    Información del piloto
  </h3>
  <div
    style={{backgroundColor: 'rgba(255,255,255,0.08)',padding: '10px',borderRadius: '10px',border: '1px solid #444',width: '100%'
    }}>
    <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Número:</strong> #{piloto.permanentNumber}
    </p>
    <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Código:</strong> {piloto.code}
    </p>
    <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Nacionalidad:</strong> {piloto.nationality}
    </p>
    {/* <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Fecha de nacimiento:</strong> {piloto.dateOfBirth}
    </p> */}
  </div>
  {/* <a
    href={piloto.url}
    target="_blank"
    style={{marginTop: '10px',textDecoration: 'none',backgroundColor: '#8a7171',color: 'white',padding: '5px 10px',borderRadius: '10px',
        fontWeight: 'bold'
    }}
  >
    Ver piloto
  </a> */}

<div
 style={{
    display: 'flex',
    gap: '10px',
    marginTop: '18px'
  }}
>
<button
    style={{
      backgroundColor: '#16a34a',
      color: 'white',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '10px',
      cursor: 'pointer'
    }}
  >
    Agregar a equipo
  </button>

  <button
    style={{
      backgroundColor: '#dc2626',
      color: 'white',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '10px',
      cursor: 'pointer'
    }}
  >
    Quitar del equipo</button>
    </div>
</div>
  )
}
