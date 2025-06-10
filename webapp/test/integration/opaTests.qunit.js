sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'zfi005/escritural/baixas/escrituralbaixas/test/integration/FirstJourney',
		'zfi005/escritural/baixas/escrituralbaixas/test/integration/pages/AcctgDocItemList',
		'zfi005/escritural/baixas/escrituralbaixas/test/integration/pages/AcctgDocItemObjectPage'
    ],
    function(JourneyRunner, opaJourney, AcctgDocItemList, AcctgDocItemObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('zfi005/escritural/baixas/escrituralbaixas') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheAcctgDocItemList: AcctgDocItemList,
					onTheAcctgDocItemObjectPage: AcctgDocItemObjectPage
                }
            },
            opaJourney.run
        );
    }
);