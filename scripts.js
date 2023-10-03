import data from 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json' assert { type: 'json' };
console.log(data);
import colors from 'https://unpkg.com/mlbcolors@0.0.2/mlbcolors/data.json' assert { type: 'json' };
console.log(colors);

/* Away Team Data */
document.getElementById('away-abv').innerText = data.away_team.abbreviation;
document.getElementById('away-abv2').innerText = data.away_team.abbreviation;
document.getElementById('away-masc').innerText = data.away_team.last_name;
var i;
for(i=0;i<data.away_period_scores.length;i++){
  document.getElementById('away-' + [i+1]).innerText = data.away_period_scores[i];
}
