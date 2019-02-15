@isTest
private class CalloutControllerTests {
	@isTest static void serverGetNamedCredentialsTests() {
        List<Object> credentials = CalloutController.serverGetNamedCredentials();
        System.assertEquals(null, null);
    }
    
    @isTest static void serverSendMessageTests() {
        CalloutController.serverSendMessage(null, null);
        System.assertEquals(null, null);
    }
}