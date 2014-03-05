/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.base.DataType");
sap.ui.base.DataType=function(){throw new Error()};
sap.ui.base.DataType.prototype.getName=function(){return undefined};
sap.ui.base.DataType.prototype.getBaseType=function(){return undefined};
sap.ui.base.DataType.prototype.getComponentType=function(){return undefined};
sap.ui.base.DataType.prototype.getDefaultValue=function(){return undefined};
sap.ui.base.DataType.prototype.isArrayType=function(){return undefined};
sap.ui.base.DataType.prototype.parseValue=function(v){var t=this.getName();if(t=="string"){return v}else if(t=="boolean"){return v=="true"}else if(t=="int"){return parseInt(v,10)}else if(t=="float"){return parseFloat(v)}else if(t=="object"){return v?jQuery.parseJSON(v):null}else{return v}};
sap.ui.base.DataType.prototype.isValid=undefined;
sap.ui.base.DataType.prototype.setNormalizer=function(n){this._fnNormalizer=n};
sap.ui.base.DataType.prototype.normalize=function(v){if(typeof this._fnNormalizer==="function"){return this._fnNormalizer(v)}else{return v}};
(function(){function c(n,s,b){s=s||{};b=b||sap.ui.base.DataType.prototype;var t=jQuery.sap.newObject(b);t.getName=function(){return n};if(s.hasOwnProperty("defaultValue")){var d=s.defaultValue;t.getDefaultValue=function(){return d}}if(s.hasOwnProperty("isValid")){var i=s.isValid;t.isValid=b.isValid?function(v){if(!b.isValid(v)){return false}return i(v)}:i};t.isArrayType=function(){return false};return t}function a(b){var t=jQuery.sap.newObject(sap.ui.base.DataType.prototype);t.getName=function(){return b.getName()+"[]"};t.getComponentType=function(){return b};t.isValid=function(v){if(v===null){return true}if(jQuery.isArray(v)){for(var i=0;i<v.length;i++){if(!b.isValid(v[i])){return false}}return true}return false};t.parseValue=function(v){var V=v.split(",");for(var i=0;i<V.length;i++){V[i]=b.parseValue(V[i])}return V};t.isArrayType=function(){return true};return t}var P={"any":c("any",{defaultValue:null,isValid:function(v){return true}}),"boolean":c("boolean",{defaultValue:false,isValid:function(v){return typeof v==="boolean"}}),"int":c("int",{defaultValue:0,isValid:function(v){return typeof v==="number"&&Math.floor(v)==v}}),"float":c("float",{defaultValue:0.0,isValid:function(v){return typeof v==="number"}}),"string":c("string",{defaultValue:"",isValid:function(v){return typeof v==="string"||v instanceof String}}),"object":c("object",{defaultValue:null,isValid:function(v){return typeof v==="object"||typeof v==="function"}})};sap.ui.base.DataType.getType=function(t){if(t.indexOf("[]")>0){var C=t.substr(0,t.length-2),o=this.getType(C);return o&&a(o)}else{return P[t]||jQuery.sap.getObject(t)}};sap.ui.base.DataType.createType=c;var I={};sap.ui.base.DataType.registerInterfaceTypes=function(t){for(var i=0;i<t.length;i++){jQuery.sap.setObject(t[i],I[t[i]]=new String(t[i]))}};sap.ui.base.DataType.isInterfaceType=function(t){return I.hasOwnProperty(t)&&jQuery.sap.getObject(t)===I[t]}}());
