import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  console.log('=====inside this function');
  try {
    await firebase
      .messaging()
      .hasPermission()
      .then(enabled => {
        console.log('mjbjhbvjhvvjhv', enabled);
      });
  } catch (e) {
    console.log(e);
  }

  const authStatus = await messaging().requestPermission();
  console.log('(authStatus):', authStatus);
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  if (enabled) {
    console.log('Authorization status(authStatus):', authStatus);
    getFcmToken();
  }
};

async function getFcmToken() {
  let fcmToken = await messaging().getToken();
  console.log('fcmToken', fcmToken);
}

export const NotificationListener = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  messaging().onNotificationOpenedApp(async remoteMessage => {
    if (remoteMessage) {
      console.log(
        'onNotificationOpenedApp: ' +
          'Notification caused app to open from background state',
      );
      console.log(remoteMessage);
      alert(
        'onNotificationOpenedApp: Notification caused app to' +
          ' open from background state',
      );
    }
  });

  messaging()
    .getInitialNotification()
    .then(async remoteMessage => {
      if (remoteMessage) {
        console.log(
          'getInitialNotification:' +
            'Notification caused app to open from quit state',
        );
        console.log(remoteMessage);
        alert(
          'getInitialNotification: Notification caused app to' +
            ' open from quit state',
        );
      }
    });
};

export const unsubscribe = messaging().onMessage(async remoteMessage => {
  alert('A new FCM message arrived!');
  console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));
});
