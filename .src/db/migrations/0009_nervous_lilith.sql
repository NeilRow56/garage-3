DROP INDEX "name_idx";--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "users" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organizations" ALTER COLUMN "id" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "organizations" ALTER COLUMN "id" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organizations" ALTER COLUMN "name" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "userId" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "userId" DROP DEFAULT;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "organizationId" SET DATA TYPE varchar;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "organizationId" DROP DEFAULT;