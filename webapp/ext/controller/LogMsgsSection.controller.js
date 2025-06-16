sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/core/Core"
],
    function(ControllerExtension, Core) {
        "use strict";
         
        return ControllerExtension.extend("zfi005.escritural.baixas.escrituralbaixas.ext.controller.LogMsgsSection", {
            _logContainer: "zfi005.escritural.baixas.escrituralbaixas::AcctgDocItem__LogsObjectPage--fe::CustomSubSection::LogMsgsSection--LogContainer",
            override: {
                onInit: function(oEvent) {
                    var that = this;
                    if (this.getView().getId() === "zfi005.escritural.baixas.escrituralbaixas::AcctgDocItem__LogsObjectPage") {
                        this._oComp = Core.createComponent({
                            name: "sap.nw.core.applogs.lib.reuse.applogs", // Esse é o nome do componente UI5, mas o caminho da SICF é /sap/bc/ui5_ui5/sap/nw_aps_apl_lib
                            id: "LogMessagesControlComponent",
                            settings: {
                                "persistencyKey": "ReuseApplicationLog"
                            }
                        });
                        var oLogContainer = Core.byId(this._logContainer);
                        if (oLogContainer !== undefined) {
                            oLogContainer.setComponent(this._oComp);
                        }
                        if (this._oComp.getLogHandle()!=="") {
                            this._oComp.setLogHandle("");
                        }
                        this._oComp.refresh();
                    }
                },
                routing: {
                    onAfterBinding: function (oBindingContext) {
                        var that = this;
                        oBindingContext.requestProperty("LogHandle").then(function (sLogHandle) {
                            if (sLogHandle !== undefined) {
                                that._oComp.setLogHandle(sLogHandle);
                            }
                            that._oComp.refresh();
                        });
                    }
                }
            }
    });
});