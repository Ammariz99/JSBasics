function ParallelUrls(urls) {
  const downloadPromises = urls.map(
    (url) =>
      new Promise((resolve, reject) => {
        fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("HTTP error! Status:", response.status);
            }
            return response.text();
          })
          .then((data) => {
            resolve({ url: url, content: data });
          })
          .catch((error) => {
            reject(error);
          });
      })
  );

  return Promise.all(downloadPromises);
}

const urlsToDownload = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
];

ParallelUrls(urlsToDownload)
  .then((results) => {
    console.log("Downloaded contents:", results);
  })
  .catch((error) => {
    console.error("Error downloading URLs:", error);
  });
