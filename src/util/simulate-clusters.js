export function simulateClusters(time = 7000) {
  const wakeUpTime = Date.now() + time;
  while (Date.now() < wakeUpTime) {}
  return "https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif";
}
