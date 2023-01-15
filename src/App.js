import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <p className="app__headerTitle"><strong>ViYoM</strong> - <strong>T</strong>ouch <strong>t</strong>he <strong>S</strong>ky</p>
      </div>
      <Post username="Priyanka" caption="hey there I'm participating in pollux 2023" imageurl="https://lh3.googleusercontent.com/pw/AL9nZEUFTaF9HtaI6QBORjeNEghIuobRAa2kBOQmRcIa-GRYVqJiTk8MqS5Hj3p0woU-JqjijdyfelvBXZSO8uQf2w3YHkJoSXuCF2eLmue88qHhiEWMz9WRombaKmpTpjoEHjbmfRlkSx294JTjybBzo6Untg=w1127-h625-no?authuser=0" />
      <Post username="Jagruti" caption="hey! I'm learning Drone tech reach me @<email@google.com>📧" imageurl="https://cdn.pixabay.com/photo/2015/12/07/14/18/drone-1080844_960_720.jpg"/>
      <Post username="Disha Verma" caption="hello friends I'm Learning CryptoCurrency and BlockChanin Tech" imageurl="https://cdn.pixabay.com/photo/2017/12/26/21/43/blockchain-3041480_960_720.jpg"/>
      <Post username="Devanshi" caption="hello there, i'm making a whatsapp clone using angular" imageurl="https://cdn.pixabay.com/photo/2016/02/20/13/33/whatsapp-1212017_960_720.jpg"/>
      <Post username="Radha" caption="Whatsup guys! I'm participating in an upcoming hackathon event" imageurl="https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_960_720.jpg"/>
      <Post username="Divya" caption="I just cracked my Microsoft interview! 🏆" imageurl="https://cdn.pixabay.com/photo/2022/05/17/06/19/woman-7201767_960_720.jpg"/>
      <Post username="Shweta" caption="hello friends" imageurl="https://cdn.pixabay.com/photo/2017/12/11/23/52/coding-3013602_960_720.jpg"/>
      <Post username="Priya" caption="hello everyone !!" imageurl="https://cdn.pixabay.com/photo/2016/03/31/15/29/engraving-1293335_960_720.png"/>
      <Post username="Gunjan" caption="hello guys!" imageurl="https://cdn.pixabay.com/photo/2017/06/17/06/08/laptop-2411303_960_720.jpg"/>
      <div className="app__footer">
        <p>Copyright &copy; ViYoM.com <br/>
          made with 💖 by team VIYOM
        </p>
        <a href="https://github.com/alpha2lucifer/">view source code</a>
    </div>

    </div>
  );
}

export default App;
