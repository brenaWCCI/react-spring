
import React from 'react';
import './App.css';
import Home from './components/Home';
import GroupEdit from './components/GroupEdit';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GroupList from './components/GroupList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path='/groups' exact={true} element={<GroupList/>}/>
        <Route path='/groups/:id' element={<GroupEdit/>}/>4
      </Routes>
    </Router>
  )
}

export default App;

// import React, {useEffect, useState} from 'react';
// import logo from './logo.svg';
// import './App.css';

// const App = () => {

//   const [groups, setGroups] = useState([]);
//   const [loading, setLoading] = useState(false);



//   useEffect(() => {
//     setLoading(true);

//     fetch('api/groups')
//       .then(response => response.json())
//       .then(data => {
//         setGroups(data);
//         setLoading(false);
//       })
//   }, []);

//   if (loading) {
//     return <p>Loading...</p>;
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <div className="App-intro">
//           <h2>JUG List</h2>
//           {groups.map(group =>
//             <div key={group.id}>
//               {group.name}
//             </div>
//           )}
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;
