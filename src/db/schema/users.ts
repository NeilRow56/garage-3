import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core'

import { relations } from 'drizzle-orm'

import { OrganizationUserSettingsTable } from './organizationUserSettings'

export const UserTable = pgTable('users', {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar().notNull(),
  email: varchar().notNull().unique(),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
})

export const userRelations = relations(UserTable, ({ many }) => ({
  organizationUserSettings: many(OrganizationUserSettingsTable)
}))
