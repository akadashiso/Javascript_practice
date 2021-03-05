async function callApi() {
  // 実際にAPIを叩く処理
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users); 
}

callApi();