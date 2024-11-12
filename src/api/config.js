import axios from "axios";
import { API, settings } from "./index";

export const getSetApis = (setNoticeLoaded, baseUrl) => {
  const url = baseUrl ? `${baseUrl}/notice.json` : "/notice.json";
  axios
    .get(url)
    .then((res) => {
      const data = res.data;
      if (data?.result?.endpoint) {
        const endPoints = data?.result?.endpoint;
        const setting = data?.result?.settings;
        API.popularGames = endPoints?.popularGames;
        API.recommendedGames = endPoints?.recommendedGames;
        API.topRatedGames = endPoints?.topRatedGames;
        API.liveCasinoGames = endPoints?.liveCasinoGames;
        API.ultraLobby = endPoints?.ultraLobby;
        API.depositBreakdown = endPoints?.depositBreakdown;
        API.auraWolf = endPoints?.auraWolf;
        API.groupSportsBook = endPoints?.groupSportsBook;
        API.exchangeGames = endPoints?.exchangeGames;
        API.banner = endPoints?.banner;
        API.uploadScreenshot = endPoints?.uploadScreenshot;
        API.withdrawBreakdown = endPoints?.withdrawBreakdown;
        API.pg = endPoints?.pg;
        API.bankAccount = endPoints?.bankAccount;
        API.liveCasinoIFrame = endPoints?.liveCasinoIFrame;
        API.accessToken = endPoints?.accessToken;
        API.notification = endPoints?.notification;
        API.buttonValue = endPoints?.buttonValue;
        API.login = endPoints?.login;
        API.myMarket = endPoints?.myMarket;
        API.searchEvent = endPoints?.searchEvent;
        API.order = endPoints?.order;
        API.whatsapp = endPoints?.whatsapp;
        API.checkUsername = endPoints?.checkUsername;
        API.register = endPoints?.register;
        API.otp = endPoints?.otp;
        API.menu = endPoints?.menu;
        API.balance = endPoints?.balance;
        API.latestEvents = endPoints?.latestEvents;
        API.accountStatement = endPoints?.accountStatement;
        API.settledBets = endPoints?.settledBets;
        API.activityLogs = endPoints?.activityLogs;
        API.ipDetails = endPoints?.ipDetails;
        API.changePassword = endPoints?.changePassword;
        API.group = endPoints?.group;
        API.currentBets = endPoints?.currentBets;
        API.depositIframe = endPoints?.depositIframe;
        API.fantasyGames = endPoints?.fantasyGames;
        API.ladder = endPoints?.ladder;
        API.auraCasino = endPoints?.auraCasino;
        API.diamondCasino = endPoints?.diamondCasino;
        API.testCasino = endPoints?.testCasino;
        API.liveCasinoWolf = endPoints?.liveCasinoWolf;
        API.exposure = endPoints?.exposure;
        API.eventDetails = endPoints?.eventDetails;
        API.forgotPassword = endPoints?.forgotPassword;
        API.virtualCasino = endPoints?.virtualCasino;
        API.slotsWolf = endPoints?.slotsWolf;
        API.withdrawIframe = endPoints?.withdrawIframe;
        API.assets = endPoints?.assets;
        settings.build = setting?.build;
        settings.casino = setting?.casino;
        settings.otp = setting?.otp;
        settings.siteTitle = setting?.siteTitle;
        settings.forceLogin = setting?.forceLogin;
        settings.registration = setting?.registration;
        settings.demoLogin = setting?.demoLogin;
        settings.withdraw = setting?.withdraw;
        settings.deposit = setting?.deposit;
        settings.siteUrl = setting?.siteUrl;
        settings.balanceApiLoop = setting?.balanceApiLoop;
        settings.disabledDevtool = setting?.disabledDevtool;
        settings.casinoCurrency = setting?.casinoCurrency;
        settings.interval = setting?.interval;
        settings.logoFormat = setting?.logo?.format;
        settings.logoHeight = setting?.logo?.height;
        settings.logoWidth = setting?.logo?.width;
        settings.apkLink = setting?.apkLink;
        settings.betFairCashOut = setting?.betFairCashOut;
        setNoticeLoaded(true);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
