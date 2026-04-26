  // TYPEWRITER
  const roles=['Backend Developer · AI · Mobile','Python & Flask Engineer','AI Systems Builder','Flutter App Developer'];
  let ri=0,ci=0,del=false;
  const tw=document.getElementById('tw');
  function type(){
    const w=roles[ri];
    if(!del){tw.textContent=w.slice(0,++ci);if(ci===w.length){del=true;setTimeout(type,2200);return;}}
    else{tw.textContent=w.slice(0,--ci);if(ci===0){del=false;ri=(ri+1)%roles.length;}}
    setTimeout(type,del?40:70);
  }
  type();

  // SCROLL REVEAL
  const ro=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');ro.unobserve(e.target);}});
  },{threshold:0.1});
  document.querySelectorAll('.reveal').forEach(el=>ro.observe(el));

  // ACTIVE NAV
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        document.querySelectorAll('.nav-link').forEach(l=>l.classList.remove('active'));
        const a=document.querySelector(`.nav-link[href="#${e.target.id}"]`);
        if(a)a.classList.add('active');
      }
    });
  },{threshold:0.4});
  document.querySelectorAll('section[id]').forEach(s=>io.observe(s));

  // HAMBURGER
  function toggleMenu(){document.getElementById('mob').classList.toggle('open');}

  // CONTACT FORM
  function handleSubmit(e){
    e.preventDefault();
    const btn=document.getElementById('fsub-btn');
    btn.textContent='Sending...';btn.style.opacity='.7';
    setTimeout(()=>{
      btn.textContent='Message Sent ✓';btn.style.background='#22c55e';btn.style.opacity='1';
      e.target.reset();
      setTimeout(()=>{btn.textContent='Send Message →';btn.style.background='var(--gold)';},3000);
    },1200);
  }