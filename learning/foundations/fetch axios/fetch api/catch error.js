async function getUser(id) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      // HTTP Level Failure
      console.log("server said no:", res.status);
      return;
    }

    const user = await res.json();
    console.log(user.name);
  } catch (err) {
    // Network-Level Failure
    console.log("network problem:", err.message);
  }
}

getUser(1);
getUser(10000);
