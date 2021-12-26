import logo from './logo.svg';
import './App.css';

import { Canvas, useCanvas } from 'react-three-fiber';
import Box from './components/Box';

function App() {
  return (
    <div class="App">
      <header class="App-header">
        <div>
          <Canvas>
            <ambientLight />
            <pointLight position={[10,10,10]} />
            <Box position={[0,0,0]}/>
          </Canvas>
        </div>
        <p>
          Currently a WIP - please see my <a class='underline' href='https://github.com/benwilliams140'>GitHub</a> profile.
        </p>
      </header>
    </div>
  );
}

export default App;
