function particles (){
    this.particleProps = new THREE.ParticleSystemMaterial({sizeAttenuation: false, vertexColors: true});
    this.random_cube = function (count) {
        particlePos = new THREE.Geometry();
        for (var i=0;i<count;i++) {
            particlePos.vertices.push(new THREE.Vector3(Math.random()-0.5,Math.random()-0.5,Math.random()-0.5));
            var color = new THREE.Color();
            color.setHSL(Math.random(), 1.0, 0.5);
            particlePos.colors.push(color);
        }
        this.particleSys = new THREE.ParticleSystem(particlePos, this.particleProps);
    }
    this.load_json = function(url) {
        var loader = new THREE.JSONLoader();
        loader.load(url, function (geometry, materials) { this.particleSys = new THREE.ParticleSystem(geometry, this.particleProps) });
    }
}
