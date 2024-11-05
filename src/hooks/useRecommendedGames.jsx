import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";

const useRecommendedGames = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["recommendedGames"],

    queryFn: async () => {
      const res = await axios.post(API.recommendedGames);
      const result = res?.data;
      return result;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useRecommendedGames;
