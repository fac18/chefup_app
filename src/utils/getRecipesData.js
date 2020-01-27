const token = process.env.REACT_APP_TOKEN;
const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status} `);
    return;
  }
  return response.json();
};
export const getRecipesData = () => {
  return fetch(
    `https://api.airtable.com/v0/appnneO9UdlcBo0C3/Table%201?api_key=${token}`
  )
    .then(checkResponse)
    .catch(err => {
      throw new Error(`fetch getLessonData failed ${err}`);
    });
};
