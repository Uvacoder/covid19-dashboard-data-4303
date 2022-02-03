import React, {useState} from 'react';
import Visualization from  './Visualization';
import { FacebookIcon, TwitterIcon } from 'react-share';
import { FacebookShareButton, TwitterShareButton } from 'react-share';
import ReactGA from 'react-ga';
import ChilicornLogo from './chilicorn_logo_rgb.svg'

ReactGA.initialize('UA-161398132-1');
ReactGA.set({ anonymizeIp: true });
ReactGA.pageview('/');

function App() {
  const [ windowWidthValue, setWindowWidthValue ] = useState(window.innerWidth)
  const [ windowHeightValue, setWindowHeightValue ] = useState(window.innerHeight)
  window.onresize = () => {
    setWindowWidthValue(window.innerWidth)
    if(window.innerWidth > 760) setWindowHeightValue(window.innerHeight)
  };
  return (
    <div className="App">
      <header className='appHeader'>
        <h1 className='headerTitle'>COVID 19 Dashboard Data<span className="headerSubNote">A great Covid19 dashboard with data from <a href="https://github.com/uvacoder" rel="noopener noreferrer" target="_blank">Chili<img src={ChilicornLogo} alt='Chilicorn Logo' className='chilicornLogo'/></a></span></h1>
          <div className='icons'>
            
            <TwitterShareButton url={'https://covid19.mustafasaifee.com'} title={'Live dashboard visualizing the spread of coronavirus COVID-19 via @mustafasaifee42'}>
              <TwitterIcon size={28} round={true} />
            </TwitterShareButton>
          </div>
      </header>
      <Visualization
        width={windowWidthValue}
        height={windowHeightValue}
      />
      <footer className='footer'>
        <span>Made by <a href="https://abclinks.vercel.app/" rel="noopener noreferrer" target="_blank">uvacoder</a> | Follow me on <a href="https://twitter.com/AlecCam43544378" rel="noopener noreferrer" target="_blank">twitter</a> | <a href="https://github.com/uvacoder"  rel="noopener noreferrer" target="_blank">uvacoder</a>Data Source: Johns Hopkins University CSSE (Updates every 24 Hrs)| <a href="https://github.com/uvacoder/covid19-dashboard-data"  rel="noopener noreferrer" target="_blank">Open Source Code</a> | Spread the information and stay safe</span>
        <div className='icons'>
          <FacebookShareButton className="fbIcon" url={'https://covid19.mustafasaifee.com'} quote={'Live dashboard visualizing the spread of COVID-19 coronavirus'}>
            <FacebookIcon size={24} round={true} />
          </FacebookShareButton>
          
        </div>
      </footer>
    </div>
  );
}

export default App;
