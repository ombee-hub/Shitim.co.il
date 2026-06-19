/* שיטים דרכא — header/footer/nav משותפים (קונספט) */
(function(){
  var REG="https://docs.google.com/forms/d/e/1FAIpQLSdBNvspB-OOoFHCCseTsK270vdckgRPHfQg2Llo1_RDXLAbdA/viewform";
  var nav=[
    ["about","אודות","about.html"],["magamot","מגמות","magamot.html"],
    ["tzevet","צוות","tzevet.html"],["hodaot","חדשות","hodaot.html"],["maarechet","מערכת שעות","maarechet.html"],
    ["takanon","תקנון","takanon.html"],["tfasim","טפסים","tfasim.html"],["contact","צור קשר","contact.html"]
  ];
  var logoImg='<img class="logo-full" src="images/Wide-Shittim-logo.png" alt="שיטים דרכא — הערבה התיכונה">';
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
       '<a class="btn btn-clay" style="padding:11px 22px" href="'+REG+'" target="_blank" rel="noopener"><i class="ti ti-pencil-plus"></i> הרשמה</a>'+
     '</div>'+
   '</div></header>';

  var footer=
   '<footer class="site"><div class="wrap">'+'<h2 class="footer-title display">מפת האתר</h2>'+'<div class="fgrid">'+
     '<div><img class="footer-logo" src="images/Wide-Shittim-logo.png" alt="שיטים דרכא — הערבה התיכונה">'+
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
   '</div><div class="fbar"><span>© 2026 כל הזכויות שמורות לתיכון שיטים דרכא</span><span class="credit">עיצוב ובנייה ע"י: <a href="https://ombee.co.il" target="_blank" rel="noopener"><img class="credit-logo" src="images/ombee-logo.png" alt="OMBee — עיצוב ובנייה"></a></span></div></div></footer>';

  var fav=document.createElement("link");fav.rel="icon";fav.type="image/png";fav.href="images/logo-mark.png";document.head.appendChild(fav);
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
    function card(p){var src=p.i||'images/teachers/no-photo/Placeholder.png';var av='<img class="av" src="'+src+'" alt="'+p.n+'">';
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

  /* ===== wrap page content (so accessibility filters skip the toolbars) ===== */
  var a11yRoot=document.createElement("div"); a11yRoot.id="a11y-root";
  while(document.body.firstChild){ a11yRoot.appendChild(document.body.firstChild); }
  document.body.appendChild(a11yRoot);

  /* ===== mobile side drawer ===== */
  var scrim=document.createElement("div"); scrim.className="scrim";
  var drawer=document.createElement("div"); drawer.className="drawer";
  drawer.innerHTML='<div class="drawer-head"><img class="drawer-logo" src="images/logo-mark.png" alt="שיטים דרכא"><button class="drawer-x" aria-label="סגירה"><i class="ti ti-x"></i></button></div>'+
    '<nav class="drawer-nav">'+links+'</nav>'+
    '<a class="btn btn-clay drawer-cta" href="'+REG+'" target="_blank" rel="noopener"><i class="ti ti-pencil-plus"></i> הרשמה</a>'+
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

  /* ===== accessibility widget ===== */
  var FEATURES=[
    {k:"contrast",label:"ניגודיות",icon:"ti-contrast",filter:"contrast(1.45)"},
    {k:"sat",label:"רוויה",icon:"ti-droplet",filter:"saturate(1.7)"},
    {k:"bigtext",label:"טקסט גדול",icon:"ti-zoom-in"},
    {k:"spacing",label:"ריווח טקסט",icon:"ti-arrows-horizontal",cls:"acc-spacing"},
    {k:"lh",label:"גובה שורה",icon:"ti-arrows-vertical",cls:"acc-lh"},
    {k:"links",label:"הדגשת קישורים",icon:"ti-link",cls:"acc-links"},
    {k:"hideimg",label:"הסתרת תמונות",icon:"ti-photo-off",cls:"acc-hideimg"},
    {k:"noanim",label:"עצירת הנפשות",icon:"ti-player-pause",cls:"acc-noanim"},
    {k:"cursor",label:"סמן גדול",icon:"ti-pointer",cls:"acc-cursor"},
    {k:"dys",label:"תמיכה בדיסלקציה",icon:"ti-typography",cls:"acc-dys"},
    {k:"align",label:"יישור טקסט",icon:"ti-align-justified",cls:"acc-align"},
    {k:"desc",label:"תיאורים",icon:"ti-info-circle",cls:"acc-desc",desc:true}
  ];
  var FKEY="shitim-a11y",state={};
  try{ state=JSON.parse(localStorage.getItem(FKEY)||"{}")||{}; }catch(e){ state={}; }
  var A11Y_ICON='<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="4.4" r="1.5" fill="currentColor" stroke="none"></circle><path d="M5.5 8.5 L12 9.8 L18.5 8.5"></path><path d="M12 9.8 V14"></path><path d="M8.7 20 L12 14 L15.3 20"></path></svg>';
  var fab=document.createElement("button"); fab.className="a11y-fab"; fab.setAttribute("aria-label","תפריט נגישות"); fab.innerHTML=A11Y_ICON+'<span class="lbl">נגישות</span>';
  var panel=document.createElement("div"); panel.className="a11y-panel"; panel.setAttribute("role","dialog"); panel.setAttribute("aria-label","הגדרות נגישות");
  panel.innerHTML='<div class="a11y-top"><h3>'+A11Y_ICON+' נגישות</h3><button class="a11y-close" aria-label="סגירה">✕</button></div>'+
    '<div class="a11y-grid">'+FEATURES.map(function(f){return '<button class="a11y-tile" data-k="'+f.k+'"><i class="ti '+f.icon+'"></i><span>'+f.label+'</span></button>';}).join("")+'</div>'+
    '<button class="a11y-reset"><i class="ti ti-refresh"></i> איפוס הגדרות נגישות</button>';
  document.body.appendChild(fab); document.body.appendChild(panel);
  function applyA11y(){
    var fs=[];
    FEATURES.forEach(function(f){
      var on=!!state[f.k];
      if(f.filter && on){ fs.push(f.filter); }
      if(f.cls){ a11yRoot.classList.toggle(f.cls,on); }
      if(f.k==="bigtext"){ a11yRoot.style.zoom=on?"1.15":""; }
      if(f.desc && on){ a11yRoot.querySelectorAll("img").forEach(function(im){ if(!im.title && im.alt){ im.title=im.alt; } }); }
    });
    a11yRoot.style.filter=fs.join(" ");
    panel.querySelectorAll(".a11y-tile").forEach(function(t){ t.classList.toggle("on",!!state[t.getAttribute("data-k")]); });
    try{ localStorage.setItem(FKEY,JSON.stringify(state)); }catch(e){}
  }
  fab.onclick=function(){ panel.classList.toggle("open"); };
  panel.querySelector(".a11y-close").onclick=function(){ panel.classList.remove("open"); };
  panel.querySelectorAll(".a11y-tile").forEach(function(t){ t.onclick=function(){ var k=t.getAttribute("data-k"); state[k]=!state[k]; applyA11y(); }; });
  panel.querySelector(".a11y-reset").onclick=function(){ state={}; a11yRoot.style.zoom=""; a11yRoot.style.filter=""; applyA11y(); };
  document.querySelectorAll(".a11y-open").forEach(function(a){ a.addEventListener("click",function(e){ e.preventDefault(); panel.classList.add("open"); }); });
  applyA11y();
})();
