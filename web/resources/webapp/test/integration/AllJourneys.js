jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"teched/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"teched/test/integration/pages/App",
	"teched/test/integration/pages/Browser",
	"teched/test/integration/pages/Master",
	"teched/test/integration/pages/Detail",
	"teched/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "teched.view."
	});

	sap.ui.require([
		"teched/test/integration/MasterJourney",
		"teched/test/integration/NavigationJourney",
		"teched/test/integration/NotFoundJourney",
		"teched/test/integration/BusyJourney",
		"teched/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});