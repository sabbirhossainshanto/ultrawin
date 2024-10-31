import { useQuery } from "@tanstack/react-query";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { useSelector } from "react-redux";

const useGetNotification = () => {
  const { token } = useSelector((state) => state.auth);
  const {
    data: notification = "",
    refetch: refetchNotification,
    isFetching: isFetchingNotification,
    isFetched,
  } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      try {
        const generatedToken = handleRandomToken();
        const encryptedData = handleEncryptData({
          token: generatedToken,
          site: settings.siteUrl,
        });
        const response = await fetch(`${API.notification}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(encryptedData),
        });

        const data = await response.json();
        if (data.success) {
          return data?.result?.[0];
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    },
    gcTime: 0,
    refetchInterval: 60000,
  });

  return {
    notification,
    refetchNotification,
    isFetchingNotification,
    isFetched,
  };
};

export default useGetNotification;
