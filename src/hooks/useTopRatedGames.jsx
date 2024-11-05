import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";

const useTopRatedGames = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["topRatedGames"],

    queryFn: async () => {
      const res = await axios.post(API.topRatedGames);
      const result = res?.data;
      return result;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useTopRatedGames;
