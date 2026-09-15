const menu=document.querySelector('.menu'),nav=document.querySelector('nav');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const buttons=document.querySelectorAll('.filters button'),cards=document.querySelectorAll('.art-card');
buttons.forEach(btn=>btn.addEventListener('click',()=>{buttons.forEach(b=>b.classList.remove('active'));btn.classList.add('active');const f=btn.dataset.filter;cards.forEach(c=>c.style.display=(f==='all'||c.classList.contains(f))?'block':'none')}));
document.getElementById('year').textContent=new Date().getFullYear();
