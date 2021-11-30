// lazy line painter code



(function () {

  document.onreadystatechange = () => {

    if (document.readyState === 'complete') {

      /**
       * Setup your Lazy Line element.
       * see README file for more settings
       */

      document.getElementById('yellowsvg').style.visibility='visible'

      let el = document.querySelector('#yellowsvg');
      let myAnimation = new LazyLinePainter(el, { "ease":"easeLinear",
      "strokeWidth":1,
      "strokeOpacity":1,
      "strokeColor":"#F2B531",
      "reverse":true});

      
      
      myAnimation.paint();
    }
    function setDone() {
      const logoPt1 = document.querySelector('#yellowsvg-0');
      logoPt1.classList.add('path-complete');
      const logoPt2 = document.querySelector('#yellowsvg-1');
      logoPt2.classList.add('path-complete');
    }
    setDone();
  }

})();









