import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

/**
 * Core user table backing the Manus OAuth flow.
 * Passwords are intentionally not stored: identity is handled by OAuth.
 */
export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  openId: text("openId").notNull().unique(),
  name: text("name"),
  email: text("email"),
  loginMethod: text("loginMethod"),
  role: text("role", { enum: ["user", "admin"] }).notNull().default("user"),
  createdAt: integer("createdAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  updatedAt: integer("updatedAt", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
  lastSignedIn: integer("lastSignedIn", { mode: "timestamp_ms" }).notNull().$defaultFn(() => new Date()),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;
