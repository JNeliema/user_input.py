-- selecting database
USE hospital_db

-- question 1.1
SELECT COUNT(*) AS total_admissions
FROM admissions;

-- question 1.2
SELECT AVG(DATEDIFF(discharge_date, admission_date)) AS average_length_of_stay
FROM admissions;

-- question 2.1
SELECT primary_diagnosis, COUNT(*) AS total_admissions
FROM admissions
GROUP BY primary_diagnosis;

-- question 2.2
SELECT service, AVG(DATEDIFF(discharge_date, admission_date)) AS avg_length_of_stay
FROM admissions
GROUP BY service;

-- question 3.1
SELECT service, COUNT(*) AS total_admissions
FROM admissions
GROUP BY service
HAVING COUNT(*) > 5;

-- question 3.2
SELECT AVG(DATEDIFF(discharge_date, admission_date)) AS avg_length_of_stay
FROM admissions
WHERE primary_diagnosis = 'Stroke';

-- question 4.1
SELECT acuity, COUNT(*) AS total_visits
FROM ed_visits
GROUP BY acuity;

-- question 4.2
SELECT primary_diagnosis, service, COUNT(*) AS total_admissions
FROM admissions
GROUP BY primary_diagnosis, service;

-- question 5.1
SELECT DATE_FORMAT(admission_date, '%Y-%m') AS month, COUNT(*) AS total_admissions
FROM admissions
GROUP BY month;

-- question 5.2
SELECT primary_diagnosis, MAX(DATEDIFF(discharge_date, admission_date)) AS max_length_of_stay
FROM admissions
GROUP BY primary_diagnosis;

-- bonus question 1.1
SELECT service, 
       COUNT(*) AS total_admissions, 
       AVG(DATEDIFF(discharge_date, admission_date)) AS avg_length_of_stay
FROM admissions
GROUP BY service
ORDER BY avg_length_of_stay DESC;

 