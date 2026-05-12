import React from 'react'

export const TarjetaPiloto = ({piloto}) => {
  return (
        <div
  style={{backgroundColor: '#15151E',border: '3px solid #E10600',borderRadius: '18px',padding: '20px',width: '320px',fontFamily: 'sans-serif',
    boxShadow: '6px 6px 0px black',margin: '10px',display: 'flex',flexDirection: 'column',alignItems: 'center',color: 'white'
  }}
>
  <p
    style={{margin: 0,fontSize: '12px',fontWeight: 'bold',color: '#AAA',alignSelf: 'flex-start'
    }}
  >
    DRIVER ID: {piloto.driverId}
  </p>

  <h1
    style={{margin: '10px 0',fontSize: '26px',color: '#E10600',textTransform: 'uppercase',borderBottom: '2px solid #E10600',width: '100%',
        textAlign: 'center'
    }}
  >
    {piloto.givenName} {piloto.familyName}
  </h1>

  <img src="/pilots/albon.jpg" alt={piloto.familyName}
    style={{width: '180px',height: '180px',objectFit: 'cover',borderRadius: '15px',border: '3px solid white',marginBottom: '15px'
    }}
  />

  <h3
    style={{fontSize: '16px',marginBottom: '8px',alignSelf: 'flex-start',color: '#E10600'
    }}
  >
    Información del piloto
  </h3>

  <div
    style={{backgroundColor: 'rgba(255,255,255,0.08)',padding: '12px',borderRadius: '12px',border: '1px solid #444',width: '100%'
    }}
  >
    <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Número:</strong> #{piloto.permanentNumber}
    </p>
    <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Código:</strong> {piloto.code}
    </p>
    <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Nacionalidad:</strong> {piloto.nationality}
    </p>
    <p style={{ margin: '6px 0', fontSize: '14px' }}>
      <strong>Fecha de nacimiento:</strong> {piloto.dateOfBirth}
    </p>
  </div>
  <a
    href={piloto.url}
    target="_blank"
    style={{marginTop: '18px',textDecoration: 'none',backgroundColor: '#E10600',color: 'white',padding: '10px 18px',borderRadius: '10px',
        fontWeight: 'bold'
    }}
  >
    Ver piloto
  </a>
</div>
  )
}
