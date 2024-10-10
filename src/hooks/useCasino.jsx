import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../api";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";
/* Get casino */
const useCasino = () => {
  const token = useSelector(userToken);
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["casinoWolf"],
    queryFn: async () => {
      const res = await axios.post(
        API.slotsWolf,
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

export default useCasino;
