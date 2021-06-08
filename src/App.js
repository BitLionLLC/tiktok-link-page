import './App.css';
import Header from './components/header';
import LinkList from './components/linkList';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

function App() {
  return (
    <div className="App">
      <Header />
      <LinkList />
    </div>
  );
}

library.add(fab, fas)
export default App;
