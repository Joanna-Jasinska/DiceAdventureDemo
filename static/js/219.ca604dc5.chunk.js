"use strict";(self.webpackChunkDiceAdventureDemo=self.webpackChunkDiceAdventureDemo||[]).push([[219],{7235:function(e,n,t){t.d(n,{k:function(){return m}});var c=t(9243),a="DiceIcon_dice__mzHqX",i="DiceIcon_icon__Rr08e",r="DiceIcon_physical__yV2lY",o="DiceIcon_magic__15Bfj",s="DiceIcon_elemental__B0alV",d="DiceIcon_trait__fPQ3I",l="DiceIcon_any__f-UYu",u="DiceIcon_notRolled__oeujV",_=t(3329),f=function(e){var n=e.value,t=e.type,c=void 0===n||-1===n?"".concat(u," "):"";switch(t){case"any":default:return"".concat(c).concat(l);case"physical":case"slashed":case"smashed":case"needle":return"".concat(c).concat(r);case"mana":case"magic":case"arcane":case"toxic":case"void":case"rainbow":return"".concat(c).concat(o);case"elemental":case"heat":case"ice":case"shock":case"poison":return"".concat(c).concat(s);case"trait":case"speed":case"strength":case"dexterity":case"perception":case"wits":case"stamina":return"".concat(c).concat(d)}},m=function(e){var n=e.value,t=e.diceMax,r=e.type;return(0,_.jsxs)("div",{className:"".concat(a," ").concat(f({value:n,type:r})),children:[n||t||" "," ",(0,_.jsx)("span",{className:i,children:(0,c.sp)(r)})]})}},4951:function(e,n,t){t.d(n,{u:function(){return k}});var c=t(1413),a=t(7762),i=t(5861),r=t(3433),o=t(9439),s=t(7757),d=t.n(s),l=t(7235),u=t(8664),_=t(4207),f=t(4880),m=t(7796),v=function(e,n){var t=JSON.parse(JSON.stringify(e)),a=[],i=n,r=!!(i&&Array.isArray(i)&&i.length>0)&&i,o=!!i&&i.filter((function(e){return e.selected})),s=!!(o&&Array.isArray(o)&&o.length>0)&&o,d=!!(t.dices&&Array.isArray(t.dices)&&t.dices.length>0)&&t.dices,l=function(){var e=[];if(t.dices.forEach((function(n){e.push(n)})),e.length>0)return a.push((function(){return(0,m.mN)(e)})),a.push((function(){return(0,_.fx)(t.id)})),a};if(d&&(t.disabled||t.fulfilled))return l(),a;var u=function(e,n){for(var t=!1,a=n.length;a>0;a--){var i=n[a-1];f.X.diceIsAllowed(e,i)&&(t=(0,c.Z)({},i),a=0)}return t};if(r){if(s){var v=u(t,s);return v?(a.push((function(){return(0,_.hm)({pieceId:t.id,dice:v})})),a.push((function(){return(0,m.fo)(v)})),console.log("Added ".concat(v.id," to ").concat(t.id)),a):a}var x=u(t,r);return x?(a.push((function(){return(0,_.hm)({pieceId:t.id,dice:x})})),a.push((function(){return(0,m.fo)(x)})),console.log("Added ".concat(x.id," to ").concat(t.id)),a):(l(),a)}return d?(l(),a):[]},x=t(2791),h=t(9434),p=t(984),g=t(5224),y=t(3329),k=function(e){var n=e.p,t=(0,h.I0)(),s=(0,p.TD)().rolledDices,_=(0,x.useState)([]),m=(0,o.Z)(_,2),k=m[0],Z=m[1],B=f.X.getDmgIcons(n),b=f.X.getReqIcons(n),I=n.weakness?n.weakness:[];return(0,x.useEffect)((function(){var e=function(){var e=(0,i.Z)(d().mark((function e(){var n,c,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=(0,a.Z)(k),e.prev=1,n.s();case 3:if((c=n.n()).done){e.next=9;break}return i=c.value,e.next=7,t(i());case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),n.e(e.t0);case 14:return e.prev=14,n.f(),e.finish(14);case 17:Z([]);case 18:case"end":return e.stop()}}),e,null,[[1,11,14,17]])})));return function(){return e.apply(this,arguments)}}();k.length>0&&e()}),[k,t]),(0,y.jsxs)("div",{className:"".concat(u.Z.piece," ").concat(n.fulfilled?u.Z.fulfilled:n.disabled?u.Z.disabled:u.Z.waiting),children:[(0,y.jsx)("div",{className:u.Z.leftHolder,children:I?I.map((function(e,t){return"any"===e?"":(0,y.jsx)(l.k,{type:e,value:""},"weaknessDiceType|".concat(n.id,"|").concat(e).concat(t))})):""}),(0,y.jsxs)("div",{className:u.Z.middleContainer,onClick:function(){Z((0,r.Z)(k.concat(v(n,s))))},children:[(0,y.jsx)("div",{className:u.Z.displayedBodyPart,children:n.bodyPartIcon}),(0,y.jsx)("div",{className:u.Z.diceHolder,children:n.dices?n.dices.map((function(e,n){return(0,x.createElement)(l.k,(0,c.Z)((0,c.Z)({},e),{},{key:"pieceDice|".concat(e.type,"|").concat(n)}))})):""}),(0,y.jsxs)("div",{className:u.Z.requiredHolder,children:[(0,y.jsx)("div",{className:u.Z.req}),b?b.map((function(e,t){return(0,x.createElement)(g.u,(0,c.Z)((0,c.Z)({},e),{},{key:"pieceIcon|".concat(n.id,"|").concat(t)}))})):""]})]}),(0,y.jsx)("div",{className:u.Z.damageHolder,children:B?B.map((function(e,t){return(0,y.jsx)("div",{className:u.Z.dmg,children:e},"".concat(n.id,"|dmgIcon|").concat(t))})):""})]})}},5224:function(e,n,t){t.d(n,{u:function(){return l}});var c="PieceIcon_dice__ZzvQe",a="PieceIcon_icon__g4BoE",i="PieceIcon_allowed__OR7Se",r="PieceIcon_neutral__gwSdE",o="PieceIcon_required__vrTY5",s=t(3329),d=function(e){var n=e.required,t=e.allowed;return n?o:t?i:r},l=function(e){var n=e.value,t=e.required,i=e.allowed;return(0,s.jsxs)("div",{className:"".concat(c," ").concat(d({required:t,allowed:i})),children:["".concat(n||" "),(0,s.jsx)("span",{className:a,children:" "})]})}},1564:function(e,n,t){t.d(n,{v:function(){return i}});var c={miniature:"Miniature_miniature__-XChZ",extension:"Miniature_extension__JEJLA",padding:"Miniature_padding__AvpVc",textBoxContainer:"Miniature_textBoxContainer__VBOAB",textBoxFront:"Miniature_textBoxFront__YIyfd",textBoxBack:"Miniature_textBoxBack__b4yIz",imgFrame:"Miniature_imgFrame__3V+X9",figcaption:"Miniature_figcaption__PifSq",img:"Miniature_img__7uR5g"},a=t(3329),i=function(e){var n=e.padding,t=void 0!==n&&n,i=e.bgTxtFront,r=void 0===i?"":i,o=e.bgTxtBack,s=void 0===o?"":o,d=e.children,l=e.bgColor,u=void 0===l?"#d7ca92":l;return(0,a.jsxs)("figure",{className:"".concat(c.miniature," ").concat(d?c.extended:""),children:[(0,a.jsx)("div",{className:"".concat(c.imgFrame," ").concat(t?c.padding:""," "),style:{backgroundColor:"".concat(u)},children:(0,a.jsxs)("div",{className:c.textBoxContainer,children:[(0,a.jsx)("div",{className:c.textBoxBack,children:s}),(0,a.jsx)("div",{className:c.textBoxFront,children:r})]})}),d?(0,a.jsxs)("div",{className:c.extension,children:[" ",d]}):""]})}},5459:function(e,n,t){t.d(n,{i:function(){return p}});var c=t(1413),a=t(7762),i=t(5861),r=t(3433),o=t(9439),s=t(7757),d=t.n(s),l=t(1564),u=t(7235),_={item:"SkillSquare_item__bxD12",canFire:"SkillSquare_canFire__YwXx-",skillButton:"SkillSquare_skillButton__6sBaz",bar:"SkillSquare_bar__HFaeU",text:"SkillSquare_text__k4BJE",name:"SkillSquare_name__thDuJ",iconBag:"SkillSquare_iconBag__c+K-+",disabled:"SkillSquare_disabled__L5kRC",spent:"SkillSquare_spent__cyghQ"},f=t(984),m=t(2791),v=t(9434),x=t(986),h=t(3329),p=function(e){var n=e.name,t=e.itemId,s=e.icon,p=e.alt,g=e.tags,y=void 0===g?[""]:g,k=e.success,Z=void 0!==k&&k,B=e.currentUses,b=void 0===B?-1:B,I=e.skill,E=void 0===I?{name:"NO SKILL",txt:"-",id:"skill|id",displayCost:[]}:I,N=(0,m.useState)([]),S=(0,o.Z)(N,2),j=S[0],D=S[1],C=(0,f.TD)(),w=C.inCombat,q=C.combat,A=(0,v.I0)();return(0,m.useEffect)((function(){var e=function(){var e=(0,i.Z)(d().mark((function e(n){var t,c,i;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=(0,a.Z)(n),e.prev=1,t.s();case 3:if((c=t.n()).done){e.next=10;break}if(!1===(i=c.value)){e.next=8;break}return e.next=8,A(i());case 8:e.next=3;break;case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),t.e(e.t0);case 15:return e.prev=15,t.f(),e.finish(15);case 18:D([]);case 19:case"end":return e.stop()}}),e,null,[[1,12,15,18]])})));return function(n){return e.apply(this,arguments)}}();j.length>0&&e(j)}),[j,A]),(0,h.jsxs)("div",{className:"".concat(_.item," ").concat(!0!==w||b<0?_.display:Z?_.canFire:_.disabled," ").concat(!0===w&&0===b?_.spent:""),id:t,children:[(0,h.jsx)(l.v,{url:s,alt:p||n,bgTxtBack:y[0]}),(0,h.jsx)("div",{className:"".concat(_.skillButton," "),onClick:function(){Z&&0===j.length&&D((0,r.Z)(j.concat(x.U.execute(t,{combat:q},Z))))},children:p},"".concat(n,"btn").concat(t)),(0,h.jsxs)("div",{className:_.bar,children:[(0,h.jsx)("div",{className:_.iconBag,children:(E.displayCost?E.displayCost:[]).map((function(e,t){return(0,m.createElement)(u.k,(0,c.Z)((0,c.Z)({},e),{},{key:"".concat(n,"|").concat(e.type,"|").concat(t)}))}))}),(0,h.jsx)("div",{className:_.text,children:E.txt}),(0,h.jsx)("span",{className:_.name,children:E.name})]})]})}},986:function(e,n,t){t.d(n,{U:function(){return s}});var c=t(3433),a=t(1621),i=function(e){var n=e.itemId,t=function(e,n){if(!e)return[];var t=(0,a.Dl)(e)||[];return 0===t.length?[]:(0,c.Z)(t.map((function(e){var t=e[0]||{false:function(){return!1}},c=e.length>0&&e[1]||!1,a=e.length>1&&e[2]||{};return function(){return t[c]({params:a,state:n})}})))}(n,e.state);return!(t.length<1)&&(console.log("Skill evaluations for:",n,t),t)},r=t(7796),o=t(7492),s={usedDices:function(e,n){var t=n.dungeon||!1,a=t&&t.items||!1,r=!!a&&a.find((function(n){return n.itemId===e}));if((r&&r.currentUses||0)<1)return!1;var o=i({itemId:e,state:n});if(!o)return console.log("".concat(e," had no evaluations to perform")),!1;for(var s=(0,c.Z)(o),d=!0,l=0;d&&l<s.length;){var u=s[l]();void 0===u||!1===u?d=!1:!0!==u&&(d=!0!==d&&!1!==d?[].concat((0,c.Z)(d),(0,c.Z)(u)):(0,c.Z)(u)),l++}return l!==s.length&&(d=!1),d},execute:function(e,n,t){var i=(0,c.Z)(t.map((function(e){return function(e,n){return n.find((function(n){return n.id===e}))||{}}(e,n.combat.rolledDices)})));console.log("Skill.EXECUTE > usedDices, diceIdArr",i,t);var s=function(e){var n=e.itemId,t=e.state,i=e.usedDices;if(!n)return[];var r=(0,a.cL)(n)||[];if(0===r.length)return[];var o=(0,c.Z)(r.map((function(e){var n=e[0]||{false:function(){return!1}},c=e.length>0&&e[1]||!1,a=e.length>1&&e[2]||{};return function(){return n[c]({params:a,state:t,usedDices:i})}})));return!(o.length<1)&&(console.log("data> skillExecs > SkillExecs for:",n,o),o)}({itemId:e,state:n,usedDices:i});if(!s)return console.log("".concat(e," had no actions to execute")),!1;for(var d=(0,c.Z)(s),l=!0,u=0;l&&u<d.length;){var _=d[u]();void 0===_||!1===_?l=!1:!0!==_&&(l=!0!==l&&!1!==l?[].concat((0,c.Z)(l),(0,c.Z)(_)):(0,c.Z)(_)),u++}return l=u===d.length&&(!0!==l&&!1!==l?[].concat((0,c.Z)(l),[r.EC,function(){return(0,o.IZ)(e)}]):[r.EC,function(){return(0,o.IZ)(e)}])}}},8664:function(e,n){n.Z={body:"EnemyBody_body__SNMRT",piece:"EnemyBody_piece__m6sgA",middleContainer:"EnemyBody_middleContainer__tatOZ",displayedBodyPart:"EnemyBody_displayedBodyPart__94tgg",leftHolder:"EnemyBody_leftHolder__mO2A4",damageHolder:"EnemyBody_damageHolder__veb4+",modifier:"EnemyBody_modifier__KoRSl",x2:"EnemyBody_x2__fVl44",requiredHolder:"EnemyBody_requiredHolder__6QNCW",diceHolder:"EnemyBody_diceHolder__+wfoq",dmg:"EnemyBody_dmg__ECDC4",disabled:"EnemyBody_disabled__aLzAg",fulfilled:"EnemyBody_fulfilled__vmh42",waiting:"EnemyBody_waiting__XT6PA"}}}]);
//# sourceMappingURL=219.ca604dc5.chunk.js.map