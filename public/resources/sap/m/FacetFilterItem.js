/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.m.FacetFilterItem");jQuery.sap.require("sap.m.library");jQuery.sap.require("sap.ui.core.Item");sap.ui.core.Item.extend("sap.m.FacetFilterItem",{metadata:{library:"sap.m",properties:{"selected":{type:"boolean",group:"Behavior",defaultValue:false},"count":{type:"int",group:"Misc",defaultValue:null}}}});
sap.m.FacetFilterItem.prototype.setSelected=function(s){var p=this.getParent();var S=false;if(p instanceof sap.m.FacetFilterList){S=p._getViewList()===null?false:true;if(s){p._addItemToODataItemCache(this)}else{p._removeItemFromODataItemCache(this)}}this.setProperty("selected",s,S)};
