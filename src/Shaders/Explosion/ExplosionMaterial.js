import * as THREE from "three"
import { extend } from "react-three-fiber"
import { Triangle } from "three"

const reader = new FileReader();

class ExplosionMaterial extends THREE.ShaderMaterial {
    constructor() {
        super({
            transparent: true,
            uniforms: {
                time: { value: 1 }
            },
            vertexShader: reader.readAsText('./Explosion_VS.glsl'),
            fragmentShader: reader.readAsText('./Explosion_FS.glsl')
        })
    }
}

extend({ ExplosionMaterial })