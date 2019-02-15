({
    loadCallouts : function(cmp) {
        var action = cmp.get("c.serverGetNamedCredentials");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            
            if (state === "SUCCESS") {
                cmp.set("v.calloutOptions", response.getReturnValue());
            }
            else{
                //error handling
            }
        });
        $A.enqueueAction(action);
    },
    sendMessage : function(cmp, calloutcredentialName, messageToSend){
        var action = cmp.get("c.serverSendMessage");
        
        action.setParams({ credentialName : calloutcredentialName, message : messageToSend });
        
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                alert('sent');
            }
            else{
                let errors = response.getError();
                console.log(errors);
                // Configure error toast
                let toastParams = {
                    title: "Error",
                    message: "Unknown error", // Default error message
                    type: "error"
                };
                // Pass the error message if any
                if (errors && Array.isArray(errors) && errors.length > 0) {
                    toastParams.message = errors[0].message;
                }
                // Fire error toast
                let toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams(toastParams);
                toastEvent.fire();
            }
        });
        $A.enqueueAction(action);
    },
    handleErrors : function(errors) {
        // Configure error toast
        let toastParams = {
            title: "Error",
            message: "Unknown error", // Default error message
            type: "error"
        };
        // Pass the error message if any
        if (errors && Array.isArray(errors) && errors.length > 0) {
            toastParams.message = errors[0].message;
        }
        // Fire error toast
        let toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams(toastParams);
        toastEvent.fire();
    }
})