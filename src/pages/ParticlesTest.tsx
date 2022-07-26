import React, { useState } from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

import ExplosionParticles from '../components/WebGL/Particles/ExplosionParticles';

const ParticlesTest = (props: any) => (
  <div className="w-auto h-screen">
    <Canvas className="w-full h-full" camera={{ position: [5, 5, 5] }}>
      <ExplosionParticles />
    </Canvas>
  </div>
);

export default ParticlesTest;
