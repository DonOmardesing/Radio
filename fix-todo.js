function volverALas55(){document.querySelectorAll('audio,video').forEach(a=>{try{a.pause();a.currentTime=0}catch(e){}});document.querySelectorAll('iframe').forEach(f=>{try{if(f.src&&f.src!='about:blank')f.src='about:blank'}catch(e){}});document.body.style.overflow='';document.body.style.position='';document.documentElement.style.overflow='';const r=document.getElementById('root');if(r){r.style.display='block';r.style.visibility='visible';r.style.opacity='1'}window.scrollTo({top:0,behavior:'smooth'})}
(function(){
const cssRadio=`#radio-section{background:radial-gradient(900px 500px at 50% 0%, rgba(0,212,255,0.18) 0%, #05070a 70%)!important;border:1px solid rgba(0,212,255,0.28)!important;border-radius:22px!important;padding:22px 16px 80px 16px!important;position:relative!important}.btn-cerrar-neon{background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);color:#fff;padding:7px 14px;border-radius:20px;cursor:pointer;font-size:12px;font-weight:700}.card-neon{background:linear-gradient(180deg,#0e1e2e,#0a1420);border:1px solid rgba(0,212,255,0.28);border-radius:18px;padding:16px 18px;display:flex;gap:14px;margin-bottom:12px}.card-neon.playing{border-color:#00d4ff;box-shadow:0 0 28px rgba(0,212,255,0.4)}.play-neon{width:52px;height:52px;background:#00d4ff;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#000;cursor:pointer;font-size:20px}a[href*="ice6.somafm.com"],a[href*="radiobob.de"]{display:none!important}.btn-below-bg{position:absolute;bottom:14px;left:50%;transform:translateX(-50%);background:#00d4ff;color:#000;border:none;padding:10px 24px;border-radius:24px;font-weight:800;font-size:13px;cursor:pointer}`;
let sr=document.getElementById('style-radio');if(!sr){sr=document.createElement('style');sr.id='style-radio';sr.textContent=cssRadio;document.head.appendChild(sr);}
function injectRadio(){const sec=document.getElementById('radio-section');if(!sec||document.getElementById('neon-injected'))return;const stations=[{name:"Radio 80s global",stream:"https://ice6.somafm.com/u80s-256-mp3"},{name:"Smooth jazz & chill",stream:"https://ice6.somafm.com/groovesalad-256-mp3"},{name:"Hard Rock clássic",stream:"https://streams.radiobob.de/hairmetal/aac-192"}];let cur=null;const w=document.createElement('div');w.id='neon-injected';w.innerHTML='<div class="neon-header" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px"><h2 style="color:rgba(255,255,255,0.6);font-size:11px;letter-spacing:2px;margin:0">RADIO EN VIVO • 3 ESTACIONES</h2><button class="btn-cerrar-neon" id="btn-cerrar-top">✕ cerrar</button></div><div id="list"></div><button class="btn-below-bg" id="btn-below">✕ CERRAR RADIO</button>';sec.innerHTML='';sec.appendChild(w);const list=w.querySelector('#list');stations.forEach(s=>{const c=document.createElement('div');c.className='card-neon';c.innerHTML='<div class="play-neon">▶</div><div><div style="font-weight:800;color:#fff">'+s.name+'</div><div style="font-size:11px;opacity:0.6;color:#fff">Detenida</div></div><audio src="'+s.stream+'"></audio>';list.appendChild(c);const b=c.querySelector('.play-neon'),a=c.querySelector('audio'),stt=c.children[1].children[1];const tg=()=>{if(cur&&cur!==a){cur.pause();cur.currentTime=0;document.querySelectorAll('.play-neon').forEach(x=>x.textContent='▶');document.querySelectorAll('.card-neon').forEach(x=>x.classList.remove('playing'))}if(a.paused){a.play().catch(()=>{});b.textContent='❚❚';c.classList.add('playing');stt.textContent='Sonando • En vivo';cur=a}else{a.pause();b.textContent='▶';c.classList.remove('playing');stt.textContent='Detenida';cur=null}};b.onclick=tg;c.onclick=e=>{if(e.target!==b)tg()}});const closeAll=()=>{if(cur){cur.pause();cur=null} volverALas55();const cass=document.querySelector('img[alt="RADIO EN VIVO"]');if(cass)cass.click()};document.getElementById('btn-cerrar-top').onclick=closeAll;document.getElementById('btn-below').onclick=closeAll;}
new MutationObserver(()=>{if(document.getElementById('radio-section'))injectRadio()}).observe(document.body,{childList:true,subtree:true});setTimeout(injectRadio,800);setInterval(injectRadio,2000);

// --- 38 PLAYLISTS BACKGROUND ---
const playlists38=[
{n:1,t:"D todito Extreme vol 1",id:"4R2aVNVO3tUtwnuBf4osmJ"},{n:2,t:"D todito Extreme vol 2",id:"5CeIPLwwsfJDIVqitQkN24"},{n:3,t:"D todito Extreme vol 3",id:"07m6qpObVXCnpE9QwWfNlU"},{n:4,t:"D Todito extreme vol 4",id:"6etRLTC3lEJW8C0u9CRavN"},{n:5,t:"D todito extreme vol 5",id:"4xhIewzCyN1Mo0ZHMbgsoE"},{n:6,t:"D todito extreme vol 6",id:"6lLAWN4eD3ZBISACS6tX26"},{n:7,t:"En español vol 1",id:"1PhlSkv6hMjtAy0Rb9yZiU"},{n:8,t:"En español vol 2",id:"16PURhC7xPwDThOpupCpYI"},{n:9,t:"En español vol 3",id:"4hyK6ap2RfocqUm0OrP3CO"},{n:10,t:"En español vol 4",id:"1WLha6DftZ1JqE2qKhUjdf"},{n:11,t:"En español rock vol 5",id:"3d8ZRIdxbMHReJ5uAd3xsG"},{n:12,t:"En español vol 6",id:"0WvM0a829C9QSigeVTTNhz"},{n:13,t:"En español rock vol 7",id:"0KcyIjmIUuvNiNguT1Xajb"},{n:14,t:"Gothic Rock",id:"1FHcYS8b8n3SaoHWq6XElp"},{n:15,t:"Jazz & Blues vol 1",id:"1nTc4kw55ib4ruYAhrb3hw"},{n:16,t:"Jazz & Blues vol 2",id:"5o80VZeIAI2TeH99SN8zr0"},{n:17,t:"Jazz & Blues vol 3",id:"0RkMpM8KZ2gRR3uhBJEOd2"},{n:18,t:"Jazz & Blues vol 4",id:"5Y94vU6FyoT1wz4tNd2ffb"},{n:19,t:"Jazz & Blues vol 5",id:"1K5vaa641aK52YAm6mGRo3"},{n:20,t:"Jazz & Blues vol 6",id:"5XCxnfSA5hsI41CEr4QnM6"},{n:21,t:"Jazz & Blues vol 7",id:"43oP6KP5pPJKpYM9C2mexH"},{n:22,t:"Jazz & Blues vol 8",id:"1PFcs9ABnQ7aXnAbFfyXGI"},{n:23,t:"SLOW tecno Beats",id:"69qW23fBUmeHxnv1E0fve4"},{n:24,t:"Música clásica vol 1",id:"2AtZda1IWZ6I7a3lwo3qpf"},{n:25,t:"Chillout covers",id:"0qrdlJsvqzcEJ0pG2HxoAP"},{n:26,t:"Deep House vol 1",id:"3GB57XvyTnJMaV5jQZzJBR"},{n:27,t:"Deep house vol 2",id:"0e9KxtXkGK1V4zjlr3G07D"},{n:28,t:"Minimal tecno",id:"13JT3ltN39gKetE9K1pShw"},{n:29,t:"24 horas/Zen Music",id:"64YUE6nVTmyDvhHSxcJqjM"},{n:30,t:"Neo Classic Sounds",id:"4FO0aPuNgnkPbOwnMGTiOb"},{n:31,t:"Metallica full",id:"7sC81mLKoRQDxkrX0CPpMZ"},{n:32,t:"Omar Experiences vol 1",id:"2tk34IKcVjTx8aidXZF4HL"},{n:33,t:"Tango/chill/down tempo",id:"7DsREkG2HAHqROmpr9KB8E"},{n:34,t:"Rap Old School",id:"4yugmuVvpp6EkvGoVP4Hqi"},{n:35,t:"Just Reguee",id:"53YPAtzeqkIG1ZrAePp14J"},{n:36,t:"Rock Me Now vol 1",id:"7nMIklnMjw8gZ5UCYU5kOH"},{n:37,t:"Rock Me Now vol 2",id:"2MFCP2u6gF4ef7x5XhDxfD"},{n:38,t:"Rock Me Now vol 3",id:"24H30sy8YzDLwB1pZX6Idh"}
];

const cssBg=`
#background-38-wrap{display:none;padding:10px;background:#000}
#background-38-wrap h3{color:#fff;font-weight:900;text-align:center;margin:10px 0 16px;font-size:18px;letter-spacing:1px}
#background-38-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px}
.bg-card{position:relative;background:#111;border:1px solid rgba(255,255,255,0.12);border-radius:12px;overflow:hidden}
.bg-card img{width:100%;aspect-ratio:1/1;object-fit:cover;display:block}
.bg-card.bg-info{padding:8px;background:#000}
.bg-card.bg-title{color:#fff;font-size:11px;font-weight:800;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.bg-card.bg-num{color:rgba(255,255,255,0.5);font-size:10px}
.bg-play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:44px;height:44px;background:#00a8ff;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#fff;font-size:18px;box-shadow:0 0 12px rgba(0,168,255,0.6);cursor:pointer}
#btn-ir-background{display:flex;align-items:center;justify-content:center;width:92%;max-width:400px;margin:30px auto 10px auto;background:#00d4ff;color:#000;border:none;padding:16px 22px;border-radius:30px;font-weight:900;font-size:15px;cursor:pointer;box-shadow:0 0 22px rgba(0,212,255,0.6);}
#spotify-modal{position:fixed;inset:0;background:rgba(0,0,0,0.92);display:none;align-items:center;justify-content:center;z-index:999999;padding:16px}
#spotify-modal.on{display:flex}
#spotify-box{width:100%;max-width:400px;background:#111;border-radius:18px;border:2px solid #00d4ff;overflow:hidden;position:relative}
#spotify-close{position:absolute;top:8px;right:8px;width:32px;height:32px;background:#000;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:#fff;z-index:2}
`;
let sb=document.getElementById('style-bg-38');if(!sb){sb=document.createElement('style');sb.id='style-bg-38';sb.textContent=cssBg;document.head.appendChild(sb);}

function openSpotify(id){
  let m=document.getElementById('spotify-modal');
  if(!m){
    m=document.createElement('div');m.id='spotify-modal';
    m.innerHTML='<div id="spotify-box"><div id="spotify-close">✕</div><div id="spotify-embed"></div></div>';
    document.body.appendChild(m);
    m.querySelector('#spotify-close').onclick=()=>{m.classList.remove('on');document.getElementById('spotify-embed').innerHTML='';document.body.style.overflow='';};
    m.onclick=(e)=>{if(e.target===m){m.classList.remove('on');document.getElementById('spotify-embed').innerHTML='';document.body.style.overflow='';}};
  }
  document.getElementById('spotify-embed').innerHTML='<iframe src="https://open.spotify.com/embed/playlist/'+id+'" width="100%" height="380" frameborder="0" allow="encrypted-media"></iframe>';
  m.classList.add('on');document.body.style.overflow='hidden';
}

function buildBackground(){
  if(document.getElementById('background-38-wrap')) return;
  const footer=document.querySelector('footer');
  const wrap=document.createElement('div');wrap.id='background-38-wrap';
  wrap.innerHTML='<h3>🎧 BACKGROUND • 38 PLAYLISTS EXCLUSIVAS</h3><div id="background-38-grid"></div><button id="btn-volver-55" style="width:92%;max-width:400px;margin:20px auto;display:flex;justify-content:center;background:rgba(255,255,255,0.08);border:1px solid rgba(255,255,255,0.18);color:#fff;padding:12px;border-radius:24px;font-weight:700;cursor:pointer">↑ VOLVER A LAS 55</button>';
  if(footer&&footer.parentNode) footer.parentNode.insertBefore(wrap,footer); else document.body.appendChild(wrap);
  const grid=wrap.querySelector('#background-38-grid');
  playlists38.forEach(p=>{
    const card=document.createElement('div');card.className='bg-card';
    card.innerHTML='<img src="https://picsum.photos/seed/'+p.id+'/600/600" loading="lazy"><div class="bg-play">▶</div><div class="bg-info"><div class="bg-title">'+String(p.n).padStart(2,'0')+' • '+p.t+'</div><div class="bg-num">'+p.n+'/38</div></div>';
    card.querySelector('.bg-play').onclick=()=>openSpotify(p.id);
    card.querySelector('img').onclick=()=>openSpotify(p.id);
    grid.appendChild(card);
  });
  wrap.querySelector('#btn-volver-55').onclick=()=>{window.scrollTo({top:0,behavior:'smooth'})};
}

function addBtn(){
  if(document.getElementById('btn-ir-background')) return;
  const footer=document.querySelector('footer');
  const btn=document.createElement('button');btn.id='btn-ir-background';btn.textContent='ir al background';
  btn.onclick=()=>{
    buildBackground();
    const sec=document.getElementById('background-38-wrap');
    sec.style.display='block';
    sec.scrollIntoView({behavior:'smooth'});
  };
  if(footer&&footer.parentNode) footer.parentNode.insertBefore(btn,footer); else document.body.appendChild(btn);
}
setTimeout(()=>{buildBackground();addBtn();},1200);
setInterval(addBtn,2500);
})();
