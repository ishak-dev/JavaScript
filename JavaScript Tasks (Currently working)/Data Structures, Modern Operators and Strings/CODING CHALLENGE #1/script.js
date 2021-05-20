'use strict';

const game = {
  team1: 'Bayerm Munich',
  team2: 'Borussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'martines',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gharby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakini',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/* const player1 = [...game.players[0]];
const player2 = [...game.players[1]];
const gk = [player1[0]];
const fieldPlayers = [...player1];
console.log(fieldPlayers);
console.log(gk);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const players1Final = [...player1, 'Thiago', 'Countinho', 'Perisic'];
console.log(players1Final);

const team1 = game.odds.team1;
const draw = game.odds.x;
const team2 = game.odds.team2;

const printGoals = function (goals) {
  for (let i = 0; i < 4; i++) {}
};

console.log(...player1);
printGoals(...player1); */

//1.
const [players1, players2] = game.players;
console.log(players1, players2);

//2.
const [gkk, ...fieldPlayerss] = players1;
console.log(gkk, fieldPlayerss);

//3.
const allPlayerss = [...players1, ...players2];
console.log(allPlayerss);

//4.
const players1Finall = [...players1, 'Thiago', 'Countinho', 'Perisic'];

//5.
const {
  odds: { Team1, x: Draw, Team2 },
} = game;
console.log(Team1, Draw, Team2);

//6.
const printGoalss = function (...playerss) {
  console.log(`${playerss.length} goals were scored`);
};

printGoalss('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoalss('Davies', 'Muller');
printGoalss(...game.scored);

//7.
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
