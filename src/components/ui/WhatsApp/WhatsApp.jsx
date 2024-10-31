import { useSelector } from "react-redux";
import useGetSocialLink from "../../../hooks/useGetSocialLink";
import assets from "../../../assets";

const WhatsApp = () => {
  const { socialLink } = useGetSocialLink();
  const { token } = useSelector((state) => state.auth);

  const navigateWhatsApp = () => {
    const link =
      token && socialLink?.branchWhatsapplink
        ? socialLink.branchWhatsapplink
        : socialLink?.whatsapplink;
    if (link) window.open(link, "_blank");
  };

  return (
    <>
      {socialLink?.whatsapplink || socialLink?.branchWhatsapplink ? (
        <div
          className="whatsapp-position"
          onClick={navigateWhatsApp}
          title="WhatsAppContact"
          style={{
            position: "absolute",
            cursor: "pointer",
            zIndex: 9999999,
            display: "flex",
            width: "fit-content",
            height: "fit-content",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            transition: "all 0.5s",
          }}
        >
          <div
            style={{
              marginTop: "-3px",
              marginLeft: "-3px",
              background: "transparent",
            }}
          >
            <img style={{ height: "40px" }} src={assets.whatsapp} alt="" />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default WhatsApp;
