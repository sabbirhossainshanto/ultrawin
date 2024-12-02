import { useGetAllGroupEventsQuery } from "../../../../redux/features/events/events";
import HorseGreyhound from "../HorseGreyhound/HorseGreyhound";

const HorseRacing = () => {
  const { data } = useGetAllGroupEventsQuery(7, {
    pollingInterval: 1000,
  });

  return <HorseGreyhound data={data} title="Horse Racing" eventTypeId={7} />;
};

export default HorseRacing;
