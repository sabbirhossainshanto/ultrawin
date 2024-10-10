import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

const useGetAllBankAccount = () => {
  const token = useSelector(userToken);
  const { data: bankAccounts, refetch: refetchBankAccounts } = useQuery({
    queryKey: ["bankAccounts"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const bankData = {
        type: "getBankAccounts",
        status: "1",
        site: settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(bankData);
      const res = await axios.post(API.bankAccount, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
  return { bankAccounts, refetchBankAccounts };
};

export default useGetAllBankAccount;
