import { mysqlTable, serial, int, text, varchar, timestamp, boolean } from 'drizzle-orm/mysql-core';

// Table pour les actions de l'association (Maraudes, Ateliers, etc.)
export const actions = mysqlTable('actions', {
	id: serial('id').primaryKey(),
	title: varchar('title', { length: 255 }).notNull(),
	description: text('description').notNull(),
	icon: varchar('icon', { length: 50 }).notNull().default('heart'),
	infoBadge: varchar('info_badge', { length: 255 }),
	order: int('order').notNull().default(0),
	createdAt: timestamp('created_at').defaultNow()
});

// Table pour les messages reçus via les formulaires de contact
export const messages = mysqlTable('messages', {
	id: serial('id').primaryKey(),
	name: varchar('name', { length: 255 }).notNull(),
	email: varchar('email', { length: 255 }).notNull(),
	content: text('content').notNull(),
	isRead: boolean('is_read').notNull().default(false),
	createdAt: timestamp('created_at').defaultNow()
});

// Table existante (exemple)
export const task = mysqlTable('task', {
	id: serial('id').primaryKey(),
	title: text('title').notNull(),
	priority: int('priority').notNull().default(1)
});

export * from './auth.schema';
