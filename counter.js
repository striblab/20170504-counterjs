counter(100, "#targetDiv", 1000);

function counter(num, target, speed){
  $({countNum: $('.for').text()}).animate({countNum: Math.round(num)}, {
  duration: speed,
  easing:'linear',
  step: function() {
    $(target).text(Math.floor(this.countNum));
  },
  complete: function() {
    $(target).text(this.countNum);
  }
});
}