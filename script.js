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
  }
]

var MovieTitle = React.creatClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('h2', {}, this.props.title)
    )
  }
})

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('p', {}, this.props.desc)
    )
  }
})

var MoviePoster = React.createClass({
  propTypes: {
    poster: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      React.createElement('img', {src: this.props.poster})
    )
  }
})

var Movie = React.creatClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function () {
    return (
      React.createElement('li', {src: this.props.movie.id},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement(MoviePoster, {poster: this.props.movie.poster})
      )
    )
  }
})

var moviesList = movies.map(function (movie) {
  return React.createElement(Movie, {key: movie.id, movie: movie})
})

var element =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Lista filmów'),
    React.createElement('ul', {}, moviesList)
  )

ReactDOM.render(element, document.getElementById('app'))
