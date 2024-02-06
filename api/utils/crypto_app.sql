-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 06, 2024 at 12:37 PM
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
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `code` varchar(200) DEFAULT NULL,
  `price` int(11) NOT NULL,
  `daily_earnings` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `period_cycle` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `code`, `price`, `daily_earnings`, `name`, `period_cycle`) VALUES
(1, '1757bc14-ae93-4321-7809-2eb7509d9dc2', 7800, 3000, 'bitcoin', 26),
(2, '1757bc14-ae93-8765-8018-2eb7509d9dc2', 4500, 1200, 'binance', 30),
(3, '1757bc14-ae93-1111-2222-2eb7509d9dc2', 10000, 5600, 'bnb', 30),
(4, '1757bc14-ae93-1234-3099-2eb7509d9dc2', 2000, 300, 'cosmos', 15),
(5, '1757bc14-ae93-1099-3229-2eb7509d9dc2', 10000, 4000, 'dogcoin', 25),
(6, '1757bc14-ae93-4212-8999-2eb7509d9dc2', 2000, 1100, 'flow', 15),
(7, '1757bc14-ae93-9023-9999-2eb7509d9dc2', 15000, 8000, 'litecoin', 30),
(8, '1757bc14-ae93-0000-6666-2eb7509d9dc2', 3500, 900, 'tether', 25);

-- --------------------------------------------------------

--
-- Table structure for table `purchased_products`
--

CREATE TABLE `purchased_products` (
  `id` int(11) DEFAULT NULL,
  `product_id` varchar(100) DEFAULT NULL,
  `user_id` varchar(100) DEFAULT NULL,
  `date_purchased` datetime DEFAULT NULL,
  `earnings` int(11) NOT NULL DEFAULT 0,
  `status` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `transactions`
--

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL,
  `code` varchar(100) NOT NULL,
  `created_on` datetime NOT NULL,
  `type` varchar(30) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `method` varchar(100) NOT NULL,
  `status` varchar(10) NOT NULL,
  `amount` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `transactions`
--

INSERT INTO `transactions` (`id`, `code`, `created_on`, `type`, `user_id`, `method`, `status`, `amount`) VALUES
(1, 'SAQ89UYJ23', '2024-01-29 07:15:51', 'Recharge', '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'MPESA', 'Inprogress', 500),
(2, 'SAQ23RYJ23', '2024-01-29 07:15:51', 'Withdrawal', '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'MPESA', 'Inprogress', 250),
(3, 'SAQ9I78J23', '2024-01-29 07:20:14', 'Recharge', '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'MPESA', 'Complete', 2500),
(4, 'MXQ9IP8J26', '2024-01-29 07:20:14', 'Recharge', '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'MPESA', 'Complete', 3000),
(5, '', '2024-01-30 14:02:35', 'Earnings', '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'MPESA', 'Complete', 1200),
(6, '', '2024-01-30 14:02:35', 'Earnings', '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'MPESA', 'Complete', 55);

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
  `is_verified` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_code`, `username`, `phone_number`, `email`, `password`, `is_verified`) VALUES
(37, '1757bc14-ae93-4321-8018-2eb7509d9dc2', 'Guardian', '0701057515', 'testing349099', '$2b$10$/mmDsKiH2oOymEzAzrR6Pey2oxztHXanFLquwO.AFKGqKhOfygisO', 1),
(41, 'dc119163-b549-4327-9fbf-ca4d60e66cfe', 'Guardian', '0728909090', 'testing090909', '$2b$10$mYl./JftunHiMIdyLMS2n.YnHO13e6FSzgywIuM5LZz1Y0bg0NtIe', 1);

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
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `transactions`
--
ALTER TABLE `transactions`
  ADD PRIMARY KEY (`id`);

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
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `transactions`
--
ALTER TABLE `transactions`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=42;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
