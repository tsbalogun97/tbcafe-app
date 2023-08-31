// import { useState } from "react";
// import { Routes, Route } from "react-router-dom";
// import { getUser } from "./utilities/users-service";
// // pages
// import AuthPage from "./pages/AuthPage/AuthPage";
// import NewOrderPage from "./pages/NewOrderPage/NewOrderPage";
// import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage";

// // components
// import NavBar from "./components/NavBar/NavBar";
// // css
// import "./App.css";


// function App(props) {
//   // array destructing
//   const [user, setUser] = useState(getUser());// return null or our user

//   return (
//     <main className="App">
//       {user ? (
        
//         <>
//           <NavBar user={user} setUser= {setUSer} />
//           <Routes>
//             <Route path="/orders/new" element={<NewOrderPage />} />
//             <Route path="/orders" element={<OrderHistoryPage />} />
//           </Routes>
      

//         </>
//       ):(
//         <AuthPage />
//       )}
//     </main>
//   );
// }

// export default App;

import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { getUser } from './utilities/users-service';
// pages
import AuthPage from './pages/AuthPage/AuthPage';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import OrderHistoryPage from './pages/OrderHistoryPage/OrderHistoryPage';
// components
import NavBar from './components/NavBar/NavBar';
// css
import styles from './App.module.css';

function App() {
  // array destructuring
  const [user, setUser] = useState(getUser());

  return (
    <main className={styles.App}>
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
