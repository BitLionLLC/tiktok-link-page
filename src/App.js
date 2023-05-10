import './App.css';
import React, {useState, useEffect} from 'react';
import Header from './components/header';
import LinkList from './components/linkList';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import keeflerLogo from './assets/keefler-logo.png';
import axios from 'axios';

function App() {
  const [isLiveOnTwitch, setIsLiveOnTwitch] = useState(false);

  useEffect(() => {
    axios
      .post(`https://id.twitch.tv/oauth2/token?client_id=${process.env.REACT_APP_TWITCH_API_CLIENT_ID}&client_secret=${process.env.REACT_APP_TWITCH_API_CLIENT_SECRET}&grant_type=client_credentials`)
      .then(res => {
        const token = res.data.access_token;
        const config = {
          headers: {
            'Client-ID': 'fnqmo60hbl4l677epnry648yxie2tn',
            'Accept': 'application/vnd.twitchtv.v5+json',
            'Authorization': `Bearer ${token}`
          }
        }

        axios
          .get('https://api.twitch.tv/helix/search/channels?query=keefler_elf', config)
          .then(res1 => {
            const correctChannel = res1.data.data.find(channel => channel.id === "433762691")
            if (correctChannel.is_live) {
              setIsLiveOnTwitch(true);
            }
          })
          .catch(err => {
            console.error(err);
          })
      })
      .catch(err => {
        console.error(err)
      })
  }, [])

  return (
    <div className='container'>
      <div className='logo left-logo'>
        <img src={keeflerLogo} width="300" alt='keefler logo'/>
      </div>
      <div className="App">
        <Header />
        <LinkList isLive={isLiveOnTwitch} />
      </div>
      <div className='logo right-logo'>
        <img src={keeflerLogo} width="300" alt='keefler logo'/>
      </div>
    </div>
  );
}

library.add(fab, fas);
export default App;
