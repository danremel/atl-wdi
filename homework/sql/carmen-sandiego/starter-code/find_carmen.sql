Clue 1 -
SELECT * FROM country 
WHERE region = 'Southern Europe' 
ORDER BY population ASC;
-- Holy See (Vatican City State)

Clue 2 - 
SELECT * FROM countryLanguage 
WHERE countrycode = 'VAT';
-- Italian

Clue 3 -
SELECT * FROM countryLanguage 
WHERE language = 'Italian';
SELECT * FROM country 
WHERE code = 'SMR';
-- San Marino

Clue 4 -
SELECT * FROM city 
WHERE countrycode = 'SMR';
-- Serravalle

Clue 5 -
SELECT * FROM city 
WHERE name LIKE '%Serra%';
-- Serra

Clue 6 - 
SELECT capital FROM country 
WHERE code = 'BRA';
SELECT * FROM city 
WHERE id = 211;
-- Brasilia

Clue 7/8 - 
SELECT * FROM city 
WHERE population = 91084;

-- She's in Santa Monica!