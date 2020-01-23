const token = process.env.REACT_APP_TOKEN;

const checkResponse = response => {
  if (response.status !== 200) {
    console.log(`Error with the request! ${response.status} `);
    return;
  }
  return response.json();
};

export const getRecipesData = searchInput => {
  // searchInput will come from the search bar and be used to filter the returned values
  console.log({ token });
  return fetch(
    `https://api.airtable.com/v0/appnneO9UdlcBo0C3/Table%201?api_key=${token}`
  )
    .then(checkResponse)
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      throw new Error(`fetch getTeamData failed ${err}`);
    });
};
