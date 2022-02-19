const clock = document.getElementById("clock");

const getTime = () => {
  const date = new Date();
  const hour = ("0" + date.getHours()).slice(-2);
  const min = ("0" + date.getMinutes()).slice(-2);
  const sec = ("0" + date.getSeconds()).slice(-2);
  clock.innerText = `${hour}:${min}:${sec}`;
};
getTime();
setInterval(getTime, 1000);
