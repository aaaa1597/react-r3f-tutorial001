import React from 'react';
import './App.css';
import { Canvas } from '@react-three/fiber'

function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <ambientLight />
        <directionalLight />
        <mesh>
          <boxGeometry args={[4, 4, 4]}/>
          <meshStandardMaterial />
        </mesh>
      </Canvas>
    </div>
  );
}

export default App;
