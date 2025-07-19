ALTER TABLE "organization_user_settings" ADD PRIMARY KEY ("userId");--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "userId" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "userId" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "organization_user_settings" ALTER COLUMN "userId" SET NOT NULL;