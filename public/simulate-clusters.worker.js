this.addEventListener(
  "message",
  function (e) {
    var time = e.data || 7000;
    var wakeUpTime = Date.now() + time;
    while (Date.now() < wakeUpTime) {}
    this.postMessage("https://media.giphy.com/media/rytLWOErAX1F6/giphy.gif");
  },
  false
);
