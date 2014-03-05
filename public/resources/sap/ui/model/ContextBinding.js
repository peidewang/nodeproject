/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.model.ContextBinding");jQuery.sap.require("sap.ui.model.Binding");sap.ui.model.Binding.extend("sap.ui.model.ContextBinding",{constructor:function(m,p,c,P,e){sap.ui.model.Binding.call(this,m,p,c,P,e);this.bInitial=true},metadata:{publicMethods:["getElementContext"]}});
sap.ui.model.ContextBinding.prototype.checkUpdate=function(f){};
sap.ui.model.ContextBinding.prototype.getBoundContext=function(c){return this.oElementContext};
