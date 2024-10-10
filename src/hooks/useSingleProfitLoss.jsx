import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";
/* single passbook */
const useSingleProfitLoss = (marketId) => {
  const token = useSelector(userToken);
  const { data: singlePassbook } = useQuery({
    queryKey: ["singlePassbook"],
    /* enable when token available */
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: settings.siteUrl,
      });
      const res = await axios.post(
        `${API.settledBets}/${marketId}`,
        encryptedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
    gcTime: 0,
  });

  return { singlePassbook };
};

export default useSingleProfitLoss;
