import useRecommendedGames from "../../../hooks/useRecommendedGames";
import CasinoSection from "./CasinoSection";

const RecommendedGames = () => {
  const { data } = useRecommendedGames();

  return <CasinoSection data={data} sectionTitle="Recommended Games" />;
};

export default RecommendedGames;
