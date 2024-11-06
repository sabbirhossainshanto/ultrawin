import usePopularGames from "../../../hooks/usePopularGames";
import CasinoSection from "./CasinoSection";

const PopularGames = () => {
  const { data } = usePopularGames();

  return <CasinoSection data={data} sectionTitle="Popular Games" />;
};

export default PopularGames;
