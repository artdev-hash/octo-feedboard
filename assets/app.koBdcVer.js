import{d as j,u as re,g as De,h as ie,o as M,c as k,k as b,F as W,E as de,a4 as Te,a5 as Oe,m as T,t as N,n as _e,O as Ce,a as ce,f as be,p as fe,q as pe,_ as F,e as Z,G as Ae,H as xe,D as Pe,I as G,w as ue,R as $e,v as he,a6 as Ie,a7 as Le,a8 as Ee,a9 as Ne,aa as Re,ab as je,ac as ze,ad as Fe,ae as He,af as Ye,Y as Be,j as Ve,z as Ue,ag as We,ah as Je,ai as Ke,aj as Ge}from"./chunks/framework.cTW-77jj.js";import{t as ve}from"./chunks/theme.p87IJD0R.js";function Ze(r){const o={};for(let n=0;n<r.length;n++){const u=r[n],g=u.frontMatter.tags;Array.isArray(g)&&g.forEach(h=>{o[h]||(o[h]=[]),o[h].push(u)})}return o}function qe(r){return[...document.querySelectorAll(".VPDoc h2,h3,h4,h5,h6")].filter(n=>n.id&&n.hasChildNodes()).map(n=>{const u=Number(n.tagName[1]);return{title:Qe(n),link:"#"+n.id,level:u}})}function Qe(r){let o="";for(const n of r.childNodes)if(n.nodeType===1){if(n.classList.contains("VPBadge")||n.classList.contains("header-anchor"))continue;o+=n.textContent}else n.nodeType===3&&(o+=n.textContent);return o.trim()}const ge=r=>(fe("data-v-6b5bf8a1"),r=r(),pe(),r),Xe={class:"main"},et=ge(()=>b("h1",{class:"tags-header"},"Tags",-1)),tt={class:"tags"},at=["onClick"],rt={class:"tag-length"},nt={class:"header"},st={t:"1641783753540",class:"fas-icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1254",style:{width:"20px"}},ot=ge(()=>b("path",{d:"M995.126867 592.38l-360.08 360.08a53.333333 53.333333 0 0 1-71.333334 3.68l356.22-356.22a64 64 0 0 0 0-90.506667L495.8402 85.333333h45.573333a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667z m-128 0l-360.08 360.08a53.333333 53.333333 0 0 1-75.426667 0l-416-416A52.986667 52.986667 0 0 1 0.0002 498.746667V138.666667a53.393333 53.393333 0 0 1 53.333333-53.333334h360.08a52.986667 52.986667 0 0 1 37.713334 15.62l416 416a53.4 53.4 0 0 1 0 75.426667zM341.333533 341.333333a85.333333 85.333333 0 1 0-85.333333 85.333334 85.426667 85.426667 0 0 0 85.333333-85.333334z",fill:"var(--vp-c-brand)","p-id":"1255"},null,-1)),it=[ot],dt={class:"header-text"},ct=["href"],ut={class:"title"},lt=ge(()=>b("div",{class:"title-o"},null,-1)),ht={class:"date"},vt=j({__name:"Tags",setup(r){const{theme:o}=re(),n=De(()=>Ze(o.value.posts));let u=ie("");const g=f=>{u.value=f},h=f=>({fontSize:`${f*.04+.85}em`});return(f,m)=>(M(),k("div",Xe,[et,b("div",tt,[(M(!0),k(W,null,de(n.value,(S,l)=>(M(),k("span",{onClick:x=>g(l),class:_e(["tag",{activetag:T(u)===l}]),style:Ce(h(n.value[l].length))},[ce(N(l)+" ",1),b("span",rt,N(n.value[l].length),1)],14,at))),256))]),Te(b("h4",nt,[(M(),k("svg",st,it)),b("span",dt,N(T(u)),1)],512),[[Oe,T(u)]]),(M(!0),k(W,null,de(n.value[T(u)],(S,l)=>(M(),k("a",{href:T(be)(S.regularPath),key:l,class:"article"},[b("div",ut,[lt,ce(" "+N(S.frontMatter.title),1)]),b("div",ht,N(S.frontMatter.date),1)],8,ct))),128))]))}}),ft=F(vt,[["__scopeId","data-v-6b5bf8a1"]]),pt=r=>(fe("data-v-5a21af5e"),r=r(),pe(),r),gt=pt(()=>b("a",{href:"https://www.buymeacoffee.com/kimdevprc",target:"_blank",title:"artdev-hash"},"artdev-hash",-1)),mt=j({__name:"CopyWright",setup(r){const o=new Date().getFullYear();return(n,u)=>(M(),k("footer",null,[ce(" Powered by "),gt,ce(" | Copyright © 2022-"+N(T(o))+" | MIT License ",1)]))}}),_t=F(mt,[["__scopeId","data-v-5a21af5e"]]),bt=r=>(fe("data-v-e13d0472"),r=r(),pe(),r),$t=bt(()=>b("h1",{class:"blog-title"},"Topics",-1)),wt={class:"blogList"},yt=["href"],Mt={class:"title"},kt={class:"date"},St={class:"pagination"},Dt={key:1},Tt=j({__name:"Page",setup(r){const{theme:o}=re();let n=o.value.posts||[],u=o.value.postLength,g=o.value.pageSize,h=u%g===0?u/g:u/g+1;h=parseInt(h.toString());let f=ie(1);n=n.filter($=>$.regularPath.indexOf("index")<0);let m={};for(let $=0;$<h;$++)m[$]=[];let S=0;for(let $=0;$<n.length;$++)m[S].length>g-1&&(S+=1),m[S].push(n[$]);let l=ie([]);l.value=m[f.value-1];const x=$=>{f.value=$,l.value=m[f.value-1]},D=$=>{const y=$.split("-");let O=y[0],_="",H=y[2];switch(y[1]){case"1":case"01":_="Jan";break;case"2":case"02":_="Feb";break;case"3":case"03":_="Mar";break;case"4":case"04":_="Apr";break;case"5":case"05":_="May";break;case"6":case"06":_="Jun";break;case"7":case"07":_="Jul";break;case"8":case"08":_="Aug";break;case"9":case"09":_="Sep";break;case"10":_="Oct";break;case"11":_="Nov";break;case"12":_="Dec";break;default:_="Month"}return`${_} ${H}, ${O}`};return($,y)=>(M(),k(W,null,[$t,b("div",wt,[(M(!0),k(W,null,de(T(l),O=>(M(),k("a",{class:"blog",href:T(be)(O.regularPath)},[b("div",Mt,N(O.frontMatter.title),1),b("div",kt,N(D(O.frontMatter.date)),1)],8,yt))),256))]),b("div",St,[T(f)>1?(M(),k("button",{key:0,class:"left",onClick:y[0]||(y[0]=O=>x(T(f)-1))}," Previous page ")):Z("",!0),T(h)>1?(M(),k("div",Dt,N(`${T(f)}/${T(h)}`),1)):Z("",!0),T(f)<T(h)?(M(),k("button",{key:2,class:"right",onClick:y[1]||(y[1]=O=>x(T(f)+1))}," Next page ")):Z("",!0)])],64))}}),Ot=F(Tt,[["__scopeId","data-v-e13d0472"]]),Ct={key:0,class:"category"},At={class:"list"},xt={class:"header"},Pt=["href"],It={key:1},Lt={class:"header"},Et=["href"],Nt=j({__name:"Category",setup(r){const{frontmatter:o,theme:n}=re(),u=Ae([]),g=ie(!1);return xe(()=>{u.value=qe(o.value.outline??n.value.outline),g.value=u.value.some(h=>h.level===2)}),(h,f)=>u.value.length>0?(M(),k("div",Ct,[b("ul",At,[(M(!0),k(W,null,de(u.value,m=>(M(),k("li",xt,[m.level===2?(M(),k("a",{key:0,href:m.link,class:"header-h2"},N(m.title),9,Pt)):Z("",!0),m.level===3?(M(),k("ul",It,[b("li",Lt,[b("a",{href:m.link,class:_e(["header-h3",{showIndent:g.value}])},N(m.title),11,Et)])])):Z("",!0)]))),256))])])):Z("",!0)}}),Rt=F(Nt,[["__scopeId","data-v-9d1e4980"]]);var we=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function ye(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Me={exports:{}};(function(r,o){(function(n,u){r.exports=u()})(we,function(){var n=1e3,u=6e4,g=36e5,h="millisecond",f="second",m="minute",S="hour",l="day",x="week",D="month",$="quarter",y="year",O="date",_="Invalid Date",H=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,X={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var a=["th","st","nd","rd"],e=i%100;return"["+i+(a[(e-20)%10]||a[e]||a[0])+"]"}},ee=function(i,a,e){var s=String(i);return!s||s.length>=a?i:""+Array(a+1-s.length).join(e)+i},Y={s:ee,z:function(i){var a=-i.utcOffset(),e=Math.abs(a),s=Math.floor(e/60),t=e%60;return(a<=0?"+":"-")+ee(s,2,"0")+":"+ee(t,2,"0")},m:function i(a,e){if(a.date()<e.date())return-i(e,a);var s=12*(e.year()-a.year())+(e.month()-a.month()),t=a.clone().add(s,D),d=e-t<0,c=a.clone().add(s+(d?-1:1),D);return+(-(s+(e-t)/(d?t-c:c-t))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:D,y,w:x,d:l,D:O,h:S,m,s:f,ms:h,Q:$}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},I="en",L={};L[I]=X;var J="$isDayjsObject",B=function(i){return i instanceof se||!(!i||!i[J])},ne=function i(a,e,s){var t;if(!a)return I;if(typeof a=="string"){var d=a.toLowerCase();L[d]&&(t=d),e&&(L[d]=e,t=d);var c=a.split("-");if(!t&&c.length>1)return i(c[0])}else{var p=a.name;L[p]=a,t=p}return!s&&t&&(I=t),t||!s&&I},C=function(i,a){if(B(i))return i.clone();var e=typeof a=="object"?a:{};return e.date=i,e.args=arguments,new se(e)},v=Y;v.l=ne,v.i=B,v.w=function(i,a){return C(i,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})};var se=function(){function i(e){this.$L=ne(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[J]=!0}var a=i.prototype;return a.parse=function(e){this.$d=function(s){var t=s.date,d=s.utc;if(t===null)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if(typeof t=="string"&&!/Z$/i.test(t)){var c=t.match(H);if(c){var p=c[2]-1||0,w=(c[7]||"0").substring(0,3);return d?new Date(Date.UTC(c[1],p,c[3]||1,c[4]||0,c[5]||0,c[6]||0,w)):new Date(c[1],p,c[3]||1,c[4]||0,c[5]||0,c[6]||0,w)}}return new Date(t)}(e),this.init()},a.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},a.$utils=function(){return v},a.isValid=function(){return this.$d.toString()!==_},a.isSame=function(e,s){var t=C(e);return this.startOf(s)<=t&&t<=this.endOf(s)},a.isAfter=function(e,s){return C(e)<this.startOf(s)},a.isBefore=function(e,s){return this.endOf(s)<C(e)},a.$g=function(e,s,t){return v.u(e)?this[s]:this.set(t,e)},a.unix=function(){return Math.floor(this.valueOf()/1e3)},a.valueOf=function(){return this.$d.getTime()},a.startOf=function(e,s){var t=this,d=!!v.u(s)||s,c=v.p(e),p=function(U,E){var z=v.w(t.$u?Date.UTC(t.$y,E,U):new Date(t.$y,E,U),t);return d?z:z.endOf(l)},w=function(U,E){return v.w(t.toDate()[U].apply(t.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(E)),t)},A=this.$W,P=this.$M,R=this.$D,K="set"+(this.$u?"UTC":"");switch(c){case y:return d?p(1,0):p(31,11);case D:return d?p(1,P):p(0,P+1);case x:var V=this.$locale().weekStart||0,te=(A<V?A+7:A)-V;return p(d?R-te:R+(6-te),P);case l:case O:return w(K+"Hours",0);case S:return w(K+"Minutes",1);case m:return w(K+"Seconds",2);case f:return w(K+"Milliseconds",3);default:return this.clone()}},a.endOf=function(e){return this.startOf(e,!1)},a.$set=function(e,s){var t,d=v.p(e),c="set"+(this.$u?"UTC":""),p=(t={},t[l]=c+"Date",t[O]=c+"Date",t[D]=c+"Month",t[y]=c+"FullYear",t[S]=c+"Hours",t[m]=c+"Minutes",t[f]=c+"Seconds",t[h]=c+"Milliseconds",t)[d],w=d===l?this.$D+(s-this.$W):s;if(d===D||d===y){var A=this.clone().set(O,1);A.$d[p](w),A.init(),this.$d=A.set(O,Math.min(this.$D,A.daysInMonth())).$d}else p&&this.$d[p](w);return this.init(),this},a.set=function(e,s){return this.clone().$set(e,s)},a.get=function(e){return this[v.p(e)]()},a.add=function(e,s){var t,d=this;e=Number(e);var c=v.p(s),p=function(P){var R=C(d);return v.w(R.date(R.date()+Math.round(P*e)),d)};if(c===D)return this.set(D,this.$M+e);if(c===y)return this.set(y,this.$y+e);if(c===l)return p(1);if(c===x)return p(7);var w=(t={},t[m]=u,t[S]=g,t[f]=n,t)[c]||1,A=this.$d.getTime()+e*w;return v.w(A,this)},a.subtract=function(e,s){return this.add(-1*e,s)},a.format=function(e){var s=this,t=this.$locale();if(!this.isValid())return t.invalidDate||_;var d=e||"YYYY-MM-DDTHH:mm:ssZ",c=v.z(this),p=this.$H,w=this.$m,A=this.$M,P=t.weekdays,R=t.months,K=t.meridiem,V=function(E,z,ae,oe){return E&&(E[z]||E(s,d))||ae[z].slice(0,oe)},te=function(E){return v.s(p%12||12,E,"0")},U=K||function(E,z,ae){var oe=E<12?"AM":"PM";return ae?oe.toLowerCase():oe};return d.replace(Q,function(E,z){return z||function(ae){switch(ae){case"YY":return String(s.$y).slice(-2);case"YYYY":return v.s(s.$y,4,"0");case"M":return A+1;case"MM":return v.s(A+1,2,"0");case"MMM":return V(t.monthsShort,A,R,3);case"MMMM":return V(R,A);case"D":return s.$D;case"DD":return v.s(s.$D,2,"0");case"d":return String(s.$W);case"dd":return V(t.weekdaysMin,s.$W,P,2);case"ddd":return V(t.weekdaysShort,s.$W,P,3);case"dddd":return P[s.$W];case"H":return String(p);case"HH":return v.s(p,2,"0");case"h":return te(1);case"hh":return te(2);case"a":return U(p,w,!0);case"A":return U(p,w,!1);case"m":return String(w);case"mm":return v.s(w,2,"0");case"s":return String(s.$s);case"ss":return v.s(s.$s,2,"0");case"SSS":return v.s(s.$ms,3,"0");case"Z":return c}return null}(E)||c.replace(":","")})},a.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},a.diff=function(e,s,t){var d,c=this,p=v.p(s),w=C(e),A=(w.utcOffset()-this.utcOffset())*u,P=this-w,R=function(){return v.m(c,w)};switch(p){case y:d=R()/12;break;case D:d=R();break;case $:d=R()/3;break;case x:d=(P-A)/6048e5;break;case l:d=(P-A)/864e5;break;case S:d=P/g;break;case m:d=P/u;break;case f:d=P/n;break;default:d=P}return t?d:v.a(d)},a.daysInMonth=function(){return this.endOf(D).$D},a.$locale=function(){return L[this.$L]},a.locale=function(e,s){if(!e)return this.$L;var t=this.clone(),d=ne(e,s,!0);return d&&(t.$L=d),t},a.clone=function(){return v.w(this.$d,this)},a.toDate=function(){return new Date(this.valueOf())},a.toJSON=function(){return this.isValid()?this.toISOString():null},a.toISOString=function(){return this.$d.toISOString()},a.toString=function(){return this.$d.toUTCString()},i}(),me=se.prototype;return C.prototype=me,[["$ms",h],["$s",f],["$m",m],["$H",S],["$W",l],["$M",D],["$y",y],["$D",O]].forEach(function(i){me[i[1]]=function(a){return this.$g(a,i[0],i[1])}}),C.extend=function(i,a){return i.$i||(i(a,se,C),i.$i=!0),C},C.locale=ne,C.isDayjs=B,C.unix=function(i){return C(1e3*i)},C.en=L[I],C.Ls=L,C.p={},C})})(Me);var jt=Me.exports;const le=ye(jt);var ke={exports:{}};(function(r,o){(function(n,u){r.exports=u()})(we,function(){return function(n,u,g){n=n||{};var h=u.prototype,f={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function m(l,x,D,$){return h.fromToBase(l,x,D,$)}g.en.relativeTime=f,h.fromToBase=function(l,x,D,$,y){for(var O,_,H,Q=D.$locale().relativeTime||f,X=n.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],ee=X.length,Y=0;Y<ee;Y+=1){var I=X[Y];I.d&&(O=$?g(l).diff(D,I.d,!0):D.diff(l,I.d,!0));var L=(n.rounding||Math.round)(Math.abs(O));if(H=O>0,L<=I.r||!I.r){L<=1&&Y>0&&(I=X[Y-1]);var J=Q[I.l];y&&(L=y(""+L)),_=typeof J=="string"?J.replace("%d",L):J(L,x,I.l,H);break}}if(x)return _;var B=H?Q.future:Q.past;return typeof B=="function"?B(_):B.replace("%s",_)},h.to=function(l,x){return m(l,x,this,!0)},h.from=function(l,x){return m(l,x,this)};var S=function(l){return l.$u?g.utc():g()};h.toNow=function(l){return this.to(S(this),l)},h.fromNow=function(l){return this.from(S(this),l)}}})})(ke);var zt=ke.exports;const Ft=ye(zt),Ht={class:"title"},Yt={class:"date"},Bt=j({__name:"Title",setup(r){const o=re().page.value,{title:n,description:u,lastUpdated:g,frontmatter:h}=o;le.extend(Ft);const f=le().to(le(h.date||Date.now()));return(m,S)=>(M(),k(W,null,[b("h1",Ht,N(T(n)),1),b("div",Yt,"🕒 Published at: "+N(T(f)),1)],64))}}),Vt=F(Bt,[["__scopeId","data-v-cec0b25f"]]),Ut=j({__name:"MyLayout",setup(r){const{Layout:o}=ve,n=()=>{history.back()};return(u,g)=>{const h=Pe("Comments");return M(),k(W,null,[G(T(o),null,{"doc-before":ue(()=>[G(Vt),G(Rt)]),"doc-after":ue(()=>[b("div",null,[b("button",{onClick:n},"[cd 👓,] ...")]),G(h)]),"home-features-after":ue(()=>[G(Ot)]),_:1}),G(_t)],64)}}}),Wt=F(Ut,[["__scopeId","data-v-2e715fd8"]]),Jt=$e('<br data-v-55e2d802><br data-v-55e2d802><div class="main" data-v-55e2d802><h1 class="about-header" data-v-55e2d802>👨‍💻 About Me</h1><br data-v-55e2d802><code data-v-55e2d802><b data-v-55e2d802>I&#39;m a IT Specialist / Developer </b></code><br data-v-55e2d802><code data-v-55e2d802><b data-v-55e2d802>A Computer Science Graduate</b></code><br data-v-55e2d802><code data-v-55e2d802><b data-v-55e2d802>Freelance, IT CS related works at the moment</b></code><br data-v-55e2d802><code data-v-55e2d802><b data-v-55e2d802>Very Open for Permanent Job Position, Projects, Assignments and Layout</b></code><br data-v-55e2d802><code data-v-55e2d802><b data-v-55e2d802>Passionate to Learn new skills and knowledges</b></code><br data-v-55e2d802><div class="typewriter-effect" data-v-55e2d802><div class="text" id="typewriter-text" data-v-55e2d802></div><code data-v-55e2d802><b data-v-55e2d802>A Trustworthy person</b></code></div><br data-v-55e2d802><code data-v-55e2d802><b data-v-55e2d802>ENV :</b></code><div class="container" data-v-55e2d802><div class="image" data-v-55e2d802><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg" alt="vue js" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://www.vectorlogo.zone/logos/dartlang/dartlang-icon.svg" alt="dart" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://raw.githubusercontent.com/artdev-hash/devicon/master/icons/appwrite/appwrite-original.svg" alt="appwrite" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://www.vectorlogo.zone/logos/cloudflare/cloudflare-icon.svg" alt="cloudflare" width="40" height="40" data-v-55e2d802></div><div class="image" data-v-55e2d802><img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" alt="typescript" width="40" height="40" data-v-55e2d802></div></div><br data-v-55e2d802><br data-v-55e2d802><br data-v-55e2d802><br data-v-55e2d802></div>',3),Kt=j({__name:"Dev",setup(r){return(o,n)=>Jt}}),Gt=F(Kt,[["__scopeId","data-v-55e2d802"]]),Zt=$e('<br data-v-3a247560><br data-v-3a247560><div class="main" data-v-3a247560><h1 class="about-header" data-v-3a247560>🚀 Open Source / Projects</h1><br data-v-3a247560><code data-v-3a247560>Recent 💡 &gt;&gt;</code><br data-v-3a247560><div class="typewriter-effect" data-v-3a247560><div class="text" id="typewriter-text" data-v-3a247560></div><code data-v-3a247560>- Participation in HACKTOBER 23</code></div><code data-v-3a247560>- <a href="https://artdev-hash.github.io/bicol_translate/" target="_blank" rel="noopener" data-v-3a247560>BICOL TRANSLATE</a></code><br data-v-3a247560><code data-v-3a247560>- <a href="https://artdev-hash.github.io/octo-feedboard/" target="_blank" rel="noopener" data-v-3a247560>OCTO-FEEDBOARD</a></code><br data-v-3a247560><code data-v-3a247560>- <a href="https://lorenzokimarthur.com" target="_blank" rel="noopener" data-v-3a247560>LORENZOKIMARTHUR.COM</a></code><br data-v-3a247560><code data-v-3a247560>- Participation in HACKTOBER 22</code><br data-v-3a247560><code data-v-3a247560>- <a href="https://devs.flutter.ph/" target="_blank" rel="noopener" data-v-3a247560>FLUTTER DEVS</a></code> <br data-v-3a247560><code data-v-3a247560>- <a href="https://artdev-hash.github.io/snamegenerator/" target="_blank" rel="noopener" data-v-3a247560>SNAMEGENERATOR</a></code><br data-v-3a247560><code data-v-3a247560>- Participation in 30 Days Flutter 21</code><br data-v-3a247560><code data-v-3a247560>- <a href="https://artdev-hash.github.io/krprt-octo-uploader/" target="_blank" rel="noopener" data-v-3a247560>KRPRT-OCTO-UPLOADER</a></code><br data-v-3a247560><code data-v-3a247560>- <a href="https://artdev-hash.github.io/kshared-nocto-copier/" target="_blank" rel="noopener" data-v-3a247560>KSHARED-NOCTO-COPIER</a></code><br data-v-3a247560><code data-v-3a247560>- PLANBANK website</code><br data-v-3a247560><code data-v-3a247560>- IAMTHECOFFEEGUY</code><br data-v-3a247560><code data-v-3a247560>- CQMS - Customer Queuing Management System</code><br data-v-3a247560><code data-v-3a247560>- LMS - Library Management System</code><br data-v-3a247560><code data-v-3a247560>- <a href="https://artdev-hash.github.io/vbex-dotnet/" target="_blank" rel="noopener" data-v-3a247560>VBEX-DOT.NET</a></code><br data-v-3a247560><h1 class="about-2ndhead" data-v-3a247560>👨‍💻 Support My Actions by</h1><br data-v-3a247560><code data-v-3a247560> * Sending Inspirational Messages 💌</code><br data-v-3a247560><code data-v-3a247560> * Liking or Following My Pages:<br data-v-3a247560></code><code data-v-3a247560> - YT <a href="https://www.youtube.com/channel/UCP2psTOak3Z60eQj1wq--cg" target="_blank" rel="noopener" data-v-3a247560>@kimlorenzo143</a></code><br data-v-3a247560><code data-v-3a247560> - FB <a href="https://www.facebook.com/kimITservices" target="_blank" rel="noopener" data-v-3a247560>kimITservices</a></code><br data-v-3a247560><code data-v-3a247560> * <a href="https://www.buymeacoffee.com/kimdevprc" target="_blank" title="artdev-hash" data-v-3a247560>BuyMeaCoffee ☕</a></code><br data-v-3a247560><code data-v-3a247560> ** THANK YOU FOR YOUR SUPPORT ❤️ **</code><br data-v-3a247560><br data-v-3a247560></div>',3),qt=j({__name:"Projie",setup(r){return(o,n)=>Zt}}),Qt=F(qt,[["__scopeId","data-v-3a247560"]]),Xt={...ve,Layout:Wt,enhanceApp(r){ve.enhanceApp(r);const{app:o}=r;o.component("Tags",ft),o.component("Dev",Gt),o.component("Work",Qt)}};function Se(r){if(r.extends){const o=Se(r.extends);return{...o,...r,async enhanceApp(n){o.enhanceApp&&await o.enhanceApp(n),r.enhanceApp&&await r.enhanceApp(n)}}}return r}const q=Se(Xt),ea=j({name:"VitePressApp",setup(){const{site:r}=re();return Ve(()=>{Ue(()=>{document.documentElement.lang=r.value.lang,document.documentElement.dir=r.value.dir})}),r.value.router.prefetchLinks&&We(),Je(),Ke(),q.setup&&q.setup(),()=>Ge(q.Layout)}});async function ta(){const r=ra(),o=aa();o.provide(Le,r);const n=Ee(r.route);return o.provide(Ne,n),o.component("Content",Re),o.component("ClientOnly",je),Object.defineProperties(o.config.globalProperties,{$frontmatter:{get(){return n.frontmatter.value}},$params:{get(){return n.page.value.params}}}),q.enhanceApp&&await q.enhanceApp({app:o,router:r,siteData:ze}),{app:o,router:r,data:n}}function aa(){return Fe(ea)}function ra(){let r=he,o;return He(n=>{let u=Ye(n),g=null;return u&&(r&&(o=u),(r||o===u)&&(u=u.replace(/\.js$/,".lean.js")),g=Be(()=>import(u),__vite__mapDeps([]))),he&&(r=!1),g},q.NotFound)}he&&ta().then(({app:r,router:o,data:n})=>{o.go().then(()=>{Ie(o.route,n.site),r.mount("#app")})});export{ta as createApp};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}