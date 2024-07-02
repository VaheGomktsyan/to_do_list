/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 100432
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 100432
File Encoding         : 65001

Date: 2024-07-01 17:05:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for tasks
-- ----------------------------
DROP TABLE IF EXISTS `tasks`;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `done` tinyint(1) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

-- ----------------------------
-- Records of tasks
-- ----------------------------
INSERT INTO `tasks` VALUES ('1', 'Task1', 'Nice', '0', '0000-00-00 00:00:00', '2024-07-01 13:02:59');
INSERT INTO `tasks` VALUES ('2', 'easy', 'nice', '1', '0000-00-00 00:00:00', '2024-07-01 11:41:44');
INSERT INTO `tasks` VALUES ('3', 'oi', 'oioi', '1', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `tasks` VALUES ('4', 'kjhk', 'kjh', '0', '0000-00-00 00:00:00', '0000-00-00 00:00:00');
INSERT INTO `tasks` VALUES ('5', 'hhh', 'nice', '0', '2024-07-01 11:15:26', '2024-07-01 11:38:46');
INSERT INTO `tasks` VALUES ('6', 'eee', 'nice', '1', '2024-07-01 11:15:49', '2024-07-01 11:39:26');
INSERT INTO `tasks` VALUES ('7', 'uuuu', 'vvvvv', '0', '2024-07-01 11:48:44', '2024-07-01 12:09:22');
INSERT INTO `tasks` VALUES ('9', 'hhh', 'vvhhhvvv', '0', '2024-07-01 12:14:23', '2024-07-01 12:14:23');
INSERT INTO `tasks` VALUES ('10', 'hhhhhhhhhhhhhhhhhhhhhh', 'vvhhhvvv', '0', '2024-07-01 12:32:56', '2024-07-01 12:32:56');
INSERT INTO `tasks` VALUES ('11', 'aa', 'vvhhhvvv', '0', '2024-07-01 12:50:19', '2024-07-01 12:50:19');
INSERT INTO `tasks` VALUES ('12', 'aa', 'vvhhhvvv', '0', '2024-07-01 12:50:20', '2024-07-01 12:50:20');
SET FOREIGN_KEY_CHECKS=1;
