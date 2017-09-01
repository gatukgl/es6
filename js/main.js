const func = () => {
  const response = fetch('http://api.openaura.com/v1/search/artists?q=katy+perry&api_key=1d9ea39e70e3476140c180593a2ae5bd44b65f12')
    .then(response => response.json())
    .then(response => console.log('response', response))
}

func()
