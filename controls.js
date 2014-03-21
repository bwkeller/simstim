function addcontroller(controlprops) {
    var gui = new dat.GUI();
    gui.add(controlprops, 'log').name('Log Color');
    gui.add(controlprops, 'color').name('Color Scale');
};
