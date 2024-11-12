import { useSelector } from "react-redux";
import HomeComponent from "../../components/ui/Home/Home";
import useSportsBook from "../../hooks/useSportsBook";
import Group from "../../components/ui/Home/Group";

const Home = () => {
  const { group } = useSelector((state) => state.global);
  const { data } = useSportsBook(group);
  return (
    <>
      {group === null && <HomeComponent />}
      {group !== null && data && <Group data={data} />}
    </>
  );
};

export default Home;
