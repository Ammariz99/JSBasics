function makeHttpGetRequest(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("HTTP error! Status: ", response.status);
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

makeHttpGetRequest(apiUrl)
  .then((responseData) => {
    console.log("HTTP GET request successful:", responseData);
  })
  .catch((error) => {
    console.error("Error making HTTP GET request:", error);
  });
