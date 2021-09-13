const products = [
  {
    name: "Resident Evil 5",
    description:
      "One of the most popular Resident Evil titles comes to PlayStation 4 in full 1080p HD with an increased frame rate. Featuring single-player and co-op modes and a dramatic storyline, this fully-loaded release includes all previously released DLC (Lost in Nightmares and Desperate Escape story expansions, Versus mode, extra figures and 4 costumes), and the previously PC-exclusive No Mercy mode, as well as the new mode 'The Mercenaries United' which combines the two fan-favorite modes, The Mercenaries and The Mercenaries Reunion for an even more intense experience.",
    price: 22.45,
    platforms: [
      "PlayStation 3",
      "Xbox 360",
      "PlayStation 4",
      "Xbox One",
      "Nintendo Switch",
      "PC",
    ],
    imageUrl:
      "https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_download_software_1/H2x1_NSwitchDS_ResidentEvil5~1.jpg",
  },
  {
    name: "Marvel's Spider-Man",
    description:
      "Sony Interactive Entertainment, Insomniac Games, and Marvel have teamed up to create an authentic Spider-Man adventure. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in Marvel's New York. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.",
    price: 29.99,
    platforms: ["PlayStation 4", "PlayStation 5"],
    imageUrl:
      "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg",
  },
  {
    name: "Marvel's Spider-Man: Miles Morales",
    description:
      "In the latest adventure in the Marvel’s Spider-Man universe, teenager Miles Morales is adjusting to his new home while following in the footsteps of his mentor, Peter Parker, as a new Spider-Man. But when a fierce power struggle threatens to destroy his new home, the aspiring hero realizes that with great power, there must also come great responsibility. To save all of Marvel’s New York, Miles must take up the mantle of Spider-Man and own it.",
    price: 44.95,
    platforms: ["PlayStation 4", "PlayStation 5"],
    imageUrl:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/2417/tnCutdREPv6Pa7atqb8MTxGW.png",
  },
  {
    name: "It Takes Two",
    description:
      "Embark on the craziest journey of your life in It Takes Two, a genre-bending platform adventure created purely for co-op. Invite a friend to join for free with Friend’s Pass** and work together across a huge variety of gleefully disruptive gameplay challenges. Play as the clashing couple Cody and May, two humans turned into dolls by a magic spell. Together, trapped in a fantastical world where the unpredictable hides around every corner, they are reluctantly challenged with saving their fractured relationship.",
    price: 29.99,
    platforms: [
      "PC",
      "PlayStation 4",
      "PlayStation 5",
      "Xbox One",
      "Xbox Series X/S",
    ],
    imageUrl:
      "https://www.gameinformer.com/sites/default/files/2021/03/22/4628a5e1/it-takes-two_jpg.jpg",
  },
  {
    name: "Kingdom Hearts 3",
    description:
      "Kingdom Hearts follows Sora, a Keyblade wielder, as he sets out with Donald and Goofy to stop the Heartless invasion. Join them as they travel through the colorful landscapes of Toy Story, Big Hero 6, Tangled, Hercules, Monsters Inc, and many more!",
    price: 59.99,
    platforms: ["PlayStation 4", "Xbox One", "PC"],
    imageUrl: "https://i.ytimg.com/vi/xBDsGjCpknw/maxresdefault.jpg",
  },
  {
    name: "Portal 2",
    description:
      "The highly anticipated sequel to 2007's Game of the Year, Portal 2 is a hilariously mind-bending adventure that challenges you to use wits over weaponry in a funhouse of diabolical science. Using a highly experimental portal device, you’ll once again face off against a lethally inventive, power-mad A.I. named GLaDOS. Break the laws of spatial physics in ways you never thought possible, with a wider variety of portal puzzles and an expansive story that spans a single player and co-op game mode.",
    price: 19.99,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    imageUrl: "https://i.ytimg.com/vi/1_VMRa8BuwI/maxresdefault.jpg",
  },
  {
    name: "Kameo",
    description:
      "Unleash the powers within you! An epic adventure from legendary developer Rare, Ltd.",
    price: 9.99,
    platforms: ["Xbox 360"],
    imageUrl:
      "https://store-images.s-microsoft.com/image/apps.6864.71331020072920166.7e86d9ef-4edb-4eef-a0c8-86f5c9475e2f.53495cd6-6d72-4ef6-8879-874a14ef59d1?mode=scale&q=90&h=1080&w=1920",
  },
  {
    name: "World of Warcraft",
    description:
      "World of Warcraft (WoW) is a massively multiplayer online role-playing game (MMORPG) released in 2004 by Blizzard Entertainment. Set in the Warcraft fantasy universe, World of Warcraft takes place within the world of Azeroth. the game allows players to create a character avatar and explore an open game world in third- or first-person view, exploring the landscape, fighting various monsters, completing quests, and interacting with non-player characters (NPCs) or other players.",
    price: 19.99,
    platforms: ["PC"],
    imageUrl: "https://i.ytimg.com/vi/gQFOLOur1jM/maxresdefault.jpg",
  },
  {
    name: "Mass Effect 2",
    description:
      "Across the galaxy, entire human colonies are vanishing. As Commander Shepard, you will recruit anelite team of the galaxy’s most dangerous and skilled experts, and lead them on an assault into themost dangerous area of the galaxy - from which you might not return.",
    price: 19.99,
    platforms: ["PC", "PlayStation 3", "Xbox 360"],
    imageUrl: "https://cdn.mos.cms.futurecdn.net/5WnJSkxWLscNNVrYDdvFxA.jpg",
  },
  {
    name: "Unravel Two",
    description:
      "When you cut ties to the past, new bonds form. In Unravel Two, create relationships with other Yarnys in local co-op or as a single player, fostering friendship and support as you solve challenges together. Chase the spark of adventure through stunning landscapes to watch your surroundings blossom with new life.",
    price: 19.99,
    platforms: ["PC", "PlayStation 4", "Xbox One", "Nintendo Switch"],
    imageUrl:
      "https://image.api.playstation.com/vulcan/img/rnd/202010/1520/Zn6JKFaqhuWXqqehxCqkXarQ.jpg",
  },
  {
    name: "Pokemon Sword",
    description:
      "Begin your adventure as a Pokémon Trainer by choosing one of three new partner Pokémon: Grookey, Scorbunny, or Sobble. Then embark on a journey in the new Galar region, where you’ll challenge the troublemakers of Team Yell, while unraveling the mystery behind the Legendary Pokémon Zacian and Zamazenta! Explore the Wild Area, a vast expanse of land where the player can freely control the camera. Team up with three other players locally or online in the new multiplayer co-op Max Raid Battles in which players will face off against gigantic and super-strong Pokémon known as Dynamax Pokémon.",
    price: 59.99,
    platforms: ["Nintendo Switch"],
    imageUrl:
      "https://i.insider.com/5dcee8657eece51fea5d14b2?width=1200&format=jpeg",
  },
];

module.exports = products;
