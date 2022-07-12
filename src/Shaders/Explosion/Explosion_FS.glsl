uniform float time;

void main() {
    gl_FragColor = vec4(vec3(1.,1.,1.), step(length(gl_PointCoord.xy - vec2(0.5)), 0.5));
}