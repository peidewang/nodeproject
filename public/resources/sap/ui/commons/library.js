/*!
 * SAP UI development toolkit for HTML5 (SAPUI5/OpenUI5)
 * (c) Copyright 2009-2014 SAP AG or an SAP affiliate company. 
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
jQuery.sap.declare("sap.ui.commons.library");jQuery.sap.require("sap.ui.core.Core");jQuery.sap.require("sap.ui.core.library");jQuery.sap.require("sap.ui.layout.library");sap.ui.getCore().initLibrary({name:"sap.ui.commons",dependencies:["sap.ui.core","sap.ui.layout"],types:["sap.ui.commons.ButtonStyle","sap.ui.commons.HorizontalDividerHeight","sap.ui.commons.HorizontalDividerType","sap.ui.commons.LabelDesign","sap.ui.commons.MenuBarDesign","sap.ui.commons.MessageType","sap.ui.commons.Orientation","sap.ui.commons.PaginatorEvent","sap.ui.commons.RatingIndicatorVisualMode","sap.ui.commons.RowRepeaterDesign","sap.ui.commons.SplitterSize","sap.ui.commons.TextViewColor","sap.ui.commons.TextViewDesign","sap.ui.core.TitleLevel","sap.ui.commons.ToolbarDesign","sap.ui.commons.ToolbarSeparatorDesign","sap.ui.commons.TriStateCheckBoxState","sap.ui.commons.enums.AreaDesign","sap.ui.commons.enums.BorderDesign","sap.ui.commons.enums.Orientation","sap.ui.layout.form.GridElementCells","sap.ui.layout.form.SimpleFormLayout","sap.ui.commons.layout.BackgroundDesign","sap.ui.commons.layout.BorderLayoutAreaTypes","sap.ui.commons.layout.HAlign","sap.ui.commons.layout.Padding","sap.ui.commons.layout.Separation","sap.ui.commons.layout.VAlign"],interfaces:["sap.ui.commons.FormattedTextViewControl","sap.ui.commons.ToolbarItem"],controls:["sap.ui.commons.Accordion","sap.ui.commons.ApplicationHeader","sap.ui.commons.AutoComplete","sap.ui.commons.Button","sap.ui.commons.Callout","sap.ui.commons.CalloutBase","sap.ui.commons.Carousel","sap.ui.commons.CheckBox","sap.ui.commons.ColorPicker","sap.ui.commons.ComboBox","sap.ui.commons.DatePicker","sap.ui.commons.Dialog","sap.ui.commons.DropdownBox","sap.ui.commons.FileUploader","sap.ui.commons.FormattedTextView","sap.ui.commons.HorizontalDivider","sap.ui.commons.Image","sap.ui.commons.ImageMap","sap.ui.commons.InPlaceEdit","sap.ui.commons.Label","sap.ui.commons.Link","sap.ui.commons.ListBox","sap.ui.commons.Menu","sap.ui.commons.MenuBar","sap.ui.commons.MenuButton","sap.ui.commons.Message","sap.ui.commons.MessageBar","sap.ui.commons.MessageList","sap.ui.commons.MessageToast","sap.ui.commons.Paginator","sap.ui.commons.Panel","sap.ui.commons.PasswordField","sap.ui.commons.ProgressIndicator","sap.ui.commons.RadioButton","sap.ui.commons.RadioButtonGroup","sap.ui.commons.RangeSlider","sap.ui.commons.RatingIndicator","sap.ui.commons.ResponsiveContainer","sap.ui.commons.ResponsiveContainerRange","sap.ui.commons.RichTooltip","sap.ui.commons.RoadMap","sap.ui.commons.RowRepeater","sap.ui.commons.SearchField","sap.ui.commons.SegmentedButton","sap.ui.commons.Slider","sap.ui.commons.Splitter","sap.ui.commons.Tab","sap.ui.commons.TabStrip","sap.ui.commons.TextArea","sap.ui.commons.TextField","sap.ui.commons.TextView","sap.ui.commons.ToggleButton","sap.ui.commons.Toolbar","sap.ui.commons.Tree","sap.ui.commons.TriStateCheckBox","sap.ui.commons.ValueHelpField","sap.ui.commons.form.Form","sap.ui.commons.form.FormLayout","sap.ui.commons.form.GridLayout","sap.ui.commons.form.ResponsiveLayout","sap.ui.commons.form.SimpleForm","sap.ui.commons.layout.AbsoluteLayout","sap.ui.commons.layout.BorderLayout","sap.ui.commons.layout.HorizontalLayout","sap.ui.commons.layout.MatrixLayout","sap.ui.commons.layout.ResponsiveFlowLayout","sap.ui.commons.layout.VerticalLayout"],elements:["sap.ui.commons.AccordionSection","sap.ui.commons.Area","sap.ui.commons.FileUploaderParameter","sap.ui.commons.MenuItem","sap.ui.commons.MenuItemBase","sap.ui.commons.MenuTextFieldItem","sap.ui.commons.RoadMapStep","sap.ui.commons.RowRepeaterFilter","sap.ui.commons.RowRepeaterSorter","sap.ui.commons.SearchProvider","sap.ui.commons.Title","sap.ui.commons.ToolbarSeparator","sap.ui.commons.TreeNode","sap.ui.commons.form.FormContainer","sap.ui.commons.form.FormElement","sap.ui.commons.form.GridContainerData","sap.ui.commons.form.GridElementData","sap.ui.commons.layout.BorderLayoutArea","sap.ui.commons.layout.MatrixLayoutCell","sap.ui.commons.layout.MatrixLayoutRow","sap.ui.commons.layout.PositionContainer","sap.ui.commons.layout.ResponsiveFlowLayoutData"],version:"1.18.9"});jQuery.sap.declare("sap.ui.commons.ButtonStyle");sap.ui.commons.ButtonStyle={Emph:"Emph",Accept:"Accept",Reject:"Reject",Default:"Default"};jQuery.sap.declare("sap.ui.commons.HorizontalDividerHeight");sap.ui.commons.HorizontalDividerHeight={Ruleheight:"Ruleheight",Small:"Small",Medium:"Medium",Large:"Large"};jQuery.sap.declare("sap.ui.commons.HorizontalDividerType");sap.ui.commons.HorizontalDividerType={Area:"Area",Page:"Page"};jQuery.sap.declare("sap.ui.commons.LabelDesign");sap.ui.commons.LabelDesign={Bold:"Bold",Standard:"Standard"};jQuery.sap.declare("sap.ui.commons.MenuBarDesign");sap.ui.commons.MenuBarDesign={Standard:"Standard",Header:"Header"};jQuery.sap.declare("sap.ui.commons.MessageType");sap.ui.commons.MessageType={Error:"Error",Warning:"Warning",Success:"Success"};jQuery.sap.declare("sap.ui.commons.Orientation");sap.ui.commons.Orientation={Horizontal:"Horizontal",Vertical:"Vertical"};jQuery.sap.declare("sap.ui.commons.PaginatorEvent");sap.ui.commons.PaginatorEvent={First:"First",Previous:"Previous",Goto:"Goto",Next:"Next",Last:"Last"};jQuery.sap.declare("sap.ui.commons.RatingIndicatorVisualMode");sap.ui.commons.RatingIndicatorVisualMode={Full:"Full",Half:"Half",Continuous:"Continuous"};jQuery.sap.declare("sap.ui.commons.RowRepeaterDesign");sap.ui.commons.RowRepeaterDesign={Standard:"Standard",Transparent:"Transparent",BareShell:"BareShell"};jQuery.sap.declare('sap.ui.commons.SplitterSize');jQuery.sap.require('sap.ui.base.DataType');sap.ui.commons.SplitterSize=sap.ui.base.DataType.createType('sap.ui.commons.SplitterSize',{isValid:function(v){return/^((0*|([0-9]+|[0-9]*\.[0-9]+)([pP][xX]|%)))$/.test(v)}},sap.ui.base.DataType.getType('string'));jQuery.sap.declare("sap.ui.commons.TextViewColor");sap.ui.commons.TextViewColor={Default:"Default",Positive:"Positive",Negative:"Negative",Critical:"Critical"};jQuery.sap.declare("sap.ui.commons.TextViewDesign");sap.ui.commons.TextViewDesign={Standard:"Standard",Bold:"Bold",H1:"H1",H2:"H2",H3:"H3",H4:"H4",H5:"H5",H6:"H6",Italic:"Italic",Small:"Small",Monospace:"Monospace",Underline:"Underline"};jQuery.sap.declare("sap.ui.commons.ToolbarDesign");sap.ui.commons.ToolbarDesign={Standard:"Standard",Transparent:"Transparent",Flat:"Flat"};jQuery.sap.declare("sap.ui.commons.ToolbarSeparatorDesign");sap.ui.commons.ToolbarSeparatorDesign={Standard:"Standard",FullHeight:"FullHeight"};jQuery.sap.declare("sap.ui.commons.TriStateCheckBoxState");sap.ui.commons.TriStateCheckBoxState={Unchecked:"Unchecked",Mixed:"Mixed",Checked:"Checked"};jQuery.sap.declare("sap.ui.commons.enums.AreaDesign");sap.ui.commons.enums.AreaDesign={Plain:"Plain",Fill:"Fill",Transparent:"Transparent"};jQuery.sap.declare("sap.ui.commons.enums.BorderDesign");sap.ui.commons.enums.BorderDesign={Box:"Box",None:"None"};jQuery.sap.declare("sap.ui.commons.enums.Orientation");sap.ui.commons.enums.Orientation={horizontal:"horizontal",vertical:"vertical"};jQuery.sap.declare("sap.ui.commons.layout.BackgroundDesign");sap.ui.commons.layout.BackgroundDesign={Border:"Border",Fill1:"Fill1",Fill2:"Fill2",Fill3:"Fill3",Header:"Header",Plain:"Plain",Transparent:"Transparent"};jQuery.sap.declare("sap.ui.commons.layout.BorderLayoutAreaTypes");sap.ui.commons.layout.BorderLayoutAreaTypes={top:"top",begin:"begin",center:"center",end:"end",bottom:"bottom"};jQuery.sap.declare("sap.ui.commons.layout.HAlign");sap.ui.commons.layout.HAlign={Begin:"Begin",Center:"Center",End:"End",Left:"Left",Right:"Right"};jQuery.sap.declare("sap.ui.commons.layout.Padding");sap.ui.commons.layout.Padding={None:"None",Begin:"Begin",End:"End",Both:"Both",Neither:"Neither"};jQuery.sap.declare("sap.ui.commons.layout.Separation");sap.ui.commons.layout.Separation={None:"None",Small:"Small",SmallWithLine:"SmallWithLine",Medium:"Medium",MediumWithLine:"MediumWithLine",Large:"Large",LargeWithLine:"LargeWithLine"};jQuery.sap.declare("sap.ui.commons.layout.VAlign");sap.ui.commons.layout.VAlign={Bottom:"Bottom",Middle:"Middle",Top:"Top"};sap.ui.lazyRequire("sap.ui.commons.MessageBox","alert confirm show");sap.ui.commons.Orientation.vertical=sap.ui.commons.Orientation.Vertical;sap.ui.commons.Orientation.horizontal=sap.ui.commons.Orientation.Horizontal;sap.ui.commons.form.GridElementCells=sap.ui.layout.form.GridElementCells;sap.ui.commons.form.SimpleFormLayout=sap.ui.layout.form.SimpleFormLayout;sap.ui.commons.TitleLevel=sap.ui.core.TitleLevel;if(!sap.ui.layout.form.FormHelper||!sap.ui.layout.form.FormHelper.bFinal){sap.ui.layout.form.FormHelper={createLabel:function(t){return new sap.ui.commons.Label({text:t})},createButton:function(i,p,t){var b=new sap.ui.commons.Button(i,{lite:true});b.attachEvent('press',p,t);return b},setButtonContent:function(b,t,T,i,I){b.setText(t);b.setTooltip(T);b.setIcon(i);b.setIconHovered(I)},addFormClass:function(){return null},bArrowKeySupport:true,bFinal:false}}
