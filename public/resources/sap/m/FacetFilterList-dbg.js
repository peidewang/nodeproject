/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */

/* ----------------------------------------------------------------------------------
 * Hint: This is a derived (generated) file. Changes should be done in the underlying 
 * source files only (*.control, *.js) or they will be lost after the next generation.
 * ---------------------------------------------------------------------------------- */

// Provides control sap.m.FacetFilterList.
jQuery.sap.declare("sap.m.FacetFilterList");
jQuery.sap.require("sap.m.library");
jQuery.sap.require("sap.ui.core.Control");


/**
 * Constructor for a new FacetFilterList.
 * 
 * Accepts an object literal <code>mSettings</code> that defines initial 
 * property values, aggregated and associated objects as well as event handlers. 
 * 
 * If the name of a setting is ambiguous (e.g. a property has the same name as an event), 
 * then the framework assumes property, aggregation, association, event in that order. 
 * To override this automatic resolution, one of the prefixes "aggregation:", "association:" 
 * or "event:" can be added to the name of the setting (such a prefixed name must be
 * enclosed in single or double quotes).
 *
 * The supported settings are:
 * <ul>
 * <li>Properties
 * <ul>
 * <li>{@link #getTitle title} : string</li>
 * <li>{@link #getAllCount allCount} : int</li>
 * <li>{@link #getActive active} : boolean (default: true)</li>
 * <li>{@link #getKey key} : string</li>
 * <li>{@link #getMultiSelect multiSelect} : boolean (default: true)</li>
 * <li>{@link #getSequence sequence} : int (default: -1)</li>
 * <li>{@link #getGrowing growing} : boolean (default: true)</li>
 * <li>{@link #getGrowingThreshold growingThreshold} : int (default: 20)</li>
 * <li>{@link #getGrowingTriggerText growingTriggerText} : string</li></ul>
 * </li>
 * <li>Aggregations
 * <ul>
 * <li>{@link #getItems items} : sap.m.FacetFilterItem[]</li></ul>
 * </li>
 * <li>Associations
 * <ul></ul>
 * </li>
 * <li>Events
 * <ul>
 * <li>{@link sap.m.FacetFilterList#event:listOpen listOpen} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li>
 * <li>{@link sap.m.FacetFilterList#event:listClose listClose} : fnListenerFunction or [fnListenerFunction, oListenerObject] or [oData, fnListenerFunction, oListenerObject]</li></ul>
 * </li>
 * </ul> 

 *
 * @param {string} [sId] id for the new control, generated automatically if no id is given 
 * @param {object} [mSettings] initial settings for the new control
 *
 * @class
 * FacetFilterList represents a list of values for the FacetFilter control.
 * @extends sap.ui.core.Control
 *
 * @author  
 * @version 1.18.9
 *
 * @constructor   
 * @public
 * @since 1.16.0
 * @name sap.m.FacetFilterList
 */
sap.ui.core.Control.extend("sap.m.FacetFilterList", { metadata : {

	// ---- object ----
	publicMethods : [
		// methods
		"getSelectedItems", "removeSelections"
	],

	// ---- control specific ----
	library : "sap.m",
	properties : {
		"title" : {type : "string", group : "Appearance", defaultValue : null},
		"allCount" : {type : "int", group : "Misc", defaultValue : null},
		"active" : {type : "boolean", group : "Behavior", defaultValue : true},
		"key" : {type : "string", group : "Identification", defaultValue : null},
		"multiSelect" : {type : "boolean", group : "Behavior", defaultValue : true},
		"sequence" : {type : "int", group : "Behavior", defaultValue : -1},
		"growing" : {type : "boolean", group : "Behavior", defaultValue : true},
		"growingThreshold" : {type : "int", group : "Misc", defaultValue : 20},
		"growingTriggerText" : {type : "string", group : "Misc", defaultValue : null}
	},
	aggregations : {
    	"items" : {type : "sap.m.FacetFilterItem", multiple : true, singularName : "item"}
	},
	events : {
		"listOpen" : {}, 
		"listClose" : {}
	}
}});


/**
 * Creates a new subclass of class sap.m.FacetFilterList with name <code>sClassName</code> 
 * and enriches it with the information contained in <code>oClassInfo</code>.
 * 
 * <code>oClassInfo</code> might contain the same kind of informations as described in {@link sap.ui.core.Element.extend Element.extend}.
 *   
 * @param {string} sClassName name of the class to be created
 * @param {object} [oClassInfo] object literal with informations about the class  
 * @param {function} [FNMetaImpl] constructor function for the metadata object. If not given, it defaults to sap.ui.core.ElementMetadata.
 * @return {function} the created class / constructor function
 * @public
 * @static
 * @name sap.m.FacetFilterList.extend
 * @function
 */

sap.m.FacetFilterList.M_EVENTS = {'listOpen':'listOpen','listClose':'listClose'};


/**
 * Getter for property <code>title</code>.
 * The title of the facet.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>title</code>
 * @public
 * @name sap.m.FacetFilterList#getTitle
 * @function
 */

/**
 * Setter for property <code>title</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sTitle  new value for property <code>title</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setTitle
 * @function
 */


/**
 * Getter for property <code>allCount</code>.
 * Number of objects that match this item in the target data set when all filter items are selected.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {int} the value of property <code>allCount</code>
 * @public
 * @name sap.m.FacetFilterList#getAllCount
 * @function
 */

/**
 * Setter for property <code>allCount</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {int} iAllCount  new value for property <code>allCount</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setAllCount
 * @function
 */


/**
 * Getter for property <code>active</code>.
 * Indicates that the list is displayed as a button in the Light flow
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>active</code>
 * @public
 * @name sap.m.FacetFilterList#getActive
 * @function
 */

/**
 * Setter for property <code>active</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bActive  new value for property <code>active</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setActive
 * @function
 */


/**
 * Getter for property <code>key</code>.
 * Unique identifier for this filter list.
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>key</code>
 * @public
 * @name sap.m.FacetFilterList#getKey
 * @function
 */

/**
 * Setter for property <code>key</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sKey  new value for property <code>key</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setKey
 * @function
 */


/**
 * Getter for property <code>multiSelect</code>.
 * Specifies whether multiple or single selection is used.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>multiSelect</code>
 * @public
 * @name sap.m.FacetFilterList#getMultiSelect
 * @function
 */

/**
 * Setter for property <code>multiSelect</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bMultiSelect  new value for property <code>multiSelect</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setMultiSelect
 * @function
 */


/**
 * Getter for property <code>sequence</code>.
 * Sequence that determines the order in which facet list is shown on the facet filter. Lists are rendered by ascending order of sequence.
 *
 * Default value is <code>-1</code>
 *
 * @return {int} the value of property <code>sequence</code>
 * @public
 * @name sap.m.FacetFilterList#getSequence
 * @function
 */

/**
 * Setter for property <code>sequence</code>.
 *
 * Default value is <code>-1</code> 
 *
 * @param {int} iSequence  new value for property <code>sequence</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setSequence
 * @function
 */


/**
 * Getter for property <code>growing</code>.
 * Sets the growing (paging) feature of control.
 *
 * Default value is <code>true</code>
 *
 * @return {boolean} the value of property <code>growing</code>
 * @public
 * @name sap.m.FacetFilterList#getGrowing
 * @function
 */

/**
 * Setter for property <code>growing</code>.
 *
 * Default value is <code>true</code> 
 *
 * @param {boolean} bGrowing  new value for property <code>growing</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setGrowing
 * @function
 */


/**
 * Getter for property <code>growingThreshold</code>.
 * Number of items requested from the server. This property can be used only if "growing" property is set "true".
 *
 * Default value is <code>20</code>
 *
 * @return {int} the value of property <code>growingThreshold</code>
 * @public
 * @name sap.m.FacetFilterList#getGrowingThreshold
 * @function
 */

/**
 * Setter for property <code>growingThreshold</code>.
 *
 * Default value is <code>20</code> 
 *
 * @param {int} iGrowingThreshold  new value for property <code>growingThreshold</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setGrowingThreshold
 * @function
 */


/**
 * Getter for property <code>growingTriggerText</code>.
 * This text is displayed on the trigger button which is responsible to load new page at the end of the list. The default is a translated text ("Load More Data") coming from the message bundle.
 * This property can be used only if "growing" property is set "true".
 *
 * Default value is empty/<code>undefined</code>
 *
 * @return {string} the value of property <code>growingTriggerText</code>
 * @public
 * @name sap.m.FacetFilterList#getGrowingTriggerText
 * @function
 */

/**
 * Setter for property <code>growingTriggerText</code>.
 *
 * Default value is empty/<code>undefined</code> 
 *
 * @param {string} sGrowingTriggerText  new value for property <code>growingTriggerText</code>
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#setGrowingTriggerText
 * @function
 */


/**
 * Getter for aggregation <code>items</code>.<br/>
 * A list of items for the facet.
 * 
 * @return {sap.m.FacetFilterItem[]}
 * @public
 * @name sap.m.FacetFilterList#getItems
 * @function
 */


/**
 * Inserts a item into the aggregation named <code>items</code>.
 *
 * @param {sap.m.FacetFilterItem}
 *          oItem the item to insert; if empty, nothing is inserted
 * @param {int}
 *             iIndex the <code>0</code>-based index the item should be inserted at; for 
 *             a negative value of <code>iIndex</code>, the item is inserted at position 0; for a value 
 *             greater than the current size of the aggregation, the item is inserted at 
 *             the last position        
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#insertItem
 * @function
 */

/**
 * Adds some item <code>oItem</code> 
 * to the aggregation named <code>items</code>.
 *
 * @param {sap.m.FacetFilterItem}
 *            oItem the item to add; if empty, nothing is inserted
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#addItem
 * @function
 */

/**
 * Removes an item from the aggregation named <code>items</code>.
 *
 * @param {int | string | sap.m.FacetFilterItem} vItem the item to remove or its index or id
 * @return {sap.m.FacetFilterItem} the removed item or null
 * @public
 * @name sap.m.FacetFilterList#removeItem
 * @function
 */

/**
 * Removes all the controls in the aggregation named <code>items</code>.<br/>
 * Additionally unregisters them from the hosting UIArea.
 * @return {sap.m.FacetFilterItem[]} an array of the removed elements (might be empty)
 * @public
 * @name sap.m.FacetFilterList#removeAllItems
 * @function
 */

/**
 * Checks for the provided <code>sap.m.FacetFilterItem</code> in the aggregation named <code>items</code> 
 * and returns its index if found or -1 otherwise.
 *
 * @param {sap.m.FacetFilterItem}
 *            oItem the item whose index is looked for.
 * @return {int} the index of the provided control in the aggregation if found, or -1 otherwise
 * @public
 * @name sap.m.FacetFilterList#indexOfItem
 * @function
 */
	

/**
 * Destroys all the items in the aggregation 
 * named <code>items</code>.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#destroyItems
 * @function
 */


/**
 * Fired before the filter list is opened. 
 *
 * @name sap.m.FacetFilterList#listOpen
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'listOpen' event of this <code>sap.m.FacetFilterList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FacetFilterList</code>.<br/> itself. 
 *  
 * Fired before the filter list is opened. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilterList</code>.<br/> itself.
 *
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#attachListOpen
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'listOpen' event of this <code>sap.m.FacetFilterList</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#detachListOpen
 * @function
 */

/**
 * Fire event listOpen to attached listeners.

 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.FacetFilterList#fireListOpen
 * @function
 */


/**
 * Triggered after the list of items is closed. 
 *
 * @name sap.m.FacetFilterList#listClose
 * @event
 * @param {sap.ui.base.Event} oControlEvent
 * @param {sap.ui.base.EventProvider} oControlEvent.getSource
 * @param {object} oControlEvent.getParameters

 * @param {sap.m.FacetFilterItem[]} oControlEvent.getParameters.selectedItems Array of selected Items.
 * @param {boolean} oControlEvent.getParameters.allSelected True if all filter items are selected.
 * @public
 */
 
/**
 * Attach event handler <code>fnFunction</code> to the 'listClose' event of this <code>sap.m.FacetFilterList</code>.<br/>.
 * When called, the context of the event handler (its <code>this</code>) will be bound to <code>oListener<code> if specified
 * otherwise to this <code>sap.m.FacetFilterList</code>.<br/> itself. 
 *  
 * Triggered after the list of items is closed. 
 *
 * @param {object}
 *            [oData] An application specific payload object, that will be passed to the event handler along with the event object when firing the event.
 * @param {function}
 *            fnFunction The function to call, when the event occurs.  
 * @param {object}
 *            [oListener=this] Context object to call the event handler with. Defaults to this <code>sap.m.FacetFilterList</code>.<br/> itself.
 *
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#attachListClose
 * @function
 */

/**
 * Detach event handler <code>fnFunction</code> from the 'listClose' event of this <code>sap.m.FacetFilterList</code>.<br/>
 *
 * The passed function and listener object must match the ones used for event registration.
 *
 * @param {function}
 *            fnFunction The function to call, when the event occurs.
 * @param {object}
 *            oListener Context object on which the given function had to be called.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @public
 * @name sap.m.FacetFilterList#detachListClose
 * @function
 */

/**
 * Fire event listClose to attached listeners.
 * 
 * Expects following event parameters:
 * <ul>
 * <li>'selectedItems' of type <code>sap.m.FacetFilterItem[]</code> Array of selected Items.</li>
 * <li>'allSelected' of type <code>boolean</code> True if all filter items are selected.</li>
 * </ul>
 *
 * @param {Map} [mArguments] the arguments to pass along with the event.
 * @return {sap.m.FacetFilterList} <code>this</code> to allow method chaining
 * @protected
 * @name sap.m.FacetFilterList#fireListClose
 * @function
 */


/**
 * Returns an array that contains all the FacetFilterItems that are selected.
 *
 * @name sap.m.FacetFilterList.prototype.getSelectedItems
 * @function

 * @type sap.m.FacetFilterItem[]
 * @public
 */


/**
 * Removes all selections visible and hidden.
 *
 * @name sap.m.FacetFilterList.prototype.removeSelections
 * @function

 * @type sap.m.FacetFilterList
 * @public
 */


// Start of sap\m\FacetFilterList.js
jQuery.sap.require("sap.m.List");
jQuery.sap.require("sap.m.StandardListItem");
jQuery.sap.require("sap.m.Button");
jQuery.sap.require("sap.m.ButtonType");
jQuery.sap.require("sap.ui.model.Filter");
jQuery.sap.require("sap.ui.model.FilterOperator");

sap.m.FacetFilterList.prototype.init = function() {

	var that = this;

	// Internal sap.m.List used to display filter items in the popover and dialog.
	this._viewList = null;
	
	// Prevents rerendering of FacetFilter when there is no change 
	// in the context of the model bound to this FacetFilterList.
	// For example if the same model is bound to two FFLs with different contexts
	// the changes to one FFL will trigger update in the second FFL even 
	// when there were no changes to the second FFL data.
	this.bUseExtendedChangeDetection=true;

	this._oODataItemCache = {};

	this._bundle = sap.ui.getCore().getLibraryResourceBundle("sap.m");

	var headerBar = new sap.m.Bar(this.getId() + "-headerbar");

	// Checkbox bar that contains the select all checkbox used to select all filter items in the view list
	this._checkboxBar = null;

	// Flag that indicates that popover is opened or about to open. 
	// It is used to suppress rendering of FacetFilter when popover is opened, because it makes popover close.
	this._popoverOpened = false;
	
	// Popover allowing the user to view, select, and search filter items
	this._popover = new sap.m.Popover(this.getId() + "-popup", {

		placement : sap.m.PlacementType.Bottom,
		beforeOpen : function(oEvent) {

			this.getCustomHeader().addContentMiddle(that._getSearchField());

			// Add the "Select All" checkbox when the list is multi-select
			if (that.getMultiSelect()) {
				var subHeaderBar = this.getSubHeader();
				if (!subHeaderBar) {
					this.setSubHeader(that._getSelectAllCheckboxBar());
				}
			}

			// Add a new list each time the popover is opened
			this.addContent(that._createFilterItemsList());
			that._showPopoverOkButton();

			this.setInitialFocus(that._getSearchField());
		},
		afterClose : function(oEvent) {

			// The facet button will not be removed when the remove icon is pressed if we don't delay hiding the icon in ie 9.
			//
			// CSS 0120061532 0004101226 2013 "sap.m.FacetFilterList - getActive inconsistent result"
			// Moved "fireListCloseEvent" into the setTimeout function for IE9
			//
			// TODO: Remove when ie 9 is no longer supported
			if (sap.ui.Device.browser.internet_explorer && sap.ui.Device.browser.version < 10) {

				setTimeout(function() {

					that._fireListCloseEvent();
					that._displayRemoveIcon(false);
					that._popover.removeContent(that._viewList);
					that._destroyListControls();
					that._popoverOpened = false;
				}, 100);
			} else {
				that._fireListCloseEvent();
				that._displayRemoveIcon(false);
				this.removeContent(that._viewList);
				that._destroyListControls();
				that._popoverOpened = false;
			}

		},
		horizontalScrolling : false,
		customHeader : headerBar
	});

	// Use this to set the minimum width of the popover. This is not the same
	// as setting contentWidth, which sets a fixed width size.
	this._popover.addStyleClass("sapMFFPop");
};

/**
 * Update the selected state of the changed FacetFilterItem. For a single select list we also need to deselect the previously selected item.
 * 
 * @private
 */
sap.m.FacetFilterList.prototype._handleSelectionChangeEvent = function(oEvent) {

	var listItem = oEvent.getParameters().listItem;
	var bSelected = oEvent.getParameters().selected;
	var aFacetFilterItems = this.getItems();
	var bSingleSelect = !this.getMultiSelect();
	var listItemPath = listItem.getBindingContext(this._modelName).getPath();

	if (!listItem.getBindingInfo("selected")) {

		var bFound = false;
		for ( var i = 0; i < aFacetFilterItems.length; i++) {
			if (!bFound && aFacetFilterItems[i].getBindingContext(this._modelName).getPath() === listItemPath) {
				aFacetFilterItems[i].setSelected(bSelected);
				bFound = true;

				// With multi-select lists the rest of the items already have the correct selected state, so we can stop iterating. For
				// single select we need to make sure the previously selected is deselected.
				if (!bSingleSelect) {
					break;
				}
			} else if (bSingleSelect) {
				aFacetFilterItems[i].setProperty("selected", false, true);
			}
		}
	} else if (bSingleSelect && this._getViewList().getItems().length < aFacetFilterItems.length) {

		// If the selected property is bound, the list is single select and not growing, and it has been filtered
		// (user search), then the previously selected FacetFilterItem will remain selected unless we
		// deselect it here. This is because the list will only update items that are visible. So if
		// the user selects an item, then searches the list causing the selected item to be filtered out,
		// and then selects one of the remaining items, the previously selected item's selected property will
		// not be updated to false.

		for ( var i = 0; i < aFacetFilterItems.length; i++) {
			if (aFacetFilterItems[i].getBindingContext(this._modelName).getPath() !== listItemPath) {
				if (aFacetFilterItems[i].getSelected()) {
					aFacetFilterItems[i].setProperty("selected", false, true);
					break;
				}
			}
		}
	}

	this._setCBSelectAll();
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._handleSearchEvent = function(oEvent) {

	var sSearchVal = oEvent.getParameters()["query"];
	if (sSearchVal === undefined) {
		sSearchVal = oEvent.getParameters()["newValue"];
	}
	this._searchValue = sSearchVal;
	this._executeSearch(sSearchVal);
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._executeSearch = function(sSearchVal) {

	var oBinding = this._getViewList().getBinding("items");
	if (oBinding) { // May not have a binding
		var path = this._getViewList().getBindingInfo("items").template.getBindingInfo("title").parts[0].path;
		if (path) {
			var oUserFilter = new sap.ui.model.Filter(path, sap.ui.model.FilterOperator.Contains, sSearchVal);
			var oFinalFilter = new sap.ui.model.Filter([oUserFilter], true);
			oBinding.filter(oFinalFilter, sap.ui.model.FilterType.Control);
		}
	}
};

/**
 * Add/remove the OK popover button depending on the corresponding setting
 * 
 * @private
 */
sap.m.FacetFilterList.prototype._showPopoverOkButton = function() {

	var that = this;

	if (this.getParent()) {
		if (this.getParent().getShowPopoverOKButton()) {
			if (!this._okFilterButton) {
				this._okFilterButton = new sap.m.Button(this.getId() + "-ok", {
					text : that._bundle.getText("FACETFILTER_ACCEPT"),
					width : "100%",
					press : function() {

						that._popover.close();
					}
				});
				this._popover.setFooter(this._okFilterButton);
			}
		} else {

			var oButton = this._popover.getFooter();
			if (oButton) {
				this._popover.setFooter(null);
				oButton.destroy();
				delete this._okFilterButton;
			}
		}
	}
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._copySelectionsToList = function() {

	var that = this;
	var aListItems = this._getViewList().getItems();
	var aFacetFilterItems = this.getItems();
	var sModelName = this._modelName;
	var lastIndex = 0;

	// &* iterate each collection separately instead of iterating the view list items for each facet filter item
	for ( var j = 0; j < aFacetFilterItems.length; j++) {
		var item = aFacetFilterItems[j];
		if (!item.getBindingInfo("selected")) {
			if (item.getBindingContext(sModelName) && item.getBindingContext(sModelName).getPath()) {
				var path = item.getBindingContext(sModelName).getPath();
				that._restoreItemFromODataItemCache(item);
				for ( var i = lastIndex; i < aListItems.length; i++) {
					if (aListItems[i].getBindingContext(sModelName) && aListItems[i].getBindingContext(sModelName).getPath() === path) {
						aListItems[i].setSelected(item.getSelected());
						lastIndex = i;
						break;
					}
				}
			}
		}
	}
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._fireListCloseEvent = function() {

	var aSelectedItems = this.getSelectedItems();

	if (this.getParent().getType() === sap.m.FacetFilterType.Simple) {
		this._getFacetButton().setText(this._getSelectionText());
	}

	var bAllSelected = aSelectedItems.length === this.getItems().length || aSelectedItems.length === 0;

	this.fireListClose({
		selectedItems : aSelectedItems,
		allSelected : bAllSelected
	});
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._getFacetButton = function() {

	if (!this._button) {
		var that = this;
		this._button = new sap.m.Button({
			type : sap.m.ButtonType.Transparent,
			press : function(oEvent) {

				// Don't open again if user has clicked the button while the popover is already open, otherwise the popover will
				// display an empty list.
				if (!that._popover.isOpen()) {
					that._popoverOpened = true;
					that.fireListOpen({});
					that._popover.openBy(that._getFacetButton());
					that._displayRemoveIcon(true);
				}
			},
			id : this.getId() + "-button"
		});

		// The button text will not be updated unless its parent is the FacetFilter.
		this._button.setParent(this.getParent());
	}
	return this._button;
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._getFacetRemoveIcon = function() {

	var that = this;

	if (!this._facetRemoveIcon) {
		this._facetRemoveIcon = new sap.ui.core.Icon(this.getId() + "-remove", {

			src : sap.ui.core.IconPool.getIconURI("sys-cancel"),
			press : function(oEvent) {

				that.removeSelections();
				that.setActive(false);
			}
		});

		this._facetRemoveIcon.addStyleClass("sapMFFLRemoveIcon");

		// The remove icon needs to be handled the same way as the facet button
		this._facetRemoveIcon.setParent(this.getParent());
	}
	this._displayRemoveIcon(false);
	return this._facetRemoveIcon;
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype.exit = function() {

	if (this._button) {
		this._button.destroy();
		this._button = undefined;
	}

	if (this._facetRemoveIcon) {
		this._facetRemoveIcon.destroy();
		this._facetRemoveIcon = undefined;
	}

	if (this._popover) {
		this._popover.destroy();
		this._popover = undefined;
	}

	this._clearODataItemCache();
	this._destroyListControls();
};

/**
 * This function returns an array that contains all the items that are selected for this facet filter list.
 * 
 * @returns Array containing selected items for this facet filter list
 * @public
 */
sap.m.FacetFilterList.prototype.getSelectedItems = function() {

	var aSelectedItems = [];
	var aListItems = this.getItems();
	if (aListItems.length > 0) {
		for ( var i = 0; i < aListItems.length; i++) {
			if (aListItems[i].getSelected()) {
				aSelectedItems.push(aListItems[i]);
			}
		}
	}
	this._getItemsFromCache(aSelectedItems);

	return aSelectedItems;
};

/**
 * Removes all selections visible and hidden.
 * 
 * @public
 */
sap.m.FacetFilterList.prototype.removeSelections = function() {

	var aFacetFilterItems = this.getItems();

	jQuery.each(aFacetFilterItems, function(index, value) {

		value.setProperty("selected", false, true);
	});
	this._clearODataItemCache();

	return this;
};

/**
 * Update the filter's button text based on selections in the list.
 * 
 * @private
 */
sap.m.FacetFilterList.prototype._getSelectionText = function() {

	var sText = "";
	var aSelectedItems = this.getSelectedItems();

	if (aSelectedItems.length > 0 && aSelectedItems.length < this.getItems().length) {

		if (aSelectedItems.length === 1) { // Use selected item value for button label if only one selected
			sText = this._bundle.getText("FACETFILTER_ITEM_SELECTION", [ this.getTitle(), aSelectedItems[0].getText() ]);
		} else {
			sText = this._bundle.getText("FACETFILTER_ITEM_SELECTION", [ this.getTitle(), aSelectedItems.length ]);
		}
	} else {
		sText = this._bundle.getText("FACETFILTER_ALL_SELECTED", [ this.getTitle() ]);
	}
	return sText;
};

sap.m.FacetFilterList.prototype.unbindAggregation = function(sName, bSuppressReset) {

	if (sName === "items" && this._getViewList()) {
		this._getViewList().unbindAggregation(sName, bSuppressReset);
	}
	sap.ui.base.ManagedObject.prototype.unbindAggregation.apply(this, arguments);
};

sap.m.FacetFilterList.prototype.bindAggregation = function(sName, oBindingInfo) {

	if (sName === "items") {
		var sPath, oTemplate, aSorters, aFilters, oParameters;

		var oStandardListItemTemplate = new sap.m.StandardListItem();
		var bIsArgsArray = typeof oBindingInfo == "string";
		if (bIsArgsArray) {
			sPath = arguments[1];
			oTemplate = arguments[2];
			aSorters = arguments[3];
			aFilters = arguments[4];

		} else {
			sPath = oBindingInfo.path;
			oTemplate = oBindingInfo.template;
			aSorters = oBindingInfo.sorter;
			aFilters = oBindingInfo.filters;
			oParameters = oBindingInfo.parameters;
		}

		var oListBindingInfo = {
			path : sPath,
			template : oStandardListItemTemplate,
			sorter : aSorters,
			filters : aFilters,
			parameters : oParameters
		};

		var oTextBinding = oTemplate.getBindingInfo("text");
		if (oTextBinding) {
			oStandardListItemTemplate.bindProperty("title", oTextBinding);
		}
		if (oTemplate.getBindingInfo("count")) {
			oStandardListItemTemplate.bindProperty("counter", oTemplate.getBindingInfo("count"));
		}

		if (oTemplate.getBindingInfo("selected")) {
			oStandardListItemTemplate.bindProperty("selected", oTemplate.getBindingInfo("selected"));
		}

		sap.ui.base.ManagedObject.prototype.bindAggregation.apply(this, arguments);

		oListBindingInfo.model = this._modelName = this.getBindingInfo(sName).model;
		this._oListBindingInfo = oListBindingInfo;

		// Binding may be executed within an ODataModel callback after the _viewList is already created, so we
		// need to do the binding in that case as well.
		if (this._viewList) {

			this._initializeViewList();
		}
	} else {
		sap.ui.base.ManagedObject.prototype.bindAggregation.apply(this, arguments);
	}
};

// &* don't we also need to override insertItem?
// &* why do we need this override for caching again?
sap.m.FacetFilterList.prototype.addItem = function(oItem) {

	this._restoreItemFromODataItemCache(oItem);

	this.addAggregation("items", oItem, true);
	return this;
};

sap.m.FacetFilterList.prototype.destroyItems = function() {

	// Override to suppress invalidation, otherwise popover closes
	// when list items are loaded asynchronously.
	var bSuppressInvalidate = this._popoverOpened;

	return this.destroyAggregation("items", bSuppressInvalidate);
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._setCBSelectAll = function() {

	if (this.getMultiSelect()) {
		var size = this.getSelectedItems().length;
		this._getSelectAllCheckbox().setSelected(size === 0 && this.getActive());
	}
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._isModelTypeOData = function() {

	var oUiModel = sap.ui.model, oBindingInfo = this.getBindingInfo("items"), oBinding = oBindingInfo && oBindingInfo.binding, fnODataListBinding = oUiModel && oUiModel.odata
			&& oUiModel.odata.ODataListBinding;
	return fnODataListBinding && oBinding instanceof fnODataListBinding;
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._clearODataItemCache = function() {

	if (this._oODataItemCache) {
		jQuery.each(this._oODataItemCache, function(key, value) {

			value.destroy();
		});
		this._oODataItemCache = {};
	}

	return this;
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._isODataItemCacheNeeded = function(oItem) {

	return this._isModelTypeOData() && !oItem.getBindingInfo("selected");
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._addItemToODataItemCache = function(oItem) {

	if (this._isODataItemCacheNeeded(oItem)) {
		if (!this.getMultiSelect()) {
			this._clearODataItemCache();
		}

		var path = oItem.getBindingContext(this._modelName).getPath();
		this._oODataItemCache[path] = new sap.m.FacetFilterItem({
			text : oItem.getText(),
			key : oItem.getKey()
		});
	}
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._removeItemFromODataItemCache = function(oItem) {

	if (this._isODataItemCacheNeeded(oItem)) {
		var path = oItem.getBindingContext(this._modelName).getPath();
		var value = this._oODataItemCache[path];
		if (value) {
			value.destroy();
		}
		delete this._oODataItemCache[path];
	}
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._restoreItemFromODataItemCache = function(oItem) {

	if (this._isODataItemCacheNeeded(oItem)) {
		var path = oItem.getBindingContext(this._modelName).getPath();
		oItem.setSelected(!!this._oODataItemCache[path]);
	}
};

/**
 * If the model is oData then cached items are added to the aSelectedItems array.
 * 
 * @private
 */
sap.m.FacetFilterList.prototype._getItemsFromCache = function(aSelectedItems) {

	if (this._isModelTypeOData()) {
		var cache = this._oODataItemCache;
		var oExistingItems = {};
		var iSize = aSelectedItems.length;
		for (var i=0; i<iSize;i++){
			oExistingItems[aSelectedItems[i].getBindingContext(this._modelName).getPath()] = true;
		}
		jQuery.each(cache, function(index, value) {

			if (!oExistingItems[index]) {
				aSelectedItems.push(value);
			}
		});
	}
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._getViewList = function() {

	return this._viewList;
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._createFilterItemsList = function() {

	var that = this;

	this._viewList = new sap.m.List(this.getId() + "-filterlist", {
		growing : this.getGrowing(),
		growingThreshold : this.getGrowingThreshold(),
		growingTriggerText : this.getGrowingTriggerText(),
		showNoData : true,
		scrollToLoad : false,
		rememberSelections : false,

		mode : this.getMultiSelect() ? sap.m.ListMode.MultiSelect : sap.m.ListMode.SingleSelectMaster,

		selectionChange : function(oEvent) {

			that._handleSelectionChangeEvent(oEvent);
		},

		includeItemInSelection : true
	});

	var fnUpdateListOrig = this._viewList.updateItems;
	this._viewList.updateItems = function() {

		// Always call the base update items whether growing or not, otherwise items will not be added to the list.
		fnUpdateListOrig.apply(that._viewList, arguments);

		// If growing this logic will be handled by the growing delegate updateItems function override (below), so
		// don't duplicate the processing here.
		if (!that.getGrowing()) {
			that._copySelectionsToList();
			that._setCBSelectAll();
		}
	};

	// GrowingEnablement also defines updateItems when the list grows, so we have
	// to override the function here so that list selections are restored upon growing.
	var oGrowingDelegate = this._viewList._oGrowingDelegate;
	if (oGrowingDelegate && oGrowingDelegate.updateItems) {
		var fnUpdateGrowingOrig = oGrowingDelegate.updateItems;
		oGrowingDelegate.updateItems = function() {

			fnUpdateGrowingOrig.apply(oGrowingDelegate, arguments);
			that._copySelectionsToList();
			that._setCBSelectAll();
		};
	}

	this._initializeViewList();

	// Restore previous search results if there is a search value
	var sSearchValue = this._searchField.getValue();
	if (sSearchValue) {
		this._executeSearch(sSearchValue);
	}

	return this._viewList;
};

/**
 * @private
 */
sap.m.FacetFilterList.prototype._destroyListControls = function() {

	if (this._viewList) {
		this._viewList.destroy();
		delete this._viewList;
	}

	if (this._searchField) {

		var oParent = this._searchField.getParent();
		if (oParent) {
			oParent.removeContentMiddle(this._searchField);
		}
		this._searchField.destroy();
		delete this._searchField;
	}

	if (this._checkboxBar) {
		this._checkboxBar.destroy();
		delete this._checkboxBar;
}	
};

/**
 * Get the SearchField control for this list. If not already created, create the search field and initialize the live search handler.
 * 
 * @private
 */
sap.m.FacetFilterList.prototype._getSearchField = function() {

	if (!this._searchField) {
		var that = this;
		this._searchField = new sap.m.SearchField(this.getId() + "-searchField", {
			value : this._searchValue,
			width : "100%",
			search : function(oEvent) {

				that._handleSearchEvent(oEvent);
			}
		});
	}

	// Always detach the handler at first regardless of bLiveSearch, otherwise multiple calls of this method will add
	// a separate change handler to the search field.
	this._searchField.detachLiveChange(this._handleSearchEvent, this);
	if (this.getParent() && this.getParent().getLiveSearch()) {
		this._searchField.attachLiveChange(this._handleSearchEvent, this);
	}
	return this._searchField;
};

/**
 * Get the select all checkbox for this list. If already created, destroy the checkbox field and create a new one. Initialize the selected property.
 * 
 * @private
 */
sap.m.FacetFilterList.prototype._getSelectAllCheckbox = function() {
	
	return this._checkboxBar.getContentLeft()[0];
};

sap.m.FacetFilterList.prototype._getSelectAllCheckboxBar = function() {
	
	if (!this._checkboxBar) {
		var that = this;

		this._checkboxBar = new sap.m.Bar();
		this._checkboxBar.ontap = function(oEvent) {
			
			if(oEvent.srcControl.getId() === this.getId()) {
				var bSelected = that._getSelectAllCheckbox().getSelected();
				if (bSelected) {
					that._getSelectAllCheckbox().setSelected(that.getActive());
				} else {
					that._getViewList().removeSelections(true);
					that.removeSelections();
					if (that.getActive()) {
						that._setCBSelectAll();
					}
				}			
			}
		};
		
		var checkbox = new sap.m.CheckBox(this.getId() + "-selectAll", {
			text : this._bundle.getText("FACETFILTER_CHECKBOX_ALL"),
			select : function(oEvent) {

				if (!oEvent.getParameter("selected")) {
					this.setSelected(that.getActive());
				} else {
					that._getViewList().removeSelections(true);
					that.removeSelections();
					if (that.getActive()) {
						that._setCBSelectAll();
					}
				}
			}			
		});
		this._checkboxBar.addContentLeft(checkbox);
	}
	return this._checkboxBar;	
};

sap.m.FacetFilterList.prototype._displayRemoveIcon = function(bDisplay) {

	if (this._facetRemoveIcon) {

		if (bDisplay) {

			this._facetRemoveIcon.removeStyleClass("sapMFFLHiddenRemoveIcon");
			this._facetRemoveIcon.addStyleClass("sapMFFLVisibleRemoveIcon");
		} else {

			this._facetRemoveIcon.removeStyleClass("sapMFFLVisibleRemoveIcon");
			this._facetRemoveIcon.addStyleClass("sapMFFLHiddenRemoveIcon");
		}
	}
};

sap.m.FacetFilterList.prototype._initializeViewList = function() {

	if (this.getBindingContext(this._modelName)) {

		// Set the context before the model (model does not have the path) since it contains the model and the path
		this._viewList.setBindingContext(this.getBindingContext(this._modelName), this._modelName);
		this._viewList.setModel(this.getBindingContext(this._modelName).getModel(), this._modelName);
	} else {
		this._viewList.setModel(this.getModel(this._modelName), this._modelName);
	}

	if (this._oListBindingInfo) {
		this._viewList.bindAggregation("items", this._oListBindingInfo);
	}
};
