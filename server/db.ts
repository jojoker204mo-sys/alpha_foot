import { eq, and } from "drizzle-orm";
import { drizzle } from "drizzle-orm/mysql2";
import { 
  InsertUser, users, 
  players, coaches, academies,
  trainingPrograms, trainingSessions,
  playerPhysicalData, playerTechnicalData, playerCognitiveData,
  notifications, videoAnalysis, chatMessages
} from "../drizzle/schema";
import { ENV } from './_core/env';

let _db: ReturnType<typeof drizzle> | null = null;

// Lazily create the drizzle instance so local tooling can run without a DB.
export async function getDb() {
  if (!_db && process.env.DATABASE_URL) {
    try {
      _db = drizzle(process.env.DATABASE_URL);
    } catch (error) {
      console.warn("[Database] Failed to connect:", error);
      _db = null;
    }
  }
  return _db;
}

/**
 * Upsert user - creates or updates a user based on openId
 */
export async function upsertUser(user: InsertUser): Promise<void> {
  if (!user.openId) {
    throw new Error("User openId is required for upsert");
  }

  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot upsert user: database not available");
    return;
  }

  try {
    const values: InsertUser = {
      openId: user.openId,
    };
    const updateSet: Record<string, unknown> = {};

    const textFields = ["name", "email", "loginMethod", "phone", "profileImage"] as const;
    type TextField = (typeof textFields)[number];

    const assignNullable = (field: TextField) => {
      const value = user[field];
      if (value === undefined) return;
      const normalized = value ?? null;
      values[field] = normalized;
      updateSet[field] = normalized;
    };

    textFields.forEach(assignNullable);

    if (user.lastSignedIn !== undefined) {
      values.lastSignedIn = user.lastSignedIn;
      updateSet.lastSignedIn = user.lastSignedIn;
    }
    if (user.role !== undefined) {
      values.role = user.role;
      updateSet.role = user.role;
    } else if (user.openId === ENV.ownerOpenId) {
      values.role = 'admin';
      updateSet.role = 'admin';
    }

    if (user.userType !== undefined) {
      values.userType = user.userType;
      updateSet.userType = user.userType;
    }

    if (!values.lastSignedIn) {
      values.lastSignedIn = new Date();
    }

    if (Object.keys(updateSet).length === 0) {
      updateSet.lastSignedIn = new Date();
    }

    await db.insert(users).values(values).onDuplicateKeyUpdate({
      set: updateSet,
    });
  } catch (error) {
    console.error("[Database] Failed to upsert user:", error);
    throw error;
  }
}

/**
 * Get user by openId
 */
export async function getUserByOpenId(openId: string) {
  const db = await getDb();
  if (!db) {
    console.warn("[Database] Cannot get user: database not available");
    return undefined;
  }

  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Get user by ID
 */
export async function getUserById(id: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(users).where(eq(users.id, id)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Get player by user ID
 */
export async function getPlayerByUserId(userId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(players).where(eq(players.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Get coach by user ID
 */
export async function getCoachByUserId(userId: number) {
  const db = await getDb();
  if (!db) return undefined;

  const result = await db.select().from(coaches).where(eq(coaches.userId, userId)).limit(1);
  return result.length > 0 ? result[0] : undefined;
}

/**
 * Get all players in an academy
 */
export async function getPlayersByAcademy(academyId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(players).where(eq(players.academyId, academyId));
}

/**
 * Get all coaches in an academy
 */
export async function getCoachesByAcademy(academyId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(coaches).where(eq(coaches.academyId, academyId));
}

/**
 * Get training programs by academy
 */
export async function getTrainingProgramsByAcademy(academyId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(trainingPrograms).where(eq(trainingPrograms.academyId, academyId));
}

/**
 * Get training sessions by program
 */
export async function getTrainingSessionsByProgram(programId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(trainingSessions).where(eq(trainingSessions.programId, programId));
}

/**
 * Get player's physical data
 */
export async function getPlayerPhysicalData(playerId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(playerPhysicalData).where(eq(playerPhysicalData.playerId, playerId));
}

/**
 * Get player's technical data
 */
export async function getPlayerTechnicalData(playerId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(playerTechnicalData).where(eq(playerTechnicalData.playerId, playerId));
}

/**
 * Get player's cognitive data
 */
export async function getPlayerCognitiveData(playerId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(playerCognitiveData).where(eq(playerCognitiveData.playerId, playerId));
}

/**
 * Get user notifications
 */
export async function getUserNotifications(userId: number, limit = 20) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(notifications)
    .where(eq(notifications.userId, userId))
    .limit(limit);
}

/**
 * Get video analysis for a player
 */
export async function getPlayerVideoAnalysis(playerId: number) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(videoAnalysis).where(eq(videoAnalysis.playerId, playerId));
}

/**
 * Get chat messages for a user
 */
export async function getUserChatMessages(userId: number, limit = 50) {
  const db = await getDb();
  if (!db) return [];

  return await db.select().from(chatMessages)
    .where(eq(chatMessages.userId, userId))
    .limit(limit);
}

// TODO: add more feature queries here as your schema grows
