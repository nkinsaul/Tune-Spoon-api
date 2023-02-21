const albums = [
  {
    id: 1,
    title: 'Desire, I Want to Turn Into You',
    artist: 'Caroline Polachek',
    image: 'https://www.last.fm/music/Caroline+Polachek/Desire,+I+Want+to+Turn+Into+You/+images/97ae5e7ade492179bec606df66c41f35'
  },
  {
    id: 2,
    title: 'Sun Machine',
    artist: 'Rubblebucket',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/c0b4a053cd548b420ba984a8caf84eb3.jpg#c0b4a053cd548b420ba984a8caf84eb3',
  },

  {
    id: 3,
    title: 'Unlimited Love',
    artist: 'Red Hot Chili Peppers',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/07f19170333eb7221e6486b32d39da49.jpg#07f19170333eb7221e6486b32d39da49',
  },

  {
    id: 4,
    title: 'SOS',
    artist: 'SZA',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/b2cfb5bdf137f4d6293565205965750f.jpg#b2cfb5bdf137f4d6293565205965750f'
  },

  {
    id: 5,
    title: 'Earth Worship',
    artist: 'Rubblebucket',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/5511ebd31c06a2baa22e56d4b79ecd12.jpg#5511ebd31c06a2baa22e56d4b79ecd12'
  },

  {
    id: 6,
    title: 'Choose Your Weapon',
    artist: 'Hiatus Kaiyote',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/648cd00cee4d489a04a190aa20112a4f.jpg#648cd00cee4d489a04a190aa20112a4f'
  },

  {
    id: 7,
    title: 'Drunk',
    artist: 'Thundercat',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/17311ac4702bbc6245e9ee2958630c8f.jpg#17311ac4702bbc6245e9ee2958630c8f'
  },

  {
    id: 8,
    title: 'Special',
    artist: 'Lizzo',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/aa0fa19a3c3cdff70672d238c9861358.jpg#aa0fa19a3c3cdff70672d238c9861358'
  },

  {
    id: 9,
    title: 'Schvitz',
    artist: 'Vulfpeck',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/ba61a9b60778fb9ed2e8c209f19055d1.jpg#ba61a9b60778fb9ed2e8c209f19055d1'
  },
  {
    id: 10,
    title: 'Back to Black',
    artist: 'Amy Winehouse',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/bc4e31504f5f47adb31f36aa0889be45.jpg#bc4e31504f5f47adb31f36aa0889be45'
  },
  { 
    id: 11,
    title: 'Breaking the Balls of History',
    artist: 'Quasi',
    image: 'https://lastfm.freetls.fastly.net/i/u/60x60/2f113cd61ef5fea9730d49692c254b84.jpg'
  },
  { 
    id: 12,
    title: 'An Innocent Man',
    artist: 'Billy Joel',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/a12d150c799c416daef11949670485c8.jpg#a12d150c799c416daef11949670485c8',
  },
  {
    id: 13,
    title: 'Waking Up',
    artist: 'OneRepublic',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/b243e3b226cf4b3089e166f30e2cb83c.jpg#b243e3b226cf4b3089e166f30e2cb83c',
  },
  { 
    id: 14,
    title: 'Frontiers',
    artist: 'Journey',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/a3bd61d82f22400abe781387166e7aa3.jpg#a3bd61d82f22400abe781387166e7aa3',
  },
  { 
    id: 15,
    title: 'Honky Chateau',
    artist: 'Elton John',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/600850c3207f8a27ff77e49d91f78c1b.jpg#600850c3207f8a27ff77e49d91f78c1b',
  },
  { 
    id: 16,
    title: 'Abbey Road',
    artist: 'The Beatles',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/af251669a48a4bafb448e1f6c0de01be.jpg#af251669a48a4bafb448e1f6c0de01be',
  },
  { 
    id: 17,
    title: 'Toys in the Attic',
    artist: 'Aerosmith',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/f9e9632ca1da6116f2b6e5f70ae9e7df.jpg#f9e9632ca1da6116f2b6e5f70ae9e7df',
  },
  { 
    id: 18,
    title: 'Reggatta de Blanc',
    artist: 'The Police',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/8135a6fa56f78744a678c5a0468417f0.jpg#8135a6fa56f78744a678c5a0468417f0',
  },
  { 
    id: 19,
    title: 'Face Value',
    artist: 'Phil Collins',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/565a36701b2ce857c1a581a769ceee62.jpg#565a36701b2ce857c1a581a769ceee62',
  },
  { 
    id: 20,
    title: 'Thriller',
    artist: 'Michael Jackson',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/e5f40ae3767cf5b6184776f97e52b8ca.jpg#e5f40ae3767cf5b6184776f97e52b8ca',
  },
  {
    id: 21,
    title: 'Worlds',
    artist: 'Porter Robinson',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/599473f366dc4753c7ed0ed64f23df83.jpg#599473f366dc4753c7ed0ed64f23df83'
  },
  {
    id: 22,
    title: 'WLFGRL',
    artist: 'Machine Girl',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/79d173d6a9926477816cea31d409a2d6.jpg#79d173d6a9926477816cea31d409a2d6'
  },
  {
    id: 23,
    title: 'Windswept Adan',
    artist: 'Ichiko Aoba',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/3a39fc6acd5c9eb5f5c2ac532c8d69fa.jpg#3a39fc6acd5c9eb5f5c2ac532c8d69fa'
  },
  {
    id: 24,
    title: 'No New World',
    artist: 'MASS OF THE FERMENTING DREGS',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/088fea2b4baa6f4ee55d9925a4aa9d8f.jpg#088fea2b4baa6f4ee55d9925a4aa9d8f'
  },
  {
    id: 25,
    title: 'Substance',
    artist: 'New Order',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/a50955c73be3cb3b0a644d615c06290d.jpg#a50955c73be3cb3b0a644d615c06290d'
  },
  {
    id: 26,
    title: 'Boston',
    artist: 'Boston',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/c88c27c1882542ae880ac063af38d647.jpg#c88c27c1882542ae880ac063af38d647'
  },
  {
    id: 27,
    title: 'Beatopia',
    artist: 'beabadoobee',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/d47d0db3893fa94639514a2aa47372b8.jpg#d47d0db3893fa94639514a2aa47372b8'
  },
  {
    id: 28,
    title: 'Twilight',
    artist: 'bôa',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/40564dd1a58f969fc3ee3c49bddffd23.jpg#40564dd1a58f969fc3ee3c49bddffd23'
  },
  {
    id: 29,
    title: 'Mercurial World',
    artist: 'Magdalena Bay',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/c1b18f7dd5f2b262a96288bfa2330ad2.jpg#c1b18f7dd5f2b262a96288bfa2330ad2'
  },
  {
    id: 30,
    title: 'Kodama',
    artist: 'Alcest',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/460454629c39c9890fe8af5870260675.jpg#460454629c39c9890fe8af5870260675'
  },

  {
    id: 31,
    title: 'Is There Anybody Out There?',
    artist: 'A Great Big World',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/6f0e3a2d54b943f8c356977218f89520.jpg#6f0e3a2d54b943f8c356977218f89520',
  },
  {
    id: 32,
    title: 'Forget the World',
    artist: 'Afrojack',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/de12f907fdbb42b1c232cc56c600c6c3.jpg#de12f907fdbb42b1c232cc56c600c6c3',
  },
  {
    id: 33,
    title: 'Best Day Ever',
    artist: 'Mac Miller',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/98b0f62da13145c9a27102abf874f07e.jpg#98b0f62da13145c9a27102abf874f07e',
  },
  {
    id: 34,
    title: 'Dizzy Up the Girl',
    artist: 'The Goo Goo Dolls',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/b5637551f8256bd31d895ad9db01d5d0.jpg#b5637551f8256bd31d895ad9db01d5d0',
  },
  {
    id: 35,
    title: 'Living Proof',
    artist: 'State Champs',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/ff78ad66e21a26922e7288c860386acc.jpg#ff78ad66e21a26922e7288c860386acc',
  },
  {
    id: 36,
    title: 'Stories',
    artist: 'Avicii',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/719ec212f89411b93ce528283ea8c007.jpg#719ec212f89411b93ce528283ea8c007',
  },
  {
    id: 37,
    title: 'the highs.',
    artist: 'mike.',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/4ced1d846cfe63891fd638642e590965.jpg#4ced1d846cfe63891fd638642e590965',
  },
  {
    id: 38,
    title: 'Blacc Hollywood',
    artist: 'Wiz Khalifa',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/59f3420cebb24680c6f4abb41b002599.jpg#59f3420cebb24680c6f4abb41b002599',
  },
  {
    id: 39,
    title: 'Brothers in Arms',
    artist: 'Dire Straits',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/d3394952d369468ec64a7d5582c013cc.jpg#d3394952d369468ec64a7d5582c013cc',
  },
  {
    id: 40,
    title: 'Come Back Road',
    artist: 'Logan Mize',
    image: 'https://lastfm.freetls.fastly.net/i/u/770x0/5b9176350456f44bc34953f3e17d8a1b.jpg#5b9176350456f44bc34953f3e17d8a1b',
  },

  
]

module.exports = albums