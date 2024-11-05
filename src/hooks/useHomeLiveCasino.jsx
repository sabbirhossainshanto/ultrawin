import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";

const useHomeLiveCasino = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["liveCasinoHome"],

    queryFn: async () => {
      const res = await axios.post(API.liveCasinoGames);
      const result = res?.data;
      return result;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useHomeLiveCasino;
