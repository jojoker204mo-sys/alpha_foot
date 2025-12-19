CREATE TABLE `academies` (
	`id` int AUTO_INCREMENT NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`location` varchar(255),
	`city` varchar(100),
	`country` varchar(100),
	`phone` varchar(20),
	`email` varchar(320),
	`website` varchar(255),
	`logo` text,
	`foundedYear` int,
	`status` enum('active','inactive') DEFAULT 'active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `academies_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `chatMessages` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`messageType` enum('user_message','ai_response'),
	`content` text,
	`context` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `chatMessages_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `coaches` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`academyId` int,
	`specialization` varchar(100),
	`certifications` text,
	`yearsOfExperience` int,
	`coachStatus` enum('active','inactive') DEFAULT 'active',
	`joinDate` timestamp DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `coaches_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `educationalContent` (
	`id` int AUTO_INCREMENT NOT NULL,
	`creatorId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`contentType` enum('video','article','interactive_lesson'),
	`contentUrl` text,
	`thumbnail` text,
	`category` varchar(100),
	`targetAudience` enum('player','coach','all'),
	`duration` int,
	`difficulty` enum('beginner','intermediate','advanced'),
	`views` int DEFAULT 0,
	`status` enum('published','draft','archived') DEFAULT 'draft',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `educationalContent_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `notifications` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`title` varchar(255) NOT NULL,
	`message` text,
	`notificationType` enum('session','performance','achievement','system','message'),
	`relatedEntityId` int,
	`isRead` boolean DEFAULT false,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `notifications_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerCognitiveData` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`assessmentDate` timestamp DEFAULT (now()),
	`decisionMakingSpeed` decimal(5,2),
	`spatialAwareness` decimal(5,2),
	`anticipation` decimal(5,2),
	`concentration` decimal(5,2),
	`reactionTime` decimal(5,2),
	`pressureResistance` decimal(5,2),
	`teamCoordination` decimal(5,2),
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `playerCognitiveData_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerPhysicalData` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`measurementDate` timestamp DEFAULT (now()),
	`height` decimal(5,2),
	`weight` decimal(5,2),
	`bodyFatPercentage` decimal(5,2),
	`muscleMass` decimal(5,2),
	`vo2Max` decimal(5,2),
	`sprintSpeed` decimal(5,2),
	`agility` decimal(5,2),
	`flexibility` decimal(5,2),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `playerPhysicalData_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerRatings` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`ratedBy` int NOT NULL,
	`overallRating` decimal(3,1),
	`technicalSkill` decimal(3,1),
	`physicalAbility` decimal(3,1),
	`cognitiveAbility` decimal(3,1),
	`teamwork` decimal(3,1),
	`comments` text,
	`ratingDate` timestamp DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `playerRatings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `playerTechnicalData` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`matchDate` timestamp,
	`passes` int,
	`passAccuracy` decimal(5,2),
	`shots` int,
	`shotsOnTarget` int,
	`goals` int,
	`assists` int,
	`tackles` int,
	`interceptions` int,
	`fouls` int,
	`ballTouches` int,
	`dribbles` int,
	`dribbleSuccess` decimal(5,2),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `playerTechnicalData_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `players` (
	`id` int AUTO_INCREMENT NOT NULL,
	`userId` int NOT NULL,
	`academyId` int,
	`position` varchar(50),
	`height` decimal(5,2),
	`weight` decimal(5,2),
	`dateOfBirth` timestamp,
	`nationality` varchar(100),
	`jerseyNumber` int,
	`dominantFoot` enum('left','right','both'),
	`playerStatus` enum('active','injured','inactive') DEFAULT 'active',
	`joinDate` timestamp DEFAULT (now()),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `players_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `sessionAttendance` (
	`id` int AUTO_INCREMENT NOT NULL,
	`sessionId` int NOT NULL,
	`playerId` int NOT NULL,
	`attendanceStatus` enum('present','absent','excused'),
	`performanceRating` int,
	`notes` text,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `sessionAttendance_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `trainingPrograms` (
	`id` int AUTO_INCREMENT NOT NULL,
	`academyId` int NOT NULL,
	`coachId` int NOT NULL,
	`name` varchar(255) NOT NULL,
	`description` text,
	`programType` enum('traditional','neuro','hybrid') DEFAULT 'hybrid',
	`startDate` timestamp,
	`endDate` timestamp,
	`ageGroup` varchar(50),
	`maxPlayers` int,
	`status` enum('active','inactive','completed') DEFAULT 'active',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `trainingPrograms_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `trainingSessions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`programId` int NOT NULL,
	`coachId` int NOT NULL,
	`sessionDate` timestamp,
	`startTime` varchar(10),
	`endTime` varchar(10),
	`sessionType` enum('traditional','neuro','hybrid'),
	`title` varchar(255),
	`description` text,
	`location` varchar(255),
	`status` enum('scheduled','completed','cancelled') DEFAULT 'scheduled',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `trainingSessions_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `videoAnalysis` (
	`id` int AUTO_INCREMENT NOT NULL,
	`playerId` int NOT NULL,
	`videoUrl` text,
	`analysisDate` timestamp DEFAULT (now()),
	`analysisType` enum('match','training'),
	`keyMetrics` text,
	`tacticalPatterns` text,
	`recommendations` text,
	`aiConfidence` decimal(3,2),
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `videoAnalysis_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
ALTER TABLE `users` ADD `phone` varchar(20);--> statement-breakpoint
ALTER TABLE `users` ADD `profileImage` text;--> statement-breakpoint
ALTER TABLE `users` ADD `userType` enum('player','coach','admin') DEFAULT 'player' NOT NULL;--> statement-breakpoint
ALTER TABLE `chatMessages` ADD CONSTRAINT `chatMessages_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `coaches` ADD CONSTRAINT `coaches_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `coaches` ADD CONSTRAINT `coaches_academyId_academies_id_fk` FOREIGN KEY (`academyId`) REFERENCES `academies`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `educationalContent` ADD CONSTRAINT `educationalContent_creatorId_users_id_fk` FOREIGN KEY (`creatorId`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `notifications` ADD CONSTRAINT `notifications_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `playerCognitiveData` ADD CONSTRAINT `playerCognitiveData_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `playerPhysicalData` ADD CONSTRAINT `playerPhysicalData_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `playerRatings` ADD CONSTRAINT `playerRatings_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `playerRatings` ADD CONSTRAINT `playerRatings_ratedBy_users_id_fk` FOREIGN KEY (`ratedBy`) REFERENCES `users`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `playerTechnicalData` ADD CONSTRAINT `playerTechnicalData_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_userId_users_id_fk` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `players` ADD CONSTRAINT `players_academyId_academies_id_fk` FOREIGN KEY (`academyId`) REFERENCES `academies`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `sessionAttendance` ADD CONSTRAINT `sessionAttendance_sessionId_trainingSessions_id_fk` FOREIGN KEY (`sessionId`) REFERENCES `trainingSessions`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `sessionAttendance` ADD CONSTRAINT `sessionAttendance_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `trainingPrograms` ADD CONSTRAINT `trainingPrograms_academyId_academies_id_fk` FOREIGN KEY (`academyId`) REFERENCES `academies`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `trainingPrograms` ADD CONSTRAINT `trainingPrograms_coachId_coaches_id_fk` FOREIGN KEY (`coachId`) REFERENCES `coaches`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `trainingSessions` ADD CONSTRAINT `trainingSessions_programId_trainingPrograms_id_fk` FOREIGN KEY (`programId`) REFERENCES `trainingPrograms`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `trainingSessions` ADD CONSTRAINT `trainingSessions_coachId_coaches_id_fk` FOREIGN KEY (`coachId`) REFERENCES `coaches`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `videoAnalysis` ADD CONSTRAINT `videoAnalysis_playerId_players_id_fk` FOREIGN KEY (`playerId`) REFERENCES `players`(`id`) ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX `chatUserIdIdx` ON `chatMessages` (`userId`);--> statement-breakpoint
CREATE INDEX `coachUserIdIdx` ON `coaches` (`userId`);--> statement-breakpoint
CREATE INDEX `coachAcademyIdIdx` ON `coaches` (`academyId`);--> statement-breakpoint
CREATE INDEX `contentCreatorIdIdx` ON `educationalContent` (`creatorId`);--> statement-breakpoint
CREATE INDEX `notificationUserIdIdx` ON `notifications` (`userId`);--> statement-breakpoint
CREATE INDEX `cognitiveDataPlayerIdIdx` ON `playerCognitiveData` (`playerId`);--> statement-breakpoint
CREATE INDEX `physicalDataPlayerIdIdx` ON `playerPhysicalData` (`playerId`);--> statement-breakpoint
CREATE INDEX `ratingPlayerIdIdx` ON `playerRatings` (`playerId`);--> statement-breakpoint
CREATE INDEX `ratingRatedByIdx` ON `playerRatings` (`ratedBy`);--> statement-breakpoint
CREATE INDEX `technicalDataPlayerIdIdx` ON `playerTechnicalData` (`playerId`);--> statement-breakpoint
CREATE INDEX `playerUserIdIdx` ON `players` (`userId`);--> statement-breakpoint
CREATE INDEX `playerAcademyIdIdx` ON `players` (`academyId`);--> statement-breakpoint
CREATE INDEX `attendanceSessionIdIdx` ON `sessionAttendance` (`sessionId`);--> statement-breakpoint
CREATE INDEX `attendancePlayerIdIdx` ON `sessionAttendance` (`playerId`);--> statement-breakpoint
CREATE INDEX `programAcademyIdIdx` ON `trainingPrograms` (`academyId`);--> statement-breakpoint
CREATE INDEX `programCoachIdIdx` ON `trainingPrograms` (`coachId`);--> statement-breakpoint
CREATE INDEX `sessionProgramIdIdx` ON `trainingSessions` (`programId`);--> statement-breakpoint
CREATE INDEX `sessionCoachIdIdx` ON `trainingSessions` (`coachId`);--> statement-breakpoint
CREATE INDEX `videoAnalysisPlayerIdIdx` ON `videoAnalysis` (`playerId`);--> statement-breakpoint
CREATE INDEX `userTypeIdx` ON `users` (`userType`);