import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { logout } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

const useBonusBalance = () => {
  const dispatch = useDispatch();
  const bonusToken = localStorage.getItem("bonusToken");
  const { data: bonusBalance = {}, refetch: refetchBonusBalance } = useQuery({
    queryKey: ["bonusBalance"],
    enabled: bonusToken ? true : false,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: settings.siteUrl,
      });
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${bonusToken}`,
        },
      });

      if (res?.data?.success === false && bonusToken) {
        dispatch(logout());
      }
      if (res?.data?.success && bonusToken) {
        const data = res.data?.result;
        return data;
      }
    },
  });

  return { bonusBalance, refetchBonusBalance };
};

export default useBonusBalance;
