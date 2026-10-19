(function(){
function loadTrackers(){
  if(window._trackersLoaded)return;window._trackersLoaded=true;
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq('init','1013461709182103');fbq('track','PageView');
  fbq('init','934494976050338');fbq('track','PageView');
  var gs=document.createElement('script');gs.async=true;gs.src='https://www.googletagmanager.com/gtag/js?id=G-B9QH1CPDDS';document.head.appendChild(gs);
  window.dataLayer=window.dataLayer||[];window.gtag=function(){dataLayer.push(arguments);};gtag('js',new Date());gtag('config','G-B9QH1CPDDS');
}
window.cookieChoice=function(v){try{localStorage.setItem('cookieConsent',v)}catch(e){}var b=document.getElementById('cookie-banner');if(b)b.style.display='none';if(v==='accepted')loadTrackers();};
var c=null;try{c=localStorage.getItem('cookieConsent')}catch(e){}
var b=document.getElementById('cookie-banner');
if(c==='accepted'){loadTrackers()}else if(!c&&b){b.style.display='block'}

function loadAsia(){
  if(window.__asiaChat)return;window.__asiaChat=true;
  var s=document.createElement('script');
  s.src='https://dbrqdnfoxoqnwytfsyvf.supabase.co/storage/v1/object/public/assets/widget.js';s.async=true;
  s.setAttribute('data-key','wc_stalsystem_92e3f2065299ecc4');s.setAttribute('data-color','#ff6b35');
  s.setAttribute('data-title','Asia · asystentka AI');
  s.setAttribute('data-greeting','Cześć! Jestem Asia, asystentka AI StalSystem. W czym mogę pomóc?');
  s.setAttribute('data-offset','90');document.body.appendChild(s);
}
loadAsia();
})();
