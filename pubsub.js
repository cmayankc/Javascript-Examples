var PubSubManager = function() {
    
    var _instance = null;
    
    function NotificationManager() {
        var observerMap = {};	

        // subscribe for a specified notification.
        this.subscribe = function(notification, observerProc) {
            if (!(notification in observerMap)) {
                observerMap[notification] = [];
            }
            observerMap[notification].push(observerProc);
        };

        // publish an notification.
        this.publish = function(notification, params) {
            if (notification in observerMap) {
                var notifyList = observerMap[notification];

                for (var index = 0; index < notifyList.length; ++index) {
                    notifyList[index](params);
                }
            }
        };	
    }

    return {
        // method to get an instance of PubSubManager
        getInstance : function() {
            if(!_instance){
                _instance = new NotificationManager();;
            }
            return _instance;
        }
    };	
}();