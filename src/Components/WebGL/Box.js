import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import * as THREE from 'three';

function Box(props) {
    const mesh = useRef(); // get direct access to mesh

    // setup states
    const [ active, setActive ] = useState(false);
    const [ hovered, setHovered ] = useState(false);

    useFrame((state, delta) => {
        mesh.current.rotation.x += 0.01;
        mesh.current.rotation.y += 0.01;
    });

    return(
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 4 : 2.5}
            onClick={(e) => setActive(!active)}
            onPointerOver={(e) => setHovered(true)}
            onPointerOut={(e) => setHovered(false)}>
                <boxGeometry args={[1,1,1]}/>
                <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'}/>
        </mesh>
    )
}

export default Box;