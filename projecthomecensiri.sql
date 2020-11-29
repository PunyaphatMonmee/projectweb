-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2020 at 06:19 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `projecthomecensiri`
--

-- --------------------------------------------------------

--
-- Table structure for table `censiri`
--

CREATE TABLE `censiri` (
  `id` int(11) NOT NULL,
  `class` int(11) NOT NULL,
  `Bedroom` int(11) NOT NULL,
  `toilet` int(11) NOT NULL,
  `car` int(11) NOT NULL,
  `land` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(100) NOT NULL,
  `equipment` varchar(255) CHARACTER SET utf8 NOT NULL,
  `numberhome` varchar(255) NOT NULL,
  `phone` int(11) NOT NULL,
  `line` varchar(255) NOT NULL,
  `email` varchar(255) CHARACTER SET utf16 NOT NULL,
  `contract` int(11) NOT NULL,
  `Advice` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `status` varchar(255) CHARACTER SET utf8mb4 NOT NULL,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) NOT NULL,
  `image3` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `censiri`
--

INSERT INTO `censiri` (`id`, `class`, `Bedroom`, `toilet`, `car`, `land`, `price`, `equipment`, `numberhome`, `phone`, `line`, `email`, `contract`, `Advice`, `status`, `image1`, `image2`, `image3`) VALUES
(1, 1, 1, 2, 1, '23ตร.วา', 9000, '- พัดลม \n- เเอร์\n-โซฟา', '203/139', 817823614, 'petch', 'punyaphat.m@ku.th', 1, '-', 'ไม่ว่าง', 'https://firebasestorage.googleapis.com/v0/b/censiri-f5218.appspot.com/o/img%2F1-1.jpg?alt=media&token=0ad013a4-9dc2-47db-b8a2-7bcabf0a5d72', 'https://firebasestorage.googleapis.com/v0/b/censiri-f5218.appspot.com/o/img%2F1-2.jpg?alt=media&token=8226ff15-7ef1-4ac3-85a8-d13e9de44e26', 'https://firebasestorage.googleapis.com/v0/b/censiri-f5218.appspot.com/o/img%2F1-3.jpg?alt=media&token=75c51685-a0c3-4f3a-bf4d-e6747f443cea');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `censiri`
--
ALTER TABLE `censiri`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `censiri`
--
ALTER TABLE `censiri`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
