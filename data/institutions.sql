CREATE TABLE IF NOT EXISTS `institutions` (
  `id` varchar(36) NOT NULL,  
  `cue` varchar(9) NOT NULL UNIQUE,
  `type` enum('Secondary (Technical)', 'Secondary (EPS)', 'Vocational Training', 'Higher Technical') NOT NULL,
  `number` int,
  `name` varchar(26) NOT NULL,
  `contact` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
)