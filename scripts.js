import data from 'https://chumley.barstoolsports.com/dev/data/games/eed38457-db28-4658-ae4f-4d4d38e9e212.json' assert { type: 'json' };
console.log(data);
import colors from 'https://unpkg.com/mlbcolors@0.0.2/mlbcolors/data.json' assert { type: 'json' };
console.log(colors);

/* Generate BG Color Gradient */
function generateGradient(colors) {
  const gradient = colors.map((color, index) => {
    const position = (index / (colors.length - 1)) * 100;
    return `${color} ${position}%`;
  }).join(', ');
  
  return `linear-gradient(to right, ${gradient})`;
}

/* Away Team Data */
document.getElementById('away-abv').innerText = data.away_team.abbreviation;
document.getElementById('away-abv2').innerText = data.away_team.abbreviation;
document.getElementById('away-masc').innerText = data.away_team.last_name;
var i;
for(i=0;i<data.away_period_scores.length;i++){
  document.getElementById('away-' + [i+1]).innerText = data.away_period_scores[i];
}
if(data.away_team.abbreviation == 'LAA'){
  document.getElementById('away-abv').style.background = generateGradient(colors.ANA);
  document.querySelector('.boxscore__details__team--away').style.background = generateGradient(colors.ANA);
} else {
  document.getElementById('away-abv').style.background = generateGradient(colors[data.away_team.abbreviation]);
  document.querySelector('.boxscore__details__team--away').style.background = generateGradient(colors[data.away_team.abbreviation]);
}

document.getElementById('away-r').innerText = data.away_batter_totals.runs;
document.getElementById('away-h').innerText = data.away_batter_totals.hits;
document.getElementById('away-e').innerText = data.away_errors;

/* Home Team Data */
document.getElementById('home-abv').innerText = data.home_team.abbreviation;
document.getElementById('home-abv2').innerText = data.home_team.abbreviation;
document.getElementById('home-masc').innerText = data.home_team.last_name;
var i;
for(i=0;i<data.home_period_scores.length;i++){
  document.getElementById('home-' + [i+1]).innerText = data.home_period_scores[i];
}

if(data.home_team.abbreviation == 'LAA'){
  document.getElementById('home-abv').style.background = generateGradient(colors.ANA);
  document.querySelector('.boxscore__details__team--home').style.background = generateGradient(colors.ANA);
} else {
  document.getElementById('home-abv').style.background = generateGradient(colors[data.home_team.abbreviation]);
  document.querySelector('.boxscore__details__team--home').style.background = generateGradient(colors[data.home_team.abbreviation]);
}

document.getElementById('home-r').innerText = data.home_batter_totals.runs;
document.getElementById('home-h').innerText = data.home_batter_totals.hits;
document.getElementById('home-e').innerText = data.home_errors;
