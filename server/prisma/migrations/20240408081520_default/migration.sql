/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Made the column `is_active` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `posts` MODIFY `user_id` INTEGER UNSIGNED NOT NULL DEFAULT 2;

-- AlterTable
ALTER TABLE `users` MODIFY `is_active` BOOLEAN NOT NULL DEFAULT false,
    MODIFY `role_id` INTEGER UNSIGNED NOT NULL DEFAULT 1;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);
