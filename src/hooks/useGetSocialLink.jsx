import { useQuery } from "@tanstack/react-query";
import { API, settings } from "../api";
import axios from "axios";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";

const useGetSocialLink = () => {
  const token = useSelector(userToken);
  /* get whats app link */
  const { data: socialLink = {} } = useQuery({
    queryKey: ["whatsApp"],
    queryFn: async () => {
      /* random token function */
      const generatedToken = handleRandomToken();
      /* Encryption post data */
      const encryptedData = handleEncryptData({
        site: settings.siteUrl,
        token: generatedToken,
      });
      const res = await axios.post(API.whatsapp, encryptedData, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      });
      const data = res.data;
      if (data?.success) {
        return data?.result;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { socialLink };
};

export default useGetSocialLink;
