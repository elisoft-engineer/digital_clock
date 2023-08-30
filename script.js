function updateTime() {
  const curr_date = new Date();
  const curr_hour = curr_date.getHours();
  const curr_minute = curr_date.getMinutes();
  const curr_second = curr_date.getSeconds();

  const hour_el = document.getElementById('hour');
  hour_el.textContent = curr_hour;

  const minute_el = document.getElementById('minute');
  minute_el.textContent = curr_minute;

  const second_el = document.getElementById('second');
  second_el.textContent = curr_second;

  const am_pm_el = document.getElementById('am_pm');
  am_pm_el.textContent = curr_hour >= 12 ? 'PM' : 'AM';
}

updateTime();

setInterval(updateTime, 1000);
