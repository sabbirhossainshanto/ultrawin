import useHomeLiveCasino from "../../../hooks/useHomeLiveCasino";
import CasinoSection from "./CasinoSection";
const PopularGames = () => {
  const { data } = useHomeLiveCasino();

  return <CasinoSection data={data} sectionTitle="Live Casino Games" />;
};

export default PopularGames;
