import { useHomeData } from "../hooks/useHomeData";
import HeroSection from "../components/HeroSection";
import MovieRow from "../components/MovieRow";
import { useTranslation } from "react-i18next";

const TvShows = () => {
  const { heroTvshow, trailerKey, muted, setMuted, tvPopular, tvTopRated, tvShows, tvAirShow } = useHomeData();
  const { t } = useTranslation();
  return (
    <>
      <HeroSection
        heroMovie={heroTvshow}
        trailerKey={trailerKey}
        muted={muted}
        setMuted={setMuted}
      />

      <MovieRow title={t('homepage.tv.tv_popular')} movies={tvPopular} mediaType="tv" isFirstRow />
      <MovieRow title={t('homepage.tv.shows')} movies={tvShows} mediaType="tv" />
      <MovieRow title={t('homepage.top_rated')} movies={tvTopRated} mediaType="tv" />
      <MovieRow title={t('homepage.tv.air_show')} movies={tvAirShow} mediaType="tv" />
    </>
  )
}

export default TvShows