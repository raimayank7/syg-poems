
(function(){
  document.addEventListener('click',function(e){var b=e.target.closest('[data-say]');if(!b||!window.speechSynthesis)return;
    var u=new SpeechSynthesisUtterance(b.getAttribute('data-say'));u.lang='hi-IN';u.rate=.8;var v=speechSynthesis.getVoices().filter(function(x){return /^hi/i.test(x.lang)})[0];if(v)u.voice=v;speechSynthesis.cancel();speechSynthesis.speak(u)});
  var q=document.getElementById('dq');
  if(q)q.addEventListener('input',function(){var v=q.value.trim().toLowerCase();document.querySelectorAll('.dlist li').forEach(function(li){li.hidden=!!v&&li.textContent.toLowerCase().indexOf(v)<0})});
})();
