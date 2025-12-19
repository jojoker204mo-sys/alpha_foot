import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Player routes
  player: router({
    getProfile: protectedProcedure.query(async ({ ctx }) => {
      const player = await db.getPlayerByUserId(ctx.user.id);
      return player;
    }),
    getPhysicalData: protectedProcedure.query(async ({ ctx }) => {
      const player = await db.getPlayerByUserId(ctx.user.id);
      if (!player) return [];
      return await db.getPlayerPhysicalData(player.id);
    }),
    getTechnicalData: protectedProcedure.query(async ({ ctx }) => {
      const player = await db.getPlayerByUserId(ctx.user.id);
      if (!player) return [];
      return await db.getPlayerTechnicalData(player.id);
    }),
    getCognitiveData: protectedProcedure.query(async ({ ctx }) => {
      const player = await db.getPlayerByUserId(ctx.user.id);
      if (!player) return [];
      return await db.getPlayerCognitiveData(player.id);
    }),
  }),

  // Coach routes
  coach: router({
    getProfile: protectedProcedure.query(async ({ ctx }) => {
      const coach = await db.getCoachByUserId(ctx.user.id);
      return coach;
    }),
    getPrograms: protectedProcedure.query(async ({ ctx }) => {
      const coach = await db.getCoachByUserId(ctx.user.id);
      if (!coach || !coach.academyId) return [];
      return await db.getTrainingProgramsByAcademy(coach.academyId);
    }),
  }),

  // Academy routes
  academy: router({
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        // TODO: implement get academy by id
        return null;
      }),
  }),

  // Notifications
  notification: router({
    getUnread: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserNotifications(ctx.user.id, 10);
    }),
  }),

  // Chat
  chat: router({
    getHistory: protectedProcedure.query(async ({ ctx }) => {
      return await db.getUserChatMessages(ctx.user.id, 50);
    }),
  }),
});

export type AppRouter = typeof appRouter;
