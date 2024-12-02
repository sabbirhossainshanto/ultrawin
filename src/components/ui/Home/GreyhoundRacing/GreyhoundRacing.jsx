import { useGetAllGroupEventsQuery } from "../../../../redux/features/events/events";
import HorseGreyhound from "../HorseGreyhound/HorseGreyhound";

const GreyhoundRacing = () => {
  const { data } = useGetAllGroupEventsQuery(4339, {
    pollingInterval: 1000,
  });
  return (
    <HorseGreyhound data={data} title="Greyhound Racing" eventTypeId={4339} />
  );
};

export default GreyhoundRacing;
