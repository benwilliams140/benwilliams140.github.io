import React, { useState, useRef, useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

import '../../../shaders/Explosion/ExplosionMaterial';

function ExplosionParticles(props: any) {
    const coords = useMemo(() => {
        return undefined;
    }, []);

    return(
        <points>

        </points>
    );
}

export default ExplosionParticles;