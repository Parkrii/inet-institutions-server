CREATE TABLE IF NOT EXISTS `institutions_trainingOffer` (
  `id_institutions` varchar(36) NOT NULL,  
  `id_trainingOffers` varchar(36) NOT NULL,
  PRIMARY KEY (`id_institutions`, `id_trainingOffers` ),
  FOREIGN KEY (`id_institutions`) REFERENCES institutions (`id`),
  FOREIGN KEY (`id_trainingOffers`) REFERENCES trainingOffers (`id`)
)