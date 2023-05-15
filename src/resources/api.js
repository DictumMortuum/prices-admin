const url = process.env.REACT_APP_ENDPOINT;

export const createIgnore = ({ name, store_id })=> fetch(`${url}/ignoredprices`, {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    name,
    store_id,
  })
});
