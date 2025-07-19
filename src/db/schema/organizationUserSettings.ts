import { pgTable as table } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'

import { OrganizationTable } from './organization'
import { relations } from 'drizzle-orm'
import { UserTable } from './users'

export const OrganizationUserSettingsTable = table(
  'organization_user_settings',
  {
    userId: t
      .varchar()
      .notNull()
      .references(() => UserTable.id),
    organizationId: t
      .varchar()
      .notNull()
      .references(() => OrganizationTable.id),
    newApplicationEmailNotifications: t.boolean().notNull().default(false),
    minimumRating: t.integer(),
    createdAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
    updatedAt: t
      .timestamp({ withTimezone: true })
      .notNull()
      .defaultNow()
      .$onUpdate(() => new Date())
  },
  table => [t.primaryKey({ columns: [table.userId, table.organizationId] })]
)

export const organizationUserSettingsRelations = relations(
  OrganizationUserSettingsTable,
  ({ one }) => ({
    user: one(UserTable, {
      fields: [OrganizationUserSettingsTable.userId],
      references: [UserTable.id]
    }),
    organization: one(OrganizationTable, {
      fields: [OrganizationUserSettingsTable.userId],
      references: [OrganizationTable.id]
    })
  })
)
