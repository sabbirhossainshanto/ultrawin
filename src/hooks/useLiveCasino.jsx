import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import { API } from "../api";
/* live casino api */
const useLiveCasino = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["liveCasinoWolf"],

    queryFn: async () => {
      const res = await axios.post(API.liveCasinoWolf, {
        gameList: "All",
        product: "All",
        isHome: true,
      });
      const result = res?.data;
      if (result?.status === "success") {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useLiveCasino;
