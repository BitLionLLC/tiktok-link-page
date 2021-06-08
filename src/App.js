import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import LinkList from './components/linkList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

function App() {
  const [isLiveOnTwitch, setIsLiveOnTwitch] = useState(false);

  useEffect(() => {
    const config = {
      headers: {
        'Client-ID': 'fnqmo60hbl4l677epnry648yxie2tn',
        'Accept': 'application/vnd.twitchtv.v5+json'
      }
    }

    axios
      .get('https://api.twitch.tv/kraken/streams/433762691', config)
      .then(res => {
        console.log(res);
        if (res.data.stream.broadcast_platform === "live") {
          setIsLiveOnTwitch(true);
        }
      })
      .catch(err => {
        console.error(err);
      })
  }, [])

  return (
    <div className="App">
      <Header />
      <LinkList isLive={isLiveOnTwitch} />
    </div>
  );
}

library.add(fab, fas);
export default App;
