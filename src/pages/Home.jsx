import { useState } from "react"
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

      <MovieRow title="Trending Now" movies={moviesDay} isFirstRow />
      <MovieRow title="Popular" movies={popular} />
      <MovieRow title="Top Rated" movies={topRated} />
      <MovieRow title="Upcoming" movies={upcoming} />
      <MovieRow title="Weekly Trends" movies={moviesWeek} />


    </>
  )
}

export default Home
