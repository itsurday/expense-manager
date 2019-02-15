({
	doInit : function(component, event, helper) {
        helper.loadCallouts(component);
    },
    clickSend : function(component, event, helper) {
        var calloutcredentialName = component.get("v.selectedCallout");
        var messageToSend = component.get("v.Message");
        console.log('calloutcredentialName: ' + calloutcredentialName + ', messageToSend: ' + messageToSend);
        helper.sendMessage(component, calloutcredentialName, messageToSend);
    }
})