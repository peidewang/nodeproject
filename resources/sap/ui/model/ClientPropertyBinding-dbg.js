/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

// Provides the JSON model implementation of a property binding
jQuery.sap.declare("sap.ui.model.ClientPropertyBinding");
jQuery.sap.require("sap.ui.model.PropertyBinding");

/**
 *
 * @class
 * Property binding implementation for client models
 * 
 * @param {sap.ui.model.Model} oModel
 * @param {String} sPath
 * @param {sap.ui.model.Context} oContext
 * @param {Object} [mParameters]
 * 
 * @name sap.ui.model.ClientPropertyBinding
 * @extends sap.ui.model.PropertyBinding
 */
sap.ui.model.PropertyBinding.extend("sap.ui.model.ClientPropertyBinding", /** @lends sap.ui.model.ClientPropertyBinding */ {
	
	constructor : function(oModel, sPath, oContext, mParameters){
		sap.ui.model.PropertyBinding.apply(this, arguments);
		this.oValue = this._getValue();
	}
	
});

/**
 * @see sap.ui.model.PropertyBinding.prototype.getValue
 */
sap.ui.model.ClientPropertyBinding.prototype.getValue = function(){
	return this.oValue;
};


/**
 * Returns the current value of the bound target (incl. re-evaluation)
 * @return {object} the current value of the bound target
 */
sap.ui.model.ClientPropertyBinding.prototype._getValue = function(){
	var sProperty = this.sPath.substr(this.sPath.lastIndexOf("/")+1);
	if (sProperty == "__name__") {
		var aPath = this.oContext.split("/");
		return aPath[aPath.length - 1];
	}
	return this.oModel.getProperty(this.sPath, this.oContext); // ensure to survive also not set model object
};

/**
 * Setter for context
 */
sap.ui.model.ClientPropertyBinding.prototype.setContext = function(oContext) {
	if (this.oContext != oContext) {
		this.oContext = oContext;
		if (this.isRelative()) {
			this.checkUpdate();
		}
	}
};