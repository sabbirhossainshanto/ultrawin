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
  setSelectedRunner,
  navigate
) => {
  if (token) {
    let selectionId;
    let runnerId;
    let pnlBySelection;
    const updatedPnl = [];

    if (exposer?.pnlBySelection) {
      const obj = exposer?.pnlBySelection;
      pnlBySelection = Object?.values(obj);
    }

    if (games?.btype == "FANCY") {
      runnerId = games?.id;

      selectionId = games?.id;
      const pnl = pnlBySelection?.find((p) => p?.RunnerId === games?.id);
      if (pnl) {
        updatedPnl.push(pnl?.pnl);
      }
    } else if (games?.btype && games?.btype !== "FANCY") {
      runnerId = games.runners.map((runner) => runner.id);
      selectionId = runner?.id;
      games?.runners?.forEach((runner) => {
        const pnl = pnlBySelection?.find((p) => p?.RunnerId === runner?.id);
        if (pnl) {
          updatedPnl.push(pnl?.pnl);
        }
      });
    } else {
      runnerId = games.runners.map((runner) => runner.id);
      selectionId = runner?.selectionId;
      games?.runners?.forEach((runner) => {
        const pnl = pnlBySelection?.find(
          (p) => p?.RunnerId === runner?.selectionId
        );
        if (pnl) {
          updatedPnl.push(pnl?.pnl);
        }
      });
    }

    const betData = {
      price: price,
      side: betType === "back" ? 0 : 1,
      selectionId,
      btype: games?.btype,
      eventTypeId: games?.eventTypeId,
      betDelay: games?.betDelay,
      marketId: games?.id,
      lay: betType === "lay",
      back: betType === "back",
      selectedBetName: runner?.name,
      name: games.runners.map((runner) => runner.name),
      runnerId,
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
    } else if (games.btype && games?.btype !== "FANCY") {
      setSelectedRunner(runner?.id);
    } else {
      setSelectedRunner(runner?.selectionId);
    }
    dispatch(setPlaceBetValues(betData));
    dispatch(setShowBetSlip(true));
  } else {
    navigate("login");
  }
};
