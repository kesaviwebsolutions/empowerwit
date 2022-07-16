import React, { useState } from 'react'
import { RingLoader } from 'react-spinners'

function Loading() {
  const [loading, setLoading] = useState(true)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        animation: 'spinner 5.5s linear infinite',
      }}
    >
      <RingLoader size={50} color={'#D44A73'} loading={loading} />
    </div>
  )
}

export default Loading
