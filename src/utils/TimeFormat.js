export const formatTime = (seconds) => {
  const hours = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor(seconds / 60) - (hours * 60);
  const rseconds = seconds % 60;
  return [
    hours ? hours.toString().padStart(2, '0') : null,
    minutes.toString().padStart(2, '0'),
    rseconds.toString().padStart(2, '0')
  ].filter(el => el !== null).join(':');
}