export default async function registerUser(userName, email, password) {
  const user = {
    userName: userName,
    email: email,
    password: password
  };

  const resp = await fetch("/api/register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  });
  if (resp.status == 201) {
    return true;
  } else {
    return await resp.json();
  }
}
