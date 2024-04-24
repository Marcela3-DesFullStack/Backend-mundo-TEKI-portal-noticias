CREATE DATABASE mundo_teki;
USE `mundo_teki`;
CREATE TABLE `images`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `image_url` VARCHAR(255) NOT NULL,
    `name` VARCHAR(100) NOT NULL
);
CREATE TABLE `categories`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(100) NOT NULL
);
CREATE TABLE `users`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `username` VARCHAR(50) NOT NULL,
    `email` VARCHAR(50) NOT NULL,
    `password` VARCHAR(500) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `is_active` BOOLEAN NOT NULL DEFAULT '1',
    `role_id` INT UNSIGNED NOT NULL DEFAULT '0'
);
CREATE TABLE `posts`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `author` VARCHAR(100) NOT NULL,
    `image_url` VARCHAR(500) NOT NULL,
    `user_id` INT UNSIGNED NOT NULL,
    `category_id` INT UNSIGNED NOT NULL,
    `description` TEXT NOT NULL,
    `is active` BOOLEAN NOT NULL DEFAULT '1'
);
CREATE TABLE `roles`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `role_type` INT UNSIGNED NOT NULL
);
CREATE TABLE `comments`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `user_id` INT UNSIGNED NOT NULL,
    `post_id` INT UNSIGNED NOT NULL,
    `content` VARCHAR(200) NOT NULL,
    `created_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `is_published` BOOLEAN NOT NULL
);
ALTER TABLE
    `roles` ADD CONSTRAINT `roles_id_foreign` FOREIGN KEY(`id`) REFERENCES `users`(`id`);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_post_id_foreign` FOREIGN KEY(`post_id`) REFERENCES `posts`(`id`);
ALTER TABLE
    `comments` ADD CONSTRAINT `comments_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);
ALTER TABLE
    `posts` ADD CONSTRAINT `posts_category_id_foreign` FOREIGN KEY(`category_id`) REFERENCES `categories`(`id`);
ALTER TABLE
    `posts` ADD CONSTRAINT `posts_user_id_foreign` FOREIGN KEY(`user_id`) REFERENCES `users`(`id`);