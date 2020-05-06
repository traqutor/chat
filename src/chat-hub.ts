import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';
import hub from './axios-hub';

export default {
  install(Vue: any) {
    // use a new Vue instance as the interface for Vue components
    // to receive/send SignalR events. This way every component
    // can listen to events or send new events using this.$questionHub
    const chatHub = new Vue();
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$questionHub = chatHub;

    // Provide methods to connect/disconnect from the SignalR hub
    let connection: any = null;
    let startedPromise: any = null;
    let manuallyClosed = false;

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.startSignalR = (accessToken: string) => {
      connection = new HubConnectionBuilder()
        .withUrl(
          `${hub.defaults.baseURL}/chat`,
          { accessTokenFactory: () => accessToken },
        )
        .configureLogging(LogLevel.Information)
        .build();

      // // Chat Hub events
      // connection.on('NewMessageNotification', (payload: any) => {
      //   console.log('on NewMessageNotification:', payload);
      //   chatHub.$emit('JoinConversation', conversationId);
      // });

      // Establish the connection
      function start() {
        startedPromise = connection.start()
          .catch((err: any) => {
            console.error('Failed to connect with hub', err);
            // return new Promise((resolve, reject) => setTimeout(
            //   () => start()
            //     .then(resolve)
            //     .catch(reject), 15000,
            // ));
          });
        return startedPromise;
      }

      connection.onclose(() => {
        if (!manuallyClosed) start();
      });

      // Start
      manuallyClosed = false;
      start();
    };

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.stopSignalR = () => {
      if (!startedPromise) return;

      manuallyClosed = true;
      // eslint-disable-next-line consistent-return
      return startedPromise
        .then(() => connection.stop())
        .then(() => {
          startedPromise = null;
        });
    };

    // Methods for components to send messages back to server
    chatHub.conversationOpened = (questionId: string) => {
      if (!startedPromise) return;

      // eslint-disable-next-line consistent-return
      return startedPromise
        .then(() => connection.invoke('JoinConversation', questionId))
        .catch(console.error);
    };
    chatHub.conversationClosed = (questionId: string) => {
      if (!startedPromise) return;

      // eslint-disable-next-line consistent-return
      return startedPromise
        .then(() => connection.invoke('JoinConversation', questionId))
        .catch(console.error);
    };
  },
};
