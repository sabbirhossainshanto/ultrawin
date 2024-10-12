import moment from "moment";
export const formatDate = (data, key) => {
  const dateString = data?.[key]?.date;
  const [d, time] = dateString.split(" ");
  const date = moment(dateString, "DD/MM/YYYY");
  const today = moment().startOf("day");
  const tomorrow = moment().startOf("day").add(1, "day");
  if (date.isSame(today, "day")) {
    return {
      day: "Today",
      time,
    };
  } else if (date.isSame(tomorrow, "day")) {
    return {
      day: "Tomorrow",
      time,
    };
  } else {
    return {
      day: d,
      time,
    };
  }
};
