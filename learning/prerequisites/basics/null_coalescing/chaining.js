const user = null;
console.log(user?.address?.city); // undefined — no TypeError
console.log(user.address.city);   // TypeError