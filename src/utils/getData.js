
const getData = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(response => response)
    .catch(err => err);
};

export default getData;
