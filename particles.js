function Particles (){
    this.particleProps = new THREE.ParticleSystemMaterial({sizeAttenuation: false, vertexColors: true});
    this.randomCube = function (count) {
        this.particlePos = new THREE.Geometry();
        for (var i=0;i<count;i++) {
            this.particlePos.vertices.push(new THREE.Vector3(Math.random()-0.5,Math.random()-0.5,Math.random()-0.5));
            var color = new THREE.Color();
            color.setHSL(Math.random(), 1.0, 0.5);
            this.particlePos.colors.push(color);
        }
    }
    this.loadJsonFull = function (url) {
        var loader = new THREE.JSONLoader();
        var http = new XMLHttpRequest();
        http.open("GET", url, false);
        http.send(null);
        var json = JSON.parse(http.responseText);
        this.particlePos = loader.parse(json, '.').geometry;
        for(var i=0; i < json.colors.length; i++) {
            var color = new THREE.Color();
            color.setHSL(json.colors[i], 1.0, 0.5);
            this.particlePos.colors.push(color);
        }
    }
    this.loadJsonFull = function (url) {
        var loader = new THREE.JSONLoader();
        var http = new XMLHttpRequest();
        http.open("GET", url, false);
        http.send(null);
        var json = JSON.parse(http.responseText);
        this.particlePos = loader.parse(json, '.').geometry;
        for(var i=0; i < json.colors.length; i++) {
            var color = new THREE.Color();
            color.setHSL(json.colors[i], 1.0, 0.5);
            this.particlePos.colors.push(color);
        }
    }
    this.particleSys = function () {
        return new THREE.ParticleSystem(this.particlePos, this.particleProps);
    }
}
