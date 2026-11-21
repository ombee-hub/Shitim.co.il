/* שיטים דרכא — header/footer/nav משותפים (קונספט) */
(function(){
  var nav=[
    ["about","אודות","about.html"],["magamot","מגמות","magamot.html"],
    ["tzevet","צוות","tzevet.html"],["hodaot","חדשות","hodaot.html"],["maarechet","מערכת שעות","maarechet.html"],
    ["takanon","תקנון","takanon.html"],["tfasim","טפסים","tfasim.html"]
  ];
  var logoImg='<img class="logo-full" src="images/wide-shittim-logo.webp" alt="שיטים דרכא — הערבה התיכונה">';
  var page=document.body.getAttribute("data-page")||"";
  var links=nav.map(function(n){return '<a href="'+n[2]+'"'+(n[0]===page?' class="active"':'')+'>'+n[1]+'</a>';}).join("");

  var header=
   '<div class="util"><div class="wrap">'+
     '<div class="grp"><a href="tel:086592280"><i class="ti ti-phone"></i> 08-6592280</a>'+
     '<a class="hide" href="mailto:tichon@shitim.co.il"><i class="ti ti-mail"></i> tichon@shitim.co.il</a></div>'+
     '<div class="grp"><a href="https://wa.me/97286592280" target="_blank" rel="noopener" aria-label="וואטסאפ"><i class="ti ti-brand-whatsapp"></i></a>'+
     '<a href="https://www.facebook.com/shittimschool" target="_blank" rel="noopener" aria-label="פייסבוק"><i class="ti ti-brand-facebook"></i></a></div>'+
   '</div></div>'+
   '<header class="site"><div class="wrap hd">'+
     '<div class="brand-nav">'+
       '<button class="menu-btn" aria-label="תפריט"><i class="ti ti-menu-2"></i></button>'+
       '<a class="logo" href="index.html">'+logoImg+'</a>'+
       '<nav class="main">'+links+'</nav>'+
     '</div>'+
     '<div class="hd-end">'+
       '<a class="btn btn-clay" href="contact.html">יצירת קשר <i class="ti ti-send plane" aria-hidden="true"></i></a>'+
     '</div>'+
   '</div></header>';

  var footer=
   '<footer class="site"><div class="wrap">'+'<h2 class="footer-title display">מפת האתר</h2>'+'<div class="fgrid">'+
     '<div><img class="footer-logo" src="images/wide-shittim-logo.webp" alt="שיטים דרכא — הערבה התיכונה">'+
       '<p class="footer-about">תיכון שש-שנתי קהילתי בלב הערבה התיכונה, מתוך רשת דרכא — מענה לכל ילדי הערבה.</p>'+
       '<div class="acc" title="נגישות"><i class="ti ti-wheelchair"></i><i class="ti ti-elevator"></i><i class="ti ti-ear"></i><i class="ti ti-parking"></i></div></div>'+
     '<div><h4>בית הספר</h4><a href="about.html">אודותינו</a><a href="magamot.html">מגמות</a><a href="tzevet.html">צוות</a><a href="bogrim.html">בוגרים</a><a href="takanon.html">תקנון וקוד לבוש</a><a href="memorial.html">לזכר בוגרינו</a><a href="luach.html">לוח אירועים</a><a href="tashlumim.html">תשלומי הורים</a><a href="faq.html">שאלות ותשובות</a><a href="darca.html">רשת דרכא</a></div>'+
     '<div><h4>מערכות ואזורים</h4>'+
       '<a href="maarechet.html">מערכת שעות</a>'+
       '<a href="https://web.mashov.info/students/#!/login/" target="_blank" rel="noopener">משוב</a>'+
       '<a href="excellence.html">תוכנית מצוינות</a>'+
       '<a href="https://www.arava.co.il/buses/" target="_blank" rel="noopener">הסעות</a>'+
       '<a href="resources.html">מאגר קישורים</a>'+
       '<a href="hesbon.html">חשבון Google</a>'+
       '<a href="https://www.facebook.com/shittimschool" target="_blank" rel="noopener">פייסבוק</a></div>'+
     '<div><h4>צרו קשר</h4>'+
       '<div class="row"><i class="ti ti-map-pin"></i><span>בית ספר שיטים דרכא, ד.נ ערבה ספיר<br>מועצה אזורית ערבה תיכונה</span></div>'+
       '<div class="row"><i class="ti ti-phone"></i><span>08-6592280 · 08-6581602</span></div>'+
       '<div class="row"><i class="ti ti-mail"></i><span>tichon@shitim.co.il</span></div>'+
       '<div class="row"><i class="ti ti-brand-whatsapp"></i><a style="padding:0" href="https://wa.me/97286592280" target="_blank" rel="noopener">וואטסאפ</a></div></div>'+
   '</div><div class="fbar"><span>© 2026 כל הזכויות שמורות לתיכון שיטים דרכא</span><div class="grp"><a href="accessibility.html">הצהרת נגישות</a><a href="privacy.html">מדיניות פרטיות</a></div><span class="credit">עיצוב ובנייה ע"י: <a href="https://ombee.co.il" target="_blank" rel="noopener"><img class="credit-logo" src="images/ombee-logo.webp" alt="OMBee — עיצוב ובנייה"></a></span></div></div></footer>';

  var fav=document.createElement("link");fav.rel="icon";fav.type="image/webp";fav.href="images/icon-shitim.webp";document.head.appendChild(fav);
  var hh=document.getElementById("site-header"); if(hh)hh.innerHTML=header;
  var ff=document.getElementById("site-footer"); if(ff)ff.innerHTML=footer;

  /* mobile nav is handled by the side drawer (built at the end) */

  /* bell-schedule widget (home) */
  var elP=document.getElementById("period");
  if(elP){
    var sch=[["שיעור ראשון","08:00","08:45"],["שיעור שני","08:45","09:30"],["הפסקה","09:30","09:50"],
      ["שיעור שלישי","09:50","10:35"],["שיעור רביעי","10:35","11:20"],["הפסקה","11:20","11:40"],
      ["שיעור חמישי","11:40","12:25"],["שיעור שישי","12:25","13:10"],["הפסקה","13:10","13:30"],
      ["שיעור שביעי","13:30","14:15"],["שיעור שמיני","14:15","15:00"]];
    var m=function(t){var p=t.split(":");return +p[0]*60+ +p[1];};
    var elS=document.getElementById("periodSub");
    function upd(){var d=new Date(),nm=d.getHours()*60+d.getMinutes(),dy=d.getDay();
      if(dy===5||dy===6){elP.textContent="סוף שבוע";elS.textContent="הלימודים יחזרו ביום ראשון ב-08:00";return;}
      for(var i=0;i<sch.length;i++){if(nm>=m(sch[i][1])&&nm<m(sch[i][2])){elP.textContent=sch[i][0];
        var nx=sch[i+1];elS.textContent=sch[i][1]+"–"+sch[i][2]+(nx?" · הבא: "+nx[0]+" ב-"+nx[1]:"");return;}}
      if(nm<m("08:00")){elP.textContent="לפני הלימודים";elS.textContent="השיעור הראשון מתחיל ב-08:00";}
      else{elP.textContent="יום הלימודים הסתיים";elS.textContent="נתראה מחר ב-08:00";}}
    upd();setInterval(upd,30000);
  }

  /* staff rendering (tzevet) */
  var root=document.getElementById("staff-root");
  if(root&&window.SHITIM_STAFF){
    var groups=[
      ["הנהלה ובעלי תפקידים","ti-briefcase",function(r){return /מנהל|רכז|יועצ|אב.?בית|מנהלנ|מזכיר|לבורנט/.test(r);}],
      ["מחנכות ומחנכים","ti-users-group",function(r){return /מחנכ/.test(r)&&!/מנהל/.test(r);}],
      ["צוות ההוראה","ti-chalkboard",function(r){return true;}],
      ["סייעות וצוות תומך","ti-heart-handshake",function(r){return /סייע|ספרנ/.test(r);}]
    ];
    var used={},html="";
    function card(p){var src=p.i||'images/placeholder.webp';var av='<img class="av" src="'+src+'" alt="'+p.n+'">';
      return '<div class="scard" data-name="'+p.n+'">'+av+'<b>'+p.n+'</b><span>'+(p.r||"")+'</span></div>';}
    /* management */
    var mgmt=window.SHITIM_STAFF.filter(function(p){return /מנהל|רכז|יועצ|אב.?בית|מנהלנ|מזכיר/.test(p.r);});
    mgmt.forEach(function(p){used[p.n]=1;});
    var support=window.SHITIM_STAFF.filter(function(p){return !used[p.n]&&/סייע|ספרנ|לבורנט/.test(p.r);});
    support.forEach(function(p){used[p.n]=1;});
    var teachers=window.SHITIM_STAFF.filter(function(p){return !used[p.n];});
    function section(title,icon,arr){if(!arr.length)return"";return '<div class="staff-group"><h2><i class="ti '+icon+'"></i> '+title+' <span style="font-size:14px;color:var(--ink-faint);font-weight:400">('+arr.length+')</span></h2><div class="staff-grid">'+arr.map(card).join("")+'</div></div>';}
    html=section("הנהלה, ריכוז וייעוץ","ti-briefcase",mgmt)+section("צוות ההוראה","ti-chalkboard",teachers)+section("סייעות וצוות תומך","ti-heart-handshake",support);
    root.innerHTML=html;
    var search=document.getElementById("staff-search-input");
    if(search)search.addEventListener("input",function(){var q=this.value.trim();
      document.querySelectorAll(".scard").forEach(function(c){c.style.display=(!q||c.getAttribute("data-name").indexOf(q)>-1)?"":"none";});});
  }

  /* ===== mobile side drawer ===== */
  var scrim=document.createElement("div"); scrim.className="scrim";
  var drawer=document.createElement("div"); drawer.className="drawer";
  drawer.innerHTML='<div class="drawer-head"><img class="drawer-logo" src="images/icon-shitim.webp" alt="שיטים דרכא"><button class="drawer-x" aria-label="סגירה"><i class="ti ti-x"></i></button></div>'+
    '<nav class="drawer-nav">'+links+'</nav>'+
    '<a class="btn btn-clay drawer-cta" href="contact.html">יצירת קשר <i class="ti ti-send plane" aria-hidden="true"></i></a>'+
    '<div class="drawer-sys"><span>מערכות ואזורים</span>'+
      '<a href="https://web.mashov.info/students/#!/login/" target="_blank" rel="noopener">משוב</a>'+
      '<a href="maarechet.html">מערכת שעות</a>'+
      '<a href="resources.html">מאגר קישורים</a>'+
      '<a href="memorial.html">לזכר בוגרינו</a>'+
      '<a href="darca.html">רשת דרכא</a>'+
      '<a href="faq.html">שאלות ותשובות</a>'+
      '<a href="tashlumim.html">תשלומי הורים</a>'+
      '<a href="luach.html">לוח אירועים</a>'+
      '<a href="hesbon.html">חשבון Google</a>'+
      '<a href="excellence.html">תוכנית מצוינות</a>'+
      '<a href="https://www.facebook.com/shittimschool" target="_blank" rel="noopener">פייסבוק</a></div>';
  document.body.appendChild(scrim); document.body.appendChild(drawer);
  function openDrawer(){drawer.classList.add("open");scrim.classList.add("show");}
  function closeDrawer(){drawer.classList.remove("open");scrim.classList.remove("show");}
  var mb=document.querySelector(".menu-btn"); if(mb)mb.onclick=openDrawer;
  drawer.querySelector(".drawer-x").onclick=closeDrawer; scrim.onclick=closeDrawer;
  drawer.querySelectorAll("a").forEach(function(a){a.onclick=closeDrawer;});

  /* ===== cookie banner (home page only; תו הנגישות עובר ל-js/accessibility.js) ===== */
  var COOKIE_KEY="shitim-cookie-consent";
  if(page==="home"){
    document.body.insertAdjacentHTML('beforeend',
      '<div class="cookie-banner" id="cookie-banner" role="region" aria-label="הודעת עוגיות">'+
        '<p><svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" style="vertical-align:-5px;margin-left:7px;flex-shrink:0"><circle cx="12" cy="12" r="10" fill="#C2611B"/><circle cx="19.5" cy="4.5" r="4.6" fill="#FBF4E8"/><circle cx="22.5" cy="9.5" r="3" fill="#FBF4E8"/><circle cx="8" cy="8.5" r="1.6" fill="#2E2620"/><circle cx="13.5" cy="11" r="1.2" fill="#2E2620"/><circle cx="9" cy="14.5" r="1.4" fill="#2E2620"/><circle cx="14.5" cy="16" r="1.1" fill="#2E2620"/><circle cx="6.5" cy="12" r="0.9" fill="#2E2620"/></svg> אתר זה משתמש בעוגיות (Cookies) כדי לשפר את חוויית הגלישה שלך. <a href="privacy.html">מדיניות פרטיות</a></p>'+
        '<div class="cookie-btns">'+
          '<button type="button" class="cookie-accept" data-consent="accepted">מאשר/ת</button>'+
          '<button type="button" class="cookie-reject" data-consent="rejected">ביטול</button>'+
        '</div>'+
      '</div>');
    (function(){
      var cb=document.getElementById("cookie-banner"), seen=null;
      try{ seen=localStorage.getItem(COOKIE_KEY); }catch(e){}
      if(!seen) setTimeout(function(){ cb.classList.add("show"); },800);
      cb.addEventListener("click",function(e){
        var b=e.target.closest("[data-consent]"); if(!b) return;
        try{ localStorage.setItem(COOKIE_KEY,b.getAttribute("data-consent")); }catch(err){}
        cb.classList.remove("show");
      });
    })();
  }
})();
