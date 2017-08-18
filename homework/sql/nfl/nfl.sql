SELECT * FROM teams;
SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';
SELECT head_coach FROM teams WHERE conference = 'NFC' AND division = 'South';
SELECT id FROM players ORDER BY id DESC;
SELECT name, head_coach FROM teams WHERE division = 'North' OR division = 'East' AND conference = 'NFC' OR conference = 'AFC';

SELECT * FROM players AVG (salary);
SELECT name, position FROM players WHERE salary >= 10000000;

SELECT * FROM nobel
