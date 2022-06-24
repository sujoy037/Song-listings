-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jun 24, 2022 at 04:58 PM
-- Server version: 5.6.21
-- PHP Version: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `song_listings_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `artist`
--

CREATE TABLE IF NOT EXISTS `artist` (
`artist_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `dob` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `artist`
--

INSERT INTO `artist` (`artist_id`, `name`, `dob`, `bio`, `createdAt`, `updatedAt`) VALUES
(1, 'Sonu Nigam', '1973-07-30', 'Music Dr', '2022-06-24 10:59:44', '2022-06-24 10:59:44'),
(2, 'A. R. rahman', '1967-01-06', 'Music Dir', '2022-06-24 11:10:25', '2022-06-24 11:10:25'),
(3, 'Kumar Sanu', '1957-09-25', 'Singer', '2022-06-24 11:28:14', '2022-06-24 11:28:14'),
(4, 'Manna Dey', '1919-05-01', ' Manna Dey, was an internationally acclaimed and celebrated Indian playback singer, music director, and a musician. ', '2022-06-24 11:46:01', '2022-06-24 11:46:01');

-- --------------------------------------------------------

--
-- Table structure for table `rating`
--

CREATE TABLE IF NOT EXISTS `rating` (
`id` int(11) NOT NULL,
  `value` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  `song_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `rating`
--

INSERT INTO `rating` (`id`, `value`, `user_id`, `song_id`, `createdAt`, `updatedAt`) VALUES
(1, 1, 1, 5, '2022-06-24 11:35:09', '2022-06-24 11:35:09'),
(2, 1, 1, 10, '2022-06-24 11:35:14', '2022-06-24 11:35:14'),
(3, 3, 1, 4, '2022-06-24 11:35:16', '2022-06-24 11:35:16'),
(4, 2, 1, 11, '2022-06-24 11:35:17', '2022-06-24 11:35:17'),
(5, 5, 1, 7, '2022-06-24 11:35:21', '2022-06-24 11:35:21'),
(6, 3, 1, 6, '2022-06-24 11:35:27', '2022-06-24 11:35:27'),
(7, 3, 1, 12, '2022-06-24 11:35:28', '2022-06-24 11:35:28');

-- --------------------------------------------------------

--
-- Table structure for table `song`
--

CREATE TABLE IF NOT EXISTS `song` (
`song_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `date_of_rel` varchar(255) DEFAULT NULL,
  `img` varchar(255) DEFAULT NULL,
  `artist_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `song`
--

INSERT INTO `song` (`song_id`, `name`, `date_of_rel`, `img`, `artist_id`, `createdAt`, `updatedAt`) VALUES
(2, 'Mony Ratan', '1993-09-03', '/Images/ar.jpg', 2, '2022-06-24 11:19:51', '2022-06-24 11:19:51'),
(3, 'Dil Se Ra', '1992-01-12', '/Images/ar.jpg', 2, '2022-06-24 11:20:55', '2022-06-24 11:20:55'),
(4, 'Tum ho', '2015-02-06', '/Images/ar.jpg', 2, '2022-06-24 11:21:35', '2022-06-24 11:21:35'),
(5, 'Nadan Parindey', '2008-02-07', '/Images/ar.jpg', 2, '2022-06-24 11:22:11', '2022-06-24 11:22:11'),
(6, 'Saathiya', '2005-09-12', '/Images/ar.jpg', 2, '2022-06-24 11:22:50', '2022-06-24 11:22:50'),
(7, 'Dil Dooba', '2000-09-14', '/Images/sonu.jpg', 1, '2022-06-24 11:24:32', '2022-06-24 11:24:32'),
(8, 'Do pal', '2001-09-03', '/Images/sonu.jpg', 1, '2022-06-24 11:25:04', '2022-06-24 11:25:04'),
(9, 'Main hoon na', '2003-08-20', '/Images/sonu.jpg', 1, '2022-06-24 11:26:08', '2022-06-24 11:26:08'),
(10, 'Saawariya', '2012-03-20', '/Images/kumar.jpg', 3, '2022-06-24 11:30:16', '2022-06-24 11:30:16'),
(11, 'Tere Ishq Mein Naachenge', '1996-06-15', '/Images/kumar.jpg', 3, '2022-06-24 11:31:06', '2022-06-24 11:31:06'),
(12, 'Zindagi Ki Talash Mein', '1991-07-02', '/Images/kumar.jpg', 3, '2022-06-24 11:32:07', '2022-06-24 11:32:07'),
(13, 'Hum Teri Mohabbat Me', '1993-01-09', '/Images/kumar.jpg', 3, '2022-06-24 11:33:45', '2022-06-24 11:33:45'),
(14, 'Coffee Houser Sei Addata Aaj Aar Nei. ...', '1990-08-14', '/Images/manna.jpg', 4, '2022-06-24 11:48:08', '2022-06-24 11:48:08'),
(15, 'Ami Kon Pathe Je Chali', '1980-09-23', '/Images/manna.jpg', 4, '2022-06-24 11:48:51', '2022-06-24 11:48:51'),
(16, 'Shaon Raate Jodi', '1970-07-31', '/Images/manna.jpg', 4, '2022-06-24 11:49:35', '2022-06-24 11:49:35');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
`user_id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `name`, `email`, `password`, `createdAt`, `updatedAt`) VALUES
(1, 'sujoy', 'sujoy037@gmail.com', 'abc', '2022-06-24 11:12:53', '2022-06-24 11:12:53'),
(2, NULL, 'sujoy037@gmail.com', 'abc', '2022-06-24 11:13:00', '2022-06-24 11:13:00'),
(3, NULL, 'sujoy037@gmail.com', 'abc', '2022-06-24 11:34:25', '2022-06-24 11:34:25'),
(4, NULL, 'sujoy037@gmail.com', 'abc', '2022-06-24 11:36:06', '2022-06-24 11:36:06'),
(5, NULL, 'sujoy037@gmail.com', 'abc', '2022-06-24 11:40:39', '2022-06-24 11:40:39');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artist`
--
ALTER TABLE `artist`
 ADD PRIMARY KEY (`artist_id`);

--
-- Indexes for table `rating`
--
ALTER TABLE `rating`
 ADD PRIMARY KEY (`id`), ADD KEY `user_id` (`user_id`), ADD KEY `song_id` (`song_id`);

--
-- Indexes for table `song`
--
ALTER TABLE `song`
 ADD PRIMARY KEY (`song_id`), ADD KEY `artist_id` (`artist_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
 ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `artist`
--
ALTER TABLE `artist`
MODIFY `artist_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `rating`
--
ALTER TABLE `rating`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `song`
--
ALTER TABLE `song`
MODIFY `song_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=17;
--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=6;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `rating`
--
ALTER TABLE `rating`
ADD CONSTRAINT `rating_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE,
ADD CONSTRAINT `rating_ibfk_2` FOREIGN KEY (`song_id`) REFERENCES `song` (`song_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `song`
--
ALTER TABLE `song`
ADD CONSTRAINT `song_ibfk_1` FOREIGN KEY (`artist_id`) REFERENCES `artist` (`artist_id`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
