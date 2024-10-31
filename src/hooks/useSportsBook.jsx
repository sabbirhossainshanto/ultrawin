import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import handleDecryptData from "../utils/handleDecryptData";

const useSportsBook = (group) => {
  const { data, refetch: refetchSports } = useQuery({
    queryKey: ["sports"],
    enabled: group !== null ? true : false,
    queryFn: async () => {
      const res = await axios.post(`${API.groupSportsBook}/${group}`);
      const data = res.data;
      const decryptionData = await handleDecryptData(JSON.stringify(data));
      return decryptionData;
    },
    gcTime: 0,
    refetchInterval: 2000,
  });

  return { data, refetchSports };
};

export default useSportsBook;
