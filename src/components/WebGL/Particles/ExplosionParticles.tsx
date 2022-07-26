import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

import '../../../shaders/Explosion/ExplosionMaterial';

const ExplosionParticles = (props: any) => {
  const coords = useMemo(() => undefined, []);

  return <points />;
};

export default ExplosionParticles;
