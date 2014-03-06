/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

jQuery.sap.declare("sap.m.SwitchRenderer");

/**
 * @class Switch renderer.
 * @static
 */
sap.m.SwitchRenderer = {};

/**
 * Renders the HTML for the given control, using the provided {@link sap.ui.core.RenderManager}.
 *
 * @param {sap.ui.core.RenderManager} oRm the RenderManager that can be used for writing to the Render-Output-Buffer
 * @param {sap.ui.core.Control} oSwitch an object representation of the control that should be rendered
 */
sap.m.SwitchRenderer.render = function(oRm, oSwitch) {
	var bState = oSwitch.getState(),
		sState = bState ? oSwitch._sOn : oSwitch._sOff,
		sTooltip = oSwitch.getTooltip_AsString(),
		sType = oSwitch.getType(),
		bDefault = (sType === "Default"),
		bDisabled =  !oSwitch.getEnabled(),
		sName = oSwitch.getName();

	// suppress rendering if not visible
	if (!oSwitch.getVisible()) {
		return;
	}

	oRm.write('<div');
	oRm.addClass("sapMSwtCont");

	if (bDisabled) {
		oRm.addClass("sapMSwtContDisabled");
	}

	oRm.writeClasses();
	oRm.writeStyles();
	oRm.writeControlData(oSwitch);

	if (sTooltip) {
		oRm.writeAttributeEscaped("title", sTooltip);
	}

	oRm.write(">");

		oRm.write("<div");
		oRm.addClass("sapMSwt");
		oRm.addClass(bState ? "sapMSwtOn" : "sapMSwtOff");
		oRm.addClass("sapMSwt" + sType);

		if (bDisabled) {
			oRm.addClass("sapMSwtDisabled");
		}

		oRm.writeClasses();
		oRm.write(">");
			oRm.write('<div class="sapMSwtInner">');

				// text
				this._renderText(oRm, oSwitch, bDefault);

				// handle
				this._renderHandle(oRm, oSwitch, sState, bDisabled);

			oRm.write("</div>");

		oRm.write("</div>");

		if (sName) {

			// checkbox
			this._renderCheckbox(oRm, oSwitch, sName, sState, bState, bDisabled);
		}

	oRm.write("</div>");
};

sap.m.SwitchRenderer._renderText = function(oRm, oSwitch, bDefault) {

	// on
	oRm.write('<div class="sapMSwtText sapMSwtTextOn">');
		oRm.write("<span>");
			if (bDefault) {
				oRm.writeEscaped(oSwitch._sOn);
			}
		oRm.write("</span>");
	oRm.write("</div>");

	// off
	oRm.write('<div class="sapMSwtText sapMSwtTextOff">');
		oRm.write("<span>");
			if (bDefault) {
				oRm.writeEscaped(oSwitch._sOff);
			}
		oRm.write("</span>");
	oRm.write("</div>");
};

sap.m.SwitchRenderer._renderHandle = function(oRm, oSwitch, sState, bDisabled) {
	oRm.write("<div");
	oRm.addClass("sapMSwtHandle");

	if (sap.ui.Device.browser.webkit && Number(jQuery.browser.version).toFixed(2) === "537.35") {
		oRm.addClass("sapMSwtWebKit537-35");
	}

	oRm.writeClasses();

	if (!bDisabled) {
		oRm.writeAttribute("tabindex", "0");
	}

	oRm.writeAttributeEscaped("data-sap-ui-swt", sState);
	oRm.write(">");
	oRm.write("</div>");
};

sap.m.SwitchRenderer._renderCheckbox = function(oRm, oSwitch, sName, sState, bState, bDisabled) {
	oRm.write('<input type="checkbox"');

	oRm.writeAttributeEscaped("name", sName);

	oRm.writeAttribute("id", oSwitch.getId() + "-input");

	if (bState) {
		oRm.writeAttribute("checked", "checked");
	}

	if (bDisabled) {
		oRm.writeAttribute("disabled", "disabled");
	}

	oRm.writeAttributeEscaped("value", sState);

	oRm.write(">");
};