const albums = [
  {
    id: 1,
    title: 'Desire, I Want to Turn Into You',
    artist: 'Caroline Polachek',
    image: 'https://www.last.fm/music/Caroline+Polachek/Desire,+I+Want+to+Turn+Into+You/+images/97ae5e7ade492179bec606df66c41f35'
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
  }
  
]

export default albums