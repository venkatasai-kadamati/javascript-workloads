// https://jsonplaceholder.typicode.com/users/1
// making a post call

const url = "https://jsonplaceholder.typicode.com/users/";
async function createUser() {
  try {
    const res = await fetch(url, {
      // method, headers, body
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: "venkat" }),
    });

    if (!res.ok) {
      console.log("server said no:", res.status);
      return;
    }

    const created = await res.json();
    console.log(created);
  } catch (err) {
    console.log("NETWORK PROBLEM:", err.message);
  }
}

createUser();
