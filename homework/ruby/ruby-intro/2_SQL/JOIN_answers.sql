1.  SELECT matchid, player FROM goal 
     WHERE teamid = 'GER';
2.  SELECT id,stadium,team1,team2
  FROM game WHERE id = 1012;
3.  SELECT player, teamid, stadium, mdate
  FROM game JOIN goal ON (id=matchid)
  WHERE teamid = 'GER';
4. SELECT team1, team2, player
FROM game JOIN goal ON game.id = goal.matchid
WHERE player LIKE 'Mario%';
5. SELECT player, teamid, coach, gtime
  FROM goal JOIN eteam ON teamid = id
 WHERE gtime<=10;
6.  SELECT game.mdate, eteam.teamname
 FROM game JOIN eteam ON game.team1 = eteam.id
 WHERE eteam.coach = 'Fernando Santos';
7.  SELECT goal.player
 FROM goal JOIN game ON game.id = goal.matchid
 WHERE UPPER(game.stadium) = UPPER('National Stadium, Warsaw');
8.  SELECT DISTINCT player
FROM game JOIN goal ON goal.matchid = game.id
WHERE (team1 = 'GER' OR team2 = 'GER') AND teamid <> 'GER';
9.  SELECT teamname, COUNT(gtime)
  FROM eteam JOIN goal ON id=teamid
 GROUP BY teamname;
10. SELECT DISTINCT game.stadium, COUNT(goal.gtime)
 FROM game JOIN goal ON game.id = goal.matchid
 GROUP BY stadium
11. SELECT game.id, game.mdate, COUNT(*)
FROM game JOIN goal ON game.id = goal.matchid
WHERE (game.team1 = 'POL' OR game.team2 = 'POL')
GROUP BY game.id, game.mdate ORDER BY game.id;
12. SELECT game.id, game.mdate, COUNT(*)
FROM game JOIN goal ON goal.matchid = game.id
WHERE goal.teamid = 'GER'
GROUP BY game.id, game.mdate; 
13. SELECT mdate, 
	   team1, 
	   SUM(CASE WHEN teamid = team1 THEN 1 ELSE 0 END) AS score1, 
	   team2, 
	   SUM(CASE WHEN teamid = team2 THEN 1 ELSE 0 END) AS score2 FROM
	game LEFT JOIN goal ON (id = matchid)
	GROUP BY id, mdate, team1, team2
	ORDER BY mdate, matchid, team1, team2