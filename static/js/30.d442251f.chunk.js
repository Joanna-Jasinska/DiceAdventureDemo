"use strict";(self.webpackChunkDiceAdventureDemo=self.webpackChunkDiceAdventureDemo||[]).push([[30],{8703:function(e,c,a){a.d(c,{Q:function(){return x}});var n=a(1413),t=a(3433),s=a(9434),i=a(4221),r=a(5459),l=a(4064),o=a(2639),d=a(9558),u=a(984),m=a(986),_="SkillList_list__0NNv7",v=a(3329),x=function(e){var c=e.filters,a=(0,s.v9)(i.mj),x=(0,u.wK)().dungeon,f=(0,s.I0)(),j=(0,s.v9)(d.bd),D=(0,u.TD)().combat;return(0,v.jsxs)("div",{className:_,children:[(0,s.v9)(i.NH)?(0,v.jsx)(v.Fragment,{children:(0,v.jsx)(o.a,{})}):"",j&&Array.isArray(j)?function(e,c){return c&&Array.isArray(c)?(0,t.Z)(c.filter((function(c){return!e.selected||c.selected===e.selected}))):c}(c||a,j).map((function(e,c){return(0,v.jsx)(r.i,{name:"".concat(e.name),alt:"".concat(e.alt),itemId:"".concat(e.itemId),index:c,selected:e.selected,skill:e.skill,currentUses:e.currentUses,success:m.U.usedDices(e.itemId,{combat:D,dungeon:x}),statsTxT:e.statsTxT||"",toggleSelect:function(){return f((0,l.$G)((0,n.Z)((0,n.Z)({},e),{},{selected:!e.selected})))},dices:e.dices,lv:e.lv},"".concat(e.name,"|").concat(e.index,"|").concat(e.id))})):""]})}},3030:function(e,c,a){a.r(c),a.d(c,{CombatPage:function(){return M},default:function(){return Q}});var n=a(7689),t=a(9434),s=a(35),i=a(2093),r=a(984),l=a(1413),o=a(4951),d=a(8664),u=a(6150),m=a(3329),_=function(){var e=(0,u.j)().body,c=e||[];return(0,m.jsx)("div",{className:d.Z.body,children:c.map((function(e,c){return(0,m.jsx)(o.u,{p:(0,l.Z)({},e)},"piece|".concat(c,"|").concat(e.id))}))})},v=a(8703),x=a(9243),f="RolledDice_dice__Xm1fU",j="RolledDice_diceMaxCover__W6mKr",D="RolledDice_icon__8Q1v9",h="RolledDice_physical__P4A2k",p="RolledDice_magic__X8wHj",y="RolledDice_elemental__TF1bg",g="RolledDice_trait__A5TtY",N="RolledDice_any__UQyUn",k="RolledDice_notRolled__M8zvO",R="RolledDice_selected__yikHW",b=a(7796),T=function(e){var c=e.value,a=e.type,n=c&&-1!==c?"":"".concat(k," ");switch(a){case"any":default:return"".concat(n).concat(N);case"physical":case"slashed":case"smashed":case"needle":return"".concat(n).concat(h);case"mana":case"magic":case"arcane":case"toxic":case"void":case"rainbow":return"".concat(n).concat(p);case"elemental":case"heat":case"ice":case"shock":case"poison":return"".concat(n).concat(y);case"speed":case"strength":case"dexterity":case"perception":case"wits":case"stamina":return"".concat(n).concat(g)}},Z=function(e){var c=e.value,a=e.diceMax,n=e.type,s=e.selected,i=e.id,r=(0,t.I0)();return(0,m.jsxs)("div",{className:"".concat(f," ").concat(T({value:c,diceMax:a,type:n})," ").concat(s?R:""),onClick:function(){r((0,b.cV)(i))},children:[c||a||"?"," ",(0,m.jsx)("span",{className:D,children:(0,x.sp)(n)}),(0,m.jsx)("div",{className:j,children:a})]})},A="RolledDiceBag_diceBag__OEjoy",w=a(2791),C=function(){var e=(0,r.TD)().rolledDices;return(0,m.jsx)("div",{className:A,children:(e||[]).map((function(e,c){return(0,w.createElement)(Z,(0,l.Z)((0,l.Z)({},e),{},{key:"rolledDice|".concat(e.type,"|").concat(c)}))}))})},F=a(5707),U=a(9558),H=a(1486),I=a(2639),M=function(){var e=(0,r.TD)().inCombat,c=(0,t.v9)(s.DC),a=(0,t.v9)(F.E4),l=(0,t.v9)(U.NH),o=(0,t.v9)(H.NH);return"summary"===e?(0,m.jsx)(n.Fg,{to:"/summary"}):l||o?(0,m.jsx)(I.a,{}):(0,m.jsxs)("main",{className:i.Z.main,children:[c?(0,m.jsx)("span",{className:i.Z.error,children:c}):"",e?a<1?(0,m.jsx)(n.Fg,{to:"/return"}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(_,{}),(0,m.jsx)(C,{}),(0,m.jsx)(v.Q,{})]}):(0,m.jsx)(n.Fg,{to:"/dungeon"})]})},Q=M}}]);
//# sourceMappingURL=30.d442251f.chunk.js.map