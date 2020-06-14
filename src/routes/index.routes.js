import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';

import DashboardRoutes from './dashboard.routes';
// import SignInRoutes from './signIn.routes';

export default function Routes() {
  return <DashboardRoutes />;
};


// import React, { useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-community/async-storage';

// import DashboardRoutes from './dashboard.routes';
// import SignInRoutes from './signIn.routes';

// export default function Routes() {

//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {}, [loaded]);
//   AsyncStorage.getItem('auth').then((data) => { 
//     if(data != null && data == true) setLoaded(true); 
//     else setLoaded(false);
//   });

//   return loaded ? <DashboardRoutes /> : <SignInRoutes />;  
// };