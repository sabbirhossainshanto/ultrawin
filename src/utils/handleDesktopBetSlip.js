import {
  setPlaceBetValues,
  setShowBetSlip,
} from "../redux/features/events/eventSlice";

export const handleDesktopBetSlip = (
  betType,
  games,
  runner,
  exposer,
  dispatch,
  price,
  token,
  setSelectedRunner
) => {
  if (token) {
    let pnlBySelection;
    const updatedPnl = [];

    if (exposer?.pnlBySelection) {
      const obj = exposer?.pnlBySelection;
      pnlBySelection = Object?.values(obj);
    }

    if (games?.btype == "FANCY") {
      const pnl = pnlBySelection?.find((p) => p?.RunnerId === games?.id);
      if (pnl) {
        updatedPnl.push(pnl?.pnl);
      }
    } else {
      games?.runners?.forEach((runner) => {
        const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
        if (pnl) {
          updatedPnl.push(pnl?.pnl);
        }
      });
    }

    const betData = {
      price: price,
      side: betType === "back" ? 0 : 1,
      selectionId: games?.btype == "FANCY" ? games?.id : runner?.id,
      btype: games?.btype,
      eventTypeId: games?.eventTypeId,
      betDelay: games?.betDelay,
      marketId: games?.id,
      lay: betType === "lay",
      back: betType === "back",
      selectedBetName: runner?.name,
      name: games.runners.map((runner) => runner.name),
      runnerId:
        games?.btype == "FANCY"
          ? games?.id
          : games.runners.map((runner) => runner.id),
      isWeak: games?.isWeak,
      maxLiabilityPerMarket: games?.maxLiabilityPerMarket,
      isBettable: games?.isBettable,
      maxLiabilityPerBet: games?.maxLiabilityPerBet,
      pnl: updatedPnl,
      marketName: games?.name,
      eventId: games?.eventId,
      eventName: games?.eventName,
    };
    if (games?.btype == "FANCY") {
      setSelectedRunner(games?.id);
    } else {
      setSelectedRunner(runner?.id);
    }
    dispatch(setPlaceBetValues(betData));
    dispatch(setShowBetSlip(true));
  } else {
    ("navigate login");
  }
};
