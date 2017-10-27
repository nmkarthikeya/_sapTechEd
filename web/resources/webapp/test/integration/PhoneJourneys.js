jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"teched/test/integration/NavigationJourneyPhone",
		"teched/test/integration/NotFoundJourneyPhone",
		"teched/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});