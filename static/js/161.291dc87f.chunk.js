"use strict";(self.webpackChunkDiceAdventureDemo=self.webpackChunkDiceAdventureDemo||[]).push([[161],{7235:function(e,n,a){a.d(n,{k:function(){return x}});var c=a(9243),t="DiceIcon_dice__mzHqX",i="DiceIcon_icon__Rr08e",o="DiceIcon_physical__yV2lY",s="DiceIcon_magic__15Bfj",r="DiceIcon_elemental__B0alV",d="DiceIcon_trait__fPQ3I",u="DiceIcon_any__f-UYu",l="DiceIcon_notRolled__oeujV",_=a(3329),m=function(e){var n=e.value,a=e.type,c=void 0===n||-1===n?"".concat(l," "):"";switch(a){case"any":default:return"".concat(c).concat(u);case"physical":case"slashed":case"smashed":case"needle":return"".concat(c).concat(o);case"mana":case"magic":case"arcane":case"toxic":case"void":case"rainbow":return"".concat(c).concat(s);case"elemental":case"heat":case"ice":case"shock":case"poison":return"".concat(c).concat(r);case"trait":case"speed":case"strength":case"dexterity":case"perception":case"wits":case"stamina":return"".concat(c).concat(d)}},x=function(e){var n=e.value,a=e.diceMax,o=e.type;return(0,_.jsxs)("div",{className:"".concat(t," ").concat(m({value:n,type:o})),children:[n||a||" "," ",(0,_.jsx)("span",{className:i,children:(0,c.sp)(o)})]})}},4057:function(e,n,a){a.d(n,{G:function(){return u}});var c=a(1564),t={item:"DungeonSquare_item__qIj3c",bar:"DungeonSquare_bar__zX7ka",iconBag:"DungeonSquare_iconBag__JG6Zg",button:"DungeonSquare_button__1IOgw",selected:"DungeonSquare_selected__24Thy",text:"DungeonSquare_text__iDjwK",level:"DungeonSquare_level__Auzzp",name:"DungeonSquare_name__9UrAj"},i=a(9434),o=a(7370),s=a(9243),r=a(7235),d=a(3329),u=function(e){var n=e.name,a=e.eventName,u=e.id,l=e.selected,_=void 0!==l&&l,m=e.background,x=e.lv,v=void 0===x?-1:x,g=e.weakness,h=void 0!==g&&g,j=(0,i.I0)(),p=m.bgColor,f=m.icon,b=m.eventIcon,D=!(!h||void 0===h)&&h;return(0,d.jsxs)("div",{className:t.item,id:u,children:[(0,d.jsx)(c.v,{alt:n,bgTxtFront:b,bgTxtBack:f,bgColor:p}),(0,d.jsxs)("div",{className:t.bar,children:["hide"===_?"":(0,d.jsx)("button",{className:"".concat(t.button," ").concat(_?t.selected:""," ").concat(t.delete),type:"button",onClick:function(){_||j((0,o.OK)(u))},children:_?(0,s.sp)("playerAttack"):"\ud83e\udc18"},"".concat(n,"btn").concat(u)),(0,d.jsxs)("span",{className:t.text,children:[(0,d.jsx)("span",{className:t.level,children:"".concat(v," ")}),(0,d.jsx)("span",{className:t.name,children:"".concat(n," ").concat(a)})]})]}),(0,d.jsx)("div",{className:t.iconBag,children:D?D.map((function(e,n){return(0,d.jsx)(r.k,{type:e},"dungeonWeakness|".concat(u,"|").concat(n))})):""})]})}},1564:function(e,n,a){a.d(n,{v:function(){return i}});var c={miniature:"Miniature_miniature__-XChZ",extension:"Miniature_extension__JEJLA",padding:"Miniature_padding__AvpVc",textBoxContainer:"Miniature_textBoxContainer__VBOAB",textBoxFront:"Miniature_textBoxFront__YIyfd",textBoxBack:"Miniature_textBoxBack__b4yIz",imgFrame:"Miniature_imgFrame__3V+X9",figcaption:"Miniature_figcaption__PifSq",img:"Miniature_img__7uR5g"},t=a(3329),i=function(e){var n=e.padding,a=void 0!==n&&n,i=e.bgTxtFront,o=void 0===i?"":i,s=e.bgTxtBack,r=void 0===s?"":s,d=e.children,u=e.bgColor,l=void 0===u?"#d7ca92":u;return(0,t.jsxs)("figure",{className:"".concat(c.miniature," ").concat(d?c.extended:""),children:[(0,t.jsx)("div",{className:"".concat(c.imgFrame," ").concat(a?c.padding:""," "),style:{backgroundColor:"".concat(l)},children:(0,t.jsxs)("div",{className:c.textBoxContainer,children:[(0,t.jsx)("div",{className:c.textBoxBack,children:r}),(0,t.jsx)("div",{className:c.textBoxFront,children:o})]})}),d?(0,t.jsxs)("div",{className:c.extension,children:[" ",d]}):""]})}},5161:function(e,n,a){a.r(n),a.d(n,{SummaryPage:function(){return g}});var c=a(2791),t=a(9434),i=a(7689),o=a(2787),s=a(984),r=a(1457),d=a(8934),u=a(2350),l=a(7796),_=a(4278),m=a(4057),x=a(2093),v=a(3329),g=function(){var e=(0,t.I0)(),n=(0,s.TD)().inCombat,a=(0,s.wK)(),g=a.error,h=a.goldEarned,j=a.name,p=a.eventName,f=a.bg,b=a.lv,D=a.startedLv,B=(0,_.G)().selectedDungeonId,k=Math.max((b||0)-(D||0),0);return(0,c.useEffect)((function(){"summary"!==n&&e((0,l.nY)())}),[e,n]),(0,v.jsx)(v.Fragment,{children:n?(0,v.jsxs)("main",{className:"".concat(x.Z.main," ").concat(x.Z.center),children:[g?(0,v.jsx)("span",{className:x.Z.error,children:g}):"",(0,v.jsx)(o.D,{title:"Summary"}),(0,v.jsxs)("div",{className:"".concat(x.Z.wrap),children:[(0,v.jsx)(m.G,{name:j,eventName:p,id:B,lv:b,background:f,selected:"hide"}),(0,v.jsx)(r.A,{}),(0,v.jsx)(d.T,{gold:h}),(0,v.jsx)(u.T,{lv:k})]})]}):(0,v.jsx)(i.Fg,{to:"/quickBattle"})})};n.default=g}}]);
//# sourceMappingURL=161.291dc87f.chunk.js.map