import React from "react";
import axios from "axios"
import Movie from "../components/Movie";
import "./Home.css"

class Home extends React.Component{
  state = {
    isLoading: true,
    movies: [] // 초기화 안해도 ok
  };

  // async, await 를 하지 않으면 js에서 요청을 기다리지 않는다
  getMovies = async () => {
    // es6 적용 x
    // const movies = await axios.get("https://yts.mx/api/v2/list_movies.json")
    // console.log(movies.data.data.movies)

    // es6 적용
    // axios: fetch 위의 layer(땅콩을 둘러싼 초콜릿)
    const { 
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating")
    // this.setState({movies: movies})
    this.setState({movies, isLoading: false})

  }

  // first cycle(when: after first render)
  // fetch data
  componentDidMount(){
    this.getMovies(); 
  }

  render(){
    const {isLoading, movies} = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map(movie => (
            <Movie 
              key={movie.id}
              id={movie.id} 
              year={movie.year} 
              title={movie.title} 
              summary={movie.summary} 
              poster={movie.medium_cover_image}
              genres={movie.genres}
            />
          ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;