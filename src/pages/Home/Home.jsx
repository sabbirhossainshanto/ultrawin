import { useSelector } from "react-redux";
import HomeComponent from "../../components/ui/Home/Home";
import useSportsBook from "../../hooks/useSportsBook";
import Group from "../../components/ui/Home/Group";
import HorseRacing from "../../components/ui/Home/HorseRacing/HorseRacing";
import GreyhoundRacing from "../../components/ui/Home/GreyhoundRacing/GreyhoundRacing";

const Home = () => {
  const { group } = useSelector((state) => state.global);
  const { data } = useSportsBook(group);
  return (
    <>
      {group === null && <HomeComponent />}
      {group !== null &&
        group !== "horse-racing" &&
        group !== "greyhound-racing" &&
        data && <Group data={data} />}
      {group === "horse-racing" && <HorseRacing />}
      {group === "greyhound-racing" && <GreyhoundRacing />}
    </>
  );
};

export default Home;
