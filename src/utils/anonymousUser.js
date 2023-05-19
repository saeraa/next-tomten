export default async function continueAsGuest(email) {
  const resp = await fetch("/api/guest", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: email
    })
  });
  if (resp.status == 201) {
    return true;
  }
}
