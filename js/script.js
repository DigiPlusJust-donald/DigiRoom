// architecture of the french and english language text
const data = {
	fr: {
		navbar: [
			'Accueil',
			'Services',
			'A Propos',
			'Disponibilité',
			'Nous contacter',
		],
		Accueil: {
			title1: ' à développer votre entreprise',
			boldPart1: 'Nous vous aidons',
			content1: {
				bannerText1:
					'Enfin une solution taillée à vos besoins spécifiques et accessible selon votre bourse et a la demande.',
				subBannerText1: {
					p: 'Activités concernées:',
					ul: {
						li1: 'Le regroupement virtuel des personnes pour une formation a distance avec des facilitateurs connectes de par le monde.',
						li2: 'Les réunions ou séminaires en ligne pour les personnes individuelles ou morales recherchant un cadre propice.',
						li3: "Les certifications en ligne dans les normes prescrites par l'agence de certification.",
						li4: 'Les rencontres privées et intimes en ligne.',
						li5: "Les entretiens d'embauche",
					},
					buttonText1: 'En Savoir Plus',
				},
			},
			title2: 'Il Comprend ',
			boldPart2: 'Egalement...',
			content21: {
				bannerText21: 'Configuration minimale de la salle:',
				ul: {
					li1: 'Un cadre acoustique et climatise',
					li2: "Un accès internet permanent et de bonne capacité avec un système de backup en cas d'interruption du principal",
					li3: 'Une fourniture électrique permanente avec des équipements de protection et un générateur électrique pour reprise en cas de coupure de courant.',
					li4: 'Un écran Smart TV géant pour la présentation et la vidéo conférence.',
					li5: 'Un dispositif sophistique et intégré de Microphone and Camera contenant toute la salle.',
					li6: "Une console centrale d'administration des sessions.",
					li7: 'Les outils collaboratifs tels que Microsoft Teams, Zoom, Google Meet, etc.',
					li8: 'Des interfaces de consultation de disponibilité et de gestion de réservations de la salle.',
				},
			},
			content22: {
				bannerText22: 'Promotion:',
				ul: {
					li: "Bénéficier de nos services gratuitement pour toutes les premières heures de vos réservations jusqu'à la fin du mois de Juin. Il suffit de nous contacter ou effectuer vous-même la réservation en ligne à travers les adresses qui vous sont fournies sur cette page.",
				},
			},
		},
		Services: {
			buttonText: 'Effectuer Une Resèrvation',
			title3: 'Ce que ',
			boldPart3: 'nous vous offrons',
			content3: {
				bannerText:
					"DigiPlus met à votre disposition un ensemble de salles connectés et équipées d'un dispositif de vidéoconférence et des outils de collaborations.",
				card1: {
					cardTitle: 'Un espace idéal pour vos réunions',
					cardSubtitle:
						'Vous voulez effectuer un rencontre sérieuse avec un partenaire a distance ou surplace. Vous voulez assister a une réunion ou séminaire sérieux dans un cadre propice.',
					ul: {
						li: "DigiRoom vous offre une salle d'une capacité de 8 places extensible a 10 pour regrouper vos apprenants dans la ville couverte.",
					},
				},
				card2: {
					cardTitle: 'Un espace calme et privé',
					cardSubtitle:
						"Vous voulez effectuer des rencontres ponctuelles ou récurrentes avec vos employés ou partenaires se trouvant dans la ville couverte par DigiRoom. C'est l'exemple des regroupements des commerciaux pour le suivi des activités et la revue des performances.",
					ul: {
						li1: 'Les rencontres privées et intimes en ligne.',
						li2: "Les entretiens d'embauche ",
					},
				},
				card3: {
					cardTitle: 'Équipements de haute technologie disponibles',
					cardSubtitle:
						"Vous voulez faire bénéficier un ou plusieurs employés d’une formation ou séminaires en distance dans un cadre propice. C'est l'exemple d'un séminaire organise a l'international auquel des employés doivent participer a distance.",
					ul: {
						li: 'Les certifications en ligne dans les normes prescrites par l’agence de certification',
					},
				},
			},
		},
		A_Propos: {
			subtitle: 'Fiction ou réalité',
			bannerText:
				'DigiPlus Consulting est une start-up créée à Douala en 2016 ayant deux missions principales:',
			ul: {
				li1: 'Accompagner les entreprises dans le processus de transformation digitale.',
				li2: 'Influencer les écosystèmes numériques en introduisant les offres digitales innovantes pour améliorer la vie des personnes et des communautés.',
			},
			p: 'DigiRoom représente une ligne de produits dont l’intérêt est de créer des plates-formes média pour contribuer à la modernisation des activités de formation et de communication au bénéfice des entreprises, des personnes et des communautés.',
			buttonText: 'En Savoir Plus',
		},
		Disponibilité: {
			title: 'Vérifier la ',
			boldPart: 'disponibilité de notre salle',
		},
		'Nous contacter': {
			bannerText:
				'Notre ambition est de s’installer dans les grandes citées du pays avec le souci de se rapprocher davantage des personnes étant dans le besoin.En ce moment, nous disposons d’une salle situe a Douala Bonamoussadi, derrière Hôtel de France.Veillez nous découvrir et faire vos réservations aux adresses suivantes:',
			ul: {
				li1: 'Siteweb: www.digiroom.cm',
				li2: 'Réseaux Sociaux: Facebook, LindkedIn, YouTube.',
				li3: 'Adresse mail : DigiRoom@digiplusconsulting.com',
				li4: 'Numero de tel : 677104040 / 696422222 (Whatsapp)',
			},
		},
	},
	// english
	en: {
		navbar: ['Home', 'Services', 'About Us', 'Availability', 'Contact Us'],
		Accueil: {
			title1: ' to grow your Business',
			boldPart1: 'We Help You',
			content1: {
				bannerText1:
					'Finally a solution tailored to your specific needs and accessible according to your budget and demand.',
				subBannerText1: {
					p: 'Activities involved:',
					ul: {
						li1: 'Virtual grouping of people for distance learning with facilitators connected from around the world.',
						li2: 'Online meetings or seminars for individuals or companies seeking a supportive environment.',
						li3: 'Online certifications in the standards prescribed by the certification agency.',
						li4: 'Private and intimate onlinemeetings.',
						li5: 'Job interviews',
					},
					buttonText1: 'Learn More',
				},
			},
			title2: 'It Also ',
			boldPart2: 'Include...',
			content21: {
				bannerText21: 'Minimum room configuration:',
				ul: {
					li1: 'An acoustic and air-conditioned setting',
					li2: 'A permanent and good capacity internet access with a backup system in case of interruption of the main one',
					li3: 'A permanent electrical supply with protection equipment and an electrical generator for recovery in case of power failure.',
					li4: 'A giant Smart TV screen for presentation and video conferencing.',
					li5: 'A sophisticated and integrated Microphone and Camera device containing the entire room.',
					li6: 'A central console for session administration.',
					li7: 'Collaborative tools such as Microsoft Teams, Zoom, Google Meet, etc.',
					li8: 'Availability consultation and room reservation management interfaces.',
				},
			},
			content22: {
				bannerText22: 'Promotion:',
				ul: {
					li: 'Enjoy our services for free for all the first hours of your reservations until the end of June. Just contact us or make the reservation yourself online through the addresses provided on this page..',
				},
			},
		},
		Services: {
			buttonText: 'Make A Reservation',
			boldPart3: 'What We Offer',
			title3: ' To You',
			content3: {
				bannerText:
					'DigiPlus provides you with a set of rooms connected and equipped with a video conferencing device and collaboration tools.',
				card1: {
					cardTitle: 'A great space for your meetings',
					cardSubtitle:
						'You want to have a serious meeting with a partner at a distance or on location.You want to attend a serious meeting or seminar in a suitable setting.',
					ul: {
						li: 'DigiRoom offers you a room with a capacity of 8 places extensible to 10 to group your learners in the covered city.',
					},
				},
				card2: {
					cardTitle: 'A Quiet and Private Space',
					cardSubtitle:
						'You want to conduct one-time or recurring meetings with your employees or partners located in the city covered by DigiRoom. It is the example of the groupings of the salesmen for the follow-up of the activities and the review of the performances.',
					ul: {
						li1: 'Private and intimate online meetings.',
						li2: 'Job interviews ',
					},
				},
				card3: {
					cardTitle: 'High-Tech Equipments Available',
					cardSubtitle:
						'You want one or more employees to benefit from a training or seminar at a distance in a favourable setting. For example, a seminar organized at an international level in which employees must participate remotely.',
					ul: {
						li: 'Online certifications within the standards prescribed by the certification agency.',
					},
				},
			},
		},
		A_Propos: {
			subtitle: 'Fake Or ',
			boldPart: 'REAL',
			bannerText:
				'DigiPlus Consulting is a start-up created in Douala in 2016 with two main missions:',
			ul: {
				li1: 'Support companies in the digital transformation process.',
				li2: 'Influence digital ecosystems by introducing innovative digital offerings to improve the lives of people and communities.',
			},
			p: 'DigiRoom represents a line of products whose interest is to create media platforms to contribute to the modernization of training and communication activities for the benefit of businesses, individuals and communities.',
		},
		Disponibilité: {
			title: 'Check the ',
			boldPart: 'availability of our Room',
		},
		'Nous contacter': {
			title: 'Contact Us',
			bannerText:
				'Our ambition is to settle in the big cities of the country with the concern of getting closer to the people in need.At the moment, we have a room located in Douala Bonamoussadi, behind Hotel de France.Please discover us and make your reservations at the following address:',
			ul: {
				li1: 'Tel : 677104040 / 696422222 (Whatsapp)',
				li2: 'website: www.digiroom.cm',
				li3: 'Social Medias: Facebook, LindkedIn, YouTube.',
				li4: 'Mail: DigiRoom@digiplusconsulting.com',
			},
		},
	},
};

/* navbar content initialization
 * getting all the navbar components
 */

let home = document.querySelector('#hom');
let service = document.querySelector('#serv');
let about = document.querySelector('#abt');
let aval = document.querySelector('#avl');
let contact = document.querySelector('#ctc');
let lang = document.querySelector('#lang');

// end of the navbar content

/*
* banner content initialisation

*/
let bannerLeft = document.querySelector('.banner__left');
// learn more content initialisation
let learnMore = document.querySelector('.learn__more');

changeLang = () => {
	if (lang.checked) {
		// navbar text changing in to french
		home.innerHTML = data.fr.navbar[0];
		service.innerHTML = data.fr.navbar[1];
		about.innerHTML = data.fr.navbar[2];
		aval.innerHTML = data.fr.navbar[3];
		contact.innerHTML = data.fr.navbar[4];

		/**
		 * banner section text changing in to french
		 */

		bannerLeft.children[0].children[0].textContent = data.fr.Accueil.boldPart1;
		bannerLeft.children[0].children[1].textContent = data.fr.Accueil.title1;
		bannerLeft.children[1].textContent = data.fr.Accueil.content1.bannerText1;
		bannerLeft.children[2].textContent =
			data.fr.Accueil.content1.subBannerText1.p;
		bannerLeft.children[3].children[0].textContent =
			data.fr.Accueil.content1.subBannerText1.ul.li1;
		bannerLeft.children[3].children[1].textContent =
			data.fr.Accueil.content1.subBannerText1.ul.li2;
		bannerLeft.children[3].children[2].textContent =
			data.fr.Accueil.content1.subBannerText1.ul.li3;
		bannerLeft.children[3].children[3].textContent =
			data.fr.Accueil.content1.subBannerText1.ul.li4;
		bannerLeft.children[3].children[4].textContent =
			data.fr.Accueil.content1.subBannerText1.ul.li5;
		bannerLeft.children[5].textContent =
			data.fr.Accueil.content1.subBannerText1.buttonText1;
		// end of the banner modification

		/*
		 * learn more part
		 */
		learnMore.children[0].children[0].textContent = data.fr.Accueil.title2;
		learnMore.children[0].children[1].textContent = data.fr.Accueil.boldPart2;
		learnMore.children[1].children[0].children[0].textContent =
			data.fr.Accueil.content21.bannerText21;

		learnMore.children[1].children[0].children[1].children[0].textContent =
			data.fr.Accueil.content21.ul.li1;
		learnMore.children[1].children[0].children[1].children[1].textContent =
			data.fr.Accueil.content21.ul.li2;
		learnMore.children[1].children[0].children[1].children[2].textContent =
			data.fr.Accueil.content21.ul.li3;
		learnMore.children[1].children[0].children[1].children[3].textContent =
			data.fr.Accueil.content21.ul.li4;
		learnMore.children[1].children[0].children[1].children[4].textContent =
			data.fr.Accueil.content21.ul.li5;
		learnMore.children[1].children[0].children[1].children[5].textContent =
			data.fr.Accueil.content21.ul.li6;
		learnMore.children[1].children[0].children[1].children[6].textContent =
			data.fr.Accueil.content21.ul.li7;
		learnMore.children[1].children[0].children[1].children[7].textContent =
			data.fr.Accueil.content21.ul.li8;

		learnMore.children[1].children[1].children[0].textContent =
			data.fr.Accueil.content22.bannerText22;
		learnMore.children[1].children[1].children[1].textContent =
			data.fr.Accueil.content22.ul.li;
	} else {
		// navbar text changing in english
		home.innerHTML = data.en.navbar[0];
		service.innerHTML = data.en.navbar[1];
		about.innerHTML = data.en.navbar[2];
		aval.innerHTML = data.en.navbar[3];
		contact.innerHTML = data.en.navbar[4];
		/*
		 * banner content initialisation
		 */
		bannerLeft.children[0].children[0].textContent = data.en.Accueil.boldPart1;
		bannerLeft.children[0].children[1].textContent = data.en.Accueil.title1;
		bannerLeft.children[1].textContent = data.en.Accueil.content1.bannerText1;
		bannerLeft.children[2].textContent =
			data.en.Accueil.content1.subBannerText1.p;
		bannerLeft.children[3].children[0].textContent =
			data.en.Accueil.content1.subBannerText1.ul.li1;
		bannerLeft.children[3].children[1].textContent =
			data.en.Accueil.content1.subBannerText1.ul.li2;
		bannerLeft.children[3].children[2].textContent =
			data.en.Accueil.content1.subBannerText1.ul.li3;
		bannerLeft.children[3].children[3].textContent =
			data.en.Accueil.content1.subBannerText1.ul.li4;
		bannerLeft.children[3].children[4].textContent =
			data.en.Accueil.content1.subBannerText1.ul.li5;
		bannerLeft.children[5].textContent =
			data.en.Accueil.content1.subBannerText1.buttonText1;
		// end of the banner modifications

		/*
		 * learn more part
		 */
		learnMore.children[0].children[0].textContent = data.en.Accueil.title2;
		learnMore.children[0].children[1].textContent = data.en.Accueil.boldPart2;
		learnMore.children[1].children[0].children[0].textContent =
			data.en.Accueil.content21.bannerText21;

		learnMore.children[1].children[0].children[1].children[0].textContent =
			data.en.Accueil.content21.ul.li1;
		learnMore.children[1].children[0].children[1].children[1].textContent =
			data.en.Accueil.content21.ul.li2;
		learnMore.children[1].children[0].children[1].children[2].textContent =
			data.en.Accueil.content21.ul.li3;
		learnMore.children[1].children[0].children[1].children[3].textContent =
			data.en.Accueil.content21.ul.li4;
		learnMore.children[1].children[0].children[1].children[4].textContent =
			data.en.Accueil.content21.ul.li5;
		learnMore.children[1].children[0].children[1].children[5].textContent =
			data.en.Accueil.content21.ul.li6;
		learnMore.children[1].children[0].children[1].children[6].textContent =
			data.en.Accueil.content21.ul.li7;
		learnMore.children[1].children[0].children[1].children[7].textContent =
			data.en.Accueil.content21.ul.li8;

		learnMore.children[1].children[1].children[0].textContent =
			data.en.Accueil.content22.bannerText22;
		learnMore.children[1].children[1].children[1].textContent =
			data.en.Accueil.content22.ul.li;
	}
};
