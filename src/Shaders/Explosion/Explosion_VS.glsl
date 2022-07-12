uniform float time;
attribute float size;

void main() {
    float PI = 3.1415926538;
    float x = position.x;
    float y = position.y;
    float id = position.z;
    float ROW = 50.;
    float COL = 50.;
    float NUM = ROW * COL;
    vec3 pos = vec3(
        x / 3. - 7. + (sin(x) * PI) / 10.,
        (y - ROW / 2.) / 3. + (cos(y) * PI) / 10.,
        -10. +
        (cos((4. * PI * (x - COL / 2.)) / COL + time) + sin((8. * PI * (y - ROW / 2.)) / ROW + time)) +
        0.2 * (cos((12. * PI * (x - COL / 2.)) / COL + time) + sin((17. * PI * (y - ROW / 2.)) / ROW + time))
    );
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
    gl_PointSize = size;
}