import React, { useRef, useState } from 'react';
import { MeshProps, useFrame } from 'react-three-fiber';
import * as THREE from 'three';

function Box(props: any) {
    const mesh = useRef<MeshProps>(); // get direct access to mesh

    // setup states
    const [ active, setActive ] = useState(false);
    const [ hovered, setHovered ] = useState(false);

    useFrame((state, delta) => {
        mesh.current?.rotateX?.(0.01);
        mesh.current?.rotateY?.(0.01);
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