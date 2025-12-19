import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal, boolean, json, longtext } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extended with additional fields for player profiles and talent discovery.
 */
export const users = mysqlTable("users", {
  id: int("id").autoincrement().primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  profileImage: text("profileImage"),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  userType: mysqlEnum("userType", ["player", "coach", "academy_admin", "national_team", "system_admin"]).default("player").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Player Avatar/Digital Twin - stores player's visual representation and progression
 */
export const playerAvatars = mysqlTable("playerAvatars", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  beforePhotoUrl: text("beforePhotoUrl"),
  afterPhotoUrl: text("afterPhotoUrl"),
  avatarLevel: int("avatarLevel").default(1),
  totalXP: int("totalXP").default(0),
  progressionPercentage: decimal("progressionPercentage", { precision: 5, scale: 2 }).default("0"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type PlayerAvatar = typeof playerAvatars.$inferSelect;
export type InsertPlayerAvatar = typeof playerAvatars.$inferInsert;

/**
 * Talent Discovery System - tracks player's journey from youth to national team
 */
export const talentDiscovery = mysqlTable("talentDiscovery", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  discoveryDate: timestamp("discoveryDate").defaultNow(),
  currentLevel: mysqlEnum("currentLevel", ["youth", "academy", "club", "national_team", "elite"]).default("youth"),
  talentScore: decimal("talentScore", { precision: 5, scale: 2 }).default("0"),
  scoutNotes: longtext("scoutNotes"),
  isVerified: boolean("isVerified").default(false),
  verifiedBy: int("verifiedBy"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TalentDiscovery = typeof talentDiscovery.$inferSelect;
export type InsertTalentDiscovery = typeof talentDiscovery.$inferInsert;

/**
 * Comprehensive Training Programs with nutrition, training, and development
 */
export const comprehensivePrograms = mysqlTable("comprehensivePrograms", {
  id: int("id").autoincrement().primaryKey(),
  academyId: int("academyId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: longtext("description"),
  level: mysqlEnum("level", ["youth", "academy", "professional", "national"]).default("academy"),
  duration: int("duration"), // in weeks
  nutritionPlan: longtext("nutritionPlan"),
  trainingPlan: longtext("trainingPlan"),
  developmentGoals: longtext("developmentGoals"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type ComprehensiveProgram = typeof comprehensivePrograms.$inferSelect;
export type InsertComprehensiveProgram = typeof comprehensivePrograms.$inferInsert;

/**
 * Badges and Achievements - Egyptian football specific
 */
export const badges = mysqlTable("badges", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  description: text("description"),
  badgeIcon: text("badgeIcon"),
  category: mysqlEnum("category", ["skill", "achievement", "milestone", "tournament", "national"]).default("achievement"),
  requiredCriteria: json("requiredCriteria"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Badge = typeof badges.$inferSelect;
export type InsertBadge = typeof badges.$inferInsert;

/**
 * Player Badges - tracks earned badges
 */
export const playerBadges = mysqlTable("playerBadges", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  badgeId: int("badgeId").notNull(),
  earnedAt: timestamp("earnedAt").defaultNow(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PlayerBadge = typeof playerBadges.$inferSelect;
export type InsertPlayerBadge = typeof playerBadges.$inferInsert;

/**
 * Advanced Verification and Permissions
 */
export const permissions = mysqlTable("permissions", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull().unique(),
  description: text("description"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Permission = typeof permissions.$inferSelect;
export type InsertPermission = typeof permissions.$inferInsert;

/**
 * Role-based permissions
 */
export const rolePermissions = mysqlTable("rolePermissions", {
  id: int("id").autoincrement().primaryKey(),
  role: varchar("role", { length: 50 }).notNull(),
  permissionId: int("permissionId").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type RolePermission = typeof rolePermissions.$inferSelect;
export type InsertRolePermission = typeof rolePermissions.$inferInsert;

/**
 * Existing tables (keeping previous schema)
 */
export const academies = mysqlTable("academies", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 255 }).notNull(),
  location: varchar("location", { length: 255 }),
  foundedYear: int("foundedYear"),
  description: longtext("description"),
  logoUrl: text("logoUrl"),
  website: varchar("website", { length: 255 }),
  phone: varchar("phone", { length: 20 }),
  email: varchar("email", { length: 320 }),
  adminId: int("adminId"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Academy = typeof academies.$inferSelect;
export type InsertAcademy = typeof academies.$inferInsert;

export const players = mysqlTable("players", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  academyId: int("academyId"),
  position: varchar("position", { length: 50 }),
  jerseyNumber: int("jerseyNumber"),
  height: decimal("height", { precision: 5, scale: 2 }),
  weight: decimal("weight", { precision: 5, scale: 2 }),
  dateOfBirth: timestamp("dateOfBirth"),
  nationality: varchar("nationality", { length: 100 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Player = typeof players.$inferSelect;
export type InsertPlayer = typeof players.$inferInsert;

export const coaches = mysqlTable("coaches", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  academyId: int("academyId"),
  specialization: varchar("specialization", { length: 255 }),
  yearsOfExperience: int("yearsOfExperience"),
  certification: text("certification"),
  phone: varchar("phone", { length: 20 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Coach = typeof coaches.$inferSelect;
export type InsertCoach = typeof coaches.$inferInsert;

export const trainingPrograms = mysqlTable("trainingPrograms", {
  id: int("id").autoincrement().primaryKey(),
  academyId: int("academyId").notNull(),
  coachId: int("coachId").notNull(),
  name: varchar("name", { length: 255 }).notNull(),
  description: longtext("description"),
  startDate: timestamp("startDate"),
  endDate: timestamp("endDate"),
  maxParticipants: int("maxParticipants"),
  currentParticipants: int("currentParticipants").default(0),
  status: mysqlEnum("status", ["planning", "active", "completed", "cancelled"]).default("planning"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TrainingProgram = typeof trainingPrograms.$inferSelect;
export type InsertTrainingProgram = typeof trainingPrograms.$inferInsert;

export const trainingSessions = mysqlTable("trainingSessions", {
  id: int("id").autoincrement().primaryKey(),
  programId: int("programId").notNull(),
  coachId: int("coachId").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: longtext("description"),
  sessionDate: timestamp("sessionDate"),
  duration: int("duration"), // in minutes
  location: varchar("location", { length: 255 }),
  sessionType: mysqlEnum("sessionType", ["physical", "technical", "tactical", "mental", "recovery"]).default("physical"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type TrainingSession = typeof trainingSessions.$inferSelect;
export type InsertTrainingSession = typeof trainingSessions.$inferInsert;

export const sessionAttendance = mysqlTable("sessionAttendance", {
  id: int("id").autoincrement().primaryKey(),
  sessionId: int("sessionId").notNull(),
  playerId: int("playerId").notNull(),
  attended: boolean("attended").default(false),
  performanceRating: int("performanceRating"),
  notes: text("notes"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type SessionAttendance = typeof sessionAttendance.$inferSelect;
export type InsertSessionAttendance = typeof sessionAttendance.$inferInsert;

export const playerPhysicalData = mysqlTable("playerPhysicalData", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  recordDate: timestamp("recordDate").defaultNow(),
  vo2Max: decimal("vo2Max", { precision: 5, scale: 2 }),
  maxSpeed: decimal("maxSpeed", { precision: 5, scale: 2 }),
  agility: decimal("agility", { precision: 5, scale: 2 }),
  strength: int("strength"),
  endurance: int("endurance"),
  flexibility: int("flexibility"),
  bodyFatPercentage: decimal("bodyFatPercentage", { precision: 5, scale: 2 }),
  muscleMass: decimal("muscleMass", { precision: 5, scale: 2 }),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PlayerPhysicalData = typeof playerPhysicalData.$inferSelect;
export type InsertPlayerPhysicalData = typeof playerPhysicalData.$inferInsert;

export const playerTechnicalData = mysqlTable("playerTechnicalData", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  recordDate: timestamp("recordDate").defaultNow(),
  passingAccuracy: int("passingAccuracy"),
  dribbling: int("dribbling"),
  shooting: int("shooting"),
  heading: int("heading"),
  defense: int("defense"),
  ballControl: int("ballControl"),
  positioning: int("positioning"),
  decisionMaking: int("decisionMaking"),
  firstTouchQuality: int("firstTouchQuality"),
  setPlayExecution: int("setPlayExecution"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PlayerTechnicalData = typeof playerTechnicalData.$inferSelect;
export type InsertPlayerTechnicalData = typeof playerTechnicalData.$inferInsert;

export const playerCognitiveData = mysqlTable("playerCognitiveData", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  recordDate: timestamp("recordDate").defaultNow(),
  decisionSpeed: int("decisionSpeed"),
  spatialAwareness: int("spatialAwareness"),
  anticipation: int("anticipation"),
  concentration: int("concentration"),
  pressureResistance: int("pressureResistance"),
  adaptability: int("adaptability"),
  leadershipQuotient: int("leadershipQuotient"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PlayerCognitiveData = typeof playerCognitiveData.$inferSelect;
export type InsertPlayerCognitiveData = typeof playerCognitiveData.$inferInsert;

export const playerRatings = mysqlTable("playerRatings", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId").notNull(),
  ratedBy: int("ratedBy"),
  overallRating: decimal("overallRating", { precision: 3, scale: 1 }),
  potentialRating: decimal("potentialRating", { precision: 3, scale: 1 }),
  comments: longtext("comments"),
  ratingDate: timestamp("ratingDate").defaultNow(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type PlayerRating = typeof playerRatings.$inferSelect;
export type InsertPlayerRating = typeof playerRatings.$inferInsert;

export const videoAnalysis = mysqlTable("videoAnalysis", {
  id: int("id").autoincrement().primaryKey(),
  playerId: int("playerId"),
  videoUrl: text("videoUrl"),
  analysisType: mysqlEnum("analysisType", ["match", "training", "skill_specific"]).default("match"),
  keyMetrics: json("keyMetrics"),
  insights: longtext("insights"),
  recommendations: longtext("recommendations"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type VideoAnalysis = typeof videoAnalysis.$inferSelect;
export type InsertVideoAnalysis = typeof videoAnalysis.$inferInsert;

export const educationalContent = mysqlTable("educationalContent", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: longtext("description"),
  contentType: mysqlEnum("contentType", ["video", "article", "interactive", "quiz"]).default("video"),
  contentUrl: text("contentUrl"),
  category: varchar("category", { length: 100 }),
  difficulty: mysqlEnum("difficulty", ["beginner", "intermediate", "advanced"]).default("beginner"),
  duration: int("duration"),
  createdBy: int("createdBy"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type EducationalContent = typeof educationalContent.$inferSelect;
export type InsertEducationalContent = typeof educationalContent.$inferInsert;

export const notifications = mysqlTable("notifications", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  message: longtext("message"),
  type: mysqlEnum("type", ["session", "achievement", "alert", "message", "system"]).default("system"),
  isRead: boolean("isRead").default(false),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type Notification = typeof notifications.$inferSelect;
export type InsertNotification = typeof notifications.$inferInsert;

export const chatMessages = mysqlTable("chatMessages", {
  id: int("id").autoincrement().primaryKey(),
  userId: int("userId").notNull(),
  message: longtext("message"),
  messageType: mysqlEnum("messageType", ["user", "assistant"]).default("user"),
  context: json("context"),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
});

export type ChatMessage = typeof chatMessages.$inferSelect;
export type InsertChatMessage = typeof chatMessages.$inferInsert;
