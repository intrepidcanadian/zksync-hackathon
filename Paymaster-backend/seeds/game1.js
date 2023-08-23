const imagePaths = require('../import.js')

exports.seed = async function (knex) {

  // Deletes ALL existing entries
  await knex('raptorsticketinfo').del()
  const ticketInfo = [
    {
      id: 1,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Anthony Davis`,
      seat: `B2-11`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `The upcoming Raptors vs. Lakers game promises to be a thrilling encounter, as two of the NBA's most formidable teams prepare to face off. Fans are eagerly anticipating the clash between the Toronto Raptors and the Los Angeles Lakers, a matchup that always delivers excitement and intensity on the court.`,
    },
    {
      id: 2,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Lebron James`,
      seat: `A15-16`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `LeBron James, the iconic leader of the Lakers, needs no introduction. His unmatched basketball IQ, playmaking ability, and scoring prowess have made him one of the greatest players in NBA history. The Raptors will face the daunting task of trying to slow down LeBron's offensive onslaught and prevent him from taking over the game.`,

    },
    {
      id: 3,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `OG Anunoby`,
      seat: `T20-10`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `OG is a DPOY candidate. However, as the stars of the game, Pascal Siakam, OG Anunoby, Anthony Davis, and LeBron James will be under immense pressure to deliver. Their ability to lead their respective teams and rise to the occasion will be crucial in determining the game's outcome.`,

    },
    {
      id: 4,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Pascal Siakam`,
      seat: `F10-1`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `As the date of the game draws near, the anticipation continues to build. Basketball enthusiasts worldwide eagerly await the showdown between the Raptors and Lakers, hoping for a memorable display of skill, teamwork, and the sheer passion that makes the NBA such a captivating sport.`,
    },
    {
      id: 5,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Lebron James`,
      seat: `S4-09`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `The Raptors vs. Lakers game is not just a contest between two teams; it represents a meeting of basketball legacies. The historic rivalry between the Lakers and the Raptors adds an extra layer of excitement and anticipation for fans and players alike.`,

    },
    {
      id: 6,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Anthony Davis`,
      seat: `P7-10`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `On the Lakers' side, Anthony Davis is expected to be a force to be reckoned with. Davis, with his exceptional skills in scoring, rebounding, and shot-blocking, is a dominant presence on the court. The Raptors will need to devise a solid defensive strategy to contain the Lakers' star forward and limit his impact on the game.`,

    },

    {
      id: 7,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `OG Anunoby`,
      seat: `E4-03`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `OG Anunoby, known for his defensive prowess, will be a crucial factor for the Raptors' success in this game. Anunoby's ability to guard multiple positions and disrupt opponents' offensive plays makes him a valuable asset for the team. His tenacity and versatility on both ends of the court will play a vital role in neutralizing the Lakers' offensive threats.`,

    },
    
    {
      id: 8,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Lebron James`,
      seat: `T11-09`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Both teams boast impressive depth in their rosters, with talented role players who can step up when needed. The Raptors have a strong supporting cast, including Scottie Barnes, and Chris Boucher, while the Lakers have players like Austin Reaves, and Rui Hachimura who can make significant contributions.`,

    },

    {
      id: 9,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Pascal Siakam`,
      seat: `C5-22`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Pascal Siakam, the talented forward for the Toronto Raptors, is expected to be a key player in this game. Siakam's dynamic style of play, combined with his ability to score from various positions on the court, makes him a potent offensive threat for the Raptors. His speed, agility, and defensive skills will be crucial in containing the Lakers' star players.`,

    },
    {
      id: 10,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Anthony Davis`,
      seat: `A1-23`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Beyond the individual matchups, the collective team strategies will be intriguing to observe. Both the Raptors and the Lakers have unique playing styles and offensive systems that have been refined over the years. The clash of these distinct approaches will be an exciting aspect of the game.`,

    },
    {
      id: 11,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Toronto Fan`,
      seat: `A2-24`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Raptors fans are characterized by their energetic and enthusiastic presence at games, both at the Scotiabank Arena and during away games. They fill the arena with electrifying cheers, chants, and applause, creating an intense and vibrant atmosphere that motivates the players and intimidates opponents.`,

    },
    {
      id: 12,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Toronto Fan`,
      seat: `A3-24`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Raptors fans are also recognized for their sense of unity and inclusivity. They welcome newcomers with open arms, fostering a sense of belonging and friendship among fellow supporters. They often gather at local bars, restaurants, or fan meetups to watch games together, sharing the highs and lows of the team's journey.`,

    },
    {
      id: 13,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `D'Angelo Russell`,
      seat: `A3-25`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `D'Angelo Russell is a talented and versatile professional basketball player known for his skills as a point guard. Born on February 23, 1996, in Louisville, Kentucky, Russell has made a significant impact in the National Basketball Association (NBA) through his unique playing style and on-court contributions.`,

    },
    {
      id: 14,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Larry O'Brien Trophy`,
      seat: `B3-25`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `The Larry O'Brien NBA Championship Trophy, often simply referred to as the Larry O'Brien Trophy, is the prestigious award presented annually to the team that wins the National Basketball Association (NBA) Finals. The trophy is named after Larry O'Brien, who served as the NBA commissioner from 1975 to 1984 and played a significant role in the growth and development of the league during that period.`,

    },
    {
      id: 15,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Fans of the Game`,
      seat: `C3-25`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Basketball's universal appeal lies in its ability to transcend cultural, geographical, and social boundaries, making it one of the most widely played and watched sports around the world.`,

    },
    {
      id: 16,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Scotiabank Arena`,
      seat: `C3-6`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Scotiabank Arena is a prominent multi-purpose indoor arena located in downtown Toronto, Ontario, Canada. It is one of the premier sports and entertainment venues in the city and serves as the home arena for several major sports teams.`,

    },
    {
      id: 17,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Masai Ujiri`,
      seat: `C1-6`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Ujiri's basketball journey began as a player in Nigeria. He eventually moved to the United States to play college basketball at Bismarck State College and Montana State University. While his playing career didn't lead to the NBA, he transitioned into scouting and front office roles.`,

    },
    {
      id: 18,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Raptor Enthusiasts`,
      seat: `E1-6`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `The Toronto Raptors' official mascot is named "Raptor," often affectionately referred to as "The Raptor." Raptor is a large, energetic, and anthropomorphic dinosaur character who serves as the team's entertaining and spirited mascot during games and various events. The mascot plays a significant role in engaging fans, especially younger ones, and enhancing the overall game experience.`,

    },
    {
      id: 19,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Lebron James`,
      seat: `A9-3`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Lebron James is the league leading scorer in NBA history. He is also a four-time NBA MVP, four-time NBA Finals MVP, and two-time Olympic gold medalist.`,

    },    
    {
      id: 20,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Larry O'Brien Trophy`,
      seat: `F22-3`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `The trophy is made of sterling silver and vermeil with a 24 karat gold overlay. It stands 2 feet tall and weighs 14.5 pounds. The trophy is topped with a 24 karat gold basketball and has a 24 karat gold overlay on the rim of the trophy.`,

    },
    
    {
      id: 21,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Waterfront Toronto`,
      seat: `T3-5`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Toronto is home to the most fervent fans. The city's love for basketball is evident in the passionate support it provides to the Raptors. The team's success has helped to elevate the sport's popularity in the city, inspiring a new generation of basketball enthusiasts.`,

    },

    {
      id: 22,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Masai Ujiri`,
      seat: `F22-5`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Masai also runs a basketball camp in Africa. Masai has been known to be a philanthropist and has donated millions of dollars to various charities.`,

    },

    
    {
      id: 23,
      eventname: `Toronto Raptors vs. LA Lakers`,
      artist: `Pascal Siakam`,
      seat: `F1-3`,
      location: 'Scotiabank Arena, Toronto, ON',
      eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
      eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
      eventinformation: `Pascal Siakam, full name Pascal Siakam Doumbouya, is a professional basketball player known for his versatility, athleticism, and rapid rise in the National Basketball Association (NBA).`,

    },
    {
    id: 24,
    eventname: `Toronto Raptors vs. LA Lakers`,
    artist: `Sold-out Crowd Night`,
    seat: `Z22-3`,
    location: 'Scotiabank Arena, Toronto, ON',
    eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
    eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
    eventinformation: `The cheers at the Scotiabank Arena can be heard around downtown during games. The Raptors' home court advantage is a significant factor in their success, as the team feeds off the energy of the crowd and uses it to their advantage.`,

  },
  {
    id: 25,
    eventname: `Toronto Raptors vs. LA Lakers`,
    artist: `Sold-out Crowd Night`,
    seat: `O10-9`,
    location: 'Scotiabank Arena, Toronto, ON',
    eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
    eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
    eventinformation: `The best thing about a live game is the atmosphere. The energy of the crowd, the excitement of the players, and the intensity of the game all combine to create an unforgettable experience.`,

  },
  {
    id: 26,
    eventname: `Toronto Raptors vs. LA Lakers`,
    artist: `We the North`,
    seat: `L3-2`,
    location: 'Scotiabank Arena, Toronto, ON',
    eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
    eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
    eventinformation: `The Raptors' slogan, "We the North," is a rallying cry for the team and its fans. It represents the team's identity as a Canadian franchise and its commitment to representing the country on the world stage.`,

  },
  {
    id: 27,
    eventname: `Toronto Raptors vs. LA Lakers`,
    artist: `Jurassic Park`,
    seat: `G6-1`,
    location: 'Scotiabank Arena, Toronto, ON',
    eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
    eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
    eventinformation: `I love the Jurassic Park. The cheers of everyone standing up and the bars nearby are simply delightful during the playoffs`,

  },

  {
    id: 28,
    eventname: `Toronto Raptors vs. LA Lakers`,
    artist: `Larry O'Brien Trophy`,
    seat: `P11-12`,
    location: 'Scotiabank Arena, Toronto, ON',
    eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
    eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
    eventinformation: `Eyes on the prize`,

  },
  {
    id: 29,
    eventname: `Toronto Raptors vs. LA Lakers`,
    artist: `Concessions`,
    seat: `H22-3`,
    location: 'Scotiabank Arena, Toronto, ON',
    eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
    eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
    eventinformation: `When I was young, my father would bring me to games and my highlight were the concessions`,
  },
  {
    id: 30,
    eventname: `Toronto Raptors vs. LA Lakers`,
    artist: `Lebron James`,
    seat: `H10-3`,
    location: 'Scotiabank Arena, Toronto, ON',
    eventtimestart: '2023-07-30 19:00:00', // July 30, 2023, 7:00 PM
    eventtimeend: '2023-07-30 23:00:00',   // July 30, 2023, 11:00 PM
    eventinformation: `Lebron is a role model. He takes care of his community and his family. He is a great player and a great person`,
  },



  ];

  for (const ticket of ticketInfo) {
    const imagePath = imagePaths[ticket.id];
    await knex('raptorsticketinfo').insert({
      ...ticket,
      image: imagePath,
      created_at: knex.fn.now(),
      updated_at: knex.fn.now(),
    });
  }
};




