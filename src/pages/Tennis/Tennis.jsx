import { useEffect, useState } from "react";
import Group from "../../components/ui/Home/Group";
import useSportsBook from "../../hooks/useSportsBook";
import Loader from "../../components/shared/Loader/Loader";

const Tennis = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useSportsBook(2);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div>
      <Group data={data} />
    </div>
  );
};

export default Tennis;
