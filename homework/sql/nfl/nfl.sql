SELECT * FROM teams;
SELECT stadium, head_coach FROM teams WHERE conference = 'NFC';
SELECT head_coach FROM teams WHERE conference = 'NFC' AND division = 'South';
SELECT id FROM players ORDER BY id DESC;