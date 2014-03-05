/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.model.odata.ODataContextBinding");jQuery.sap.require("sap.ui.model.ContextBinding");sap.ui.model.ContextBinding.extend("sap.ui.model.odata.ODataContextBinding",{constructor:function(m,p,c,P,e){sap.ui.model.ContextBinding.call(this,m,p,c,P,e)}});
sap.ui.model.odata.ODataContextBinding.prototype.initialize=function(){var t=this,r=this.oModel.resolve(this.sPath,this.oContext),d=this.oModel._getObject(this.sPath,this.oContext),R=this.oModel._isReloadNeeded(r,d,this.mParameters);if(R){this.fireDataRequested()}this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){t.oElementContext=c;t._fireChange();if(R){t.fireDataReceived()}},R)};
sap.ui.model.odata.ODataContextBinding.prototype.refresh=function(f){var t=this;this.fireDataRequested();this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){if(t.oElementContext==c){t.oModel.checkUpdate(true,c);if(f){t._fireChange()}}else{t.oElementContext=c;t._fireChange()}t.fireDataReceived()},true)};
sap.ui.model.odata.ODataContextBinding.prototype.setContext=function(c){var t=this,r,d,R;if(this.oContext!=c&&this.isRelative()){r=this.oModel.resolve(this.sPath,this.oContext),d=this.oModel._getObject(this.sPath,this.oContext),R=this.oModel._isReloadNeeded(r,d,this.mParameters);this.oContext=c;if(R){this.fireDataRequested()}this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){t.oElementContext=c;t._fireChange();if(R){t.fireDataReceived()}},R)}};
