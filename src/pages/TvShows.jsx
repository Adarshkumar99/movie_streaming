import { useHomeData } from "../hooks/useHomeData";
import HeroSection from "../components/HeroSection";
import MovieRow from "../components/MovieRow";

const TvShows = () => {
  const { heroTvshow, trailerKey, muted, setMuted, tvPopular, tvTopRated, tvShows, tvAirShow } = useHomeData();
  return (
    <>
      <HeroSection
        heroMovie={heroTvshow}
        trailerKey={trailerKey}
        muted={muted}
        setMuted={setMuted}
      />

      <MovieRow title="TV Popular" movies={tvPopular} isFirstRow />
      <MovieRow title="Shows" movies={tvShows} />
      <MovieRow title="Top Rated" movies={tvTopRated} />
      <MovieRow title="TV AirShow" movies={tvAirShow} />
    </>
  )
}

export default TvShows