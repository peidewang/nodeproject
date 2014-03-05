/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.model.ClientContextBinding");jQuery.sap.require("sap.ui.model.ContextBinding");sap.ui.model.ContextBinding.extend("sap.ui.model.ClientContextBinding",{constructor:function(m,p,c,P,e){sap.ui.model.ContextBinding.call(this,m,p,c,P,e);var t=this;m.createBindingContext(p,c,P,function(c){t.bInitial=false;t.oElementContext=c})}});
sap.ui.model.ClientContextBinding.prototype.refresh=function(f){var t=this;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){if(t.oElementContext===c&&!f){t.oModel.checkUpdate(true,c)}else{t.oElementContext=c;t._fireChange()}},true)};
sap.ui.model.ClientContextBinding.prototype.initialize=function(){var t=this;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){t.oElementContext=c;t._fireChange()},true)};
sap.ui.model.ClientContextBinding.prototype.setContext=function(c){var t=this;if(this.oContext!=c){this.oContext=c;this.oModel.createBindingContext(this.sPath,this.oContext,this.mParameters,function(c){t.oElementContext=c;t._fireChange()})}};
