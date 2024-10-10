import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";
/* passbook api */
const useBettingProfitLoss = () => {
  const token = useSelector(userToken);
  /* from date 7 days earlier */
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const { data: passbook } = useQuery({
    queryKey: ["passbook"],
    /* enable when token loading */
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData({
        from: fromDate,
        to: toDate,
        type: "GR",
        token: generatedToken,
        site: settings.siteUrl,
      });
      const res = await axios.post(API.accountStatement, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
  });
  return { passbook };
};

export default useBettingProfitLoss;
