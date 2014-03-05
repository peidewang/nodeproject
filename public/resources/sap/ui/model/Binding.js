/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.model.Binding");jQuery.sap.require("sap.ui.model.ChangeReason");jQuery.sap.require("sap.ui.base.EventProvider");sap.ui.base.EventProvider.extend("sap.ui.model.Binding",{constructor:function(m,p,c,P){sap.ui.base.EventProvider.apply(this);this.oModel=m;this.bRelative=!jQuery.sap.startsWith(p,'/');this.sPath=p;this.oContext=c;this.mParameters=P;this.bInitial=false},metadata:{"abstract":true,publicMethods:["getPath","getContext","getModel","attachChange","detachChange","refresh","isInitial","attachDataRequested","detachDataRequested","attachDataReceived","detachDataReceived"]}});
sap.ui.model.Binding.prototype.getPath=function(){return this.sPath};
sap.ui.model.Binding.prototype.getContext=function(){return this.oContext};
sap.ui.model.Binding.prototype.setContext=function(c){if(this.oContext!=c){this.oContext=c;this._fireChange()}};
sap.ui.model.Binding.prototype.getModel=function(){return this.oModel};
sap.ui.model.Binding.prototype.attachChange=function(f,l){if(!this.hasListeners("change")){this.oModel.addBinding(this)}this.attachEvent("change",f,l)};
sap.ui.model.Binding.prototype.detachChange=function(f,l){this.detachEvent("change",f,l);if(!this.hasListeners("change")){this.oModel.removeBinding(this)}};
sap.ui.model.Binding.prototype._fireChange=function(a){this.fireEvent("change",a)};
sap.ui.model.Binding.prototype.attachDataRequested=function(f,l){this.attachEvent("dataRequested",f,l)};
sap.ui.model.Binding.prototype.detachDataRequested=function(f,l){this.detachEvent("dataRequested",f,l)};
sap.ui.model.Binding.prototype.fireDataRequested=function(a){this.fireEvent("dataRequested",a)};
sap.ui.model.Binding.prototype.attachDataReceived=function(f,l){this.attachEvent("dataReceived",f,l)};
sap.ui.model.Binding.prototype.detachDataReceived=function(f,l){this.detachEvent("dataReceived",f,l)};
sap.ui.model.Binding.prototype.fireDataReceived=function(a){this.fireEvent("dataReceived",a)};
sap.ui.model.Binding.prototype.updateRequired=function(m){return m&&this.getModel()===m};
sap.ui.model.Binding.prototype.checkUpdate=function(f){this._fireChange({reason:sap.ui.model.ChangeReason.Change})};
sap.ui.model.Binding.prototype.refresh=function(f){this.checkUpdate(f)};
sap.ui.model.Binding.prototype.initialize=function(){this.checkUpdate(true)};
sap.ui.model.Binding.prototype._refresh=function(){this.refresh()};
sap.ui.model.Binding.prototype.isInitial=function(){return this.bInitial};
sap.ui.model.Binding.prototype.isRelative=function(){return this.bRelative};
sap.ui.model.Binding.prototype.attachEvents=function(e){if(!e){return this}var t=this;jQuery.each(e,function(E,h){var m="attach"+E.substring(0,1).toUpperCase()+E.substring(1);if(t[m]){t[m](h)}else{jQuery.sap.log.warning(t.toString()+" has no handler for event '"+E+"'")}});return this};
sap.ui.model.Binding.prototype.detachEvents=function(e){if(!e){return this}var t=this;jQuery.each(e,function(E,h){var m="detach"+E.substring(0,1).toUpperCase()+E.substring(1);if(t[m]){t[m](h)}else{jQuery.sap.log.warning(t.toString()+" has no handler for event '"+E+"'")}});return this};
sap.ui.model.Binding.prototype.attachRefresh=function(f,l){this.attachEvent("refresh",f,l)};
sap.ui.model.Binding.prototype.detachRefresh=function(f,l){this.detachEvent("refresh",f,l)};
sap.ui.model.Binding.prototype._fireRefresh=function(a){this.fireEvent("refresh",a)};
