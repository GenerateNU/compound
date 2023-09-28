INSERT INTO "Curriculum" ("id", "title")
VALUES (3, 'Curriculum Title');
INSERT INTO "Module" ("id", "title", "curriculumId")
VALUES (3, 'Module Title', 1);
INSERT INTO "SubModule" ("id", "title", "moduleId")
VALUES (1, 'SubModule Title', 7);
INSERT INTO "SubModuleQuiz" ("id", "subModuleId", "questions", "passed", "score","updatedAt")
VALUES (1, 1, ARRAY['Question 1?', 'Question 2?'], FALSE, 100, NOW())