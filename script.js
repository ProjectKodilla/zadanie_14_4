var movies = [
  {
      id: 1,
      title: 'Atomic Blonde',
      desc: 'James Bond w spódnicy',
      poster: './img/atomic_blonde.jpg'
  },
  {
      id: 2,
      title: 'Red Sparrow',
      desc: 'Seks po radziecku',
      poster: './img/red_sparrow.jpg'
  },
  {
      id: 3,
      title: 'Sicario',
      desc: 'Narkotykowi Bossowie umierają',
      poster: './img/sicario.jpg'
  },
  {
      id: 4,
      title: 'Deadpool 2',
      desc: 'Mój następny ulubiony film',
      poster: './img/deadpool2.jpg'
  },
];

var moviesElements = movies.map(function(movie) {
  return React.createElement('li', {key: movie.id}, 
      React.createElement('h2', {}, movie.title),
      React.createElement('p', {}, movie.desc),
      React.createElement('img', {src: movie.poster})
  );
});

var element =
  React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, moviesElements)
  );

ReactDOM.render(element, document.getElementById('app'));