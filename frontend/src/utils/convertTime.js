const convertTime = (time) => {
  const timeParts = time.split(":");
  let hours = parseInt(timeParts[0]);
  const minutes = timeParts[1];

  let meridiem = "AM";
  if (hours >= 12) {
    meridiem = "PM";

    if (hours > 12) {
      hours -= 12;
    }
  }

  return (
    hours.toString().padStart(2) + ":" +
    minutes.padStart(2, "0") +
    " " +
    meridiem
  );
};

export default convertTime;
