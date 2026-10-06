document.documentElement.classList.add('js');
const h=document.querySelector('header'),n=document.querySelector('nav'),m=document.querySelector('.menu');
addEventListener('scroll',()=>h.classList.toggle('sc',scrollY>20),{passive:true});
m.onclick=()=>{const o=n.classList.toggle('o');m.setAttribute('aria-expanded',o)};
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
function obs(){document.querySelectorAll('.rv:not(.seen)').forEach(e=>{e.classList.add('seen');io.observe(e)})}
const lb=document.createElement('div');lb.className='lb';lb.innerHTML='<button aria-label="Close">&times;</button><img alt="">';document.body.append(lb);
lb.onclick=()=>lb.classList.remove('o');
document.addEventListener('click',e=>{const a=e.target.closest('[data-lb]');if(a){e.preventDefault();lb.querySelector('img').src=a.href;lb.classList.add('o')}});
addEventListener('keydown',e=>e.key==='Escape'&&lb.classList.remove('o'));
const g=document.getElementById('gallery');
if(g){for(let i=1;i<=PROJECT_COUNT;i++){const a=document.createElement('a');a.href=`images/projects/p${i}.jpg`;a.dataset.lb=1;a.className='rv';
a.innerHTML=`<img loading="lazy" src="images/projects/p${i}.jpg" alt="Top Shield roofing project ${i}" onerror="this.parentNode.remove()">`;g.append(a)}}
obs();
const f=document.getElementById('enq');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);
const t=`Hello Top Shield, I'm ${d.get('name')} (${d.get('phone')}). Service: ${d.get('svc')}. ${d.get('msg')}`;
open('https://wa.me/254731889297?text='+encodeURIComponent(t),'_blank')};
const sl=document.getElementById('slides');
if(sl){const L=[2,5,1,3,4,6].map(i=>{const d=document.createElement('div');d.style.backgroundImage=`url(images/projects/p${i}.jpg)`;sl.append(d);return d});let k=0;L[0].classList.add('on');
setInterval(()=>{L[k].classList.remove('on');k=(k+1)%L.length;L[k].classList.add('on')},5000)}
