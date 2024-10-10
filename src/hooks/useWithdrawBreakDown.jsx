import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";
/* get withdraw breakdown data */
const useWithdrawBreakdown = () => {
  const token = useSelector(userToken);
  const { data: withdrawBreakdown = {} } = useQuery({
    queryKey: ["withdraw-breakdown"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        token: generatedToken,
        site: settings.siteUrl,
      });
      const res = await axios.post(`${API.withdrawBreakdown}`, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data.success) {
        return data.result;
      }
    },
    gcTime: 0,
  });
  return { withdrawBreakdown };
};

export default useWithdrawBreakdown;
