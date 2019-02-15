public with sharing class CalloutController {
    
    @AuraEnabled
    public static List<Object> serverGetNamedCredentials(){
        List<Object> credentials = new List<Object>();
       
        for(NamedCredential credential : [SELECT Id, DeveloperName, MasterLabel FROM NamedCredential]){
            credentials.add(new Map<String, String>{
                'value' => credential.DeveloperName,
                'label' => credential.MasterLabel
            });
        }
        
        return credentials;
    }
    
    @AuraEnabled
    public static void serverSendMessage(String credentialName, String message){
        
        HttpRequest req = new HttpRequest();
        req.setMethod('POST');
        
        if(!String.isBlank(credentialName)){
            req.setBody(message);
            req.setEndpoint('callout:' + credentialName);
            new Http().send(req);
        }
        
    }
    
}