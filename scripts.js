import data from 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json' assert { type: 'json' };
console.log(data);

/* Away Team Data */
document.getElementById('away-abv').innerText = data.away_team.abbreviation;
document.getElementById('away-abv2').innerText = data.away_team.abbreviation;
document.getElementById('away-masc').innerText = data.away_team.last_name;
var i;
for(i=0;i<data.away_period_scores.length;i++){
  document.getElementById('away-' + [i]).innerText = data.away_period_scores[i];
}
document.getElementById('away-1').innerText = data.away_period_scores[0];
