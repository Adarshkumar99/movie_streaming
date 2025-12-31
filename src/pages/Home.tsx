import HeroSection from "../components/HeroSection"
import MovieRow from "../components/MovieRow"
import { useHomeData } from "../hooks/useHomeData"

const Home = () => {
  const { heroMovie, trailerKey, popular, topRated, upcoming, moviesDay, moviesWeek, muted, setMuted } =
    useHomeData()

  return (
    <>

      <HeroSection
        heroMovie={heroMovie}
        trailerKey={trailerKey}
        muted={muted}
        setMuted={setMuted}
      />

      <MovieRow title="Trending Now" movies={moviesDay} mediaType="movie" isFirstRow />
      <MovieRow title="Popular" movies={popular} mediaType="movie" />
      <MovieRow title="Top Rated" movies={topRated} mediaType="movie" />
      <MovieRow title="Upcoming" movies={upcoming} mediaType="movie" />
      <MovieRow title="Weekly Trends" movies={moviesWeek} mediaType="movie" />


    </>
  )
}

export default Home
