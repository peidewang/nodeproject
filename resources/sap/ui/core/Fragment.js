/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.core.Fragment");jQuery.sap.require("sap.ui.base.ManagedObject");jQuery.sap.require("sap.ui.core.XMLTemplateProcessor");jQuery.sap.require("sap.ui.core.DeclarativeSupport");(function(){var r={},t={};sap.ui.base.ManagedObject.extend("sap.ui.core.Fragment",{metadata:{properties:{type:"string"}},constructor:function(i,s){sap.ui.base.ManagedObject.apply(this,arguments);if(this._aContent&&this._aContent.length==1){return this._aContent[0]}else{return this._aContent}}});sap.ui.core.Fragment.registerType=function(T,f){if(!typeof(T)==="string"){jQuery.sap.log.error("Ignoring non-string Fragment type: "+T);return}if(t[T]){jQuery.sap.log.warning("sap.ui.core.Fragment.registerType(): Fragment type '"+T+"' is already defined. Overriding this type now!")}t[T]=f};sap.ui.core.Fragment.prototype._initCompositeSupport=function(s){if(!s){throw new Error("Settings must be set")}if(!(s.fragmentName||s.fragmentContent)){throw new Error("Please provide a fragment name")}if(s.oController){this.oController=s.oController}this._sExplicitId=s.sId||s.id;this._sFragmentName=s.fragmentName;var f=t[s.type];if(f){f.init.apply(this,[s])}else{throw new Error("No type for the fragment has been specified: "+s.type)}};sap.ui.core.Fragment.prototype.getController=function(){return this.oController};sap.ui.core.Fragment.byId=function(f,i){if(!(typeof(f)==="string"&&typeof(i)==="string")){jQuery.sap.log.error("sap.ui.core.Fragment.byId: two strings must be given as parameters, but are: "+f+" and "+i);return undefined}return sap.ui.getCore().byId(f+"--"+i)};sap.ui.core.Fragment.createId=function(f,i){if(!(typeof(f)==="string"&&typeof(i)==="string")){jQuery.sap.log.error("sap.ui.core.Fragment.createId: two strings must be given as parameters, but are: "+f+" and "+i);return undefined}return f+"--"+i};sap.ui.core.Fragment.prototype.createId=function(i){var a=this._sExplicitId?this._sExplicitId+"--"+i:i;if(this._oContainingView&&this._oContainingView!=this){a=this._oContainingView.createId(a)}return a};sap.ui.core.Fragment.prototype.isSubView=function(){return true};sap.ui.fragment=function(n,T,c){var s={};if(typeof(n)==="string"){s.fragmentName=n;s.oController=c;s.type=T}else if(typeof(n)==="object"){s=n;if(T){s.oController=T}}else{jQuery.sap.log.error("sap.ui.fragment() must be called with Fragment name or config object as first parameter, but is: "+n)}return new sap.ui.core.Fragment(s)};sap.ui.xmlfragment=function(i,f,c){if(typeof(i)==="string"){if(typeof(f)==="string"){return sap.ui.fragment({fragmentName:f,sId:i,type:"XML"},c)}else{return sap.ui.fragment(i,"XML",f)}}else{i.type="XML";return sap.ui.fragment(i,f)}};sap.ui.jsfragment=function(n,f){if(typeof(n)==="string"&&typeof(f)==="object"){if(f.createContent){r[n]=f;jQuery.sap.declare({modName:n,type:"fragment"},false)}else{return sap.ui.fragment(n,"JS",f)}}else if(typeof(n)==="string"&&f===undefined){return sap.ui.fragment(n,"JS")}else{if(typeof(n)==="object"){n.type="JS";return sap.ui.fragment(n,f)}else if(arguments&&arguments.length>=3){return sap.ui.fragment({id:n,fragmentName:f,type:"JS"},arguments[2])}else{jQuery.sap.log.error("sap.ui.jsfragment() was called with wrong parameter set: "+n+" + "+f)}}};sap.ui.htmlfragment=function(i,f,c){if(typeof(i)==="string"){if(typeof(f)==="string"){return sap.ui.fragment({fragmentName:f,sId:i,type:"HTML"},c)}else{return sap.ui.fragment(i,"HTML",f)}}else{i.type="HTML";return sap.ui.fragment(i,f)}};sap.ui.core.Fragment.registerType("XML",{init:function(s){this._xContent=s.fragmentContent?((typeof(s.fragmentContent)==="string")?jQuery.parseXML(s.fragmentContent).documentElement:s.fragmentContent):sap.ui.core.XMLTemplateProcessor.loadTemplate(s.fragmentName,"fragment");this._oContainingView=this._sExplicitId?this:(s.containingView||this);if((this._oContainingView===this)){this._oContainingView.oController=(s.containingView&&s.containingView.oController)||s.oController}var a=this;sap.ui.base.ManagedObject.runWithPreprocessors(function(){var x=a._xContent;a._aContent=sap.ui.core.XMLTemplateProcessor.parseTemplate(a._xContent,a)})}});sap.ui.core.Fragment.registerType("JS",{init:function(s){if(!r[s.fragmentName]){jQuery.sap.require({modName:s.fragmentName,type:"fragment"})}jQuery.extend(this,r[s.fragmentName]);this._oContainingView=s.containingView||this;var a=this;sap.ui.base.ManagedObject.runWithPreprocessors(function(){var c=a.createContent(s.oController||a._oContainingView.oController);a._aContent=[];a._aContent=a._aContent.concat(c)})}});(function(){var _={};var a=function(T){var u=jQuery.sap.getModulePath(T,".fragment.html");var h=_[u];var R;if(!h){R=jQuery.sap.getResourceName(T,".fragment.html");h=jQuery.sap.loadResource(R);_[u]=h}return h};sap.ui.core.Fragment.registerType("HTML",{init:function(s){this._aContent=[];this.getContent=function(){return this._aContent};this.addContent=function(c){this._aContent.push(c)};this._oContainingView=s.containingView||this;var h=s.fragmentContent||a(s.fragmentName);this._oTemplate=document.createElement("div");var H=sap.ui.core.RenderManager.prepareHTML5(h);if(typeof H==="string"){this._oTemplate.innerHTML=H}else{var n=H;var f=document.createDocumentFragment();for(var i=0;i<n.length;i++){f.appendChild(n.item(i))}this._oTemplate.appendChild(f)}var m=this._oTemplate.getElementsByTagName("template")[0];var p=this.getMetadata().getAllProperties();if(m){var b=this;var D=sap.ui.core.DeclarativeSupport;jQuery.each(m.attributes,function(I,A){var N=D.convertAttributeToSettingName(A.name,b.getId());var v=A.value;var P=p[N];if(!s[N]){if(P){s[N]=D.convertValueToType(D.getPropertyDataType(P),v)}else if(sap.ui.core.mvc.HTMLView._mAllowedSettings[N]){s[N]=v}}});this._oTemplate=m}if(this._oTemplate.content){var f=this._oTemplate.content;this._oTemplate=document.createElement("div");this._oTemplate.appendChild(f)}var b=this;sap.ui.base.ManagedObject.runWithPreprocessors(function(){sap.ui.core.DeclarativeSupport.compile(b._oTemplate,b);var c=b.getContent();if(c&&c.length===1){b._aContent=[c[0]]}else{}})}})}())}());
