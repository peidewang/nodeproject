/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.Dialog");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Control");sap.ui.core.Control.extend("sap.m.Dialog",{metadata:{publicMethods:["open","close","isOpen"],library:"sap.m",properties:{"icon":{type:"sap.ui.core.URI",group:"Appearance",defaultValue:null},"title":{type:"string",group:"Appearance",defaultValue:null},"showHeader":{type:"boolean",group:"Appearance",defaultValue:true},"type":{type:"sap.m.DialogType",group:"Appearance",defaultValue:sap.m.DialogType.Standard},"state":{type:"sap.ui.core.ValueState",group:"Appearance",defaultValue:sap.ui.core.ValueState.None},"stretchOnPhone":{type:"boolean",group:"Appearance",defaultValue:false,deprecated:true},"stretch":{type:"boolean",group:"Appearance",defaultValue:false},"contentWidth":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"contentHeight":{type:"sap.ui.core.CSSSize",group:"Dimension",defaultValue:null},"horizontalScrolling":{type:"boolean",group:"Behavior",defaultValue:true},"verticalScrolling":{type:"boolean",group:"Behavior",defaultValue:true}},defaultAggregation:"content",aggregations:{"content":{type:"sap.ui.core.Control",multiple:true,singularName:"content"},"subHeader":{type:"sap.m.Bar",multiple:false},"customHeader":{type:"sap.m.Bar",multiple:false},"beginButton":{type:"sap.m.Button",multiple:false},"endButton":{type:"sap.m.Button",multiple:false},"_header":{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},"_title":{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"},"_icon":{type:"sap.ui.core.Control",multiple:false,visibility:"hidden"}},associations:{"leftButton":{type:"sap.m.Button",multiple:false,deprecated:true},"rightButton":{type:"sap.m.Button",multiple:false,deprecated:true},"initialFocus":{type:"sap.ui.core.Control",multiple:false}},events:{"beforeOpen":{},"afterOpen":{},"beforeClose":{},"afterClose":{}}}});sap.m.Dialog.M_EVENTS={'beforeOpen':'beforeOpen','afterOpen':'afterOpen','beforeClose':'beforeClose','afterClose':'afterClose'};jQuery.sap.require("sap.ui.core.Popup");jQuery.sap.require("sap.m.Bar");jQuery.sap.require("sap.ui.core.delegate.ScrollEnablement");jQuery.sap.require("sap.m.InstanceManager");jQuery.sap.require("sap.ui.core.IconPool");jQuery.sap.require("sap.ui.core.theming.Parameters");jQuery.sap.require("sap.ui.core.ValueState");sap.m.Dialog._bOneDesign=(sap.ui.core.theming.Parameters.get("sapMPlatformDependent")!=='true');sap.m.Dialog._bIOS7Tablet=sap.ui.Device.os.ios&&sap.ui.Device.system.tablet&&sap.ui.Device.os.version>=7&&sap.ui.Device.os.version<8&&sap.ui.Device.browser.name==="sf";sap.m.Dialog._bPaddingByDefault=(sap.ui.getCore().getConfiguration().getCompatibilityVersion("sapMDialogWithPadding").compareTo("1.16")<0);sap.m.Dialog._mStateClasses={};sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.None]="";sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Success]="sapMDialogSuccess";sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Warning]="sapMDialogWarning";sap.m.Dialog._mStateClasses[sap.ui.core.ValueState.Error]="sapMDialogError";sap.m.Dialog._mIcons={};sap.m.Dialog._mIcons[sap.ui.core.ValueState.Success]=sap.ui.core.IconPool.getIconURI("accept");sap.m.Dialog._mIcons[sap.ui.core.ValueState.Warning]=sap.ui.core.IconPool.getIconURI("warning2");sap.m.Dialog._mIcons[sap.ui.core.ValueState.Error]=sap.ui.core.IconPool.getIconURI("alert");
sap.m.Dialog.prototype.init=function(){var t=this;this._externalIcon=undefined;this._sResizeListenerId=null;this._$Window=jQuery(window);this._iHMargin=jQuery.device.is.phone?64:128;this._iVMargin=16;this._scrollContentList=[sap.m.NavContainer,sap.m.Page,sap.m.ScrollContainer];this.oPopup=new sap.ui.core.Popup();this.oPopup.setShadow(true);if(jQuery.device.is.iphone&&!this._bMessageType){this.oPopup.setModal(true,"sapMDialogTransparentBlk")}else{this.oPopup.setModal(true,"sapMDialogBlockLayerInit")}if(!(jQuery.os.android&&jQuery.os.fVersion<4.1&&window.navigator.userAgent.toLowerCase().indexOf("chrome")===-1)){this.oPopup.setAnimations(jQuery.proxy(this._openAnimation,this),jQuery.proxy(this._closeAnimation,this))}if(sap.ui.Device.system.desktop){var o=jQuery.proxy(function(e){if(e.originalEvent&&e.originalEvent._sapui_handledByControl){return}this.close();e.stopPropagation()},this);this.oPopup.onsapescape=o}this._fnOrientationChange=jQuery.proxy(this._reposition,this);this._fnContentResize=jQuery.proxy(this._onResize,this);this._fnRepositionAfterOpen=jQuery.proxy(this._repositionAfterOpen,this);this.oPopup._applyPosition=function(p,f){var $=t.$(),s=this,h=!sap.ui.Device.system.desktop&&t.oPopup.getOpenState()===sap.ui.core.OpenState.OPEN&&(!t.getStretch()||t._bMessageType),P=function(){sap.ui.core.Popup.prototype._applyPosition.call(s,p);var w=t._$Window.scrollTop(),T=$.offset().top;if(sap.ui.Device.os.ios&&w){$.css("top",T-w)}if(sap.m.Dialog._bIOS7Tablet&&sap.ui.Device.orientation.landscape){T=$.offset().top;$.css("top",T-10)}if(h){if(sap.ui.Device.os.ios){$.css("visibility","visible")}else{$.css("opacity","1")}}if(f){t._registerResizeHandler()}};if(h){if(sap.ui.Device.os.ios){$.css("visibility","hidden")}else{$.css("opacity","0")}}t._deregisterResizeHandler();t._setDimensions();t._adjustScrollingPane();if(!sap.ui.Device.system.desktop&&f){window.setTimeout(function(){P()},0)}else{P()}};if(sap.m.Dialog._bPaddingByDefault){this.addStyleClass("sapUiPopupWithPadding")}};
sap.m.Dialog.prototype.onBeforeRendering=function(){if(this._hasSingleScrollableContent()){this._forceDisableScrolling=true;jQuery.sap.log.info("VerticalScrolling and horizontalScrolling in sap.m.Dialog with ID "+this.getId()+" has been disabled because there's scrollable content inside")}else{this._forceDisableScrolling=false}if(!this._forceDisableScrolling){if(!this._oScroller){this._oScroller=new sap.ui.core.delegate.ScrollEnablement(this,this.getId()+"-scroll",{horizontal:this.getHorizontalScrolling(),vertical:this.getVerticalScrolling(),zynga:false,preventDefault:false,nonTouchScrolling:"scrollbar"})}}};
sap.m.Dialog.prototype.onAfterRendering=function(){this._$scrollPane=jQuery.sap.byId(this.getId()+"-scroll");this._$content=jQuery.sap.byId(this.getId()+"-cont");if(this.isOpen()){var f=this._getFocusId();jQuery.sap.focus(jQuery.sap.domById(f))}};
sap.m.Dialog.prototype.exit=function(){this._deregisterResizeHandler();sap.ui.Device.resize.detachHandler(this._fnOrientationChange);sap.m.InstanceManager.removeDialogInstance(this);if(this.oPopup){this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.closed,this._handleClosed,this);this.oPopup.destroy();this.oPopup=null}if(this._oScroller){this._oScroller.destroy();this._oScroller=null}if(this._header){this._header.destroy();this._header=null}if(this._headerTitle){this._headerTitle.destroy();this._headerTitle=null}if(this._iconImage){this._iconImage.destroy();this._iconImage=null}};
sap.m.Dialog.prototype.open=function(){var p=this.oPopup;if(p.isOpen()){return this}this._oCloseTrigger=null;var $=jQuery("#sap-ui-blocklayer-popup"),f=this._getFocusId();if(!sap.m.Dialog._bOneDesign&&$.length>0){var t=jQuery.device.is.iphone&&!this._bMessageType&&!this.hasStyleClass("sapMActionSheetDialog");$.toggleClass("sapMDialogTransparentBlk",t);$.toggleClass("sapMDialogBlockLayerInit",!t)}this.fireBeforeOpen();p.attachEvent(sap.ui.core.Popup.M_EVENTS.opened,this._handleOpened,this);p.setContent(this);p.setInitialFocusId(f);if(!sap.m.Dialog._bOneDesign&&jQuery.device.is.iphone&&!this._bMessageType){p.setPosition("center top","center bottom",window,"0 0","fit")}else{p.setPosition("center center","center center",window,"0 0","fit")}p.open();this._registerResizeHandler();sap.ui.Device.resize.attachHandler(this._fnOrientationChange);sap.m.InstanceManager.addDialogInstance(this);return this};
sap.m.Dialog.prototype.close=function(){var p=this.oPopup;var e=this.oPopup.getOpenState();if(!(e===sap.ui.core.OpenState.CLOSED||e===sap.ui.core.OpenState.CLOSING)){this.fireBeforeClose({origin:this._oCloseTrigger});p.attachEvent(sap.ui.core.Popup.M_EVENTS.closed,this._handleClosed,this);this._deregisterResizeHandler();p.close()}return this};
sap.m.Dialog.prototype.isOpen=function(){return this.oPopup&&this.oPopup.isOpen()};
sap.m.Dialog.prototype._handleOpened=function(){this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.opened,this._handleOpened,this);this.fireAfterOpen()};
sap.m.Dialog.prototype._handleClosed=function(){this.oPopup.detachEvent(sap.ui.core.Popup.M_EVENTS.closed,this._handleClosed,this);sap.ui.Device.resize.detachHandler(this._fnOrientationChange);sap.m.InstanceManager.removeDialogInstance(this);this.fireAfterClose({origin:this._oCloseTrigger})};
sap.m.Dialog.prototype.onfocusin=function(e){var s=e.target;if(s.id===this.getId()+"-firstfe"){var l=jQuery("#"+this.getId()+" .sapMDialogActions").lastFocusableDomRef();if(!l){l=jQuery.sap.byId(this.getId()+"-cont").lastFocusableDomRef();if(!l){l=jQuery.sap.byId(this.getId()+"-header").lastFocusableDomRef()}}jQuery.sap.focus(l)}else if(s.id===this.getId()+"-lastfe"){var f=jQuery.sap.byId(this.getId()+"-header").firstFocusableDomRef();if(!f){var f=jQuery.sap.byId(this.getId()+"-cont").firstFocusableDomRef();if(!f){f=jQuery("#"+this.getId()+" .sapMDialogActions").firstFocusableDomRef()}}jQuery.sap.focus(f)}};
sap.m.Dialog.prototype._openAnimation=function(r,R,o){if(!(jQuery.browser.msie&&jQuery.browser.fVersion<10)){r.css("display","block")}var t=this,O=false,e;if(!sap.m.Dialog._bOneDesign&&jQuery.device.is.iphone&&!this._bMessageType){e=function(){if(O||!t.oPopup||t.oPopup.getOpenState()!==sap.ui.core.OpenState.OPENING){return}r.unbind("webkitTransitionEnd transitionend");r.removeClass("sapMDialogSliding");o();O=true};r.addClass("sapMDialogBottom").removeClass("sapMDialogHidden");window.setTimeout(function(){r.bind("webkitTransitionEnd transitionend",e);r.addClass("sapMDialogSliding").removeClass("sapMDialogBottom");setTimeout(function(){e()},400)},0)}else{if(jQuery.browser.msie&&jQuery.browser.fVersion<10){r.fadeIn(200,o)}else{e=function(){if(O||!t.oPopup||t.oPopup.getOpenState()!==sap.ui.core.OpenState.OPENING){return}r.unbind("webkitAnimationEnd animationend");o();r.removeClass("sapMDialogOpening");O=true};r.bind("webkitAnimationEnd animationend",e);r.addClass("sapMDialogOpening");setTimeout(function(){e()},150)}}};
sap.m.Dialog.prototype._closeAnimation=function(r,R,c){var t=this,C=false,e;if(!sap.m.Dialog._bOneDesign&&jQuery.device.is.iphone&&!this._bMessageType){e=function(){if(C){return}r.unbind("webkitTransitionEnd transitionend");r.addClass("sapMDialogHidden").removeClass("sapMDialogBottom").removeClass("sapMDialogSliding");c();C=true};r.bind("webkitTransitionEnd transitionend",e);r.addClass("sapMDialogSliding").addClass("sapMDialogBottom");setTimeout(function(){e()},400)}else{if(jQuery.browser.msie&&jQuery.browser.fVersion<10){r.fadeOut(200,c)}else{e=function(){if(C){return}r.unbind("webkitAnimationEnd animationend");c();r.removeClass("sapMDialogClosing");C=true};r.bind("webkitAnimationEnd animationend",e);r.addClass("sapMDialogClosing");setTimeout(function(){e()},150)}}};
sap.m.Dialog.prototype._setDimensions=function(){var w=this._$Window.width(),W=(sap.m.Dialog._bIOS7Tablet&&sap.ui.Device.orientation.landscape&&window.innerHeight)?window.innerHeight:this._$Window.height(),$=this.$(),s=this.getStretch()&&!this._bMessageType,h=this._iHMargin,v=this._iVMargin,p=window.parseInt($.css("padding-left"),10),P=window.parseInt($.css("padding-right"),10),i=window.parseInt($.css("padding-top"),10),a=window.parseInt($.css("padding-bottom"),10),b=this._$content,B=window.parseInt($.css("border-left-width"),10),c=window.parseInt($.css("border-right-width"),10),d=window.parseInt($.css("border-top-width"),10),e=window.parseInt($.css("border-bottom-width"),10),m=w-h,M=W-v,C=this.getContentWidth(),f=this.getContentHeight(),g=this._$scrollPane,S=g.css("position")==="absolute",o=this.getSubHeader(),j="",k=0,l,H,n,F,q,r,t,u,I;$.css({"width":"","height":"","min-width":"","max-width":"","left":"0px","top":"0px","right":"","bottom":"","max-height":""});g.css({"width":""});if(jQuery.device.is.tablet||jQuery.device.is.desktop){if(sap.m.Dialog._bOneDesign&&s){$.css({"right":"0px","bottom":"0px","width":w+"px","min-width":w+"px","max-height":W+"px"})}else{k=400;$.css({"max-width":(this._bMessageType?480:m)+"px","max-height":M+"px"})}}else{if(!sap.m.Dialog._bOneDesign&&jQuery.device.is.iphone&&!this._bMessageType){$.css({width:"100%",height:"100%"})}else{if(sap.m.Dialog._bOneDesign&&s){$.css({"width":w+"px","height":W+"px","max-height":W+"px"})}else{if(jQuery.device.is.portrait){$.css({"width":m+"px","max-height":M+"px"})}else{k=W;$.css({"min-width":k+"px","max-width":m+"px","max-height":M+"px"})}}}}H=$.children("header.sapMDialogTitle").outerHeight(true)||0;n=o?o.$().outerHeight(true):0;if(!sap.m.Dialog._bOneDesign&&jQuery.os.ios&&!this._bMessageType){F=0}else{F=$.children("footer").outerHeight(true)||0}l=(((sap.m.Dialog._bOneDesign&&s)||(!sap.m.Dialog._bOneDesign&&jQuery.device.is.iphone&&!this._bMessageType))?W:M)-H-n-F-i-a-d-e;I=(jQuery.device.is.phone&&(jQuery.device.is.portrait||(!sap.m.Dialog._bOneDesign&&jQuery.os.ios)))||(sap.m.Dialog._bOneDesign&&s)||this._bMessageType;if(C&&!I){if(C.indexOf("%")>0){C=sap.m.PopupHelper.calcPercentageSize(C,w)}C=b.width(C).width()+"px";r=Math.max(k-p-P-B-c,Math.min(window.parseInt(C,10),m-p-P-B-c));j=r+"px";$.css({"width":r+p+P+B+c})}b.css({"width":j,"max-height":""});if(f.indexOf("%")>0){f=sap.m.PopupHelper.calcPercentageSize(f,W)}if(f){f=b.height(f).height()+"px"}if(S){q=g.outerHeight(true);if(sap.m.Dialog._bOneDesign&&s){b.css("height",l)}else{if(f){b.css("height",Math.min(l,window.parseInt(f,10)))}else{b.css("height",Math.min(l,q))}}}else{if((sap.m.Dialog._bOneDesign&&s)||(!sap.m.Dialog._bOneDesign&&jQuery.device.is.iphone&&!this._bMessageType)){b.css("height",l)}else{if(f){b.css("height",Math.min(l,window.parseInt(f,10)))}else{b.css("max-height",l)}}}};
sap.m.Dialog.prototype._adjustScrollingPane=function(){var $=this._$scrollPane,c={"display":"block"};if($.css("position")==="absolute"){c.width="100%"}if($.outerWidth(true)<=this._$content.width()){$.css(c)}if(this._oScroller){this._oScroller.refresh()}};
sap.m.Dialog.prototype._reposition=function(){var t=this,e=this.oPopup.getOpenState();if(e!==sap.ui.core.OpenState.OPEN&&e!==sap.ui.core.OpenState.OPENING){return}this._repositionAfterOpen()};
sap.m.Dialog.prototype._repositionAfterOpen=function(){var e=this.oPopup.getOpenState();if(e===sap.ui.core.OpenState.OPENING){window.setTimeout(this._fnRepositionAfterOpen,50)}else{this._reapplyPosition()}};
sap.m.Dialog.prototype._reapplyPosition=function(){var t=this;window.setTimeout(function(){t.oPopup._applyPosition(t.oPopup._oLastPosition,true)},0)};
sap.m.Dialog.prototype._onResize=function(){if(this._sResizeTimer||!this.getDomRef()){return}var t=this,r=jQuery.sap.domById(this.getId()+"-scroll");this._iResizeDomWidth=this._iResizeDomWidth||r.offsetWidth;this._iResizeDomHeight=this._iResizeDomHeight||r.offsetHeight;this._sResizeTimer=window.setTimeout(function(){var n=r.offsetWidth,N=r.offsetHeight;if(t._iResizeDomWidth!==n||t._iResizeDomHeight!==N){t._reposition()}t._sResizeTimer=null;t._iResizeDomWidth=null;t._iResizeDomHeight=null},0)};
sap.m.Dialog.prototype._createHeader=function(){if(sap.m.Dialog._bOneDesign||(jQuery.os.ios&&!this._bMessageType)){if(!this._header){this._header=new sap.m.Bar(this.getId()+"-header").addStyleClass("sapMHeader-CTX sapMDialogTitle");this.setAggregation("_header",this._header,false)}}};
sap.m.Dialog.prototype._hasSingleScrollableContent=function(){var c=this.getContent(),i;while(c.length===1&&c[0]instanceof sap.ui.core.mvc.View){c=c[0].getContent()}if(c.length===1){for(i=0;i<this._scrollContentList.length;i++){if(c[0]instanceof this._scrollContentList[i]){return true}}}return false};
sap.m.Dialog.prototype._initBlockLayerAnimation=function(){if(!sap.m.Dialog._bOneDesign&&(!jQuery.device.is.iphone||this._bMessageType)){this.oPopup._showBlockLayer=function(){sap.ui.core.Popup.prototype._showBlockLayer.call(this);var $=jQuery("#sap-ui-blocklayer-popup");if(jQuery.os.ios){$.addClass('sapMDialogBLyInit')}else{$.addClass("sapMDialogBlockLayerAnimation");setTimeout(function(){$.addClass("sapMDialogBlockLayer")},0)}};this.oPopup._hideBlockLayer=function(){var $=jQuery("#sap-ui-blocklayer-popup"),t=this;if(sap.ui.core.Popup.blStack.length>1){sap.ui.core.Popup.prototype._hideBlockLayer.call(t)}else{$.removeClass('sapMDialogBlockLayerInit');if(jQuery.os.ios){$.removeClass("sapMDialogBLyInit");sap.ui.core.Popup.prototype._hideBlockLayer.call(t)}else{$.removeClass("sapMDialogBlockLayer");$.bind("webkitTransitionEnd transitionend",function(){jQuery(this).unbind("webkitTransitionEnd transitionend");sap.ui.core.Popup.prototype._hideBlockLayer.call(t);$.removeClass("sapMDialogBlockLayerAnimation")})}}}}else{this.oPopup._hideBlockLayer=function(){var $=jQuery("#sap-ui-blocklayer-popup");$.removeClass("sapMDialogTransparentBlk");sap.ui.core.Popup.prototype._hideBlockLayer.call(this)}}};
sap.m.Dialog.prototype._clearBlockLayerAnimation=function(){if(jQuery.device.is.iphone&&!this._bMessageType){delete this.oPopup._showBlockLayer;this.oPopup._hideBlockLayer=function(){var $=jQuery("#sap-ui-blocklayer-popup");$.removeClass("sapMDialogTransparentBlk");sap.ui.core.Popup.prototype._hideBlockLayer.call(this)}}};
sap.m.Dialog.prototype._getFocusId=function(){var b=this.getBeginButton(),e=this.getEndButton();return this.getInitialFocus()||(b&&b.getVisible()&&b.getId())||(e&&e.getVisible()&&e.getId())||this.getId()};
sap.m.Dialog.prototype.getScrollDelegate=function(){return this._oScroller};
sap.m.Dialog.prototype._composeAggreNameInHeader=function(p){var h;if(p==="Begin"){h="contentLeft"}else if(p==="End"){h="contentRight"}else{h="content"+p}return h};
sap.m.Dialog.prototype._setButton=function(b,p,s){var t=this,P=this._firstLetterUpperCase(p),g="get"+P+"Button",a=p.toLowerCase()+"Button",h=this._composeAggreNameInHeader(P),o;o=this[g]();if(o&&!(o instanceof sap.m.Button)){o=sap.ui.getCore().byId(o)}if(b&&o===b){return this}if(!this._oButtonDelegate){this._oButtonDelegate={ontap:function(){t._oCloseTrigger=this}}}if(o){o.removeDelegate(this._oButtonDelegate)}if(b){b.addDelegate(this._oButtonDelegate,true,b);if(sap.m.Dialog._bOneDesign){if(!(b.getType()===sap.m.ButtonType.Accept||b.getType()===sap.m.ButtonType.Reject)){b.setType(sap.m.ButtonType.Transparent)}}}if(!sap.m.Dialog._bOneDesign&&jQuery.os.ios&&!this._bMessageType){this._createHeader();if(b){if(o){this._header.removeAggregation(h,o,true)}this._header.addAggregation(h,b,true);this._header.invalidate()}else{if(o){this._header.removeAggregation(h,o)}}}else{this.setAggregation(a,b,false,true)}return this};
sap.m.Dialog.prototype._getButton=function(p){var P=this._firstLetterUpperCase(p),h=this._composeAggreNameInHeader(P),a=p.toLowerCase()+"Button",t=this.getType(),H;if(!sap.m.Dialog._bOneDesign&&jQuery.os.ios&&!this._bMessageType){H=this._header&&this._header.getAggregation(h);if(H&&H[0]){return H[0]}else{return null}}else{return this.getAggregation(a,null,true)}};
sap.m.Dialog.prototype._getButtonFromHeader=function(p){if(this._header){var h=this._composeAggreNameInHeader(this._firstLetterUpperCase(p)),c=this._header.getAggregation(h);return c&&c[0]}else{return null}};
sap.m.Dialog.prototype._firstLetterUpperCase=function(v){return v.charAt(0).toUpperCase()+v.slice(1).toLowerCase()};
sap.m.Dialog.prototype._getAnyHeader=function(){var c=this.getCustomHeader();if(c){return c}else{var s=this.getShowHeader();if(!s&&!(!sap.m.Dialog._bOneDesign&&!this._bMessageType&&jQuery.os.ios)){return null}if(!sap.m.Dialog._bOneDesign&&!this.getTitle()&&!this.getBeginButton()&&!this.getEndButton()){return null}this._createHeader();return this._header}};
sap.m.Dialog.prototype._deregisterResizeHandler=function(){if(this._sResizeListenerId){sap.ui.core.ResizeHandler.deregister(this._sResizeListenerId);this._sResizeListenerId=null}};
sap.m.Dialog.prototype._registerResizeHandler=function(){if(!this._sResizeListenerId&&this.getDomRef()){var r=jQuery.sap.domById(this.getId()+"-scroll");this._iResizeDomWidth=r.offsetWidth;this._iResizeDomHeight=r.offsetHeight;this._sResizeListenerId=sap.ui.core.ResizeHandler.register(r,this._fnContentResize)}};
sap.m.Dialog.prototype.setBeginButton=function(b){return this._setButton(b,"begin")};
sap.m.Dialog.prototype.setEndButton=function(b){return this._setButton(b,"end")};
sap.m.Dialog.prototype.setLeftButton=function(b){if(!(b instanceof sap.m.Button)){b=sap.ui.getCore().byId(b)}this._setButton(b,"begin");return this.setAssociation("leftButton",b)};
sap.m.Dialog.prototype.setRightButton=function(b){if(!(b instanceof sap.m.Button)){b=sap.ui.getCore().byId(b)}this._setButton(b,"end");return this.setAssociation("rightButton",b)};
sap.m.Dialog.prototype.setTitle=function(t){this.setProperty("title",t,true);if(this._headerTitle){this._headerTitle.setText(t)}else{this._headerTitle=new sap.m.Label(this.getId()+"-title",{text:t}).addStyleClass("sapMDialogTitle");if(sap.m.Dialog._bOneDesign||(jQuery.os.ios&&!this._bMessageType)){this._createHeader();this._header.addContentMiddle(this._headerTitle)}else{this.setAggregation("_title",this._headerTitle)}}return this};
sap.m.Dialog.prototype.setCustomHeader=function(c){if(!sap.m.Dialog._bOneDesign){jQuery.sap.log.warning("CustomHeader property in sap.m.Dialog isn't supported in theme sap_mvi!")}else{if(c){c.addStyleClass("sapMDialogTitle")}this.setAggregation("customHeader",c)}};
sap.m.Dialog.prototype.setState=function(s){var f={},$=this.$(),n;f[s]=true;this.setProperty("state",s,true);if(sap.m.Dialog._bOneDesign){for(n in sap.m.Dialog._mStateClasses){$.toggleClass(sap.m.Dialog._mStateClasses[n],!!f[n])}this.setIcon(sap.m.Dialog._mIcons[s],true)}};
sap.m.Dialog.prototype.setIcon=function(i,I){if(!I){this._externalIcon=i}else{if(this._externalIcon){i=this._externalIcon}}if(sap.m.Dialog._bOneDesign||!jQuery.os.ios){if(i){if(i!==this.getIcon()){if(this._iconImage){this._iconImage.setSrc(i)}else{this._iconImage=sap.ui.core.IconPool.createControlByURI({id:this.getId()+"-icon",src:i},sap.m.Image).addStyleClass("sapMDialogIcon");if(sap.m.Dialog._bOneDesign){this._createHeader();this._header.insertAggregation("contentMiddle",this._iconImage,0)}else{this.setAggregation("_icon",this._iconImage)}}}}else{var d=this.getState();if(!I&&d!==sap.ui.core.ValueState.None&&sap.m.Dialog._bOneDesign){if(this._iconImage){this._iconImage.setSrc(sap.m.Dialog._mIcons[d])}}else{if(this._iconImage){this._iconImage.destroy();this._iconImage=null}}}}this.setProperty("icon",i,true);return this};
sap.m.Dialog.prototype.setType=function(t){var o=this.getType(),$,b,e;if(o===t){return}if(this._bMessageType===undefined){if(t===sap.m.DialogType.Message&&!sap.m.Dialog._bOneDesign&&jQuery.os.ios){if(this._header){b=this._getButtonFromHeader("left");e=this._getButtonFromHeader("right");if(b){this.setAggregation("beginButton",b,false,true)}if(e){this.setAggregation("endButton",e,false,true)}this._header.destroy();this._header=null}}}this._bMessageType=(t===sap.m.DialogType.Message);if(!sap.m.Dialog._bOneDesign&&jQuery.os.ios){$=jQuery("#sap-ui-blocklayer-popup");if(this._bMessageType||!jQuery.device.is.phone){this.oPopup.setModal(true,"sapMDialogBlockLayerInit");if($.length>0){$.removeClass("sapMDialogTransparentBlk").addClass("sapMDialogBlockLayerInit");if(this.oPopup.isOpen()){$.addClass("sapMBusyBLyInit sapMBusyBLyShown")}}this.oPopup.setPosition("center center","center center",document,"0 0","fit");this._initBlockLayerAnimation()}else{this.oPopup.setModal(true,"sapMDialogTransparentBlk");if($.length>0){$.removeClass("sapMBusyBLyShown sapMBusyBLyInit").addClass("sapMDialogTransparentBlk")}this.oPopup.setPosition("center top","center bottom",document,"0 0","fit");this._clearBlockLayerAnimation()}}return this.setProperty("type",t,false)};
sap.m.Dialog.prototype.setStretch=function(s){this._bStretchSet=true;return this.setProperty("stretch",s)};
sap.m.Dialog.prototype.setStretchOnPhone=function(s){if(this._bStretchSet){jQuery.sap.log.warning("sap.m.Dialog: stretchOnPhone property is deprecated. Setting stretchOnPhone property is ignored when there's already stretch property set.");return this}this.setProperty("stretchOnPhone",s);return this.setProperty("stretch",s&&jQuery.device.is.phone)};
sap.m.Dialog.prototype.setVerticalScrolling=function(v){var o=this.getVerticalScrolling();if(o===v){return}this.$().toggleClass("sapMDialogVerScrollDisabled",!v);this.setProperty("verticalScrolling",v);if(this._oScroller){this._oScroller.setVertical(v)}return this};
sap.m.Dialog.prototype.setHorizontalScrolling=function(v){var o=this.getHorizontalScrolling();if(o===v){return}this.$().toggleClass("sapMDialogHorScrollDisabled",!v);this.setProperty("horizontalScrolling",v);if(this._oScroller){this._oScroller.setHorizontal(v)}return this};
sap.m.Dialog.prototype.setAggregation=function(a,o,s,p){if(!p&&(a==="beginButton"||a==="endButton")){return this._setButton(o,a.substring(0,a.indexOf("Button")))}else{return sap.ui.core.Control.prototype.setAggregation.apply(this,Array.prototype.slice.call(arguments,0,3))}};
sap.m.Dialog.prototype.getAggregation=function(a,d,p){if(!p&&(a==="beginButton"||a==="endButton")){return this._getButton(a.substring(0,a.indexOf("Button")))||d||null}else{return sap.ui.core.Control.prototype.getAggregation.apply(this,Array.prototype.slice.call(arguments,0,2))}};
sap.m.Dialog.prototype.destroyAggregation=function(a,s){if((a==="beginButton"||a==="endButton")&&(!sap.m.Dialog._bOneDesign&&jQuery.os.ios&&!this._bMessageType)){var p=a.substring(0,a.indexOf("Button")),p=this._firstLetterUpperCase(p),h="content"+p,H=this._header&&this._header.getAggregation(h);if(H&&H[0]){H[0].destroy()}}else{return sap.ui.core.Control.prototype.destroyAggregation.apply(this,arguments)}};
sap.m.Dialog.prototype.forceInvalidate=sap.ui.core.Control.prototype.invalidate;
sap.m.Dialog.prototype.invalidate=function(o){if(this.isOpen()){this.forceInvalidate(o)}};
