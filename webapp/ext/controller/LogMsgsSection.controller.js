sap.ui.define([
    "sap/ui/core/mvc/ControllerExtension",
    "sap/ui/core/Core"
],
    function(ControllerExtension, Core) {
        "use strict";
         
        return ControllerExtension.extend("zfi005.escritural.baixas.escrituralbaixas.ext.controllers.LogMsgsSection", {
            _logContainer: "zfi005.escritural.baixas.escrituralbaixas::AcctgDocItem__LogsObjectPage--fe::CustomSubSection::logMsgsSection--LogContainer",
            _isLogObjectPage: false, // Flag to indicate if we are on the Logs Object Page

            override: {
                onInit: function(oEvent) {
                    var that = this;
                    if (this.getView().getId() === "zfi005.escritural.baixas.escrituralbaixas::AcctgDocItem__LogsObjectPage") {
                        this._isLogObjectPage = true; // Set the flag
                        this._oComp = Core.createComponent({
                            name: "sap.nw.core.applogs.lib.reuse.applogs",
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
                        if (this._isLogObjectPage) { 
                            oBindingContext.requestProperty("LogHandle").then(function (sLogHandle) {
                                if (sLogHandle !== undefined) {
                                    that._oComp.setLogHandle(sLogHandle);
                                }
                                that._oComp.refresh();
                            });
                        }
                    }
                },
                editFlow: {
                    onAfterActionExecution: function (sAction) {
                        var that = this;
                        if (this._isLogObjectPage) {
                            this._oComp.setLogHandle("");
                            this._oComp.refresh();
                            var oBindingContext = that.getView().getBindingContext();
                            oBindingContext.requestProperty("LogHandle").then(function (sLogHandler) {
                                if (sLogHandler !== undefined) {
                                    that._oComp.setLogHandle(sLogHandler);
                                    that._oComp.refresh();
                                }
                            });
                        }
                    }
                }
            }
    });
});