import Group from "../../components/ui/Home/Group";
import useSportsBook from "../../hooks/useSportsBook";

const Tennis = () => {
  const { data } = useSportsBook(4);
  return (
    <div>
      <Group data={data} />
    </div>
  );
};

export default Tennis;
