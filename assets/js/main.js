
const burger=document.getElementById('hamburger');const nav=document.getElementById('site-nav');
if(burger&&nav){burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o?'true':'false')})}
document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{const id=a.getAttribute('href').slice(1),el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});nav&&nav.classList.remove('open')}})});
