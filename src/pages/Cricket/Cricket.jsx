import { useEffect, useState } from "react";
import Group from "../../components/ui/Home/Group";
import useSportsBook from "../../hooks/useSportsBook";
import Loader from "../../components/shared/Loader/Loader";

const Cricket = () => {
  const [loading, setLoading] = useState(true);
  const { data } = useSportsBook(4);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Group data={data} />
    </>
  );
};

export default Cricket;
