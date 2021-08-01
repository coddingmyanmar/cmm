
// Toggle Navbar BG
let nav = document.querySelector('.navigation')
let nav_a = document.querySelectorAll('.navigation a')
window.addEventListener('scroll', _ => {
	console.log(nav)
	if(window.pageYOffset > 100) {
		nav.classList.add('bg-white')
		nav.style.cssText = "box-shadow: 0.01rem 0.01rem 8px rgba(0,0,0,0.2); "
		for(a of nav_a){
			a.classList.remove('text-white')
		}
	} else {
		nav.classList.remove('bg-white')
		nav.style.cssText = "box-shadow: none; "
		for(a of nav_a){
			a.classList.add('text-white')
		}
	}
})