(function(){
  const key="theme";
  const root=document.documentElement;
  const saved=localStorage.getItem(key);
  if(saved){ root.classList.toggle('dark', saved==='dark'); }
  document.addEventListener('click',(e)=>{
    const t=e.target.closest('[data-toggle-theme]');
    if(!t) return;
    const next = root.classList.toggle('dark') ? 'dark':'light';
    localStorage.setItem(key,next);
  });
})();
