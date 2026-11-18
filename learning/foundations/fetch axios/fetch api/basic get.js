// test api: https://jsonplaceholder.typicode.com/users/1
// making a basic get fetch call
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  // phase 1: status, header
  console.log("status:", response.status);

  // phase 2: body
  const body = await response.json(); // json() helps parse from JSON Text -> JS Object
  console.log("name: ", body.name);
}

getUser();
