/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("jquery.sap.sjax",false);(function(){jQuery.sap.sjaxSettings={complexResult:true,fallback:undefined};jQuery.sap.sjax=function sjax(o){var s=jQuery.extend(true,{},jQuery.sap.sjaxSettings,o,{async:false,success:function(d,t,x){r={success:true,data:d,status:t,statusCode:x&&x.status}},error:function(x,t,e){r={success:false,data:undefined,status:t,error:e,statusCode:x.status}}});var r=undefined;jQuery.ajax(s);if(!s.complexResult){return r.success?r.data:s.fallback}return r};jQuery.sap.syncHead=function(u){return jQuery.sap.sjax({type:'HEAD',url:u}).success};jQuery.sap.syncGet=function syncGet(u,d,D){return jQuery.sap.sjax({url:u,data:d,type:'GET',dataType:D||'text'})};jQuery.sap.syncPost=function syncPost(u,d,D){return jQuery.sap.sjax({url:u,data:d,type:'POST',dataType:D||'text'})};jQuery.sap.syncGetText=function syncGetText(u,d,f){return jQuery.sap.sjax({url:u,data:d,type:'GET',dataType:'text',fallback:f,complexResult:(arguments.length<3)})};jQuery.sap.syncGetJSON=function syncGetJSON(u,d,f){return jQuery.sap.sjax({url:u,data:d||null,type:'GET',dataType:'json',fallback:f,complexResult:(arguments.length<3)})}}());
