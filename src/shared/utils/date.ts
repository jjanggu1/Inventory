export const getFormattedDateTime = () => {
    const date = new Date();

  const dayofWeek = ["일", "월", "화", "수", "목", "금", "토"];

  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayOfWeek = dayofWeek[date.getDay()];

  let hours = date.getHours();
  const minutes = date.getMinutes();

  const ampm = hours < 12 ? "오전" :"오후"; 
  hours = hours % 12 || 12;

  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return {
    month,
    day,
    dayOfWeek,
    ampm,
    hours,
    minutes : formattedMinutes
  };
};