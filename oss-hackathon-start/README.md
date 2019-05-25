```
exports.getGoogleSheets = (req, res) => {
  console.log(req);
  res.end(req.query.code);
  
};

```

query `?`
```
http://localhost:8080/api/googlesheets?code=12gm6fRAp0bC8TB2vh7sSPT3V75Ug99JaA9L0PqiWS2s
```

parameter `/`
```
http://localhost:8080/api/googlesheets/12gm6fRAp0bC8TB2vh7sSPT3V75Ug99JaA9L0PqiWS2s
```

```
exports.getGoogleSheets = (req, res) => {
  // console.log(req.query);
  res.end(req.query.code);
  
};

```

Use the axio library to call google sheets api

```
exports.getGoogleSheets = (req, res) => {
  // console.log(req.query);
  // res.end(req.query.code);
  axios.get('https://spreadsheets.google.com/feeds/cells/12gm6fRAp0bC8TB2vh7sSPT3V75Ug99JaA9L0PqiWS2s/1/public/full?alt=json')
  .then(function (response) {
    // handle success
    res.json(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    res.end();
  })
};

```
