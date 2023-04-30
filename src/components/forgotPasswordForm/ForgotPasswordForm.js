import React from 'react'

const ForgotPasswordForm = ({setToLogin}) => {
  return (
    <>
      <h2>Glömt lösenord?</h2>
      <form>
        <input type="email" placeholder='email'></input>
        <button type="submit">SKICKA LÖSENORD</button>
      </form>
      <a onClick={setToLogin}>Tillbaka till logga in</a>
    </>
  )
}

export default ForgotPasswordForm;