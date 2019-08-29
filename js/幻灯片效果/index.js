(function () {
  
  var box = document.getElementById('box');
  var link = box.getElementsByTagName('a');
  var bar = document.getElementById('bar');
  var div = bar.getElementsByTagName('div');
  var cur = 0;

  for (var i = 0; i < div.length; i++) {
    div[i].index = i;
    div[i].onmouseover = function () {
      fadeTo(this.index);
    }
  }

  function fadeTo(index) {
    for (var i = 0; i < div.length; i++) {
      div[i].className = 'switch-item';
      fade(link[i], 0);
    }
    fade(link[index], 100);
    div[index].className += ' active-switch-item';
  }

  function auto() {
    play = setInterval(function () {
      cur++;
      if (cur >= link.length) {
        cur = 0;
      }
      fadeTo(cur);
    }, 3000);
  }

  auto()

  box.onmouseover = function () {
    clearInterval(play);
  }

  box.onmouseout = function () {
    auto()
  }

  function css(obj, attr) {
    if (obj.currentStyle) {
      return obj.currentStyle[attr];
    } else {
      return getComputedStyle(obj, false)[attr];
    }
  }

  function fade(obj, target, fn) {
    obj.timer && clearInterval(obj.timer);

    obj.timer = setInterval(function () {
      var alpha = 0;
      var cur = css(obj, 'opacity') * 100;
      alpha = (target - cur) / 8;
      alpha = alpha > 0 ? Math.ceil(alpha) : Math.floor(alpha);
      var stop = true;

      if (cur != target) {
        stop = false;
        cur += alpha;
        obj.style.filter = 'alpha(opacity=' + cur + ')';
        obj.style.opacity = cur / 100;
      }

      if (stop) {
        clearInterval(obj.timer);
        obj.timer = null;
        fn && fn();
      }
    }, 30);
  }

}());