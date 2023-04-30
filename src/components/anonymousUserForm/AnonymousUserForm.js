import React from 'react'

const AnonymousUserForm = ({setToLogin}) => {
  return (
    <>
    <h2>Boka utan att logga in</h2>
    <form>
        <input placeholder="email" type="email"></input>
        <button type="submit">GÅ VIDARE</button>
    </form>
    <button onClick={setToLogin}>Logga in</button>
    </>
  )
}

export default AnonymousUserForm