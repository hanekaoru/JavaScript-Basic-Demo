window.onload = function () {

  var oStar = document.getElementById('star');
  var aLi = oStar.getElementsByTagName('li');
  var oUl = oStar.getElementsByTagName('ul')[0];
  var oSpan = oStar.getElementsByTagName('span')[1];
  var oP = oStar.getElementsByTagName('p')[0];
  var i = iScore = iStar = 0;

  var aMsg = [
    '很不满意|差得太离谱，与卖家描述的严重不符，非常不满',
    '不满意|部分有破损，与卖家描述的不符，不满意',
    '一般|质量一般，没有卖家描述的那么好',
    '满意|质量不错，与卖家描述的基本一致，还是挺满意的',
    '非常满意|质量非常好，与卖家描述的完全一致，非常满意'
  ]

  // index 从 0 开始，要 index 与 length 对应起来 length 需要 -1
  // 对比 for (i = 0; i < aLi.length; i++) 
  for (i = 1; i <= aLi.length; i++) {

    aLi[i - 1].index = i;
    aLi[i - 1].onmouseover = function () {
      fnPoint(this.index);
      oP.style.display = 'block';
      oP.style.left = oUl.offsetLeft + this.index * this.offsetWidth - 104 + 'px';
      oP.innerHTML = '<em><b>' + this.index + '</b> 分 ' + aMsg[this.index - 1].match(/(.+)\|/)[1] + '</em>' + aMsg[this.index - 1].match(/\|(.+)/)[1]
    };

    aLi[i - 1].onmouseout = function () {
      fnPoint(this.index);
      oP.style.display = 'none'
    };

    //点击后进行评分处理
    aLi[i - 1].onclick = function () {
      iStar = this.index;
      oP.style.display = 'none';
      oSpan.innerHTML = '<strong>' + (this.index) + ' 分</strong> (' + aMsg[this.index - 1].match(/\|(.+)/)[1] + ')'
    }
  }

  //评分处理
  function fnPoint(iArg) {
    //分数赋值
    iScore = iArg || iStar;
    for (i = 0; i < aLi.length; i++) {
      aLi[i].className = i < iScore ? 'on' : '';
    }
  }

};