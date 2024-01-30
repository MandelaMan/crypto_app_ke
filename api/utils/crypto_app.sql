-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2024 at 06:38 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `crypto_app`
--

-- --------------------------------------------------------

--
-- Table structure for table `invitation_income`
--

CREATE TABLE `invitation_income` (
  `id` int(11) NOT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `code` varchar(6) DEFAULT NULL,
  `created_on` datetime DEFAULT NULL,
  `reedem_amount` int(100) DEFAULT 250,
  `redeemed_times` int(100) DEFAULT 0,
  `reedemed_by` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `invitation_income`
--

INSERT INTO `invitation_income` (`id`, `user_id`, `code`, `created_on`, `reedem_amount`, `redeemed_times`, `reedemed_by`) VALUES
(2, '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'XD50T2', NULL, 250, 3, '[]'),
(3, 'dc119163-b549-4327-9fbf-ca4d60e66cfe', '28Q5XA', NULL, 250, 0, '[\"1757bc14-ae93-4321-8018-2eb7509d9dc2\"]');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_code` varchar(100) NOT NULL,
  `username` varchar(30) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `is_verified` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_code`, `username`, `phone_number`, `email`, `password`, `is_verified`) VALUES
(37, '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'Guardian', '0722656712', 'testing349099', '$2b$10$/mmDsKiH2oOymEzAzrR6Pey2oxztHXanFLquwO.AFKGqKhOfygisO', 0),
(41, 'dc119163-b549-4327-9fbf-ca4d60e66cfe', 'Guardian', '0728909090', 'testing090909', '$2b$10$mYl./JftunHiMIdyLMS2n.YnHO13e6FSzgywIuM5LZz1Y0bg0NtIe', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `invitation_income`
--
ALTER TABLE `invitation_income`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone_number` (`phone_number`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `invitation_income`
--
ALTER TABLE `invitation_income`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
