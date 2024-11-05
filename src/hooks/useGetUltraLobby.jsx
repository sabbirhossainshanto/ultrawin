import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";

const useGetUltraLobby = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["ultraLobby"],

    queryFn: async () => {
      const res = await axios.post(API.ultraLobby);
      const result = res?.data;
      return result;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useGetUltraLobby;
