import logo from './logo.svg';

import { Canvas, useCanvas } from 'react-three-fiber';
import Box from './components/Box';
import Home from './pages/Home';

function App() {
  return (
    <Home/>
    /*<div className="App">
      <header className="App-header">
        <div>
          <Canvas>
            <ambientLight />
            <pointLight position={[10,10,10]} />
            <Box position={[0,0,0]}/>
          </Canvas>
        </div>
        <p>
          Currently a WIP - please see my <a className='underline' href='https://github.com/benwilliams140'>GitHub</a> profile.
        </p>
      </header>
    </div>*/
  );
}

export default App;
