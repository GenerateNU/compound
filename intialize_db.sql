CREATE TABLE IF NOT EXISTS "User" (
  id SERIAL PRIMARY KEY,
  firstName VARCHAR NOT NULL,
  lastName VARCHAR NOT NULL,
  dob TIMESTAMP NOT NULL,
  email VARCHAR UNIQUE,
  phoneNumber VARCHAR UNIQUE,
  emailVerified TIMESTAMP,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  registrationDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  isAdmin BOOLEAN DEFAULT FALSE,
  gender VARCHAR,
  age INT,
  ethnicity VARCHAR,
  education VARCHAR,
  maritalStatus VARCHAR,
  languages VARCHAR,
  employmentStatus VARCHAR,
  householdIncome FLOAT,
  livingStatus VARCHAR
);

CREATE TABLE IF NOT EXISTS "Account" (
  id VARCHAR PRIMARY KEY,
  userId INT NOT NULL,
  providerType VARCHAR NOT NULL,
  providerId VARCHAR NOT NULL,
  providerAccountId VARCHAR NOT NULL,
  refreshToken VARCHAR,
  accessToken VARCHAR,
  accessTokenExpires TIMESTAMP,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES "User"(id),
  UNIQUE(providerId, providerAccountId)
);

-- Session table
CREATE TABLE IF NOT EXISTS "Session" (
  id VARCHAR PRIMARY KEY,
  userId INT NOT NULL,
  expires TIMESTAMP NOT NULL,
  sessionToken VARCHAR UNIQUE,
  accessToken VARCHAR UNIQUE,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES "User"(id)
);

-- Badge table
CREATE TABLE IF NOT EXISTS "Badge" (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  criteria VARCHAR NOT NULL,
  imageUrl VARCHAR NOT NULL
);

-- UserBadge linking table
CREATE TABLE IF NOT EXISTS "UserBadge" (
  userId INT NOT NULL,
  badgeId INT NOT NULL,
  awardedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY(userId, badgeId),
  FOREIGN KEY (userId) REFERENCES "User"(id),
  FOREIGN KEY (badgeId) REFERENCES "Badge"(id)
);

-- IntakeTest table
CREATE TABLE IF NOT EXISTS "IntakeTest" (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  topic VARCHAR NOT NULL,
  score INT CHECK (score >= 1 AND score <= 10),
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES "User"(id)
);

-- VerificationRequest table
CREATE TABLE IF NOT EXISTS "VerificationRequest" (
  id VARCHAR PRIMARY KEY,
  identifier VARCHAR NOT NULL,
  token VARCHAR UNIQUE NOT NULL,
  expires TIMESTAMP NOT NULL,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Curriculum table
CREATE TABLE IF NOT EXISTS "Curriculum" (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL
);

-- Module table
CREATE TABLE IF NOT EXISTS "Module" (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  curriculumId INT NOT NULL,
  FOREIGN KEY (curriculumId) REFERENCES "Curriculum"(id)
);

-- SubModule table
CREATE TABLE IF NOT EXISTS "SubModule" (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  moduleId INT NOT NULL,
  FOREIGN KEY (moduleId) REFERENCES "Module"(id)
);

-- Lesson table
CREATE TABLE IF NOT EXISTS "Lesson" (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  content VARCHAR NOT NULL,
  subModuleId INT NOT NULL,
  FOREIGN KEY (subModuleId) REFERENCES "SubModule"(id)
);

-- Progress table
CREATE TABLE IF NOT EXISTS "Progress" (
  id SERIAL PRIMARY KEY,
  lessonId INT NOT NULL,
  userId INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (lessonId) REFERENCES "Lesson"(id),
  FOREIGN KEY (userId) REFERENCES "User"(id)
);

-- Advisor table
CREATE TABLE IF NOT EXISTS "Advisor" (
  id SERIAL PRIMARY KEY,
  name VARCHAR NOT NULL,
  email VARCHAR UNIQUE NOT NULL,
  specialization VARCHAR NOT NULL,
  rate FLOAT NOT NULL,
  location VARCHAR NOT NULL
);

-- Consultation table
CREATE TABLE IF NOT EXISTS "Consultation" (
  id SERIAL PRIMARY KEY,
  userId INT NOT NULL,
  advisorId INT NOT NULL,
  date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (userId) REFERENCES "User"(id),
  FOREIGN KEY (advisorId) REFERENCES "Advisor"(id)
);

-- ModuleQuiz table
CREATE TABLE IF NOT EXISTS "ModuleQuiz" (
  id SERIAL PRIMARY KEY,
  moduleId INT NOT NULL,
  questions TEXT[],
  passed BOOLEAN,
  score INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (moduleId) REFERENCES "Module"(id)
);

-- SubModuleQuiz table
CREATE TABLE IF NOT EXISTS "SubModuleQuiz" (
  id SERIAL PRIMARY KEY,
  subModuleId INT NOT NULL,
  questions TEXT[],
  passed BOOLEAN,
  score INT,
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (subModuleId) REFERENCES "SubModule"(id)
);
