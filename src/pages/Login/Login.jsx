import assets from "../../assets";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import handleRandomToken from "../../utils/handleRandomToken";
import { settings } from "../../api";
import handleEncryptData from "../../utils/handleEncryptData";
import { setUser } from "../../redux/features/auth/authSlice";

import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const { register, handleSubmit } = useForm({
    // defaultValues: {
    //   username: "8888884000",
    //   password: "avinya123",
    // },
  });

  const onSubmit = async ({ username, password }) => {
    const generatedToken = handleRandomToken();
    const loginData = {
      username: username,
      password: password,
      token: generatedToken,
      site: settings.siteUrl,
      b2c: true,
    };
    const encryptedData = handleEncryptData(loginData);
    const result = await handleLogin(encryptedData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      if (token && user) {
        navigate("/");
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };
  return (
    <div className="login-ctn">
      <div className="title-row">
        <img src={assets.title} alt="website" className="logo" />
      </div>
      <div className="login-card">
        <div className="login-form-page">
          <form onSubmit={handleSubmit(onSubmit)} className="login-form-ctn">
            <div className="back-icon">
              <div
                className="back"
                style={{ cursor: "pointer" }}
                onClick={() => navigate(-1)}
              >
                <svg
                  className="MuiSvgIcon-root arrow-clr"
                  focusable="false"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path>
                </svg>
                <span className="back-text">Back</span>
              </div>
              <div className="demo">
                <button
                  className="MuiButtonBase-root MuiButton-root MuiButton-contained login-form-btn-demo MuiButton-containedPrimary"
                  type="button"
                >
                  <span className="MuiButton-label">Demo Login</span>
                  <span className="MuiTouchRipple-root"></span>
                </button>
              </div>
            </div>
            <div className="card-title">Sign in</div>
            <span className="card-login-here">
              Please enter your login details here.
            </span>
            <span className="usr-input">
              <span className="input-labell sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                Username <span className="red-text">*</span>
              </span>
              <div className="MuiFormControl-root MuiTextField-root login-input-field user-name">
                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl">
                  <input
                    {...register("username", { required: true })}
                    aria-invalid="false"
                    name="username"
                    placeholder="username"
                    type="text"
                    className="MuiInputBase-input MuiOutlinedInput-input"
                  />
                </div>
              </div>
            </span>
            <div className="pwd-input">
              <span className="input-labell sc-ion-label-md-h sc-ion-label-md-s md hydrated">
                Password <span className="red-text">*</span>
              </span>
              <div className="MuiFormControl-root login-input-field pwd-field">
                <div className="MuiInputBase-root MuiOutlinedInput-root MuiInputBase-formControl MuiInputBase-adornedEnd MuiOutlinedInput-adornedEnd">
                  <input
                    {...register("password", { required: true })}
                    aria-invalid="false"
                    id="standard-adornment-password"
                    name="password"
                    placeholder="password"
                    type="password"
                    className="MuiInputBase-input MuiOutlinedInput-input MuiInputBase-inputAdornedEnd MuiOutlinedInput-inputAdornedEnd"
                  />
                  <div className="MuiInputAdornment-root MuiInputAdornment-positionEnd">
                    <button
                      className="MuiButtonBase-root MuiIconButton-root"
                      type="button"
                      aria-label="toggle password visibility"
                    >
                      <span className="MuiIconButton-label">
                        <svg
                          className="MuiSvgIcon-root"
                          focusable="false"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path>
                        </svg>
                      </span>
                      <span className="MuiTouchRipple-root"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="forgot-pwd">
              <a href="/forgot-password">Forgot Username/Password?</a>
            </div>
            <div className="login-demologin-btns">
              <button
                className="MuiButtonBase-root MuiButton-root MuiButton-contained login-form-btn MuiButton-containedPrimary"
                type="submit"
              >
                <span className="MuiButton-label">Login</span>
                <span className="MuiTouchRipple-root"></span>
              </button>
            </div>
          </form>
          <div className="account-SignUp">
            <div className="account-dontHaveAccount">Don’t have account?</div>
            <span className="back-to-SignUp">Sign Up</span>
          </div>
          <div className="socialMedia-login">
            <div className="sm-new-ctn">
              <div className="sm-new-links">
                <button className="sm-new-link">
                  <img
                    src={assets.telegram}
                    alt="TELEGRAM_NUMBER"
                    className="sm-new-img"
                  />
                  <div className="sm-text">Follow on Telegram</div>
                </button>
                <button className="sm-new-link">
                  <img
                    src={assets.instagram}
                    alt="INSTAGRAM_LINK"
                    className="sm-new-img"
                  />
                  <div className="sm-text">Follow on Instagram</div>
                </button>
              </div>
            </div>
          </div>
          <div className="disclaimer-ctn-text">
            <div className="disclaimer-width">
              Disclaimer: Please note that Gambling involves a financial risk
              and could be addictive over time if not practised within limits.
              Only 18+ people should use the services and should use it
              responsibly. Players should be aware of any financial risk
              andgovern themselves accordingly.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
