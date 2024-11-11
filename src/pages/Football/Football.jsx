import useSportsBook from "../../hooks/useSportsBook";
import Group from "../../components/ui/Home/Group";

const Football = () => {
  const { data } = useSportsBook(1);
  return (
    <div>
      <Group data={data} />
    </div>
  );
};

export default Football;
