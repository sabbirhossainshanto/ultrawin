import { setPlaceBetValues } from "../redux/features/events/eventSlice";
import { setShowLoginModal } from "../redux/features/stateSlice";

export const handleBetSlip = (
  setRunnerId,
  betType,
  games,
  runner,
  exposer,
  dispatch,
  token
) => {
  if (token) {
    let price;
    if (betType === "back" && !runner?.back[0].price) {
      return;
    }
    if (betType === "lay" && !runner?.lay[0].price) {
      return;
    }
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

    if (games?.btype == "FANCY") {
      price = betType === "back" ? runner?.back?.[0]?.line : runner?.lay?.[0]?.line;
    } else {
      price = betType === "back" ? runner?.back[0].price : runner?.lay[0].price;
    }

    const betData = {
      price,
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
      totalSize: 0,
  
    };
    if (games?.btype == "FANCY") {
      setRunnerId(games?.id);
    } else {
      setRunnerId(runner?.id);
    }

    dispatch(setPlaceBetValues(betData));
  } else {
    dispatch(setShowLoginModal(true));
  }
};
