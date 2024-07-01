const dateTime = () => {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const currentDate = new Date();
  const dayOfWeek = daysOfWeek[currentDate.getUTCDay()];
  const UTCTime = currentDate.getTime();

  document.querySelector('[data-testid="currentDay"]').textContent = dayOfWeek;
  document.querySelector('[data-testid="currentTimeUTC"]').textContent =
    UTCTime;
};

// Update the date and time every second
setInterval(dateTime, 1000);

// Initial update
dateTime();
