import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import Container from './components/Conteiner/Conteiner';
import FriendList from './components/FriendList/FriendList';
import evidense from './components/Profile/user.json';
import data from './components/Statistics/data.json';
import friends from './components/FriendList/friends.json';

export default function App() {
  return (
    <Container>
      <Profile
        username={evidense.username}
        tag={evidense.tag}
        location={evidense.location}
        avatar={evidense.avatar}
        stats={evidense.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />;
      <FriendList friends={friends} />
    </Container>
  );
}

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
