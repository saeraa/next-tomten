export default async function loginUser(userName, password) {
  const resp = await fetch("/api/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      userName: userName,
      password: password
    })
  });
  if (resp.status == 201) {
    return true;
  } else {
    return await resp.json();
  }
}
