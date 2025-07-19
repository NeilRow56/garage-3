ALTER TABLE "organization_user_settings" DROP CONSTRAINT "organization_user_settings_userId_users_id_fk";
--> statement-breakpoint
ALTER TABLE "organization_user_settings" DROP CONSTRAINT "organization_user_settings_organizationId_organizations_id_fk";
--> statement-breakpoint
ALTER TABLE "tickets" DROP CONSTRAINT "tickets_customer_id_customers_id_fk";
--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "userId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "userId" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "organizationId" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "organizationId" DROP NOT NULL;--> statement-breakpoint
/* 
    Unfortunately in current drizzle-kit version we can't automatically get name for primary key.
    We are working on making it available!

    Meanwhile you can:
        1. Check pk name in your database, by running
            SELECT constraint_name FROM information_schema.table_constraints
            WHERE table_schema = 'public'
                AND table_name = 'tickets'
                AND constraint_type = 'PRIMARY KEY';
        2. Uncomment code below and paste pk name manually
        
    Hope to release this update as soon as possible
*/

-- ALTER TABLE "tickets" DROP CONSTRAINT "<constraint_name>";--> statement-breakpoint
ALTER TABLE "tickets" ALTER COLUMN "id" DROP NOT NULL;--> statement-breakpoint
ALTER TABLE "tickets" ADD CONSTRAINT "tickets_id_customers_id_fk" FOREIGN KEY ("id") REFERENCES "public"."customers"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "tickets" DROP COLUMN "customer_id";