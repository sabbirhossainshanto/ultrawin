import useTopRatedGames from "../../../hooks/useTopRatedGames";
import CasinoSection from "./CasinoSection";

const TopRatedGames = () => {
  const { data } = useTopRatedGames();

  return <CasinoSection data={data} sectionTitle="Top Rated Games" />;
};

export default TopRatedGames;
