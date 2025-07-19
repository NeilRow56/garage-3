import { pgTable as table } from 'drizzle-orm/pg-core'
import * as t from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'
import { TicketsTable } from './tickets'

export const CustomersTable = table('customers', {
  id: t.uuid().primaryKey().defaultRandom(),
  firstName: t.varchar('first_name').notNull(),
  lastName: t.varchar('last_name').notNull(),
  email: t.varchar('email').unique().notNull(),
  phone: t.varchar('phone').unique().notNull(),
  address1: t.varchar('address1').notNull(),
  address2: t.varchar('address2'),
  city: t.varchar('city').notNull(),
  state: t.varchar('state', { length: 2 }).notNull(),
  zip: t.varchar('zip', { length: 10 }).notNull(),
  notes: t.text('notes'),
  active: t.boolean('active').notNull().default(true),
  createdAt: t.timestamp({ withTimezone: true }).notNull().defaultNow(),
  updatedAt: t
    .timestamp({ withTimezone: true })
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date())
})

// Create relations
export const customersRelations = relations(CustomersTable, ({ many }) => ({
  tickets: many(TicketsTable)
}))
