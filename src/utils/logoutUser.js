export default async function logoutUser() {
  const resp = await fetch("/api/logout", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  });
  if (resp.status == 201) {
    return true;
  } else {
    return await resp.json();
  }
}
