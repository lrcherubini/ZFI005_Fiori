sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'zfi005.escritural.baixas.escrituralbaixas',
            componentId: 'AcctgDocItemList',
            contextPath: '/AcctgDocItem'
        },
        CustomPageDefinitions
    );
});