/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.IconTabBar");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.IconTabBar",{metadata:{library:"sap.m",properties:{"showSelection":{type:"boolean",group:"Misc",defaultValue:true,deprecated:true},"expandable":{type:"boolean",group:"Misc",defaultValue:true},"expanded":{type:"boolean",group:"Misc",defaultValue:true},"selectedKey":{type:"string",group:"Data",defaultValue:null},"visible":{type:"boolean",group:"Behavior",defaultValue:true}},aggregations:{"items":{type:"sap.m.IconTab",multiple:true,singularName:"item"},"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"}},events:{"select":{},"expand":{}}}});sap.m.IconTabBar.M_EVENTS={'select':'select','expand':'expand'};jQuery.sap.require("sap.ui.core.delegate.ItemNavigation");jQuery.sap.require("sap.ui.core.EnabledPropagator");sap.ui.core.EnabledPropagator.apply(sap.m.IconTabBar.prototype,[true]);sap.m.IconTabBar.SCROLL_STEP=264;
sap.m.IconTabBar.prototype.init=function(){this._bPreviousScrollForward=false;this._bPreviousScrollBack=false;this._iCurrentScrollLeft=0;this._bRtl=sap.ui.getCore().getConfiguration().getRTL();this.startScrollX=0;this.startTouchX=0;this._scrollable=null;this._aTabKeys=[];this._oItemNavigation=new sap.ui.core.delegate.ItemNavigation().setCycling(false);this.addDelegate(this._oItemNavigation);if(sap.ui.Device.support.touch||jQuery.sap.simulateMobileOnDesktop){jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");this._oScroller=new sap.ui.core.delegate.ScrollEnablement(this,this.getId()+"-head",{horizontal:true,vertical:false,zynga:false,iscroll:true,preventDefault:false,nonTouchScrolling:"scrollbar"})}};
sap.m.IconTabBar.prototype.exit=function(){if(this._oArrowLeft){this._oArrowLeft.destroy()}if(this._oArrowRight){this._oArrowRight.destroy()}if(this._oItemNavigation){this.removeDelegate(this._oItemNavigation);this._oItemNavigation.destroy();delete this._oItemNavigation}if(this._oScroller){this._oScroller.destroy();this._oScroller=null}if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);this._sResizeListenerId=null}if(this._aTabKeys){this._aTabKeys=null}};
sap.m.IconTabBar.prototype.onBeforeRendering=function(){var I=this.getItems(),s=this.getSelectedKey(),i=0;if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);this._sResizeListenerId=null}if(I.length>0){if(!this.oSelectedItem||s&&s!==this.oSelectedItem.getKey()){if(s){for(;i<I.length;i++){if(!(I[i]instanceof sap.m.IconTabSeparator)&&I[i].getKey()===s){this.oSelectedItem=I[i];break}}}if(!this.oSelectedItem&&this.getExpanded()){for(i=0;i<I.length;i++){if(!(I[i]instanceof sap.m.IconTabSeparator)&&I[i].getVisible()){this.oSelectedItem=I[i];break}}}}if(this.oSelectedItem){this.setProperty("selectedKey",this.oSelectedItem.getKey(),true)}}};
sap.m.IconTabBar.prototype.setSelectedKey=function(k){var I=this.getItems(),i=0;if(this.$().length){for(;i<I.length;i++){if(!(I[i]instanceof sap.m.IconTabSeparator)&&I[i].getKey()===k){this.setSelectedItem(I[i],true);break}}}this.setProperty("selectedKey",k,true);return this};
sap.m.IconTabBar.prototype.setExpanded=function(e){this.setProperty("expanded",e,true);if(this.$().length){this._toggleExpandCollapse(e)}return this};
sap.m.IconTabBar.prototype.setExpandable=function(e){this.setProperty("expandable",e,true);return this};
sap.m.IconTabBar.prototype.setSelectedItem=function(i,a){if(!i||!i.getEnabled()){return this}var $=this.$("content");if(this.oSelectedItem&&this.oSelectedItem.getVisible()&&(this.getExpandable()||this.oSelectedItem!==i)){this.oSelectedItem.$().removeClass("sapMITBSelected")}if(i.getVisible()){if(this.oSelectedItem===i){if(this.getExpandable()){this._toggleExpandCollapse()}}else{if($.length>0){$.empty()}if(this.oSelectedItem){this.oSelectedItem.$().attr("tabindex",-1)}this.oSelectedItem=i;this.setProperty("selectedKey",this.oSelectedItem.getKey(),true);this.oSelectedItem.$().addClass("sapMITBSelected");this.oSelectedItem.$().attr("tabindex",0);this.oSelectedItem.$().focus();this._oFocusedItem=this.oSelectedItem;var s=this.oSelectedItem.getContent();if(s.length>0){this._rerenderContent(s)}else{this._rerenderContent(this.getContent())}if(this.getExpandable()&&this.getExpanded()===false){this._toggleExpandCollapse(true)}this._adjustArrow()}if(this.oSelectedItem.$().length>0){this._scrollIntoView(i,500)}else{this._scrollAfterRendering=true}}var S=this.oSelectedItem.getKey();this.oSelectedItem=i;this.setProperty("selectedKey",S,true);if(!a){this.fireSelect({selectedItem:this.oSelectedItem,selectedKey:S,item:this.oSelectedItem,key:S})}return this};
sap.m.IconTabBar.prototype._rerenderContent=function(c){var $=this.$("content");if(c&&($.length>0)){var r=sap.ui.getCore().createRenderManager();for(var i=0;i<c.length;i++){r.renderControl(c[i])}r.flush($[0]);r.destroy()}};
sap.m.IconTabBar.prototype._adjustArrow=function(){var $=this.$("contentArrow"),a=this.$("head"),b;if(this.getExpanded()===false){return this}if(this.oSelectedItem){b=this.oSelectedItem.$();if(b.length>0){if(this._bRtl){var p=a[0].offsetLeft;var P=document.width-p-$.width()/2;var d=this.getDomRef("head");var s=jQuery(d).scrollRightRTL();if(this.oSelectedItem.getDesign()===sap.m.IconTabFilterDesign.Vertical){var r=$.parent().width()-b[0].offsetLeft-$.width()/2-b.outerWidth()/2-a[0].offsetLeft-s}else{var r=$.parent().width()-b[0].offsetLeft-$.width()/2-b.outerWidth()+this.oSelectedItem.$("tab").outerWidth()/2-a[0].offsetLeft-s}if(this._oScroller){r+=this._oScroller.getScrollLeft()}var i=this.getItems();if(((this.$("head").hasClass("sapMITBNoText")||this.oSelectedItem.$().hasClass("sapMITBHorizontal"))&&((this.oSelectedItem===i[0])))){r-=8}$.css("right",r+"px");$.toggleClass("sapMITBNoContentArrow",r<p||r>P)}else{var p=a[0].offsetLeft;var P=document.width-p-$.width()/2;var d=this.getDomRef("head");var S=d.scrollLeft;if(this.oSelectedItem.getDesign()===sap.m.IconTabFilterDesign.Vertical){var l=b[0].offsetLeft+b.outerWidth()/2-$.width()/2+a[0].offsetLeft-S}else{var l=b[0].offsetLeft+this.oSelectedItem.$("tab").outerWidth()/2-$.width()/2+a[0].offsetLeft-S}if(this._oScroller){l-=this._oScroller.getScrollLeft()}var i=this.getItems();if(((this.$("head").hasClass("sapMITBNoText")||this.oSelectedItem.$().hasClass("sapMITBHorizontal"))&&((this.oSelectedItem===i[0])))||((i.length>0)&&(this.oSelectedItem===i[i.length-1]))&&!jQuery.device.is.desktop&&!this.oSelectedItem.$().hasClass("sapMITBHorizontal")){l-=8}if(this.oSelectedItem.$().hasClass("sapMITBHorizontal")){l+=8}if(!jQuery.device.is.desktop&&!this.$("head").hasClass("sapMITBNoText")){if(this.oSelectedItem===i[0]){l-=2}else if(this.oSelectedItem===i[i.length-1]){l+=2}}$.css("left",l+"px");$.toggleClass("sapMITBNoContentArrow",l<p||l>P)}}}};
sap.m.IconTabBar.prototype.onAfterRendering=function(){var t=this,i=0,I=this.getItems(),$,h=this.getDomRef("head"),a=this.$();if(this._oScroller){this._oScroller.setIconTabBar(this,jQuery.proxy(this._afterIscroll,this),jQuery.proxy(this._scrollPreparation,this))}if(this.oSelectedItem&&this.getExpanded()){this.oSelectedItem.$().addClass("sapMITBSelected")}if(sap.ui.Device.support.touch||jQuery.sap.simulateMobileOnDesktop){jQuery.sap.delayedCall(350,this,"_checkOverflow",[h,a])}else{this._checkOverflowIntervalId=jQuery.sap.intervalCall(350,this,"_checkOverflow",[h,a])}if(this._iCurrentScrollLeft!==0&&!(sap.ui.Device.support.touch||jQuery.sap.simulateMobileOnDesktop)){h.scrollLeft=this._iCurrentScrollLeft}if(this.oSelectedItem){if(!this._bDoThisOnlyOnce){jQuery.sap.delayedCall(1000,this,"_scrollIntoView",[this.oSelectedItem,0]);this._bDoThisOnlyOnce=true}else if(this._scrollAfterRendering){this._scrollIntoView(this.oSelectedItem,500);this._scrollAfterRendering=false}}if(this.oSelectedItem&&this.oSelectedItem.getVisible()){$=this.oSelectedItem.$()}else{for(;i<I.length;i++){if(!(I[i]instanceof sap.m.IconTabSeparator)&&I[i].getVisible()){$=I[i].$();break}}}if($!==undefined){$.attr("tabindex",0)}this._sResizeListenerId=sap.ui.core.ResizeHandler.register(this.getDomRef(),jQuery.proxy(this._fnResize,this));this._adjustArrow()};
sap.m.IconTabBar.prototype.destroyItems=function(){this.oSelectedItem=null;this._aTabKeys=[];this.destroyAggregation("items")};
sap.m.IconTabBar.prototype.addItem=function(i){if(!(i instanceof sap.m.IconTabSeparator)){var k=i.getKey();if(this._aTabKeys.indexOf(k)!==-1){jQuery.sap.log.warning("sap.m.IconTabBar: duplicate key '"+k+"' inside the IconTabFilter. Please use unique keys.")}this._aTabKeys.push(k)}this.addAggregation("items",i)};
sap.m.IconTabBar.prototype.insertItem=function(i,I){if(!(i instanceof sap.m.IconTabSeparator)){var k=i.getKey();if(this._aTabKeys.indexOf(k)!==-1){jQuery.sap.log.warning("sap.m.IconTabBar: duplicate key '"+k+"' inside the IconTabFilter. Please use unique keys.")}this._aTabKeys.push(k)}this.insertAggregation("items",i,I)};
sap.m.IconTabBar.prototype.removeAllItems=function(){this._aTabKeys=[];this.removeAllAggregation("items")};
sap.m.IconTabBar.prototype.removeItem=function(i){if(!(i instanceof sap.m.IconTabSeparator)){var k=i.getKey();this._aTabKeys.splice(this._aTabKeys.indexOf(k),1)}this.removeAggregation("items",i)};
sap.m.IconTabBar.prototype.onThemeChanged=function(e){this._adjustArrow()};
sap.m.IconTabBar.prototype.onTransitionEnded=function(e){var $=this.$("content"),a=this.$("containerContent"),b=this.$("contentArrow");if(this._iAnimationCounter===1){this.$("containerContent").toggleClass("sapMITBContentClosed",!e);if(e){b.show();$.css("display","block")}else{b.hide();$.css("display","none")}}this._iAnimationCounter=(this._iAnimationCounter>0?--this._iAnimationCounter:0)};
sap.m.IconTabBar.prototype._toggleExpandCollapse=function(e){var $=this.$("content");if(e===undefined){e=!this.getExpanded()}if(this.oSelectedItem){this.oSelectedItem.$().toggleClass("sapMITBSelected",e)}this._iAnimationCounter=(this._iAnimationCounter===undefined?1:++this._iAnimationCounter);if(e){if(this.oSelectedItem){if(this.$("content").children().length===0){var s=this.oSelectedItem.getContent();if(s.length>0){this._rerenderContent(s)}else{this._rerenderContent(this.getContent())}}$.slideDown('400',jQuery.proxy(this.onTransitionEnded,this,e));this.$("containerContent").toggleClass("sapMITBContentClosed",!e)}}else{this.$("contentArrow").hide();$.slideUp('400',jQuery.proxy(this.onTransitionEnded,this,e))}if(!e||this.oSelectedItem){this.setProperty("expanded",e,true)}this.fireExpand({expand:e,collapse:!e});return this};
sap.m.IconTabBar.prototype._checkTextOnly=function(I){if(I.length>0){for(var i=0;i<I.length;i++){if(!(I[i]instanceof sap.m.IconTabSeparator)){if(I[i].getIcon()){return false}}}}return true};
sap.m.IconTabBar.prototype._checkNoText=function(I){if(I.length>0){for(var i=0;i<I.length;i++){if(!(I[i]instanceof sap.m.IconTabSeparator)){if(I[i].getText().length>0){return false}}}}return true};
sap.m.IconTabBar.prototype._checkScrolling=function(h,$){var s=false;if(sap.ui.Device.support.touch||jQuery.sap.simulateMobileOnDesktop){var d=this.getDomRef("scrollContainer");var a=this.getDomRef("head");if(a.offsetWidth>d.offsetWidth){s=true}}else{if(h){if(h.scrollWidth>h.clientWidth){s=true}}}if(this._scrollable!==s){$.toggleClass("sapMITBScrollable",s);$.toggleClass("sapMITBNotScrollable",!s);this._scrollable=s}return s};
sap.m.IconTabBar.prototype._getScrollingArrow=function(n){var p={src:"sap-icon://navigation-"+n+"-arrow"};var c=["sapMITBArrowScroll","sapMITBArrowScrollLeft"];var C=["sapMITBArrowScroll","sapMITBArrowScrollRight"];if(n==="left"){if(!this._oArrowLeft){this._oArrowLeft=sap.m.ImageHelper.getImageControl(this.getId()+"-arrowScrollLeft",this._oArrowLeft,this,p,c)}return this._oArrowLeft}if(n==="right"){if(!this._oArrowRight){this._oArrowRight=sap.m.ImageHelper.getImageControl(this.getId()+"-arrowScrollRight",this._oArrowRight,this,p,C)}return this._oArrowRight}};
sap.m.IconTabBar.prototype._checkOverflow=function(b,$){if(this._checkScrolling(b,$)&&b){var s=false;var S=false;if(sap.ui.Device.support.touch||jQuery.sap.simulateMobileOnDesktop){var d=this.getDomRef("scrollContainer");var a=this.getDomRef("head");if(this._oScroller.getScrollLeft()>0){s=true}if((this._oScroller.getScrollLeft()+d.offsetWidth)<a.offsetWidth){S=true}}else{var i=b.scrollLeft;var r=b.scrollWidth;var c=b.clientWidth;if(Math.abs(r-c)==1){r=c}if(!this._bRtl){if(i>0){s=true}if((r>c)&&(i+c<r)){S=true}}else{var l=jQuery(b);if(l.scrollLeftRTL()>0){S=true}if(l.scrollRightRTL()>0){s=true}}}if((S!=this._bPreviousScrollForward)||(s!=this._bPreviousScrollBack)){this._bPreviousScrollForward=S;this._bPreviousScrollBack=s;$.toggleClass("sapMITBScrollBack",s);$.toggleClass("sapMITBNoScrollBack",!s);$.toggleClass("sapMITBScrollForward",S);$.toggleClass("sapMITBNoScrollForward",!S)}}};
sap.m.IconTabBar.prototype._handleActivation=function(e){var t=e.target.id,c=e.srcControl,C;var $=jQuery.sap.byId(t);if(jQuery.inArray(this.$("content")[0],$.parents())>-1){}else{if(t){var i=this.getId();e.preventDefault();if(t==i+"-arrowScrollLeft"&&jQuery.device.is.desktop){this._scroll(-sap.m.IconTabBar.SCROLL_STEP,500)}else if(t==i+"-arrowScrollRight"&&jQuery.device.is.desktop){this._scroll(sap.m.IconTabBar.SCROLL_STEP,500)}else{if(c instanceof sap.ui.core.Icon){C=e.srcControl.getId().replace("-icon","");c=sap.ui.getCore().byId(C)}if(c.getMetadata().isInstanceOf("sap.m.IconTab")&&!(c instanceof sap.m.IconTabSeparator)){c.focus();this.setSelectedItem(c)}}}}};
sap.m.IconTabBar.prototype._scrollIntoView=function(i,d){var t=this,$=i.$(),h,s,n,c;if($.length>0){var I=$.outerWidth();var a=$.position().left;if(sap.ui.Device.support.touch||jQuery.sap.simulateMobileOnDesktop){s=this._oScroller.getScrollLeft();c=this.$("scrollContainer").width();n=0;if(a-s<0||a-s>c-I){if(a-s<0){n+=a}else{n+=a+I-c}this._scrollPreparation();jQuery.sap.delayedCall(0,this._oScroller,"scrollTo",[n,0,d]);jQuery.sap.delayedCall(d,this,"_afterIscroll")}}else{h=this.getDomRef("head");s=h.scrollLeft;c=$.parent().width();n=s;if(a<0||a>c-I){if(a<0){n+=a}else{n+=a+I-c}this._scrollPreparation();jQuery(h).stop(true,true).animate({scrollLeft:n},d,jQuery.proxy(this._adjustAndShowArrow,this))}}this._iCurrentScrollLeft=n}return this};
sap.m.IconTabBar.prototype._scroll=function(d,D){this._scrollPreparation();var o=this.getDomRef("head");var s=o.scrollLeft;if(!!!sap.ui.Device.browser.internet_explorer&&this._bRtl){d=-d}var S=s+d;jQuery(o).stop(true,true).animate({scrollLeft:S},D,jQuery.proxy(this._adjustAndShowArrow,this));this._iCurrentScrollLeft=S};
sap.m.IconTabBar.prototype._adjustAndShowArrow=function(){this._adjustArrow();this._$bar&&this._$bar.toggleClass("sapMITBScrolling",false);this._$bar=null};
sap.m.IconTabBar.prototype._scrollPreparation=function(){if(!this._$bar){this._$bar=this.$().toggleClass("sapMITBScrolling",true)}};
sap.m.IconTabBar.prototype._afterIscroll=function(){var h=this.getDomRef("head");this._checkOverflow(h,this.$());this._adjustAndShowArrow()};
sap.m.IconTabBar.prototype._fnResize=function(){var h=this.getDomRef("head");this._checkOverflow(h,this.$());this._adjustArrow()};
sap.m.IconTabBar.prototype.ontouchstart=function(e){var t=e.targetTouches[0];this._iActiveTouch=t.identifier;this._iTouchStartPageX=t.pageX;this._iTouchDragX=0};
sap.m.IconTabBar.prototype.ontouchmove=function(e){var t=sap.m.touch.find(e.changedTouches,this._iActiveTouch);if(!t||t.pageX===this._iTouchStartPageX){return}this._iTouchDragX+=Math.abs(this._iTouchStartPageX-t.pageX);this._iTouchStartPageX=t.pageX};
sap.m.IconTabBar.prototype.ontouchend=function(e){if(this._iTouchDragX>20){return}this._handleActivation(e)};
sap.m.IconTabBar.prototype.ontouchcancel=sap.m.IconTabBar.prototype.ontouchend;
sap.m.IconTabBar.prototype.onsapselect=function(e){this._handleActivation(e)};
sap.m.IconTabBar.prototype.onfocusin=function(e){var s=e.target,f=sap.ui.getCore().byId(s.id);if(f&&f.getMetadata().isInstanceOf("sap.m.IconTab")&&!(f instanceof sap.m.IconTabSeparator)){this._oFocusedItem=f}};
sap.m.IconTabBar.prototype.onfocusout=function(e){this._oFocusedItem=null};
sap.m.IconTabBar.prototype.onsapincrease=function(e){var I=this.getItems(),i=0,j;if(this._oFocusedItem){for(;i<I.length;i++){if(I[i]===this._oFocusedItem){e.stopPropagation();e.preventDefault();break}}for(j=i+1;j<I.length;j++){if(!(I[j]instanceof sap.m.IconTabSeparator)&&I[j].getVisible()){I[i].$().attr("tabindex",-1);I[j].$().attr("tabindex",0);I[j].$().focus();this._oFocusedItem=I[j];break}}}};
sap.m.IconTabBar.prototype.onsapdecrease=function(e){var I=this.getItems(),i=I.length,j;if(this._oFocusedItem){for(;i>=0;i--){if(I[i]===this._oFocusedItem){e.stopPropagation();e.preventDefault();break}}for(j=i-1;j>=0;j--){if(!(I[j]instanceof sap.m.IconTabSeparator)&&I[j].getVisible()){I[i].$().attr("tabindex",-1);I[j].$().attr("tabindex",0);I[j].$().focus();this._oFocusedItem=I[j];break}}}};
sap.m.IconTabBar.prototype.onsaphome=function(e){var I=this.getItems(),i=I.length,j;if(this._oFocusedItem){for(;i>=0;i--){if(I[i]===this._oFocusedItem){e.stopPropagation();e.preventDefault();break}}for(j=0;j<i;j++){if(!(I[j]instanceof sap.m.IconTabSeparator)&&I[j].getVisible()){I[i].$().attr("tabindex",-1);I[j].$().attr("tabindex",0);I[j].$().focus();this._oFocusedItem=I[j];break}}}};
sap.m.IconTabBar.prototype.onsapend=function(e){var I=this.getItems(),i=0,j;if(this._oFocusedItem){for(;i<I.length;i++){if(I[i]===this._oFocusedItem){e.stopPropagation();e.preventDefault();break}}for(j=I.length-1;j>i;j--){if(!(I[j]instanceof sap.m.IconTabSeparator)&&I[j].getVisible()){I[i].$().attr("tabindex",-1);I[j].$().attr("tabindex",0);I[j].$().focus();this._oFocusedItem=I[j];break}}}};
