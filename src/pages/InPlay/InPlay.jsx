import useSportsBook from "../../hooks/useSportsBook";
import MobileInPlay from "./MobileInPlay";
import Group from "../../components/ui/Home/Group";

const InPlay = () => {
  const { data } = useSportsBook(0);

  return (
    <>
      <div className="mob-view">
        <MobileInPlay />
      </div>
      <div className="web-view">
        <Group data={data} />
      </div>
    </>
  );
};

export default InPlay;
