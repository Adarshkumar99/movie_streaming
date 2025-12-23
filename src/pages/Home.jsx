import { useState } from "react"
import Header from "../components/Header"
import HeroSection from "../components/HeroSection"
import MovieRow from "../components/MovieRow"
import { useHomeData } from "../hooks/useHomeData"
import Footer from "../components/Footer"

const Home = () => {
  const { heroMovie, trailerKey, popular, topRated, upcoming, moviesDay, moviesWeek } =
    useHomeData()

  const [muted, setMuted] = useState(true)

  return (
    <>
      <Header />

      <HeroSection
        heroMovie={heroMovie}
        trailerKey={trailerKey}
        muted={muted}
        setMuted={setMuted}
      />

      <MovieRow title="Trending Now" movies={moviesDay} isFirstRow />
      <MovieRow title="Popular" movies={popular} />
      <MovieRow title="Top Rated" movies={topRated} />
      <MovieRow title="Upcoming" movies={upcoming} />
      <MovieRow title="Weekly Trends" movies={moviesWeek} />

      <Footer />

    </>
  )
}

export default Home
