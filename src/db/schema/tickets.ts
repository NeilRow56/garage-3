import { pgTable as table } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { CustomersTable } from './customers'

export const TicketsTable = table('tickets', {
  id: t.uuid().primaryKey().defaultRandom(),
  customerId: t
    .uuid()
    .defaultRandom()
    .references(() => CustomersTable.id),
  title: t.varchar('title').notNull(),
  description: t.text('description'),
  completed: t.boolean('completed').notNull().default(false),
  tech: t.varchar('tech').notNull().default('unassigned'),
  createdAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: t
    .timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
})

export const ticketsRelations = relations(TicketsTable, ({ one }) => ({
  customer: one(CustomersTable, {
    fields: [TicketsTable.customerId],
    references: [CustomersTable.id]
  })
}))
