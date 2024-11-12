--SELECT hospital_db
-- question 1.1
INSERT INTO patients (first_name, last_name, date_of_birth, gender, language)
VALUES ('John', 'Doe', '1980-11-15', 'Male', 'English');

-- question 2.1
UPDATE patients
SET language = 'Spanish'
WHERE patient_id = 1;  -- Replace with the correct patient_id

-- question 3.1 Drop the existing foreign key:
ALTER TABLE admissions
DROP FOREIGN KEY p_id;
--Add a new foreign key with ON DELETE CASCADE:
ALTER TABLE admissions
ADD CONSTRAINT p_id FOREIGN KEY (patient_id) REFERENCES patients(patient_id) ON DELETE CASCADE;
-- then delete a patient from the patients table, all associated records in the admissions table will be deleted
DELETE FROM patients
WHERE patient_id = 10;


-- question 4.1
SELECT first_name, last_name, IFNULL(email_address, 'N/A') AS email
FROM providers;

-- question 4.2 
SELECT first_name, last_name, 
       COALESCE(phone_number, 'Missing details') AS phone_number
       COALESCE(email_address, 'Missing details') AS email
FROM providers;

-- bonus question 
SELECT first_name, last_name, phone_number, email_address
FROM providers
WHERE provider_specialty = 'Pediatrics'
  AND (phone_number IS NULL OR email_address IS NULL);

