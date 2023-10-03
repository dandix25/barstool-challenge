fetch('https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json')
    .then((response) => response.json())
    .then((json) => console.log(json));
