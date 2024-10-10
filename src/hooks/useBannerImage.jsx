import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import { useSelector } from "react-redux";
import { userToken } from "../redux/features/auth/authSlice";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
/* Get casino banner image */
const useBannerImage = () => {
  const token = useSelector(userToken);
  const { data: bannerImage } = useQuery({
    queryKey: ["bannerImage"],
    queryFn: async () => {
      const generatedToken = handleRandomToken();
      const postData = {
        site: settings.siteUrl,
        token: generatedToken,
      };
      const encryptedData = handleEncryptData(postData);
      const res = await axios.post(API.banner, encryptedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = res?.data;
      if (data?.success) {
        return data?.result?.homepage;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { bannerImage };
};

export default useBannerImage;
