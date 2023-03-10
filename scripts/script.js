var panorama1, panorama2, panorama3, panorama4, viewer, container, infospot, infospot12, infospot2;

var controlIndex = PANOLENS.CONTROLS.ORBIT;
var modeIndex = 0;
var isAutoRotate = false;
var isFullscreen = false;

var infospotIcon;

container = document.querySelector('#container');
const selectLocation = document.querySelector('#language');


bar = document.querySelector('#bar');

function onProgressUpdate(event) {
    var percentage = event.progress.loaded / event.progress.total * 100;
    bar.style.width = percentage + "%";
    if (percentage >= 100) {
        bar.classList.add('hide');
        setTimeout(function () {
            bar.style.width = 0;
        }, 1000);
    }
}

function onButtonClick(targetPanorama) {
    bar.classList.remove('hide');
    viewer.setPanorama(targetPanorama);
}


var textureLoader = new THREE.TextureLoader();
var textureHotspotPanorama1 = textureLoader.load('assets/icons/infospot.png', function () {
    infospot = new PANOLENS.Infospot(500, 'assets/icons/infospot.png');
    infospot.position.set(-100, -500, -7000);
    infospot.addEventListener('click', function () {
        onButtonClick(panorama2);
        selectLocation.value = 'panorama2';
    });
    panorama1.add(infospot);


    infospot2 = new PANOLENS.Infospot(500, 'assets/icons/infospot.png');
    infospot2.position.set(119.91, 588.49, 4955.08);
    infospot2.addEventListener('click', function () {
        onButtonClick(panorama2);
        selectLocation.value = 'panorama2';
    });

    panorama1.add(infospot2);
});

var textureInfoPanorama1 = textureLoader.load('assets/icons/info ruangan.png', function () {
    infospot12 = new PANOLENS.Infospot(500, 'assets/icons/info ruangan.png');
    infospot12.position.set(1300, -500, -7000);
    infospot12.addHoverElement(document.getElementById('desc-container'), 200);

    panorama1.add(infospot12);
});


var textureHotspotPanorama2 = textureLoader.load('assets/icons/infospot.png', function () {
    infospot = new PANOLENS.Infospot(500, 'assets/icons/infospot.png');
    infospot.position.set(-100, -500, -7000);
    infospot.addEventListener('click', function () {
        viewer.setPanorama(panorama1);
        selectLocation.value = 'panorama1';
    });
    panorama2.add(infospot);


    infospot2 = new PANOLENS.Infospot(500, 'assets/icons/infospot.png');
    infospot2.position.set(119.91, 588.49, 4955.08);
    infospot2.addEventListener('click', function () {
        viewer.setPanorama(panorama1);
        selectLocation.value = 'panorama1';
    });

    panorama2.add(infospot2);
});

var textureInfoPanorama2 = textureLoader.load('assets/icons/info ruangan.png', function () {
    infospot12 = new PANOLENS.Infospot(500, 'assets/icons/info ruangan.png');
    infospot12.position.set(1300, -500, -7000);
    infospot12.addHoverElement(document.getElementById('desc-container'), 200);

    panorama2.add(infospot12);
});




viewer = new PANOLENS.Viewer({ container: container, autoHideInfospot: false, autoRotateActivationDuration: 3500, autoRotateSpeed: 1, controlBar: false });
panorama1 = new PANOLENS.ImagePanorama('assets/images/tunnel.jpg');
panorama1.addEventListener('progress', onProgressUpdate);
panorama2 = new PANOLENS.ImagePanorama('assets/images/interior.jpeg');
panorama2.addEventListener('progress', onProgressUpdate);
panorama3 = new PANOLENS.ImagePanorama('assets/images/kitchen.jpeg');
panorama3.addEventListener('progress', onProgressUpdate);
panorama4 = new PANOLENS.ImagePanorama('assets/images/room.jpeg');
panorama4.addEventListener('progress', onProgressUpdate);


viewer.add(panorama1, panorama2, panorama3, panorama4);


selectLocation.addEventListener('change', (event) => {
    const result = event.target.value;
    if (result === 'panorama1') {
        onButtonClick(panorama1);
    } else if (result === 'panorama2') {
        onButtonClick(panorama2);
    } else if (result === 'panorama3') {
        onButtonClick(panorama3);
    } else if (result === 'panorama4') {
        onButtonClick(panorama4);
    }
});


$('#controlButton').on('click', function (event) {
    controlIndex = controlIndex >= 1 ? 0 : controlIndex + 1;

    switch (controlIndex) {

        case 0: viewer.enableControl(PANOLENS.CONTROLS.ORBIT); break;
        case 1: viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION); break;
        default: break;

    }
});

$('#controlButton2').on('click', function (event) {
    // alert(isAutoRotate);
    if (!isAutoRotate) {
        viewer.options.autoRotate = true;
        viewer.OrbitControls.autoRotate = true;
        isAutoRotate = true;
    } else {
        clearTimeout(viewer.autoRotateRequestId);
        viewer.options.autoRotate = false;
        viewer.OrbitControls.autoRotate = false;
        isAutoRotate = false;
    }
});

$('#controlButton3').on('click touchend', function (event) {

    if (!isFullscreen) {
        if (container.requestFullscreen) { container.requestFullscreen(); }
        if (container.msRequestFullscreen) { container.msRequestFullscreen(); }
        if (container.mozRequestFullScreen) { container.mozRequestFullScreen(); }
        if (container.webkitRequestFullscreen) { container.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT); }

        isFullscreen = true;
    } else {
        if (document.exitFullscreen) { document.exitFullscreen(); }
        if (document.msExitFullscreen) { document.msExitFullscreen(); }
        if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); }
        if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }

        isFullscreen = false;
    }
});

$('#container').on('mousewheel', function (e) {
    if (e.originalEvent.wheelDelta / 120 > 0) {
        var currentZoom = viewer.camera.fov;
        var newZoom = currentZoom - 5;
        if (newZoom < 30) newZoom = 30;
        viewer.setCameraFov(newZoom);
    } else {
        var currentZoom = viewer.camera.fov;
        var newZoom = currentZoom + 5;
        if (newZoom > 110) newZoom = 110;
        viewer.setCameraFov(newZoom);
    }
})
