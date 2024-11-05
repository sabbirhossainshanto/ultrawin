import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";

const usePopularGames = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["popularGames"],

    queryFn: async () => {
      const res = await axios.post(API.popularGames);
      const result = res?.data;
      return result;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default usePopularGames;
