sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'zfi005.escritural.baixas.escrituralbaixas',
            componentId: 'AcctgDocItemObjectPage',
            contextPath: '/AcctgDocItem'
        },
        CustomPageDefinitions
    );
});