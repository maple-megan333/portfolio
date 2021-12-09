

// lazy line painter code

const lazyline = () => {



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
}

// simple slider code
const simpleSlider = () => {

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "inline";  
  setTimeout(carousel, 9000);    
}
}

//contact form code
const contactMe = () =>{
const submits = document.getElementById ('submit');
function confirm(event) {
  //alert("Thank you for taking the time to reach out to me! I will get back to you shortly!");
  const form = document.getElementById('form');
  const confirms   = document.getElementById('confirms');
  //const submits = document.getElementById ('submit');

  form.style.display = 'none';
  submits.style.display = 'none';

  confirms.style.display ='block';
  event.preventDefault();

}
form.addEventListener('submit', confirm);
}








