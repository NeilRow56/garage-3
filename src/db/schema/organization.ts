import { pgTable as table } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'

import { relations } from 'drizzle-orm'

import { OrganizationUserSettingsTable } from './organizationUserSettings'

export const OrganizationTable = table('organizations', {
  id: t.varchar().primaryKey(),
  name: t.varchar().notNull(),
  imageUrl: t.varchar(),
  createdAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: t
    .timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
})

export const organizationRelations = relations(
  OrganizationTable,
  ({ many }) => ({
    organizationUserSettings: many(OrganizationUserSettingsTable)
  })
)
