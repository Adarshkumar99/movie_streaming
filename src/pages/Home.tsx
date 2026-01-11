import HeroSection from "../components/HeroSection"
import MovieRow from "../components/MovieRow"
import { useHomeData } from "../hooks/useHomeData"
import { useTranslation } from "react-i18next";

const Home = () => {
  const { heroMovie, trailerKey, popular, topRated, upcoming, moviesDay, moviesWeek, muted, setMuted } =
    useHomeData()
  const { t } = useTranslation();

  return (
    <>

      <HeroSection
        heroMovie={heroMovie}
        trailerKey={trailerKey}
        muted={muted}
        setMuted={setMuted}
      />

      <MovieRow title={t('homepage.trending')} movies={moviesDay} mediaType="movie" isFirstRow />
      <MovieRow title={t('homepage.popular')} movies={popular} mediaType="movie" />
      <MovieRow title={t('homepage.top_rated')} movies={topRated} mediaType="movie" />
      <MovieRow title={t('homepage.upcoming')} movies={upcoming} mediaType="movie" />
      <MovieRow title={t('homepage.weekly_trend')} movies={moviesWeek} mediaType="movie" />


    </>
  )
}

export default Home
