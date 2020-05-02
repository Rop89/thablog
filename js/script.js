/*Navigation bar */

//Scroll to top background white 

/*var nav = document.getElementById("nav-menu")
var letters = document.querySelectorAll("#nav-class > ul > li > a")

window.onscroll = function () {
  if (window.pageYOffset > 100) {
    nav.style.background = "black"
    letters.forEach((letter) => (letter.style.color = "white"))
  } else {
    nav.style.background = "#eaebeb"
    letters.forEach((letter) => (letter.style.color = "black"))
  }
}*/


/*Back to Top*/

function scrollToTop(){
var timerHandle = setInterval(function() {
  if (document.body.scrollTop != 0 || document.documentElement.scrollTop != 0)
  window.scrollBy(0,-50); else clearInterval(timerHandle); },15);
}

/*Newsletter*/

const link = document.querySelector(".section-newsletter")
const newsletter = document.querySelector(".newsletter")

link.addEventListener("click",toggleNewsletter)

function toggleNewsletter(event){
	console.log(event)
	if(event.type === "click"){
			event.preventDefault()
	}
	newsletter.classList.toggle("show")
}


const button = document.querySelector(".newsletter-close")

button.addEventListener("click",toggleNewsletter)

const form = document.querySelector("#mc-embedded-subscribe-form")

form.addEventListener("submit",toggleNewsletter)