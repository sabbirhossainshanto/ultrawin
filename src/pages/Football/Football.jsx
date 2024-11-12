import useSportsBook from "../../hooks/useSportsBook";
import Group from "../../components/ui/Home/Group";
import { useEffect, useState } from "react";
import Loader from "../../components/shared/Loader/Loader";

const Football = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useSportsBook(1);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 100);
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

export default Football;
