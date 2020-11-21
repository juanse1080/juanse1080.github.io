(this.webpackJsonpportafolio=this.webpackJsonpportafolio||[]).push([[0],{302:function(e,t,a){},555:function(e,t,a){},556:function(e,t,a){"use strict";a.r(t);var i=a(2),n=a(0),o=a(17),r=a.n(o),c=(a(302),a(597)),s=a(598),l=a(281),d=a(24),p="#FFFFFF",u="#000000",m={black:u,white:p,transparent:"transparent",primary:{title:p,subtitle:"#d0d0d0",contrastText:p,dark:"#07466F",main:"#105989",light:"#296E9A"},secondary:{title:p,subtitle:"#d0d0d0",contrastText:"#105989",dark:"#E2B60B",main:"#FAD137",light:"#FFDD5C"},tertiary:{contrastText:u,title:u,subtitle:"#404040",main:p},success:{contrastText:p,dark:d.a.green[900],main:d.a.green[600],light:d.a.green[400]},info:{contrastText:p,dark:d.a.blue[900],main:d.a.blue[600],light:d.a.blue[400]},warning:{contrastText:p,dark:d.a.orange[900],main:d.a.orange[600],light:d.a.orange[400]},error:{contrastText:p,dark:d.a.red[900],main:d.a.red[600],light:d.a.red[400]},text:{primary:p,secondary:p,link:d.a.blue[600]},background:{default:p,paper:p},icon:d.a.blueGrey[600],divider:d.a.grey[200]},b={h1:{color:m.text.primary,fontWeight:700,fontSize:"2.6em",letterSpacing:"-0.26px",lineHeight:"40px"},h2:{color:m.text.primary,fontWeight:600,fontSize:"1.8em",letterSpacing:"-0.24px",lineHeight:"32px"},h3:{color:m.text.primary,fontWeight:600,fontSize:"1.3em",letterSpacing:"-0.06px",lineHeight:"28px"},h4:{color:m.text.primary,fontWeight:500,fontSize:"20px",letterSpacing:"-0.06px",lineHeight:"24px"},h5:{color:m.text.primary,fontWeight:500,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"20px"},h6:{color:m.text.primary,fontWeight:500,fontSize:"14px",letterSpacing:"-0.05px",lineHeight:"20px"},subtitle1:{color:m.text.primary,fontSize:"16px",letterSpacing:"-0.05px",lineHeight:"25px"},subtitle2:{color:m.text.secondary,fontWeight:400,fontSize:"1.1em",letterSpacing:"-0.05px",lineHeight:"21px"},body1:{color:m.text.primary,fontSize:"1.05em;",letterSpacing:"-0.05px",lineHeight:"21px"},body2:{color:m.text.secondary,fontSize:"10px",letterSpacing:"-0.04px",lineHeight:"18px"},button:{color:m.text.primary,fontSize:"14px"},caption:{color:m.text.secondary,fontSize:"0.9em;",letterSpacing:"-0.33px",lineHeight:"17px"},overline:{color:m.text.secondary,fontSize:"11px",fontWeight:500,letterSpacing:"0.33px",lineHeight:"13px",textTransform:"uppercase"}},h={root:{color:m.icon,"&:hover":{backgroundColor:"rgba(0, 0, 0, 0.03)"}}},j=a(23),g={root:Object(j.a)(Object(j.a)({},b.body1),{},{borderBottom:"1px solid ".concat(m.divider)})},x={root:{backgroundColor:d.a.grey[50]}},O={MuiLink:{root:{"&:not([href])":{color:"".concat(m.primary.main),"&:hover":{textDecoration:"underline",color:"".concat(m.primary.main)}}}},MuiButton:{contained:{boxShadow:"0 1px 1px 0 rgba(0,0,0,0.14), 0 2px 1px -1px rgba(0,0,0,0.12), 0 1px 3px 0 rgba(0,0,0,0.20)",backgroundColor:"#FFFFFF"},root:{textTransform:"none"}},MuiIconButton:h,MuiPaper:{elevation1:{boxShadow:"0 0 0 1px rgba(63,63,68,0.05), 0 1px 3px 0 rgba(63,63,68,0.15)"}},MuiTableCell:g,MuiTableHead:x,MuiTypography:{gutterBottom:{marginBottom:8}},MuiAlert:{icon:{margin:"0px 6px !important"}},MuiIcon:{root:{minWidth:"1rem",width:"auto"}},MuiAppBar:{},MuiToolbar:{regular:{maxHeight:"46px !important",minHeight:"46px !important"}}},f=Object(l.a)({palette:m,typography:b,overrides:O,spacing:function(e){return"".concat(.5*e,"rem")},shape:{borderRadius:4,viewHeight:"100vh",viewWidth:"100vw"},zIndex:{appBar:1200,drawer:1100}}),y=a(282),v=a(34),k=a(22),S=a(575),w=a(574),N=a(573),C=a(14),z=a(572),H={dark:{theme:"primary",icons:"secondary"},light:{theme:"tertiary",icons:"primary"}},I=Object(z.a)((function(e){var t,a,i,n;return{root:function(t){return{backgroundColor:e.palette[H[t.theme].theme].dark,color:e.palette[H[t.theme].theme].subtitle}},paddingBottom:(t={paddingBottom:e.spacing(4)},Object(C.a)(t,e.breakpoints.only("sm"),{paddingBottom:e.spacing(3)}),Object(C.a)(t,e.breakpoints.only("xs"),{paddingBottom:e.spacing(0)}),t),paddings:(a={padding:e.spacing(4)},Object(C.a)(a,e.breakpoints.only("sm"),{padding:e.spacing(3)}),Object(C.a)(a,e.breakpoints.only("xs"),{padding:e.spacing(2.5,1,2.5,1)}),a),header:(i={margin:e.spacing(2)},Object(C.a)(i,e.breakpoints.only("sm"),{margin:e.spacing(1.5)}),Object(C.a)(i,e.breakpoints.only("xs"),{margin:e.spacing(1)}),i),content:(n={padding:e.spacing(3)},Object(C.a)(n,e.breakpoints.only("sm"),{padding:e.spacing(1)}),Object(C.a)(n,e.breakpoints.only("xs"),{padding:e.spacing(0)}),n),title:function(t){return{display:"inline-block",color:e.palette[H[t.theme].theme].title}},subtitle:function(t){return{color:e.palette[H[t.theme].theme].subtitle}}}})),B=Object(n.forwardRef)((function(e,t){var a=e.title,n=e.subtitle,o=e.theme,r=e.children,c=e.fullWidth,s=(Object(k.a)(e,["title","subtitle","theme","children","fullWidth"]),I({theme:o}));return Object(i.jsx)("div",{ref:t,children:Object(i.jsx)("div",{className:s.root,children:c?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:s.paddings,children:Object(i.jsx)(N.a,{children:Object(i.jsx)(w.a,{container:!0,spacing:3,justify:"flex-start",children:Object(i.jsx)(w.a,{item:!0,lg:3,md:3,sm:4,xs:12,children:Object(i.jsxs)("div",{className:s.header,children:[Object(i.jsx)(S.a,{className:s.title,color:"inherit",variant:"h2",children:a}),Object(i.jsx)(S.a,{className:s.subtitle,color:"inherit",variant:"subtitle1",children:n})]})})})})}),r,Object(i.jsx)("div",{className:s.paddingBottom})]}):Object(i.jsx)("div",{className:s.paddings,children:Object(i.jsx)(N.a,{children:Object(i.jsxs)(w.a,{container:!0,spacing:3,justify:"center",children:[Object(i.jsx)(w.a,{item:!0,lg:3,md:3,sm:4,xs:12,children:Object(i.jsxs)("div",{className:s.header,children:[Object(i.jsx)(S.a,{className:s.title,color:"inherit",variant:"h2",children:a}),Object(i.jsx)(S.a,{className:s.subtitle,color:"inherit",variant:"subtitle1",children:n})]})}),Object(i.jsx)(w.a,{item:!0,lg:9,md:9,sm:8,xs:12,children:Object(i.jsx)("div",{className:s.content,children:r})})]})})})})})})),A=a(600),R=a(579),T=a(578),F=a(285),E=a(576),P=a(577),D=a(603),M=Object(z.a)((function(e){return{media:function(e){return{height:0,width:"100%",display:"block",paddingTop:"100%",backgroundImage:"url(".concat(e.photo,")"),backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",borderRadius:"50%",position:"relative"}},viewPreview:{width:"auto",height:"auto",maxWidth:"100%",maxHeight:"calc( ".concat(e.shape.viewHeight," - 69px )")},rootDialog:{lineHeight:0},icon:{display:"flex",position:"absolute",right:"6.75%",borderRadius:"50%",zIndex:1,bottom:"6.75%"},paperScrollBody:{overflowY:"hidden"}}})),W=Object(n.forwardRef)((function(e,t){return Object(i.jsx)(E.a,Object(j.a)({direction:"up",ref:t},e))}));function _(e){var t=e.photo,a=Object(k.a)(e,["photo"]),o=M({photo:t}),r=Object(n.useState)(!1),c=Object(v.a)(r,2),s=c[0],l=c[1],d=Object(n.useState)(!1),p=Object(v.a)(d,2),u=p[0],m=p[1],b=function(e){return function(){void 0===e?m((function(e){return!e})):e!==u&&m((function(t){return e}))}};return Object(i.jsxs)("div",Object(j.a)(Object(j.a)({},a),{},{children:[Object(i.jsx)("div",{className:o.media,onMouseEnter:b(!0),onMouseLeave:b(!1),onMouseOver:b(!0),children:Object(i.jsx)(P.a,{in:u,children:Object(i.jsx)(F.a,{className:o.icon,children:Object(i.jsx)(T.a,{size:"small",onClick:function(){l(!0)},children:Object(i.jsx)(D.a,{fontSize:"small"})})})})}),Object(i.jsx)(R.a,{classes:{root:o.rootDialog,paperScrollBody:o.paperScrollBody},scroll:"body",onClose:function(){l(!1)},"aria-labelledby":"customized-dialog-title",open:s,TransitionComponent:W,children:Object(i.jsx)("img",{className:o.viewPreview,src:t,alt:t})})]}))}var L=Object(z.a)((function(e){return{avatar:{},content:Object(C.a)({paddingRight:e.spacing(3)},e.breakpoints.down("sm"),{padding:e.spacing(0)})}})),U=function(e){e.theme;var t=e.photo,a=(Object(k.a)(e,["theme","photo"]),L());return Object(i.jsxs)(w.a,{container:!0,spacing:3,justify:"center",align:"center",children:[Object(i.jsx)(A.a,{mdUp:!0,children:Object(i.jsx)(w.a,{item:!0,lg:2,md:3,sm:5,xs:6,children:Object(i.jsx)(_,{className:a.avatar,photo:t})})}),Object(i.jsx)(w.a,{item:!0,lg:9,md:9,sm:12,sx:12,children:Object(i.jsxs)("div",{className:a.content,children:[Object(i.jsx)(S.a,{color:"inherit",align:"justify",paragraph:!0,variant:"body1",children:"Mi nombre es Juan Sebastian Marcon Caballero, soy un estudiante de \xfaltimo nivel de Ingenier\xeda de Sistemas de la Universidad Industrial de Santander (UIS) con experiencia en desarrollo web adquirida durante el proceso de aprendizaje con la UIS."}),Object(i.jsx)(S.a,{color:"inherit",align:"justify",paragraph:!0,variant:"body1",children:"He obtenido experiencia con el Instituto de Proyecci\xf3n Regional y Educaci\xf3n a Distancia (IPRED) desempe\xf1\xe1ndome como desarrollador FullStack en su plataforma administrativa. Por mi cuenta he participado en el desarrollo de multiples proyectos de desarrollo web durante el transcurso de mi carrera profesional."}),Object(i.jsx)(S.a,{color:"inherit",align:"justify",paragraph:!0,variant:"body1",children:"Por mi cuenta he participado en el desarrollo de multiples proyectos de desarrollo web durante el transcurso de mi carrera profesional."})]})}),Object(i.jsx)(A.a,{smDown:!0,children:Object(i.jsx)(w.a,{item:!0,lg:2,md:3,sm:5,xs:6,children:Object(i.jsx)(_,{className:a.avatar,photo:t})})})]})},q=a(27),G=a(560),J=a(583),Y=a(585),X=a(586),Z=a(584),K=a(582),Q=a(271),V=a.n(Q),$=Object(z.a)((function(e){var t;return{paddings:(t={padding:e.spacing(0,4,3,4)},Object(C.a)(t,e.breakpoints.only("sm"),{padding:e.spacing(0,3,3,3)}),Object(C.a)(t,e.breakpoints.only("xs"),{padding:e.spacing(0,2.5,3,2.5)}),t),titleBar:{background:"linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"},icon:{color:"white"}}})),ee=[{img:"https://material-ui.com/static/images/grid-list/honey.jpg",title:"honey",author:"Author",featured:!1,kind:[0,1],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/breakfast.jpg",title:"breakfast",author:"Author",featured:!1,kind:[0,2],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/burgers.jpg",title:"burgers",author:"Author",featured:!1,kind:[0,3],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/camera.jpg",title:"camera",author:"Author",featured:!1,kind:[0,4],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/hats.jpg",title:"hats",author:"Author",featured:!1,kind:[0,1],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/morning.jpg",title:"morning",author:"Author",featured:!0,kind:[0,2],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/mushroom.jpg",title:"mushroom",author:"Author",featured:!0,kind:[0,2],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/olive.jpg",title:"olive",author:"Author",featured:!1,kind:[0,4],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/plant.jpg",title:"plant",author:"Author",featured:!1,kind:[0,1],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/star.jpg",title:"star",author:"Author",featured:!1,kind:[0,2],timeout:0,show:!0},{img:"https://material-ui.com/static/images/grid-list/vegetables.jpg",title:"vegetables",author:"Author",featured:!1,kind:[0,3],timeout:0,show:!0}],te={0:"Todas",1:"PHP",2:"Python",3:"React JS",4:"Django"},ae=function(e){e.theme,Object(k.a)(e,["theme"]);var t=$(),a=Object(q.a)(),o=Object(G.a)(a.breakpoints.only("xl")),r=Object(G.a)(a.breakpoints.only("lg")),c=Object(G.a)(a.breakpoints.only("md")),s=Object(G.a)(a.breakpoints.only("sm")),l=Object(G.a)(a.breakpoints.only("xs")),d=Object(n.useState)(0),p=Object(v.a)(d,2),u=p[0],m=p[1],b=Object(n.useState)(ee),h=Object(v.a)(b,2),j=h[0];h[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("div",{className:t.paddings,children:Object(i.jsx)(N.a,{children:Object(i.jsx)(w.a,{container:!0,spacing:1,justify:"flex-end",children:Object.keys(te).map((function(e){var t,a=parseInt(e,10);return Object(i.jsx)(w.a,{item:!0,children:Object(i.jsx)(K.a,{variant:"contained",color:a===u?"secondary":"default",onClick:a===u?null:(t=a,function(){m(t)}),children:te[a]})},a)}))})})}),Object(i.jsx)("div",{className:t.root,children:Object(i.jsx)(J.a,{cellHeight:300,spacing:0,className:t.gridList,cols:o?5:r?4:c?3:s?2:l?1:void 0,children:j.map((function(e){return Object(i.jsx)(Z.a,{in:e.kind.includes(u),appear:e.kind.includes(u),unmountOnExit:!0,children:Object(i.jsxs)(Y.a,{children:[Object(i.jsx)("img",{src:e.img,alt:e.title}),Object(i.jsx)(X.a,{title:e.title,titlePosition:"top",actionIcon:Object(i.jsx)(T.a,{"aria-label":"star ".concat(e.title),className:t.icon,children:Object(i.jsx)(V.a,{})}),actionPosition:"left",className:t.titleBar})]})},e.img)}))})})]})},ie=a(587),ne=a(588),oe=a(589),re=a(592),ce=a(593),se=a(591),le=a(601),de=[{color:"grey",title:"INGENIERO DE SISTEMAS",date:"Febrero, 2015",institution:"Universidad Industrial de Santander",description:["Durante el transcurso de mi educaci\xf3n superior he sido muy autodidacta con respecto a mi desarrollo personal lo cual me ha permitido participar en multiples proyectos de desarrollo. Algunos de estos me han permitido crecer profesionalmente en multiples sentidos, como el trabajo en equipo, el manejo de herramientas de desarrollo grupal, entre otras. Ademas de esto he adquirido experiencia en multiples tecnolog\xedas de desarrollo"],ended:!1},{color:"secondary",title:"BACHILLER ACAD\xc9MICO CON PROFUNDIZACI\xd3N EN PEDAGOG\xcdA",date:"Enero, 2003 - Diciembre, 2014",institution:"Escuela Normal Superior de Piedecuesta",description:["Mi educaci\xf3n b\xe1sica fue en la Escuela Normal de Piedecuesta un de orientaci\xf3n e innovaci\xf3n permanente en el campo pedag\xf3gico, forma bachilleres acad\xe9micos con profundizaci\xf3n en pedagog\xeda."],ended:!0}],pe=Object(z.a)((function(e){return{root:Object(C.a)({},e.breakpoints.only("xs"),{padding:e.spacing(1)}),title:function(t){return{color:e.palette[H[t.theme].theme].title,paddingBottom:e.spacing(1)}},missingOppositeContent:{"&::before":{flex:"none",content:"none"}}}})),ue=function(e){var t=e.theme,a=(e.photo,Object(k.a)(e,["theme","photo"]),pe({theme:t})),o=Object(n.useState)(!1),r=Object(v.a)(o,2),c=r[0],s=r[1],l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){e!==c&&s(e)}};return Object(i.jsx)(ie.a,{classes:{root:a.root},children:de.map((function(e,t){return Object(i.jsxs)(ne.a,{classes:{missingOppositeContent:a.missingOppositeContent},children:[Object(i.jsxs)(oe.a,{children:[Object(i.jsx)(le.a,{open:c===t,title:e.ended?"Finalizado":"Transcurriendo",placement:"left",children:Object(i.jsx)(se.a,{color:e.ended?"secondary":"grey",className:a.dot})}),t===de.length-1?null:Object(i.jsx)(re.a,{})]}),Object(i.jsxs)(ce.a,{onMouseEnter:l(t),onMouseLeave:l(!1),onMouseOver:l(t),children:[Object(i.jsx)(S.a,{className:a.title,color:"inherit",variant:"subtitle2",children:e.title}),Object(i.jsxs)(S.a,{color:"inherit",paragraph:!0,variant:"caption",children:[e.institution,e.date?" | ".concat(e.date):null]}),e.description.map((function(e,t){return Object(i.jsx)(S.a,{color:"inherit",paragraph:!0,variant:"body1",children:e},t)}))]})]},e.title)}))})},me=a(273),be=a.n(me),he=[{title:"React JS + Redux + ES6. Completo \xa1De 0 a experto!",date:null,institution:"Udemy",description:["Este curso es bastante practico enfoc\xe1ndose en est\xe1ndares nuevos tales como React hooks, ES6, Redux, entre otros. Al finalizar este curso pude crear un peque\xf1o proyecto altamente escalable.","Se mostraron conceptos propios de React, como el ciclo de vida, migraci\xf3n a React hooks, uso de los hooks a profundidad, DOM virtual, entre otros. Ademas se tocaron temas propios de JS, destructuring, arrow functions, const, let"],ended:!0,certify:a.p+"static/media/React.a7947efa.pdf"},{title:"PROBAR DJANGO | Crear una Aplicaci\xf3n Web",date:null,institution:"Udemy",description:["Este curso tiene enfoque pr\xe1ctico dirigido a gente sin experiencia t\xe9cnica ya que con Django se puede crear aplicaciones escribiendo el menor c\xf3digo posible. Al seguir el curso, cree una p\xe1gina de aterrizaje como base para tu gran proyecto, una aplicaci\xf3n web con mucha funcionalidad.","Debido a que est\xe1 escrito en Python, se mostraron conceptos como programaci\xf3n orientada a objetos, un paradigma de programaci\xf3n que usa objetos en sus interacciones, para dise\xf1ar programas inform\xe1ticos. Tocan otros conceptos, incluyendo herencia y encapsulamiento, entre otros"],ended:!0,certify:a.p+"static/media/Django.0eae4d81.pdf"}],je=Object(z.a)((function(e){return{root:Object(C.a)({},e.breakpoints.only("xs"),{padding:e.spacing(1)}),buttonDownload:{fontSize:e.spacing(2),cursor:"pointer"},link:{textDecoration:"none",color:"inherit",height:16,width:16},title:function(t){return{color:e.palette[H[t.theme].theme].title,paddingBottom:e.spacing(1)}},missingOppositeContent:{"&::before":{flex:"none",content:"none"}}}})),ge=function(e){var t=e.theme,a=(e.photo,Object(k.a)(e,["theme","photo"]),je({theme:t})),o=Object(n.useState)(!1),r=Object(v.a)(o,2),c=r[0],s=r[1],l=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return function(){e!==c&&s(e)}};return Object(i.jsx)(ie.a,{classes:{root:a.root},children:he.map((function(e,t){return Object(i.jsxs)(ne.a,{classes:{missingOppositeContent:a.missingOppositeContent},children:[Object(i.jsxs)(oe.a,{children:[Object(i.jsx)(le.a,{open:c===t,title:e.ended?"Finalizado":"Transcurriendo",placement:"left",children:Object(i.jsx)(se.a,{color:e.ended?"secondary":"grey",className:a.dot,component:"a",children:Object(i.jsx)(le.a,{title:"Descargue el certificado",placement:"left",children:Object(i.jsx)("a",{download:"certify.pdf",href:e.certify,className:a.link,children:Object(i.jsx)(be.a,{color:"inherit",className:a.buttonDownload,fontSize:"small"})})})})}),t===he.length-1?null:Object(i.jsx)(re.a,{})]}),Object(i.jsxs)(ce.a,{onMouseEnter:l(t),onMouseLeave:l(!1),children:[Object(i.jsx)(S.a,{className:a.title,color:"inherit",variant:"subtitle2",children:e.title}),Object(i.jsxs)(S.a,{color:"inherit",variant:"caption",paragraph:!0,children:[e.institution,e.date?" | ".concat(e.date):null]}),e.description.map((function(e,t){return Object(i.jsx)(S.a,{color:"inherit",paragraph:!0,variant:"body1",children:e},t)}))]})]},e.title)}))})},xe={"Sobre m\xed":{component:U,props:{photo:a.p+"static/media/Foto.f430683c.jpg"},section:{}},Portafolio:{component:ae,props:{},section:{subtitle:"Mis trabajos",fullWidth:!0}},"Educaci\xf3n":{component:ue,props:{},section:{subtitle:"Educaci\xf3n formal"}},Cursos:{component:ge,props:{},section:{subtitle:"Cursos virtuales"}}},Oe=(Object.keys(xe),a(274)),fe=a(594),ye=a(595),ve=a(7),ke=Object(z.a)((function(e){return{floatRight:{flexGrow:1},appBar:{color:e.palette.black,backgroundColor:e.palette.white,width:"100%"},buttonScroll:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)},activeButton:{fontWeight:600}}}));function Se(e){var t=e.page,a=e.sections,n=e.onChangePage,o=(Object(k.a)(e,["page","sections","onChangePage"]),ke());return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(E.a,{in:"Home"!==t,children:Object(i.jsx)(fe.a,{className:o.appBar,color:"transparent",children:Object(i.jsxs)(ye.a,{children:[Object(i.jsx)("div",{className:o.floatRight}),Object(i.jsx)(K.a,{color:"inherit",className:Object(ve.a)(Object(C.a)({},o.activeButton,"Home"===t)),onClick:n(),children:"Home"}),Object.keys(a).map((function(e){return Object(i.jsx)(K.a,{color:"inherit",className:Object(ve.a)(Object(C.a)({},o.activeButton,t===e)),onClick:n(e),children:e},e)}))]})})})})}var we=a(596),Ne=a(599),Ce=a(279),ze=a.n(Ce),He=a.p+"static/media/undraw_building_websites_i78t.48a8617e.svg",Ie=a(275),Be=a.n(Ie),Ae={particles:{number:{value:100,density:{enable:!0,value_area:800}},color:{value:m.primary.light},shape:{type:"circle",stroke:{width:0,color:m.primary.light},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.4,random:!0,anim:{enable:!0,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!0,speed:2,size_min:.1,sync:!1}},line_linked:{enable_auto:!0,distance:100,color:m.primary.light,opacity:1,width:1,condensed_mode:{enable:!1,rotateX:600,rotateY:600}},move:{enable:!0,speed:3,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},resize:!0},modes:{repulse:{distance:40,duration:.4}}},retina_detect:!0};function Re(e){return Object(i.jsx)(Be.a,Object(j.a)(Object(j.a)({},e),{},{params:Ae}))}var Te=Object(z.a)((function(e){var t;return{root:{height:e.shape.viewHeight,position:"relative"},sectionIcons:{display:"flex",fontSize:e.spacing(4),paddingTop:e.spacing(3),cursor:"pointer"},icon:{cursor:"pointer",zIndex:1,marginRight:e.spacing(1)},container:{height:"100%",display:"flex",justifyContent:"center"},paddings:(t={height:"100%",padding:e.spacing(0,4)},Object(C.a)(t,e.breakpoints.only("sm"),{padding:e.spacing(0,3)}),Object(C.a)(t,e.breakpoints.only("xs"),{padding:e.spacing(0,1)}),t),content:{display:"flex",justifyContent:"center",alignItems:"center",height:"calc(100% - 128px)"},scrollIcon:{position:"absolute",bottom:20,left:"calc(50% - 20px)"},particlesBackground:{position:"absolute",background:"transparent",zIndex:0,top:0,bottom:0,left:0,right:0},contentBox:Object(C.a)({borderRadius:e.shape.borderRadius,textAlign:"center",color:e.palette.black,padding:e.spacing(3,3,7,3)},e.breakpoints.only("xs"),{padding:e.spacing(1)})}})),Fe=a(276),Ee=a.n(Fe),Pe=a(277),De=a.n(Pe),Me=a(278),We=a.n(Me),_e=[{name:"LinkedIn",url:"",icon:Ee.a,props:{}},{name:"GitHub",url:"",icon:De.a,props:{style:{transform:"scale(0.81)"}}},{name:"Gmail",url:"",icon:We.a,props:{}}],Le=Object(n.forwardRef)((function(e,t){var a=e.nextPage,o=e.page,r=(Object(k.a)(e,["nextPage","page"]),Te());return Object(i.jsxs)("div",{className:r.root,ref:t,children:[Object(i.jsx)(Re,{className:r.particlesBackground}),Object(i.jsx)("div",{className:r.paddings,children:Object(i.jsx)(N.a,{className:r.container,children:Object(i.jsxs)(w.a,{container:!0,direction:"row",justify:"space-around",alignItems:"center",children:[Object(i.jsx)(w.a,{item:!0,lg:6,sm:10,children:Object(i.jsxs)(Ne.a,{className:r.contentBox,children:[Object(i.jsx)(S.a,{variant:"h1",color:"inherit",paragraph:!0,align:"left",children:"Juan Marcon."}),Object(i.jsx)(S.a,{variant:"subtitle2",color:"inherit",align:"left",children:"Soy un estudiante de \xfaltimo nivel de Ingenier\xeda de Sistemas de la Universidad Industrial de Santander con amplia experiencia en diferentes tecnolog\xedas de desarrollo Web. He tenido la oportunidad de participar en diferentes proyectos lo cual me ha ayudado mucho en mi crecimiento profesional."}),Object(i.jsx)(Ne.a,{className:r.sectionIcons,children:_e.map((function(e){var t=e.icon;return Object(n.createElement)(t,Object(j.a)(Object(j.a)({},e.props),{},{key:e.name,fontSize:"inherit",className:r.icon}))}))})]})}),Object(i.jsx)(w.a,{item:!0,lg:5,sm:4,children:Object(i.jsx)("img",{src:He,alt:"",style:{zIndex:2}})})]})})}),Object(i.jsx)(P.a,{in:"Home"===o,children:Object(i.jsx)(le.a,{title:"Next section",placement:"top",children:Object(i.jsx)(we.a,{color:"secondary","aria-label":"Next section",className:r.scrollIcon,size:"small",onClick:a,children:Object(i.jsx)(ze.a,{})})})})]})})),Ue=a(280),qe=a.n(Ue),Ge=Object(z.a)((function(e){return{buttonScroll:{position:"fixed",bottom:e.spacing(2),right:e.spacing(2)}}}));function Je(e){var t=e.hidden,a=e.scrollToTop,n=(Object(k.a)(e,["hidden","scrollToTop"]),Ge());return Object(i.jsx)(P.a,{in:t,children:Object(i.jsx)(le.a,{title:"Scroll back to top",placement:"left",children:Object(i.jsx)("div",{role:"presentation",className:n.buttonScroll,children:Object(i.jsx)(we.a,{onClick:a,color:"secondary",size:"small","aria-label":"scroll back to top",children:Object(i.jsx)(qe.a,{})})})})})}var Ye=Object(z.a)((function(e){return{root:{height:e.shape.viewHeight}}})),Xe=Object.keys(xe);function Ze(e){var t=Ye(),a=Object(n.useRef)(),o=Object(n.useState)("Home"),r=Object(v.a)(o,2),c=r[0],s=r[1],l=Object(n.useRef)(Array.apply(null,Array(Xe.length)).map((function(e){return Object(n.createRef)()}))),d=Object(n.useRef)(Object(n.createRef)()),p=function(e){return function(){a.current.view.scroll({top:e?u(e):0,behavior:"smooth"})}},u=function(e){return xe[e]?xe[e].ref.current.offsetTop-46:d.current.offsetTop};return Object(n.useEffect)((function(){Xe.forEach((function(e,t){xe[e].ref=l.current[t]}))}),[]),Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:t.root,children:Object(i.jsxs)(Oe.Scrollbars,{className:"custom-scrollbars",ref:a,onScrollFrame:function(e){var t=a.current.getScrollTop();[].concat(Object(y.a)(Xe),["Home"]).forEach((function(e){var a,i=u(e);i<=t&&i+92>t&&((a=e)!==c&&s(a))}))},autoHide:!0,autoHideTimeout:1e3,autoHideDuration:200,children:[Object(i.jsx)(Se,{onChangePage:p,page:c,sections:xe}),Object(i.jsx)(Le,{nextPage:p(Xe[0]),ref:d,page:c}),Object.keys(xe).map((function(e,t){var a=xe[e].component;return Object(n.createElement)(B,Object(j.a)(Object(j.a)({},xe[e].section),{},{key:e,ref:l.current[t],title:e,theme:t%2===0?"dark":"light",nextPage:p(t!==Object.keys(xe).length&&Object.keys(xe)[t+1])}),Object(i.jsx)(a,Object(j.a)(Object(j.a)({},xe[e].props),{},{theme:t%2===0?"dark":"light"})))})),Object(i.jsx)(Je,{hidden:"Home"!==c,scrollToTop:p()})]})})})}var Ke=function(){return Object(i.jsx)(c.b,{children:Object(i.jsx)(Ze,{})})},Qe=a(42),Ve=Object(Qe.a)();a(555);var $e=function(){return Object(i.jsx)(s.a,{theme:f,children:Object(i.jsx)(c.a,{history:Ve,children:Object(i.jsx)(Ke,{})})})},et=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,604)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,r=t.getTTFB;a(e),i(e),n(e),o(e),r(e)}))};r.a.render(Object(i.jsx)($e,{}),document.getElementById("root")),et()}},[[556,1,2]]]);
//# sourceMappingURL=main.d6eb1354.chunk.js.map