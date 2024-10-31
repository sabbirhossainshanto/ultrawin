import { useSelector } from "react-redux";
import HomeComponent from "../../components/ui/Home/Home";
import Group from "../../components/ui/Home/Group";
import useSportsBook from "../../hooks/useSportsBook";
const Home = () => {
  const { group } = useSelector((state) => state?.global);
  const { data } = useSportsBook(group);

  return (
    <>
      {group === null && <HomeComponent />}
      {group !== 0 && <Group data={data} />}
    </>
  );
};

export default Home;
