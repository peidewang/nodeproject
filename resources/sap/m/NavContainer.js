/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.NavContainer");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.NavContainer",{metadata:{publicMethods:["to","back","backToPage","backToTop","getPage","getCurrentPage","getPreviousPage","addCustomTransition","insertPreviousPage"],library:"sap.m",properties:{"height":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},"width":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:'100%'},"visible":{type:"boolean",group:"Appearance",defaultValue:true},"defaultTransitionName":{type:"string",group:"Appearance",defaultValue:null}},defaultAggregation:"pages",aggregations:{"pages":{type:"sap.ui.core.Control",multiple:true,singularName:"page"}},associations:{"initialPage":{type:"sap.ui.core.Control",multiple:false}},events:{"navigate":{allowPreventDefault:true},"afterNavigate":{}}}});sap.m.NavContainer.M_EVENTS={'navigate':'navigate','afterNavigate':'afterNavigate'};
sap.m.NavContainer.prototype.init=function(){this._pageStack=[];this._aQueue=[];this._mVisitedPages={};this._iTransitionsCompleted=0;this._bNeverRendered=true;this._bNavigating=false};
sap.m.NavContainer.prototype.onBeforeRendering=function(){var p=this.getCurrentPage();if(this._bNeverRendered&&p){var a=p.getId();if(!this._mVisitedPages[a]){this._mVisitedPages[a]=true;var n={from:null,fromId:null,to:p,toId:a,firstTime:true,isTo:false,isBack:false,isBackToPage:false,isBackToTop:false,direction:"initial"};var e=jQuery.Event("BeforeFirstShow",n);e.srcControl=this;e.data={};e.backData={};p._handleEvent(e);e=jQuery.Event("BeforeShow",n);e.srcControl=this;e.data={};e.backData={};p._handleEvent(e)}}};
sap.m.NavContainer.prototype.onAfterRendering=function(){var p=this.getCurrentPage();if(this._bNeverRendered&&p){this._bNeverRendered=false;delete this._bNeverRendered;var a=p.getId();var n={from:null,fromId:null,to:p,toId:a,firstTime:true,isTo:false,isBack:false,isBackToTop:false,isBackToPage:false,direction:"initial"};var e=jQuery.Event("AfterShow",n);e.srcControl=this;e.data={};e.backData={};p._handleEvent(e)}};
sap.m.NavContainer.prototype._getActualInitialPage=function(){var p=this.getInitialPage();if(p){var a=sap.ui.getCore().byId(p);if(a){return a}else{jQuery.sap.log.error("NavContainer: control with ID '"+p+"' was set as 'initialPage' but was not found as a DIRECT child of this NavContainer (number of current children: "+this.getPages().length+").")}}var b=this.getPages();return(b.length>0?b[0]:null)};
sap.m.NavContainer.prototype.getPage=function(p){var P=this.getPages();for(var i=0;i<P.length;i++){if(P[i]&&(P[i].getId()==p)){return P[i]}}return null};
sap.m.NavContainer.prototype.getDefaultTransitionName=function(){var n=this.getProperty("defaultTransitionName");if(!n){n=jQuery.os.winphone?"door":"slide"}return n};
sap.m.NavContainer.prototype._ensurePageStackInitialized=function(){if(this._pageStack.length===0){var p=this._getActualInitialPage();if(p){this._pageStack.push({id:p.getId(),mode:"initial",data:{}})}}return this._pageStack};
sap.m.NavContainer.prototype.getCurrentPage=function(){var s=this._ensurePageStackInitialized();if(s.length>=1){return this.getPage(s[s.length-1].id)}else{jQuery.sap.log.warning(this+": page stack is empty but should have been initialized - application failed to provide a page to display");return undefined}};
sap.m.NavContainer.prototype.getPreviousPage=function(){var s=this._ensurePageStackInitialized();if(s.length>1){return this.getPage(s[s.length-2].id)}else if(s.length==1){return undefined}else{jQuery.sap.log.warning(this+": page stack is empty but should have been initialized - application failed to provide a page to display")}};
sap.m.NavContainer.prototype.insertPreviousPage=function(p,t,d){var s=this._ensurePageStackInitialized();if(this._pageStack.length>0){var i=s.length-1;var a={id:p,mode:t,data:d};if(i===0){a.mode="initial";delete s[s.length-1].mode}s.splice(i,0,a)}else{jQuery.sap.log.warning(this+": insertPreviousPage called with empty page stack; ignoring")}return this};
sap.m.NavContainer.prototype._afterTransitionCallback=function(n,d,b){var e=jQuery.Event("AfterShow",n);e.data=d||{};e.backData=b||{};e.srcControl=this;n.to._handleEvent(e);e=jQuery.Event("AfterHide",n);e.srcControl=this;n.from._handleEvent(e);this._iTransitionsCompleted++;this._bNavigating=false;this.fireAfterNavigate(n);jQuery.sap.log.info(this+": _afterTransitionCallback called, to: "+n.toId);if(this._aQueue.length>0){var N=this._aQueue.shift();N()}};
sap.m.NavContainer.prototype.to=function(p,t,d,T){if(p instanceof sap.ui.core.Control){p=p.getId()}if(typeof(t)!=="string"){T=d;d=t}t=t||this.getDefaultTransitionName();T=T||{};d=d||{};this._ensurePageStackInitialized();if(this._bNavigating){jQuery.sap.log.info(this.toString()+": Cannot navigate to page "+p+" because another navigation is already in progress. - navigation will be executed after the previous one");this._aQueue.push(jQuery.proxy(function(){this.to(p,t,d,T)},this));return this}var f=this.getCurrentPage();if(f&&(f.getId()===p)){jQuery.sap.log.warning(this.toString()+": Cannot navigate to page "+p+" because this is the current page.");return this}var o=this.getPage(p);if(o){var n={from:f,fromId:f.getId(),to:o,toId:p,firstTime:!this._mVisitedPages[p],isTo:true,isBack:false,isBackToTop:false,isBackToPage:false,direction:"to"};var c=this.fireNavigate(n);if(c){var e=jQuery.Event("BeforeHide",n);e.srcControl=this;f._handleEvent(e);if(!this._mVisitedPages[p]){e=jQuery.Event("BeforeFirstShow",n);e.srcControl=this;e.data=d||{};e.backData={};o._handleEvent(e)}e=jQuery.Event("BeforeShow",n);e.srcControl=this;e.data=d||{};e.backData={};o._handleEvent(e);this._pageStack.push({id:p,mode:t,data:d});this._mVisitedPages[p]=true;if(!this.getDomRef()){jQuery.sap.log.info("'Hidden' 'to' navigation in not-rendered NavContainer "+this.toString());return this}var a;if(!(a=o.getDomRef())||sap.ui.core.RenderManager.isPreservedContent(a)){o.addStyleClass("sapMNavItemRendering");jQuery.sap.log.debug("Rendering 'to' page '"+o.toString()+"' for 'to' navigation");var r=sap.ui.getCore().createRenderManager();r.render(o,this.getDomRef());r.destroy();o.addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemRendering")}var b=sap.m.NavContainer.transitions[t]||sap.m.NavContainer.transitions["slide"];var C=this._iTransitionsCompleted;var g=this;window.setTimeout(function(){if(g&&(g._iTransitionsCompleted<C+1)){jQuery.sap.log.warning("Transition '"+t+"' 'to' was triggered five seconds ago, but has not yet invoked the end-of-transition callback.")}},5000);this._bNavigating=true;b.to.call(this,f,o,jQuery.proxy(function(){this._afterTransitionCallback(n,d)},this),T)}else{jQuery.sap.log.info("Navigation to page with ID '"+p+"' has been aborted by the application")}}else{jQuery.sap.log.warning("Navigation triggered to page with ID '"+p+"', but this page is not known/aggregated by "+this)}return this};
sap.m.NavContainer.prototype.back=function(b,t){this._backTo("back",b,t);return this};
sap.m.NavContainer.prototype.backToPage=function(p,b,t){this._backTo("backToPage",b,t,p);return this};
sap.m.NavContainer.prototype.backToTop=function(b,t){this._backTo("backToTop",b,t);return this};
sap.m.NavContainer.prototype._backTo=function(t,b,T,r){if(this._bNavigating){jQuery.sap.log.warning(this.toString()+": Cannot navigate back because another navigation is already in progress. - navigation will be executed after the previous one");this._aQueue.push(jQuery.proxy(function(){this._backTo(t,b,T,r)},this));return this}if(this._pageStack.length<=1){if(this._pageStack.length===1&&this._pageStack[0].mode!="initial"){throw new Error("Initial page not found on the stack. How did this happen?")}return this}else{var f=this._pageStack[this._pageStack.length-1];var m=f.mode;var F=this.getPage(f.id);var o;var a;if(t==="backToTop"){o=this._getActualInitialPage();a=null}else if(t==="backToPage"){var i=this._findClosestPreviousPageInfo(r);if(!i){jQuery.sap.log.error(this.toString()+": Cannot navigate backToPage('"+r+"') because target page was not found among the previous pages.");return this}o=sap.ui.getCore().byId(i.id);if(!o){jQuery.sap.log.error(this.toString()+": Cannot navigate backToPage('"+r+"') because target page does not exist anymore.");return this}a=i.data}else{o=this.getPreviousPage();a=this._pageStack[this._pageStack.length-2].data}if(!o){jQuery.sap.log.error("NavContainer back navigation: target page is not defined or not aggregated by this NavContainer. Aborting navigation.");return}var c=o.getId();b=b||{};T=T||{};var n={from:F,fromId:F.getId(),to:o,toId:c,firstTime:!this._mVisitedPages[c],isTo:false,isBack:(t==="back"),isBackToPage:(t==="backToPage"),isBackToTop:(t==="backToTop"),direction:t};var C=this.fireNavigate(n);if(C){var e=jQuery.Event("BeforeHide",n);e.srcControl=this;F._handleEvent(e);if(!this._mVisitedPages[c]){e=jQuery.Event("BeforeFirstShow",n);e.srcControl=this;e.backData=b||{};e.data={};o._handleEvent(e)}e=jQuery.Event("BeforeShow",n);e.srcControl=this;e.backData=b||{};e.data=a||{};o._handleEvent(e);this._pageStack.pop();this._mVisitedPages[c]=true;if(t==="backToTop"){this._pageStack=[];this.getCurrentPage()}else if(t==="backToPage"){while(this._pageStack[this._pageStack.length-1].id!==r){this._pageStack.pop()}}if(!this.getDomRef()){jQuery.sap.log.info("'Hidden' back navigation in not-rendered NavContainer "+this.toString());return this}var d=sap.m.NavContainer.transitions[m]||sap.m.NavContainer.transitions["slide"];var g=this._iTransitionsCompleted;var h=this;window.setTimeout(function(){if(h&&(h._iTransitionsCompleted<g+1)){jQuery.sap.log.warning("Transition '"+m+"' 'back' was triggered five seconds ago, but has not yet invoked the end-of-transition callback.")}},5000);this._bNavigating=true;var j;if(!(j=o.getDomRef())||sap.ui.core.RenderManager.isPreservedContent(j)){o.addStyleClass("sapMNavItemRendering");jQuery.sap.log.debug("Rendering 'to' page '"+o.toString()+"' for back navigation");var k=sap.ui.getCore().createRenderManager();var l=this.$().children().index(F.getDomRef());k.renderControl(o);k.flush(this.getDomRef(),false,l);k.destroy();o.addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemRendering")}if(F.getId()===o.getId()){jQuery.sap.log.info("Transition is skipped when navigating back to the same page instance"+o.toString());this._afterTransitionCallback(n,a,b);return this}d.back.call(this,F,o,jQuery.proxy(function(){this._afterTransitionCallback(n,a,b)},this),T)}}return this};
sap.m.NavContainer.prototype._findClosestPreviousPageInfo=function(r){for(var i=this._pageStack.length-2;i>=0;i--){var a=this._pageStack[i];if(a.id===r){return a}}return null};
sap.m.NavContainer.transitions=sap.m.NavContainer.transitions||{};sap.m.NavContainer.transitions["show"]={to:function(f,t,c){t.removeStyleClass("sapMNavItemHidden");f&&f.addStyleClass("sapMNavItemHidden");c()},back:function(f,t,c){t.removeStyleClass("sapMNavItemHidden");f&&f.addStyleClass("sapMNavItemHidden");c()}};if(jQuery.support.cssTransitions){sap.m.NavContainer.transitions["slide"]={to:function(f,t,c){f.addStyleClass("sapMNavItemCenter");window.setTimeout(function(){t.addStyleClass("sapMNavItemRight");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var a=null;a=function(){jQuery(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true}else{T=false;t.removeStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter");f.removeStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemLeft");c()}};f.$().bind("webkitTransitionEnd transitionend",a);t.$().bind("webkitTransitionEnd transitionend",a);t.addStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemCenter").removeStyleClass("sapMNavItemRight");f.addStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter").addStyleClass("sapMNavItemLeft");window.setTimeout(function(){if(T){o=true;a.apply(f.$().add(t.$()))}},400)},60)},0)},back:function(f,t,c){t.addStyleClass("sapMNavItemLeft");t.removeStyleClass("sapMNavItemHidden");f.addStyleClass("sapMNavItemCenter");window.setTimeout(function(){var o=false;var T=true;var a=null;a=function(){jQuery(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true}else{T=false;t.removeStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter");f.removeStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemRight");c()}};f.$().bind("webkitTransitionEnd transitionend",a);t.$().bind("webkitTransitionEnd transitionend",a);if(jQuery.browser.webkit){window.setTimeout(function(){t.$().css("box-shadow","0em 1px 0em rgba(128, 128, 1280, 0.1)");window.setTimeout(function(){t.$().css("box-shadow","")},50)},0)}t.addStyleClass("sapMNavItemSliding").addStyleClass("sapMNavItemCenter").removeStyleClass("sapMNavItemLeft");f.addStyleClass("sapMNavItemSliding").removeStyleClass("sapMNavItemCenter").addStyleClass("sapMNavItemRight");window.setTimeout(function(){if(T){o=true;a.apply(f.$().add(t.$()))}},400)},100)}}}else{sap.m.NavContainer.transitions["slide"]={to:function(f,t,c){var T=t.$();T.css("left","100%");t.removeStyleClass("sapMNavItemHidden");T.animate({left:"0%"},300);var F=f.$();F.animate({left:"-100%"},300,function(){f.addStyleClass("sapMNavItemHidden");F.css("left","0");c()})},back:function(f,t,c){var T=t.$();T.css("left","-100%");t.removeStyleClass("sapMNavItemHidden");T.animate({left:"0%"},300);var F=f.$();F.animate({left:"100%"},300,function(){f.addStyleClass("sapMNavItemHidden");F.css("left","0");c()})}}}if(jQuery.support.cssTransitions){sap.m.NavContainer.transitions["fade"]={to:function(f,t,c){t.addStyleClass("sapMNavItemTransparent");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var a=null;var T=true;a=function(){jQuery(this).unbind("webkitTransitionEnd transitionend");T=false;f.addStyleClass("sapMNavItemHidden");t.removeStyleClass("sapMNavItemFading").removeStyleClass("sapMNavItemOpaque");c()};t.$().bind("webkitTransitionEnd transitionend",a);t.addStyleClass("sapMNavItemFading").removeStyleClass("sapMNavItemTransparent").addStyleClass("sapMNavItemOpaque");window.setTimeout(function(){if(T){a.apply(t.$())}},600)},10)},back:function(f,t,c){f.addStyleClass("sapMNavItemOpaque");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var a=null;var T=true;a=function(){jQuery(this).unbind("webkitTransitionEnd transitionend");T=false;f.removeStyleClass("sapMNavItemFading").addStyleClass("sapMNavItemHidden");f.removeStyleClass("sapMNavItemTransparent");c()};f.$().bind("webkitTransitionEnd transitionend",a);f.addStyleClass("sapMNavItemFading").removeStyleClass("sapMNavItemOpaque");f.addStyleClass("sapMNavItemTransparent");window.setTimeout(function(){if(T){a.apply(t.$())}},600)},10)}}}else{sap.m.NavContainer.transitions["fade"]={to:function(f,t,c){var T=t.$();T.css("opacity","0");t.removeStyleClass("sapMNavItemHidden");T.animate({opacity:"1"},500,function(){f.addStyleClass("sapMNavItemHidden");c()})},back:function(f,t,c){var F=f.$();t.removeStyleClass("sapMNavItemHidden");F.animate({opacity:"0"},500,function(){f.addStyleClass("sapMNavItemHidden");F.css("opacity","1");c()})}}}if(jQuery.support.cssTransitions){sap.m.NavContainer.transitions["flip"]={to:function(f,t,c){var a=this;window.setTimeout(function(){var i=(jQuery.os.android&&jQuery.os.fVersion===2.3);!i&&a.$().addClass("sapMNavFlip");t.addStyleClass("sapMNavItemFlipNext");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){jQuery(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true}else{T=false;t.removeStyleClass("sapMNavItemFlipping");f.removeStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemFlipPrevious");!i&&a.$().removeClass("sapMNavFlip");c()}};f.$().bind("webkitTransitionEnd transitionend",A);t.$().bind("webkitTransitionEnd transitionend",A);t.addStyleClass("sapMNavItemFlipping").removeStyleClass("sapMNavItemFlipNext");f.addStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemFlipPrevious");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()))}},600)},60)},0)},back:function(f,t,c){var a=this,i=(jQuery.os.android&&jQuery.os.fVersion===2.3);!i&&a.$().addClass("sapMNavFlip");t.addStyleClass("sapMNavItemFlipPrevious");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){jQuery(this).unbind("webkitTransitionEnd transitionend");if(!o){o=true}else{T=false;t.removeStyleClass("sapMNavItemFlipping");f.removeStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemFlipNext");!i&&a.$().removeClass("sapMNavFlip");c()}};f.$().bind("webkitTransitionEnd transitionend",A);t.$().bind("webkitTransitionEnd transitionend",A);t.addStyleClass("sapMNavItemFlipping").removeStyleClass("sapMNavItemFlipPrevious");f.addStyleClass("sapMNavItemFlipping").addStyleClass("sapMNavItemFlipNext");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()))}},600)},60)}}}else{sap.m.NavContainer.transitions["flip"]=sap.m.NavContainer.transitions["slide"]}if(jQuery.support.cssTransitions){sap.m.NavContainer.transitions["door"]={to:function(f,t,c){var a=this;window.setTimeout(function(){var i=(jQuery.os.android&&jQuery.os.fVersion===2.3);!i&&a.$().addClass("sapMNavDoor");t.addStyleClass("sapMNavItemDoorInNext");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){jQuery(this).unbind("webkitAnimationEnd animationend");if(!o){o=true}else{T=false;t.removeStyleClass("sapMNavItemDooring").removeStyleClass("sapMNavItemDoorInNext");f.removeStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemDoorInPrevious");!i&&a.$().removeClass("sapMNavDoor");c()}};f.$().bind("webkitAnimationEnd animationend",A);t.$().bind("webkitAnimationEnd animationend",A);t.addStyleClass("sapMNavItemDooring");f.addStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemDoorInPrevious");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()))}},1000)},60)},0)},back:function(f,t,c){var a=this,i=(jQuery.os.android&&jQuery.os.fVersion===2.3);!i&&a.$().addClass("sapMNavDoor");t.addStyleClass("sapMNavItemDoorOutNext");t.removeStyleClass("sapMNavItemHidden");window.setTimeout(function(){var o=false;var T=true;var A=null;A=function(){jQuery(this).unbind("webkitAnimationEnd animationend");if(!o){o=true}else{T=false;t.removeStyleClass("sapMNavItemDooring").removeStyleClass("sapMNavItemDoorOutNext");f.removeStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemHidden").removeStyleClass("sapMNavItemDoorOutPrevious");!i&&a.$().removeClass("sapMNavDoor");c()}};f.$().bind("webkitAnimationEnd animationend",A);t.$().bind("webkitAnimationEnd animationend",A);t.addStyleClass("sapMNavItemDooring");f.addStyleClass("sapMNavItemDooring").addStyleClass("sapMNavItemDoorOutPrevious");window.setTimeout(function(){if(T){o=true;A.apply(f.$().add(t.$()))}},1000)},60)}}}else{sap.m.NavContainer.transitions["door"]=sap.m.NavContainer.transitions["slide"]}
sap.m.NavContainer.prototype.addCustomTransition=function(n,t,b){if(sap.m.NavContainer.transitions[n]){jQuery.sap.log.warning("Transition with name "+n+" already exists in "+this+". It is now being replaced by custom transition.")}sap.m.NavContainer.transitions[n]={to:t,back:b};return this};
sap.m.NavContainer.addCustomTransition=sap.m.NavContainer.prototype.addCustomTransition;sap.m.NavContainer.prototype.forceInvalidation=sap.m.NavContainer.prototype.invalidate;
sap.m.NavContainer.prototype.invalidate=function(s){if(s==this){}else if(!s){this.forceInvalidation()}else if(s instanceof sap.ui.core.Control){var I=false,p=this.getPages(),l=p.length;for(var i=0;i<l;i++){if(p[i]===s){I=true;break}}if(I&&!(s.getId()===this.getCurrentPage())){}else{this.forceInvalidation()}}else{this.forceInvalidation()}};
sap.m.NavContainer.prototype.addPage=function(p){var P=this.getPages();if(jQuery.inArray(p,P)>-1){return this}p.addStyleClass("sapMNavItem");var i=P.length;this.addAggregation("pages",p,true);if(i===0&&this.getPages().length===1&&this.getDomRef()){this._ensurePageStackInitialized();this.rerender()}return this};
sap.m.NavContainer.prototype.insertPage=function(p,i){p.addStyleClass("sapMNavItem");var P=this.getPages().length;this.insertAggregation("pages",p,i,true);if(P===0&&this.getPages().length===1&&this.getDomRef()){this._ensurePageStackInitialized();this.rerender()}return this};
