# Chat

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


1. Cors added to dev and stage instances on Azure
2. There is hardcoded Authorization: Basic cm8uY2xpZW50OnNlY3JldA== header added to requests


SignalR hub:
``` bash
https://stage-1.azurewebsites.net/chat/
```

SignalR methods

``` bash
newMessageReceived             = NewMessageNotification
newConversation                = NewConversationNotification
markAsReadNotification         = MarkedAsReadNotification
markAsAcknowledgedNotification = MarkAsAcknowledgedNotification

sendMessage                    = SendMessage
joinConversation               = JoinConversation
leaveConversation              = LeaveConversation
readMessageConfirmation        = ReadMessage

SendTestMessageToAll
ReceiveTestMessage
UpdateUsersRolesNotification
UserIsTyping
SendUserIsTyping
UserIsDisconnected
UserIsConnected
AddedExtraAttachmentToMessageNotification
```
```
