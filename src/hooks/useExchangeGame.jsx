import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/* Get casino banner image */
const useExchangeGame = () => {
  const token = useSelector(userToken);
  const { data: exchangeGame } = useQuery({
    queryKey: ["exchange"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const postData = {
        site: settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(postData);

      const res = await axios.post(API.exchangeGames, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;
      if (data?.success) {
        return data?.result?.liveGames;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { exchangeGame };
};

export default useExchangeGame;
