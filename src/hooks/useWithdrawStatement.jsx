import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

/* withdraw api */
const useWithdrawStatement = () => {
  /* from date 7 days earlier */
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  /* current date */
  const toDate = new Date().toISOString().split("T")[0];
  const token = useSelector(userToken);

  const { data: withdrawStatement = [] } = useQuery({
    queryKey: ["withdraw-statement"],
    /* enable when token available */

    queryFn: async () => {
      const generatedToken = handleRandomToken();
      /* Encrypt post data */
      const encryptedData = handleEncryptData({
        from: fromDate,
        to: toDate,
        type: "WITHDRAW",
        status: "ALL",
        token: generatedToken,
        site: settings.siteUrl,
      });
      const res = await axios.post(API.accountStatement, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    gcTime: 0,
  });
  return { withdrawStatement };
};

export default useWithdrawStatement;
