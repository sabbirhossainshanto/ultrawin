import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { logout, userToken } from "../redux/features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const useBalance = () => {
  const dispatch = useDispatch();
  const token = useSelector(userToken);
  const { data: balance = {}, refetch: refetchBalance } = useQuery({
    queryKey: ["balance"],
    enabled: token ? true : false,
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: settings.siteUrl,
      });
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (res?.data?.success === false && token) {
        dispatch(logout());
      }
      if (res?.data?.success && token) {
        const data = res.data?.result;
        return data;
      }
    },
  });

  return { balance, refetchBalance };
};

export default useBalance;
