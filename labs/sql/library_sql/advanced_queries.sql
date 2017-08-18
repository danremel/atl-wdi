-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.name = 'George R.R. Martin';
-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.name = 'Milan Kundera';
-- Find all books written by an author from China or the UK.
SELECT * FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'China' OR authors.nationality = 'United Kingdom';
-- Find out how many books Albert Camus wrote.
SELECT authors.name, COUNT(Books.author_id) AS total_books FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.name = 'Albert Camus' GROUP BY authors.id;
-- Find out how many books were written by US authors.
SELECT authors.nationality, COUNT(Books.id) AS american_authors FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'United States of America' GROUP BY authors.nationality;
-- Find all books written after 1930 by authors from Argentina.
SELECT authors.nationality, books.title, books.publication_date FROM books INNER JOIN authors ON books.author_id = authors.id WHERE authors.nationality = 'Argentina' AND publication_date > 1930 GROUP BY authors.nationality, books.title, books.publication_date;
-- Find all books written before 1980 by authors not from the US.
SELECT authors.name, authors.nationality, books.title FROM books INNER JOIN authors ON books.author_id = authors.id WHERE NOT authors.nationality = 'United States of America' GROUP BY authors.name, authors.nationality, books.title;
-- Find all authors whose names start with 'J'.
SELECT authors.name FROM authors WHERE name ILIKE 'J%';
-- Find all books whose titles contain 'the'.
SELECT books.title FROM books WHERE title LIKE '%the%';
-- Find all authors who have written books with that start with the letter 'N'.
SELECT authors.name FROM authors INNER JOIN books ON authors.id = books.author_id WHERE books.title ILIKE 'N%';