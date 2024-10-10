import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

/* go casino api(aura) */
const useCardGames = () => {
  const token = useSelector(userToken);
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["cardGames"],

    queryFn: async () => {
      const res = await axios.post(
        API.auraWolf,
        {
          gameList: "All",
          product: "All",
          isHome: true,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const result = res?.data;
      if (result?.status === "success") {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useCardGames;
