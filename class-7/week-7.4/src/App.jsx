// import './App.css'
// import React from 'react'
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
// import { networkAtom,jobkAtom, notificationAtom,messagingAtom,totalNotification} from '../atoms'

// function App() {
//   return <RecoilRoot>
//     <MainApp />
//   </RecoilRoot>
// }

// function MainApp() {
//   const NetworkNotificationCount = useRecoilValue(networkAtom);
//   const JobNotificationCount = useRecoilValue(jobkAtom);
//   const NotificationNotificationCount = useRecoilValue(notificationAtom);
//   const [MessagingNotificationCount, setMessagingNotificationCount] = useRecoilState(messagingAtom);
//   const toatalNotification = useRecoilValue(totalNotification);

//   return (
//     <>
//       <button>Home</button>

//       <button>My Network ({NetworkNotificationCount >=100 ? "99+":NetworkNotificationCount})</button>
//       <button>Jobs ({JobNotificationCount})</button>
//       <button>Messaging ({MessagingNotificationCount})</button>
//       <button>Notifications ({NotificationNotificationCount})</button>

//       <button onClick={()=>{
//         setMessagingNotificationCount(MessagingNotificationCount+1)
//       }}>Me ({toatalNotification})</button>  
//     </>
//   )
// }



// export default App


//=====================Only Message Box Render=====================


// import './App.css';
// import React from 'react';
// import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
// import { networkAtom, jobkAtom, notificationAtom, messagingAtom } from '../atoms';

// function App() {
//   return (
//     <RecoilRoot>
//       <MainApp />
//     </RecoilRoot>
//   );
// }

// function MainApp() {
//   return (
//     <>
//       <HomeButton />
//       <NetworkButton />
//       <JobsButton />
//       <MessagingButton />
//       <NotificationsButton />
//       <MeButton />
//     </>
//   );
// }

// // Home Button
// function HomeButton() {
//   return <button>Home</button>;
// }

// // Network Button
// function NetworkButton() {
//   const NetworkNotificationCount = useRecoilValue(networkAtom);
//   return (
//     <button>
//       My Network ({NetworkNotificationCount >= 100 ? '99+' : NetworkNotificationCount})
//     </button>
//   );
// }

// // Jobs Button
// function JobsButton() {
//   const JobNotificationCount = useRecoilValue(jobkAtom);
//   return <button>Jobs ({JobNotificationCount})</button>;
// }

// // Messaging Button
// function MessagingButton() {
//   const [MessagingNotificationCount] = useRecoilState(messagingAtom);
//   return <button>Messaging ({MessagingNotificationCount})</button>;
// }

// // Notifications Button
// function NotificationsButton() {
//   const NotificationNotificationCount = useRecoilValue(notificationAtom);
//   return <button>Notifications ({NotificationNotificationCount})</button>;
// }

// // Me Button
// function MeButton() {
//   const [, setMessagingNotificationCount] = useRecoilState(messagingAtom);
//   return (
//     <button
//       onClick={() => {
//         setMessagingNotificationCount((prevCount) => prevCount + 1);
//       }}
//     >
//       Me
//     </button>
//   );
// }

// export default App;


//------------------------------Asynchronous Data Fetching------------------------------


import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'
import { useEffect } from 'react'
import axios from 'axios'

function App() {
  return <RecoilRoot>
    <MainApp />
  </RecoilRoot>
}

function MainApp() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications)
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  useEffect(() => {
    // fetch
    axios.get("https://sum-server.100xdevs.com/notifications")
      .then(res => {
        setNetworkCount(res.data)
      })
  }, [])

  return (
    <>
      <button>Home</button>
      
      <button>My network ({networkCount.networks >= 100 ? "99+" : networkCount.networks})</button>
      <button>Jobs {networkCount.jobs}</button>
      <button>Messaging ({networkCount.messaging})</button>
      <button>Notifications ({networkCount.notifications})</button>

      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App