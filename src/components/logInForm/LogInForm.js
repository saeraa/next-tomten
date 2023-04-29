import Link from "next/link";
import React from "react";

const LogInForm = () => {
  return (
    <>
      <h2>Logga in</h2>
      <h3>Registrera ny användare</h3>
      <form>
        <input type="text"></input>
        <input type="password"></input>
        <a>Glömt lösenord?</a>
        <button type="submit">Logga in</button>
      </form>
      <a>Fortsätt utan att logga in</a>
    </>
  );
};

export default LogInForm;
