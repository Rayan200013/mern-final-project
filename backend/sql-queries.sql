CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE ,
    password VARCHAR(255),
);

-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: Oct 11, 2023 at 03:02 PM
-- Server version: 8.1.0
-- PHP Version: 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chouftourism`
--

-- --------------------------------------------------------

--
-- Table structure for table `Restaurants`
--

CREATE TABLE `Restaurants` (
  `RestaurantID` int NOT NULL,
  `Name` varchar(100) NOT NULL,
  `Address` varchar(255) DEFAULT NULL,
  `Description` text,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `OpeningHours` varchar(255) DEFAULT NULL,
  `MenuLink` varchar(255) DEFAULT NULL,
  `Images` varchar(755) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `Restaurants`
--

INSERT INTO `Restaurants` (`RestaurantID`, `Name`, `Address`, `Description`, `PhoneNumber`, `OpeningHours`, `MenuLink`, `Images`) VALUES
(1, 'Sight', 'Deir El Qamar\r\nhttps://www.google.com/maps/dir/33.6812311,35.576728/sight+chouf/@33.6968366,35.5419289,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x151f21b99f931de3:0xeed517554f1b143c!2m2!1d35.5749375!2d33.7095625?entry=ttu', 'A lovely getaway in the Chouf mountains may be the solution for you if you\'re seeking for a method to relax and spend time with loved ones. Nothing compares to a nice wind and a view of the sun dipping below the mountains, and we were lucky enough to find the perfect location for this.\r\n\r\nSight is a beautiful retreat tucked amongst the Chouf mountains, a treasure that offers a respite from the busy metropolis of Beirut.\r\n\r\nDine-in · No takeaway\r\n\r\n', '70 072 325', 'Monday 5 PM–1 AM, Tuesday 5 PM–1 AM, Wednesday 5 PM–1 AM, Thursday 5 PM–1 AM, Friday 5 PM–2 AM, Saturday 5 PM–2 AM, Sunday 5 PM–1 AM', 'http://qrco.de/SightLebanon', 'https://lh3.googleusercontent.com/p/AF1QipNDMO9sKCnPxtiXTvPKz9vB2hcChPv4hMMttUuu=s1360-w1360-h1020'),
(2, 'Lavender Getaway', 'Kfar Qatra\r\nhttps://www.google.com/maps/dir//Lavender+Getaway,+Kfar+Qatra/@33.7119803,35.568263,15z/data=!4m9!4m8!1m0!1m5!1m1!1s0x151f212e9c4768bd:0x8a31dc5889f1c9dd!2m2!1d35.568263!2d33.7119803!3e0?entry=ttu', 'Lavender Gateway Restaurant is one of the most attractive restaurants in the area and offers its guests a unique perspective of the breathtaking Lebanon mountains. It also has a lively environment. The restaurant provides a diverse and creative menu that includes eastern and western Lebanese foods that are influenced by global fare, including burgers, spaghetti, nachos, and many other items. Numerous performances are conducted at night, which gives the area a unique feel.\r\n\r\n\r\n\r\nDine-in · Kerbside pickup · No delivery', '81 927 066', 'Monday 1:30 PM–12:30 AM, Tuesday 1:30 PM–12:30 AM, Wednesday 1:30 PM–12:30 AM, Thursday 1:30 PM–12:30 AM, Friday 1:30 PM–12:30 AM, Saturday 1:30 PM–12:30 AM, Sunday 1:30 PM–12:30 AM', 'https://lavender.intoweb.me/', 'https://lh3.googleusercontent.com/p/AF1QipPzt2XbWM5JjgpBOe5XIlNNPAT9w6KHtLHI2Lvx=s1360-w1360-h1020'),
(3, 'Kokoro Sushi', 'MHW3+997, Deir El Qamar, https://www.google.com/maps/dir/33.6812311,35.576728/kokoro+sushi/@33.6917971,35.5350531,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x151f1f484498d78b:0x4eb97c1eb1b54399!2m2!1d35.5533613!2d33.6958551?entry=ttu', 'https://www.instagram.com/kokoro.lb/', '70 330 336', 'Monday 12 PM–12 AM, Tuesday 12 PM–12 AM, Wednesday 12 PM–12 AM, Thursday 12 PM–12 AM, Friday 12 PM–12 AM, Saturday 12 PM–12 AM, Sunday 12 PM–12 AM', 'https://leb.directory/ikura.2637/', 'https://lh3.googleusercontent.com/p/AF1QipMMD-1vJAyCGjbNTa4_GiQX-TeM9q1YTVBe9ReD=s1360-w1360-h1020'),
(4, 'Serail El Bek & Amare', 'MHX8+22W, Deir El Qamar, https://www.google.com/maps/dir/33.6812311,35.576728/serail+el+bek/@33.6918022,35.5609562,14z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x151f1f8a7b3b552d:0x1a3338256fac4b7f!2m2!1d35.5651038!2d33.6976796?entry=ttu', 'Dine-in · Takeaway, https://www.instagram.com/serail_el_bek/', '25 510 006', 'Monday 10:30 AM–11:30 PM,\r\nTuesday 10:30 AM–11:30 PM,\r\nWednesday 10:30 AM–11:30 PM,\r\nThursday 10:30 AM–11:30 PM,\r\nFriday 10:30 AM–11:30 PM,\r\nSaturday 10:30 AM–12 AM,\r\nSunday 10:30 AM–11:30 PM', 'https://cdn.me-qr.com/pdf/14093474.pdf', 'https://lh3.googleusercontent.com/p/AF1QipP8JsX6c1orxGfrPS-6YQCWPCG4vg5jdvHWyhy2=s1360-w1360-h1020'),
(5, 'Sushi Bell', 'Baakleen, https://www.google.com/maps/place/Sushi+Bell/@33.6806213,35.5723615,15z/data=!4m6!3m5!1s0x151f21e56bad815b:0x9791b4a4b5b2ba2e!8m2!3d33.6806213!4d35.5723615!16s%2Fg%2F11g4f0bxzc?entry=ttu', 'A world class taste in a high end place\r\n    Dine-in · Takeaway · Delivery\r\n    Reservation required for dine-in', '25 300 401', 'Monday Closed, Tuesday 12:00PM – 10:00PM, Wednesday 12:00PM – 10:00PM, Thursday 12:00PM – 10:00PM, Friday 12:00PM – 10:00PM, Saturday 12:00PM – 10:00PM, Sunday 12:00PM – 10:00PM', 'https://rest.thrubits.com/restaurant/sushi-bell', 'https://lh3.googleusercontent.com/p/AF1QipPdpuUey0YDfRVDu4T6HnKq84ScftJjlVN6WjdV=s1360-w1360-h1020'),
(6, 'JO\'s House of Subs', 'MHJC+4RV, Al Marj, Baakleen, https://www.google.com/maps/place/J.O\'S+House+of+Subs,+Inc./@33.6803526,35.5720403,15z/data=!4m6!3m5!1s0x151f2004625505c7:0xe5d18cf846c26748!8m2!3d33.6803526!4d35.5720403!16s%2Fg%2F1hhhnypxq?entry=ttu', 'Fast Food Restaurant\r\n    Dine-in · Takeaway · Delivery\r\n    Reservation required for dine-in', '25 302 567', 'Monday 1:00PM – 9:00PM, Tuesday 1:00PM – 9:00PM, Wednesday 1:00PM – 9:00PM, Thursday 1:00PM – 9:00PM, Friday 1:00PM – 9:00PM, Saturday 1:00PM – 9:00PM, Sunday 1:00PM – 9:00PM', 'https://qrcgcustomers.s3-eu-west-1.amazonaws.com/account21146505/37926571_1.pdf', 'https://www.instagram.com/p/CstQ7y5I3NP/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==');

