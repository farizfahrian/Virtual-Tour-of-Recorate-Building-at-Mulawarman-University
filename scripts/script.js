var controlIndex = PANOLENS.CONTROLS.ORBIT;
var isAutoRotate = false;

var infospotIcon;

const bar = document.getElementById('bar');
const container = document.getElementById('container');
const featureButton = document.getElementById('featureButton');
const featureButton2 = document.getElementById('featureButton2');
const featureButton3 = document.getElementById('featureButton3');
const compass = document.getElementById('compassContainer');


const swiftUpElements = document.querySelectorAll('.swift-up-text');

swiftUpElements.forEach(elem => {

  const words = elem.textContent.split(' ');
  elem.innerHTML = '';

  words.forEach((el, index) => {
    words[index] = `<span><i>${words[index]}</i></span>`;
  });

  elem.innerHTML = words.join(' ');

  const children = document.querySelectorAll('span > i');
  children.forEach((node, index) => {
    node.style.animationDelay = `${index * .2}s`;
  });
});


var viewer = new PANOLENS.Viewer({ container: container, autoHideInfospot: false, autoRotateActivationDuration: 3500, autoRotateSpeed: 1, controlBar: false, output: 'console' });

function createPanorama(imagePath) {
  const panorama = new PANOLENS.ImagePanorama(imagePath);

  panorama.addEventListener('enter-fade-start', function () {
    viewer.tweenControlCenter(new THREE.Vector3(4944.62, -220.74, 644.03), 0);
  });

  return panorama;
}

// Create panoramas
var halamanTiang = createPanorama('assets/images/halaman/Tiang.jpg');
var halamanDepan = createPanorama('assets/images/halaman/Depan2.jpg');
var halamanKiri = createPanorama('assets/images/halaman/Kiri.jpg');
var halamanKiriAtas = createPanorama('assets/images/halaman/Kiri-atas.jpg');
var halamanKiriAtas2 = createPanorama('assets/images/halaman/Kiri-atas2.jpg');
var halamanKanan = createPanorama('assets/images/halaman/Kanan.jpg');
var halamanKananAtas = createPanorama('assets/images/halaman/Kanan-atas.jpg');
var halamanPenghubung = createPanorama('assets/images/halaman/Penghubung.jpg');
var halamanMPK = createPanorama('assets/images/halaman/MPK.jpg');
var jalanULT = createPanorama('assets/images/ult/Luar.jpg');
var halamanULT = createPanorama('assets/images/ult/Pintu.jpg');
var depanULT = createPanorama('assets/images/ult/Depan.jpg');
var tengahULT = createPanorama('assets/images/ult/Tengah.jpg');
var kiriULT = createPanorama('assets/images/ult/Kiri.jpg');
var kananULT = createPanorama('assets/images/ult/Kanan.jpg');
var belakangULT = createPanorama('assets/images/ult/Belakang.jpg');

var gdLobby = createPanorama('assets/images/gedung_depan/lt_1/Lobby.jpg');
var gdLobby2 = createPanorama('assets/images/gedung_depan/lt_1/Lobby2.jpg');
var gdLobbyKiri = createPanorama('assets/images/gedung_depan/lt_1/Lobby-kiri.jpg');
var gdLobbyKanan = createPanorama('assets/images/gedung_depan/lt_1/Lobby-kanan.jpg');
var gd1Kiri = createPanorama('assets/images/gedung_depan/lt_1/Kiri.jpg');
var gd1Kiri2 = createPanorama('assets/images/gedung_depan/lt_1/Kiri2.jpg');
var gd1Kanan = createPanorama('assets/images/gedung_depan/lt_1/Kanan.jpg');
var gd1Kanan2 = createPanorama('assets/images/gedung_depan/lt_1/Kanan2.jpg');
var gd1Kanan3 = createPanorama('assets/images/gedung_depan/lt_1/Kanan3.jpg');
var gd1Akademik = createPanorama('assets/images/gedung_depan/lt_1/Akademik-dan-evaluasi.jpg');
var gd1Registrasi = createPanorama('assets/images/gedung_depan/lt_1/Registrasi-dan-statistik.jpg');
var gd1SaranaP = createPanorama('assets/images/gedung_depan/lt_1/Sarana-pendidikan.jpg');

var gd2Tangga = createPanorama('assets/images/gedung_depan/lt_2/Tangga.jpg');
var gd2Kanan = createPanorama('assets/images/gedung_depan/lt_2/Kanan.jpg');
var gd2Kanan2 = createPanorama('assets/images/gedung_depan/lt_2/Kanan2.jpg');
var gd2Kanan3 = createPanorama('assets/images/gedung_depan/lt_2/Kanan3.jpg');
var gd2Kanan4 = createPanorama('assets/images/gedung_depan/lt_2/Kanan4.jpg');
var gd2Kiri = createPanorama('assets/images/gedung_depan/lt_2/Kiri.jpg');
var gd2Kiri2 = createPanorama('assets/images/gedung_depan/lt_2/Kiri2.jpg');
var gd2Kiri3 = createPanorama('assets/images/gedung_depan/lt_2/Kiri3.jpg');
var gd2Kiri4 = createPanorama('assets/images/gedung_depan/lt_2/Kiri4.jpg');
var gd2Kiri5 = createPanorama('assets/images/gedung_depan/lt_2/Kiri5.jpg');
var gd2Keuangan = createPanorama('assets/images/gedung_depan/lt_2/Keuangan.jpg');
var gd2Koridor = createPanorama('assets/images/gedung_depan/lt_2/Koridor.jpg');

var gd3Tangga = createPanorama('assets/images/gedung_depan/lt_3/Tangga.jpg');
var gd3Kanan = createPanorama('assets/images/gedung_depan/lt_3/Kanan.jpg');
var gd3Kanan2 = createPanorama('assets/images/gedung_depan/lt_3/Kanan2.jpg');
var gd3Kanan3 = createPanorama('assets/images/gedung_depan/lt_3/Kanan3.jpg');
var gd3LKanan = createPanorama('assets/images/gedung_depan/lt_3/Lorong-kanan.jpg');
var gd3LKanan2 = createPanorama('assets/images/gedung_depan/lt_3/Lorong-kanan2.jpg');
var gd3LKanan3 = createPanorama('assets/images/gedung_depan/lt_3/Lorong-kanan3.jpg');
var gd3Kiri = createPanorama('assets/images/gedung_depan/lt_3/Kiri.jpg');
var gd3Kiri2 = createPanorama('assets/images/gedung_depan/lt_3/Kiri2.jpg');
var gd3Kiri3 = createPanorama('assets/images/gedung_depan/lt_3/Kiri3.jpg');
var gd3LKiri = createPanorama('assets/images/gedung_depan/lt_3/Lorong-kiri.jpg');
var gd3LKiri2 = createPanorama('assets/images/gedung_depan/lt_3/Lorong-kiri2.jpg');
var gd3Koridor = createPanorama('assets/images/gedung_depan/lt_3/Koridor.jpg');
var gd3Koridor2 = createPanorama('assets/images/gedung_depan/lt_3/Koridor2.jpg');

var gb1Lobby = createPanorama('assets/images/gedung_belakang/lt_1/Lobby.jpg');
var gb1Kanan = createPanorama('assets/images/gedung_belakang/lt_1/Kanan.jpg');
var gb1Kiri = createPanorama('assets/images/gedung_belakang/lt_1/Kiri.jpg');

var gb2Tangga = createPanorama('assets/images/gedung_belakang/lt_2/Tangga.jpg');
var gb2TanggaKanan = createPanorama('assets/images/gedung_belakang/lt_2/Tangga-kanan.jpg');
var gb2TanggaKiri = createPanorama('assets/images/gedung_belakang/lt_2/Tangga-kiri.jpg');
var gb2Lobby = createPanorama('assets/images/gedung_belakang/lt_2/Lobby.jpg');
var gb2Kanan = createPanorama('assets/images/gedung_belakang/lt_2/Kanan.jpg');
var gb2Kiri = createPanorama('assets/images/gedung_belakang/lt_2/Kiri.jpg');
var gb2TU = createPanorama('assets/images/gedung_belakang/lt_2/TU.jpg');
var gb2RT = createPanorama('assets/images/gedung_belakang/lt_2/RT.jpg');

var gb3Tangga = createPanorama('assets/images/gedung_belakang/lt_3/Tangga.jpg');
var gb3TanggaKanan = createPanorama('assets/images/gedung_belakang/lt_3/Tangga-kanan.jpg');
var gb3TanggaKiri = createPanorama('assets/images/gedung_belakang/lt_3/Tangga-kiri.jpg');
var gb3Lobby = createPanorama('assets/images/gedung_belakang/lt_3/Lobby.jpg');
var gb3Kiri = createPanorama('assets/images/gedung_belakang/lt_3/Kiri.jpg');
var gb3Kiri2 = createPanorama('assets/images/gedung_belakang/lt_3/Kiri2.jpg');

var gb4Tangga = createPanorama('assets/images/gedung_belakang/lt_4/Tangga.jpg');
var gb4Lobby = createPanorama('assets/images/gedung_belakang/lt_4/Lobby.jpg');

viewer.add(halamanKanan);


const panoramaTexts = new Map([
  [halamanTiang.uuid, { floor: 'Halaman Rektorat', location: 'Halaman Depan' }],
  [halamanDepan.uuid, { floor: 'Halaman Rektorat', location: 'Halaman Depan' }],
  [halamanKiri.uuid, { floor: 'Halaman Rektorat', location: 'Jalur Kendaraan Keluar' }],
  [halamanKiriAtas.uuid, { floor: 'Halaman Rektorat', location: 'Halaman Belakang' }],
  [halamanKiriAtas2.uuid, { floor: 'Halaman Rektorat', location: 'Halaman Belakang' }],
  [halamanKanan.uuid, { floor: 'Halaman Rektorat', location: 'Jalur Kendaraan Masuk' }],
  [halamanKananAtas.uuid, { floor: 'Halaman Rektorat', location: 'Halaman Belakang' }],
  [halamanPenghubung.uuid, { floor: 'Halaman Rektorat', location: 'Halaman Belakang' }],
  [halamanMPK.uuid, { floor: 'Halaman Rektorat', location: 'Parkiran MPK' }],
  [jalanULT.uuid, { floor: 'Halaman Rektorat', location: 'Parkiran MPK' }],
  [halamanULT.uuid, { floor: 'Unit Layanan Terpadu (ULT)', location: 'Halaman ULT' }],
  [depanULT.uuid, { floor: 'Unit Layanan Terpadu (ULT)', location: 'Ruang ULT' }],
  [kiriULT.uuid, { floor: 'Unit Layanan Terpadu (ULT)', location: 'Ruang ULT' }],
  [kananULT.uuid, { floor: 'Unit Layanan Terpadu (ULT)', location: 'Ruang ULT' }],
  [tengahULT.uuid, { floor: 'Unit Layanan Terpadu (ULT)', location: 'Ruang ULT' }],
  [belakangULT.uuid, { floor: 'Unit Layanan Terpadu (ULT)', location: 'Ruang ULT' }],

  [gdLobby.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gdLobby2.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gdLobbyKiri.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gdLobbyKanan.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gd1Kiri.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kiri' }],
  [gd1Kiri2.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kiri' }],
  [gd1Kanan.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kanan' }],
  [gd1Kanan2.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kanan' }],
  [gd1Kanan3.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kanan' }],
  [gd1Akademik.uuid, { floor: 'Gedung Depan Lt.1', location: 'Ruang Akademik dan Evaluasi' }],
  [gd1Registrasi.uuid, { floor: 'Gedung Depan Lt.1', location: 'Ruang Registrasi dan Statistik' }],
  [gd1SaranaP.uuid, { floor: 'Gedung Depan Lt.1', location: 'Ruang Sarana Pendidikan' }],

  [gd2Tangga.uuid, { floor: 'Gedung Depan Lt.2', location: 'Tangga' }],
  [gd2Kanan.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kanan' }],
  [gd2Kanan2.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kanan' }],
  [gd2Kanan3.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kanan' }],
  [gd2Kanan4.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kanan' }],
  [gd2Kiri.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kiri' }],
  [gd2Kiri2.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kiri' }],
  [gd2Kiri3.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kiri' }],
  [gd2Kiri4.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kiri' }],
  [gd2Kiri5.uuid, { floor: 'Gedung Depan Lt.2', location: 'Lorong Kiri' }],
  [gd2Keuangan.uuid, { floor: 'Gedung Depan Lt.2', location: 'Keuangan' }],
  [gd2Koridor.uuid, { floor: 'Koridor Penghubung Lt.2', location: 'Koridor Penghubung' }],

  [gd3Tangga.uuid, { floor: 'Gedung Depan Lt.3', location: 'Tangga' }],
  [gd3Kanan.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kanan2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kanan3.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3LKanan.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kanan' }],
  [gd3LKanan2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kanan' }],
  [gd3LKanan3.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kanan' }],
  [gd3Kiri.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kiri2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kiri3.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3LKiri.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kiri' }],
  [gd3LKiri2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kiri' }],
  [gd3Koridor.uuid, { floor: 'Gedung Depan Lt.3', location: 'Koridor' }],
  [gd3Koridor2.uuid, { floor: 'Koridor Penghubung Lt.3', location: 'Koridor Penghubung' }],

  [gb1Lobby.uuid, { floor: 'Gedung Belakang Lt.1', location: 'Lobby' }],
  [gb1Kiri.uuid, { floor: 'Gedung Belakang Lt.1', location: 'Kantin 1' }],
  [gb1Kanan.uuid, { floor: 'Gedung Belakang Lt.1', location: 'Kantin 2' }],

  [gb2Tangga.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Tangga' }],
  [gb2TanggaKanan.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Tangga Kanan' }],
  [gb2TanggaKiri.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Tangga Kiri' }],
  [gb2Lobby.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Lobby' }],
  [gb2Kanan.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Kanan' }],
  [gb2Kiri.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Lorong Kiri' }],
  [gb2TU.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Tata Usaha' }],
  [gb2RT.uuid, { floor: 'Gedung Belakang Lt.2', location: 'Rumah Tangga' }],

  [gb3Tangga.uuid, { floor: 'Gedung Belakang Lt.3', location: 'Tangga' }],
  [gb3TanggaKanan.uuid, { floor: 'Gedung Belakang Lt.3', location: 'Tangga Kanan' }],
  [gb3TanggaKiri.uuid, { floor: 'Gedung Belakang Lt.3', location: 'Tangga Kiri' }],
  [gb3Lobby.uuid, { floor: 'Gedung Belakang Lt.3', location: 'Lobby' }],
  [gb3Kiri.uuid, { floor: 'Gedung Belakang Lt.3', location: 'Lorong Kiri' }],
  [gb3Kiri2.uuid, { floor: 'Gedung Belakang Lt.3', location: 'Lorong Kiri' }],

  [gb4Tangga.uuid, { floor: 'Gedung Belakang Lt.4', location: 'Tangga' }],
  [gb4Lobby.uuid, { floor: 'Gedung Belakang Lt.4', location: 'Lobby' }],
]);

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

function splashOnProgressUpdate(event) {
  var percentage = event.progress.loaded / event.progress.total * 100;
  bar.style.width = percentage + "%";
  if (percentage >= 100) {
    const splashScreen = document.getElementById('splashContainer');
    const control = document.getElementById('control');
    const floormap = document.getElementById('floormapContainer');
    setTimeout(function () {
      splashScreen.classList.add('fade-out');

      setTimeout(() => {

        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
          // Hide the splash screen immediately on mobile devices
          splashScreen.style.display = 'none';
        }
        control.style.display = 'flex';
        control.classList.add('swift-up-animation');

        floormap.style.display = 'inline-flex';
        floormap.classList.add('swift-down-animation');

        compass.style.display = 'inline-flex';
        compass.classList.add('swift-down-animation');

        bar.classList.add('hide');
      }, 600);
    }, 2000); // 
  }
}

document.addEventListener('DOMContentLoaded', function () {
  const splashScreen = document.getElementById('splashContainer');

  splashScreen.style.display = 'flex';
});

halamanKanan.addEventListener('progress', splashOnProgressUpdate);
// window.addEventListener('load', function () {

// });

function onButtonClick(targetPanorama, redDotTopCoord, redDotLeftCoord) {
  targetPanorama.addEventListener('progress', onProgressUpdate);
  viewer.setPanorama(targetPanorama);
  const locationText = document.getElementById('roomText');
  const floorText = document.getElementById('floorText');
  const panoramaData = panoramaTexts.get(targetPanorama.uuid);
  if (panoramaData) {
    viewer.add(targetPanorama);
    const { floor, location } = panoramaData;
    floorText.textContent = floor;
    locationText.textContent = location;

    const floorImage = document.getElementById("floorImage");
    if (floorText.textContent === 'Gedung Depan Lt.1') {
      floorImage.src = "assets/images/floormap/gedung_depan_lt1.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Gedung Depan Lt.2") {
      floorImage.src = "assets/images/floormap/gedung_depan_lt2.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Gedung Depan Lt.3") {
      floorImage.src = "assets/images/floormap/gedung_depan_lt3.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Gedung Belakang Lt.1") {
      floorImage.src = "assets/images/floormap/gedung_belakang_lt1.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Gedung Belakang Lt.2") {
      floorImage.src = "assets/images/floormap/gedung_belakang_lt2.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Gedung Belakang Lt.3") {
      floorImage.src = "assets/images/floormap/gedung_belakang_lt3.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Gedung Belakang Lt.4") {
      floorImage.src = "assets/images/floormap/gedung_belakang_lt4.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Gedung Belakang Lt.1") {
      floorImage.src = "assets/images/floormap/penghubung_lt2.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Koridor Penghubung Lt.2") {
      floorImage.src = "assets/images/floormap/penghubung_lt2.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Koridor Penghubung Lt.3") {
      floorImage.src = "assets/images/floormap/penghubung_lt3.png";
      compass.style.display = "none";
    } else if (floorText.textContent === "Halaman Rektorat" || floorText.textContent !== "Halaman Rektorat") {
      floorImage.src = "assets/images/floormap/halaman.png";
      compass.style.display = "inline-flex";
    }

    const redDot = document.getElementById("redDot");

    redDot.style.top = redDotTopCoord + "px";
    redDot.style.left = redDotLeftCoord + "px";
    redDot.style.display = "block";

    bar.classList.remove('hide');
  }
}

function createInfospot(panorama, position, targetPanorama, coordinates, redDotTopCoord, redDotLeftCoord) {
  var textureLoader = new THREE.TextureLoader();
  textureLoader.load('assets/icons/infospot.png', function () {
    var infospot = new PANOLENS.Infospot(500, 'assets/icons/infospot.png');
    infospot.position.copy(position);
    infospot.addEventListener('click', function () {
      onButtonClick(targetPanorama, redDotTopCoord, redDotLeftCoord);
      selectButtons.forEach(button => {
        button.classList.remove('selected');
      });
      viewer.clearAllCache();
      targetPanorama.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(coordinates, 0);
      });
    });
    panorama.add(infospot);
  });
}

function createInfoPlace(panorama, position, descId = null, assetLocation = 'assets/icons/info-ruangan.png') {
  var textureLoader = new THREE.TextureLoader();
  textureLoader.load(assetLocation, function () {
    var infoPlace = new PANOLENS.Infospot(300, assetLocation);
    infoPlace.position.copy(position);

    if (descId) {
      infoPlace.addHoverElement(document.getElementById(descId), 200);
    }

    panorama.add(infoPlace);
  });
}


createInfospot(halamanTiang, new THREE.Vector3(-4986.21, -69.52, 211.10), halamanDepan, new THREE.Vector3(-4960.98, 237.15, -536.58), 61, 101);

createInfospot(halamanDepan, new THREE.Vector3(-447.66, -422.90, 4957.50), halamanKanan, new THREE.Vector3(-1990.98, 342.98, 4569.70), 61, 147);
createInfospot(halamanDepan, new THREE.Vector3(4885.27, -843.06, 603.77), halamanTiang, new THREE.Vector3(4977.40, 304.08, 203.23), 74, 101);
createInfospot(halamanDepan, new THREE.Vector3(-4956.69, -366.28, -531.28), gdLobby, new THREE.Vector3(4977.40, 304.08, 203.23), 81, 98);
createInfospot(halamanDepan, new THREE.Vector3(743.10, -454.38, -4914.68), halamanKiri, new THREE.Vector3(705.35, 57.83, -4941.37), 61, 58);

createInfospot(halamanKanan, new THREE.Vector3(-1286.88, -601.83, -4782.89), halamanDepan, new THREE.Vector3(705.35, 57.83, -4941.37), 61, 101);
createInfospot(halamanKanan, new THREE.Vector3(-4977.46, -287.91, -214.31), halamanKananAtas, new THREE.Vector3(-4965.49, 107.20, -540.68), 28, 147);

createInfospot(halamanKananAtas, new THREE.Vector3(4935.11, -585.04, 508.73), halamanKanan, new THREE.Vector3(4965.71, 203.93, 501.47), 61, 147);
createInfospot(halamanKananAtas, new THREE.Vector3(286.19, -399.25, -4968.77), halamanPenghubung, new THREE.Vector3(79.40, 263.53, -4985.48), 28, 101);

createInfospot(halamanPenghubung, new THREE.Vector3(-211.86, -490.22, 4961.89), halamanKananAtas, new THREE.Vector3(-405.42, 28.87, 4977.62), 28, 147);
createInfospot(halamanPenghubung, new THREE.Vector3(65.84, -349.80, -4982.81), halamanKiriAtas2, new THREE.Vector3(-241.62, 245.92, 4977.68), 28, 83);
createInfospot(halamanPenghubung, new THREE.Vector3(4730.04, -813.56, -1377.70), gdLobby2, new THREE.Vector3(-4980.10, 158.98, -260.53), 28, 100);
createInfospot(halamanPenghubung, new THREE.Vector3(-4971.56, -227.91, -371.81), gb1Lobby, new THREE.Vector3(4914.81, -241.64, -826.97), 50, 100);

createInfospot(halamanKiriAtas2, new THREE.Vector3(-254.71, -482.44, 4960.57), halamanKiriAtas, new THREE.Vector3(-4905.65, 514.73, 754.50), 28, 58);
createInfospot(halamanKiriAtas2, new THREE.Vector3(563.21, -426.51, -4946.51), halamanPenghubung, new THREE.Vector3(-74.25, 38.93, 4994.58), 28, 101);

createInfospot(halamanKiriAtas, new THREE.Vector3(-659.88, -269.95, -4940.15), halamanKiri, new THREE.Vector3(4975.90, 111.93, 375.85), 61, 58);
createInfospot(halamanKiriAtas, new THREE.Vector3(4953.84, -639.68, 27.93), halamanKiriAtas2, new THREE.Vector3(452.74, 142.12, -4970.69), 28, 83);

createInfospot(halamanKiri, new THREE.Vector3(-689.16, -444.59, 4924.39), halamanDepan, new THREE.Vector3(-447.66, -422.90, 4957.50), 61, 101);
createInfospot(halamanKiri, new THREE.Vector3(-4976.04, -420.76, -98.72), halamanKiriAtas, new THREE.Vector3(370.93, 320.95, 4967.95), 28, 58);
createInfospot(halamanKiri, new THREE.Vector3(4870.96, -513.93, -974.17), halamanMPK, new THREE.Vector3(4993.73, 14.87, -108.50), 73, 31);
createInfospot(halamanKiri, new THREE.Vector3(2379.90, -401.49, -4372.82), jalanULT, new THREE.Vector3(4969.59, 79.10, 521.03), 50, 43);

createInfospot(halamanMPK, new THREE.Vector3(-4883.64, -374.01, -990.58), halamanKiri, new THREE.Vector3(-447.66, -422.90, 4957.50), 61, 58);

createInfospot(jalanULT, new THREE.Vector3(-4964.23, -442.53, -275.02), halamanKiri, new THREE.Vector3(-447.66, -422.90, 4957.50), 61, 58);
createInfospot(jalanULT, new THREE.Vector3(4970.90, -27.06, 526.65), halamanULT, new THREE.Vector3(-4952.39, 30.32, -642.69), 50, 37);

createInfospot(halamanULT, new THREE.Vector3(4889.92, -955.03, -269.70), jalanULT, new THREE.Vector3(-4982.19, -61.90, -293.34), 50, 43);
createInfospot(halamanULT, new THREE.Vector3(-4939.15, -348.46, -646.50), depanULT, new THREE.Vector3(-4947.47, 82.96, 660.54), 45, 23);

createInfospot(depanULT, new THREE.Vector3(4797.32, -853.39, -1096.03), halamanULT, new THREE.Vector3(4970.00, -266.30, -372.76), 50, 37);
createInfospot(depanULT, new THREE.Vector3(-1395.88, -2263.40, -4232.85), kiriULT, new THREE.Vector3(-4895.16, -4.26, -1010.56), 45, 23);
createInfospot(depanULT, new THREE.Vector3(-1885.81, -2532.41, 3867.54), kananULT, new THREE.Vector3(-4979.78, -26.11, -366.16), 45, 23);

createInfospot(kananULT, new THREE.Vector3(4633.46, -1809.20, -465.27), depanULT, new THREE.Vector3(4870.69, -138.61, -1093.36), 45, 23);
createInfospot(kananULT, new THREE.Vector3(-257.70, -2225.31, -4462.11), tengahULT, new THREE.Vector3(-447.66, -422.90, 4957.50), 45, 23);
createInfospot(kananULT, new THREE.Vector3(-4493.71, -1619.46, -1468.11), belakangULT, new THREE.Vector3(-4952.52, 241.21, 589.00), 45, 23);

createInfospot(tengahULT, new THREE.Vector3(-386.80, -1636.64, 4701.24), kiriULT, new THREE.Vector3(-447.66, -422.90, 4957.50), 45, 23);
createInfospot(tengahULT, new THREE.Vector3(-821.41, -1705.11, -4618.17), kananULT, new THREE.Vector3(-447.66, -422.90, 4957.50), 45, 23);

createInfospot(kiriULT, new THREE.Vector3(4438.23, -1441.72, 1770.34), depanULT, new THREE.Vector3(4870.69, -138.61, -1093.36), 45, 23);
createInfospot(kiriULT, new THREE.Vector3(-1099.60, -1969.90, 4454.24), tengahULT, new THREE.Vector3(-447.66, -422.90, 4957.50), 45, 23);
createInfospot(kiriULT, new THREE.Vector3(-4659.89, -1493.08, 1013.46), belakangULT, new THREE.Vector3(-4952.52, 241.21, 589.00), 45, 23);

createInfospot(belakangULT, new THREE.Vector3(2834.89, -1278.00, -3910.95), kiriULT, new THREE.Vector3(-447.66, -422.90, 4957.50), 45, 23);
createInfospot(belakangULT, new THREE.Vector3(4257.88, -993.31, 2414.01), kananULT, new THREE.Vector3(-447.66, -422.90, 4957.50), 45, 23);

createInfospot(gdLobby, new THREE.Vector3(-4925.31, -844.62, -13.58), halamanDepan, new THREE.Vector3(4977.40, 304.08, 203.23), 61, 101);
createInfospot(gdLobby, new THREE.Vector3(3661.43, -944.47, 3263.79), gdLobbyKiri, new THREE.Vector3(2697.65, -600.05, -4154.14), 49, 78);
createInfospot(gdLobby, new THREE.Vector3(1122.77, -1022.19, -4755.44), gdLobbyKanan, new THREE.Vector3(-1897.02, 239.75, -4610.11), 49, 121);
createInfospot(gdLobby, new THREE.Vector3(2468.64, -1477.17, -4081.91), gd2Tangga, new THREE.Vector3(-4952.06, -334.60, -568.49), 29, 99);

createInfospot(gdLobby2, new THREE.Vector3(4926.39, -724.57, 360.08), halamanPenghubung, new THREE.Vector3(-4976.35, 261.76, 254.96), 28, 101);
createInfospot(gdLobby2, new THREE.Vector3(-2628.56, -1186.21, -4075.77), gdLobbyKanan, new THREE.Vector3(-4179.59, -231.09, 2715.15), 49, 121);
createInfospot(gdLobby2, new THREE.Vector3(-3487.27, -1148.65, 3384.22), gdLobbyKiri, new THREE.Vector3(4822.92, -687.55, 1098.35), 49, 78);

createInfospot(gdLobbyKanan, new THREE.Vector3(33.79, -1157.67, 4861.98), gdLobby, new THREE.Vector3(-3022.15, -116.00, 3971.83), 81, 98);
createInfospot(gdLobbyKanan, new THREE.Vector3(3972.99, -1276.52, -2740.12), gdLobby2, new THREE.Vector3(3141.98, -417.46, 3857.02), 28, 100);
createInfospot(gdLobbyKanan, new THREE.Vector3(-4834.95, -1213.91, -261.96), gd1Kanan, new THREE.Vector3(-8.11, -52.24, 4997.52), 49, 140);

createInfospot(gd1Kanan, new THREE.Vector3(-51.65, -1501.55, -4764.85), gdLobbyKanan, new THREE.Vector3(4977.40, 304.08, 203.23), 49, 121);
createInfospot(gd1Kanan, new THREE.Vector3(-28.33, -867.48, 4919.99), gd1Kanan2, new THREE.Vector3(320.81, -15.37, -4982.58), 49, 156);

createInfospot(gd1Kanan2, new THREE.Vector3(-249.94, -1064.49, 4869.19), gd1Kanan, new THREE.Vector3(88.78, -177.77, -4988.36), 49, 140);
createInfospot(gd1Kanan2, new THREE.Vector3(306.56, -1020.12, -4875.05), gd1Kanan3, new THREE.Vector3(-891.50, -14.63, -4913.61), 49, 170);

createInfospot(gd1Kanan3, new THREE.Vector3(931.49, -859.96, 4829.97), gd1Kanan2, new THREE.Vector3(-218.33, -116.53, 4983.98), 49, 156);

createInfospot(gdLobbyKiri, new THREE.Vector3(-380.45, -865.16, 4902.00), gdLobby, new THREE.Vector3(-3610.17, -133.54, -3443.80), 81, 98);
createInfospot(gdLobbyKiri, new THREE.Vector3(-4008.05, -1296.55, -2564.74), gdLobby2, new THREE.Vector3(3218.45, -492.27, -3783.72), 28, 100);
createInfospot(gdLobbyKiri, new THREE.Vector3(4449.00, -1173.44, -1953.12), gd1Kiri, new THREE.Vector3(-3893.72, -836.30, -3011.08), 49, 58);

createInfospot(gd1Kiri, new THREE.Vector3(-3868.78, -993.15, -2992.36), gd1Kiri2, new THREE.Vector3(-4980.33, -419.91, -18.90), 49, 38);
createInfospot(gd1Kiri, new THREE.Vector3(3852.92, -1500.50, 2807.86), gdLobbyKiri, new THREE.Vector3(-4540.36, -292.63, 2062.10), 49, 78);

createInfospot(gd1Kiri2, new THREE.Vector3(4857.03, -1169.06, -82.12), gd1Kiri, new THREE.Vector3(4001.28, -190.52, 2981.15), 49, 58);
createInfospot(gd1Kiri2, new THREE.Vector3(604.75, -1068.67, 4839.75), gd1Registrasi, new THREE.Vector3(-4565.28, -347.48, 2002.01), 28, 38);

createInfospot(gd1Registrasi, new THREE.Vector3(604.75, -1068.67, 4839.75), gd1Kiri2, new THREE.Vector3(371.00, -391.78, -4965.16), 49, 38);

createInfospot(gd2Tangga, new THREE.Vector3(4627.02, -1329.76, -1313.84), gdLobby, new THREE.Vector3(4597.21, -1408.92, -1338.99), 81, 98);
createInfospot(gd2Tangga, new THREE.Vector3(2325.22, -1073.04, 4285.35), gd2Kanan, new THREE.Vector3(4977.40, 304.08, 203.23), 52, 127);
createInfospot(gd2Tangga, new THREE.Vector3(3558.40, -1178.10, -3303.54), gd2Kiri, new THREE.Vector3(-4151.22, -762.09, -2666.99), 52, 73);
createInfospot(gd2Tangga, new THREE.Vector3(3826.59, -1124.64, 3002.97), gd3Tangga, new THREE.Vector3(498.63, -11.73, 4973.41), 76, 90);
createInfospot(gd2Tangga, new THREE.Vector3(-4837.94, -1131.24, -536.67), gd2Koridor, new THREE.Vector3(609.10, -19.14, 4958.16), 50, 100);

createInfospot(gd2Kiri, new THREE.Vector3(-483.48, -1565.97, 4722.24), gd2Tangga, new THREE.Vector3(-4959.03, -224.82, -551.99), 29, 99);
createInfospot(gd2Kiri, new THREE.Vector3(-4758.40, -1490.48, -234.36), gd2Kiri2, new THREE.Vector3(486.93, -492.05, -4947.26), 52, 59);

createInfospot(gd2Kiri2, new THREE.Vector3(-483.48, -1565.97, 4722.24), gd2Kiri, new THREE.Vector3(4977.40, 304.08, 203.23), 52, 73);
createInfospot(gd2Kiri2, new THREE.Vector3(459.22, -1191.43, -4830.96), gd2Kiri3, new THREE.Vector3(-44.28, -473.02, -4972.71), 52, 45);

createInfospot(gd2Kiri3, new THREE.Vector3(-74.78, -1574.07, 4740.67), gd2Kiri2, new THREE.Vector3(-391.08, -411.29, 4961.84), 52, 59);
createInfospot(gd2Kiri3, new THREE.Vector3(-105.88, -1257.37, -4830.88), gd2Kiri4, new THREE.Vector3(-694.04, -129.14, -4940.33), 52, 24);
createInfospot(gd2Kiri3, new THREE.Vector3(-2348.41, -636.07, -4357.75), gd2Keuangan, new THREE.Vector3(4977.40, 304.08, 203.23), 74, 168);

createInfospot(gd2Keuangan, new THREE.Vector3(1607.78, -2941.09, -3707.94), gd2Kiri3, new THREE.Vector3(3195.60, -512.70, 3799.11), 52, 45);

createInfospot(gd2Kiri4, new THREE.Vector3(394.23, -1475.99, 4754.11), gd2Kiri3, new THREE.Vector3(26.91, -229.18, 4989.59), 52, 45);
createInfospot(gd2Kiri4, new THREE.Vector3(-732.22, -1819.85, -4589.50), gd2Kiri5, new THREE.Vector3(104.92, -290.58, -4983.08), 52, 17);

createInfospot(gd2Kiri5, new THREE.Vector3(271.29, -1527.68, 4745.97), gd2Kiri4, new THREE.Vector3(481.98, -229.87, 4965.71), 52, 24);

createInfospot(gd2Kanan, new THREE.Vector3(-746.82, -1336.54, 4749.14), gd2Tangga, new THREE.Vector3(-4965.94, 18.55, -560.11), 29, 99);
createInfospot(gd2Kanan, new THREE.Vector3(4767.42, -1348.32, 610.20), gd2Kanan2, new THREE.Vector3(-4980.88, -68.20, -313.71), 52, 142);

createInfospot(gd2Kanan2, new THREE.Vector3(4777.66, -1401.85, 343.71), gd2Kanan, new THREE.Vector3(-4970.86, -163.47, -433.53), 52, 127);
createInfospot(gd2Kanan2, new THREE.Vector3(-4851.10, -1142.85, -297.66), gd2Kanan3, new THREE.Vector3(-2823.44, -319.27, 4105.14), 52, 168);

createInfospot(gd2Kanan3, new THREE.Vector3(2932.12, -1146.89, -3878.27), gd2Kanan2, new THREE.Vector3(4977.40, 304.08, 203.23), 52, 142);
createInfospot(gd2Kanan3, new THREE.Vector3(-2595.92, -1574.04, 3963.73), gd2Kanan4, new THREE.Vector3(-139.43, -291.52, -4981.24), 52, 182);

createInfospot(gd2Kanan4, new THREE.Vector3(592.78, -1325.03, 4776.82), gd2Kanan3, new THREE.Vector3(3006.41, -223.37, -3979.16), 52, 168);


createInfospot(gd3Tangga, new THREE.Vector3(-782.49, -2593.74, -4197.11), gd2Tangga, new THREE.Vector3(-4955.87, -292.61, -554.97), 29, 99);
createInfospot(gd3Tangga, new THREE.Vector3(-4915.84, -821.02, 176.00), gd3Kanan, new THREE.Vector3(-4986.71, 79.17, -194.18), 76, 124);
createInfospot(gd3Tangga, new THREE.Vector3(4586.65, -1939.40, 396.31), gd3Kiri, new THREE.Vector3(-403.84, 114.20, 4974.35), 76, 74);

createInfospot(gd3Kiri, new THREE.Vector3(-300.33, -2026.52, -4551.52), gd3Tangga, new THREE.Vector3(-4990.63, -40.92, 148.11), 76, 90);
createInfospot(gd3Kiri, new THREE.Vector3(4754.07, -1542.46, 37.25), gd3Kiri2, new THREE.Vector3(100.40, 137.31, 4989.34), 53, 74);

createInfospot(gd3Kiri2, new THREE.Vector3(200.36, -1400.02, -4785.69), gd3Kiri, new THREE.Vector3(-4975.40, -57.19, 426.51), 76, 74);
createInfospot(gd3Kiri2, new THREE.Vector3(8.37, -1148.47, 4865.14), gd3Kiri3, new THREE.Vector3(241.88, 336.43, 4974.11), 37, 74);
createInfospot(gd3Kiri2, new THREE.Vector3(-4895.73, -994.43, 9.37), gd3LKiri, new THREE.Vector3(-254.71, -269.16, 4976.08), 53, 52);

createInfospot(gd3LKiri, new THREE.Vector3(486.46, -796.55, -4910.09), gd3Kiri2, new THREE.Vector3(4993.14, -73.55, 75.75), 53, 74);
createInfospot(gd3LKiri, new THREE.Vector3(-165.24, -1382.84, 4792.38), gd3LKiri2, new THREE.Vector3(412.48, -273.02, 4967.66), 53, 35);

createInfospot(gd3LKiri2, new THREE.Vector3(-323.41, -1123.77, -4853.54), gd3LKiri, new THREE.Vector3(471.02, -162.43, -4968.93), 53, 52);


createInfospot(gd3Kiri3, new THREE.Vector3(-1072.53, -1223.69, -4722.61), gd3Kiri2, new THREE.Vector3(191.25, -226.51, -4981.08), 53, 74);
createInfospot(gd3Kiri3, new THREE.Vector3(3959.23, -1097.96, 2843.08), gd3Koridor, new THREE.Vector3(4977.40, 304.08, 203.23), 17, 99);


createInfospot(gd3Kanan, new THREE.Vector3(4877.60, -1008.03, 303.63), gd3Tangga, new THREE.Vector3(4977.40, 304.08, 203.23), 76, 90);
createInfospot(gd3Kanan, new THREE.Vector3(121.63, -1380.44, -4795.34), gd3Kanan2, new THREE.Vector3(246.09, -96.97, 4983.29), 53, 124);

createInfospot(gd3Kanan2, new THREE.Vector3(-250.75, -1288.78, -4814.43), gd3Kanan, new THREE.Vector3(4488.20, 368.24, 4959.95), 76, 124);
createInfospot(gd3Kanan2, new THREE.Vector3(266.22, -1072.36, 4866.77), gd3Kanan3, new THREE.Vector3(4922.04, 269.58, -774.28), 37, 124);
createInfospot(gd3Kanan2, new THREE.Vector3(4789.00, -1388.48, -199.44), gd3LKanan, new THREE.Vector3(451.04, -108.19, -4972.11), 53, 137);

createInfospot(gd3LKanan, new THREE.Vector3(445.40, -1096.78, -4852.52), gd3LKanan2, new THREE.Vector3(360.56, -154.03, -4975.05), 53, 150);
createInfospot(gd3LKanan, new THREE.Vector3(-192.94, -1253.53, 4827.40), gd3Kanan2, new THREE.Vector3(-4991.75, 46.61, 122.49), 53, 124);

createInfospot(gd3LKanan2, new THREE.Vector3(338.78, -1441.53, -4766.73), gd3LKanan3, new THREE.Vector3(26.18, 75.54, 4995.66), 53, 168);
createInfospot(gd3LKanan2, new THREE.Vector3(-195.31, -976.84, 4889.48), gd3LKanan, new THREE.Vector3(-155.42, -152.54, 4985.86), 53, 137);

createInfospot(gd3LKanan3, new THREE.Vector3(121.51, -1470.08, -4770.07), gd3LKanan2, new THREE.Vector3(-213.43, -214.72, 4980.38), 53, 150);


createInfospot(gd3Kanan3, new THREE.Vector3(-4886.82, -1009.21, -123.31), gd3Kanan2, new THREE.Vector3(-214.66, 65.44, -4986.18), 53, 124);
createInfospot(gd3Kanan3, new THREE.Vector3(2968.19, -1268.63, 3807.11), gd3Koridor, new THREE.Vector3(4977.40, 304.08, 203.23), 17, 99);

createInfospot(gd3Koridor, new THREE.Vector3(-2263.96, -1032.66, -4325.56), gd3Kanan3, new THREE.Vector3(86.01, 340.23, -4982.12), 37, 124);
createInfospot(gd3Koridor, new THREE.Vector3(-2577.84, -1232.90, 4093.02), gd3Kiri3, new THREE.Vector3(-4960.29, 225.38, 543.88), 37, 74);
createInfospot(gd3Koridor, new THREE.Vector3(4869.51, -1102.10, -100.93), gd3Koridor2, new THREE.Vector3(4211.10, -238.24, 2648.71), 80, 100);

createInfospot(gd3Koridor2, new THREE.Vector3(4206.26, -427.56, 2654.83), gb3Lobby, new THREE.Vector3(528.67, -164.14, -4965.13), 50, 100);
createInfospot(gd3Koridor2, new THREE.Vector3(-4199.08, -949.42, -2527.92), gd3Koridor, new THREE.Vector3(-4989.82, -25.31, -175.30), 17, 99);



createInfospot(gb1Lobby, new THREE.Vector3(-4971.56, -227.91, -371.81), halamanPenghubung, new THREE.Vector3(4940.86, 41.11, 712.81), 28, 101);
createInfospot(gb1Lobby, new THREE.Vector3(640.67, -1720.45, 4631.59), gb1Kiri, new THREE.Vector3(-2817.40, -183.49, -4115.42), 42, 74);
createInfospot(gb1Lobby, new THREE.Vector3(-824.54, -1702.28, -4618.73), gb1Kanan, new THREE.Vector3(4082.36, -260.97, -2862.72), 42, 124);

createInfospot(gb1Kiri, new THREE.Vector3(3292.55, -2045.92, -3145.04), gb1Lobby, new THREE.Vector3(-3677.92, 70.20, -3379.56), 50, 100);
createInfospot(gb1Kiri, new THREE.Vector3(-1584.94, -2054.51, 4263.28), gb2Tangga, new THREE.Vector3(4992.14, -182.87, -12.78), 33, 98);

createInfospot(gb1Kanan, new THREE.Vector3(-2352.69, -1859.25, -3996.39), gb1Lobby, new THREE.Vector3(-3156.16, -76.14, 3865.33), 50, 100);
createInfospot(gb1Kanan, new THREE.Vector3(1285.87, -1980.71, 4399.18), gb2Tangga, new THREE.Vector3(4992.14, -182.87, -12.78), 33, 98);

createInfospot(gb2Tangga, new THREE.Vector3(4877.68, -1086.24, 5.24), gb2Lobby, new THREE.Vector3(309.22, -174.21, -4976.95), 45, 100);
createInfospot(gb2Tangga, new THREE.Vector3(-3715.77, -1872.58, -2765.55), gb1Kiri, new THREE.Vector3(444.66, -136.94, -4971.32), 42, 74);
createInfospot(gb2Tangga, new THREE.Vector3(-3408.36, -1740.71, 3205.49), gb1Kanan, new THREE.Vector3(4992.14, -182.87, -12.78), 42, 124);

createInfospot(gb2Lobby, new THREE.Vector3(-209.95, -1007.56, 4882.61), gb2Tangga, new THREE.Vector3(79.40, 263.53, -4985.48), 33, 98);
createInfospot(gb2Lobby, new THREE.Vector3(-4789.64, -1372.60, -272.65), gb2TanggaKiri, new THREE.Vector3(-343.74, -31.29, 4980.76), 45, 74);
createInfospot(gb2Lobby, new THREE.Vector3(4835.55, -1205.93, 293.50), gb2TanggaKanan, new THREE.Vector3(4992.14, -182.87, -12.78), 45, 124);
createInfospot(gb2Lobby, new THREE.Vector3(323.69, -911.31, -4895.79), gd2Koridor, new THREE.Vector3(-585.82, -100.17, -4958.62), 50, 100);

createInfospot(gd2Koridor, new THREE.Vector3(-552.57, -782.28, -4905.61), gd2Tangga, new THREE.Vector3(4890.32, -245.53, 980.63), 29, 99);
createInfospot(gd2Koridor, new THREE.Vector3(584.83, -665.04, 4914.54), gb2Lobby, new THREE.Vector3(-207.43, 77.13, 4986.10), 45, 100);


createInfospot(gb2TanggaKiri, new THREE.Vector3(4572.83, -1288.11, 1540.42), gb3Tangga, new THREE.Vector3(-4992.54, -14.53, -131.36), 33, 98);
createInfospot(gb2TanggaKiri, new THREE.Vector3(-363.33, -1110.97, 4854.00), gb2Kiri, new THREE.Vector3(421.84, -150.13, -4971.99), 45, 48);
createInfospot(gb2TanggaKiri, new THREE.Vector3(230.43, -1439.06, -4773.11), gb2Lobby, new THREE.Vector3(4982.24, -187.19, 198.63), 45, 100);

createInfospot(gb2TanggaKanan, new THREE.Vector3(1287.52, -1190.96, 4674.55), gb3Tangga, new THREE.Vector3(-4992.54, -14.53, -131.36), 33, 98);
createInfospot(gb2TanggaKanan, new THREE.Vector3(4858.37, -1139.51, 171.54), gb2Kanan, new THREE.Vector3(4992.14, -182.87, -12.78), 45, 135);
createInfospot(gb2TanggaKanan, new THREE.Vector3(-4799.36, -1363.71, -135.07), gb2Lobby, new THREE.Vector3(-4985.05, -38.56, -256.39), 45, 100);

createInfospot(gb2Kiri, new THREE.Vector3(-447.73, -627.58, 4933.27), gb2TanggaKiri, new THREE.Vector3(288.16, -97.89, -4981.05), 45, 74);
createInfospot(gb2Kiri, new THREE.Vector3(-1994.90, -428.06, 4561.60), gb2RT, new THREE.Vector3(4992.14, -182.87, -12.78), 23, 35);

createInfospot(gb2RT, new THREE.Vector3(-863.19, -1255.06, -4753.95), gb2TanggaKiri, new THREE.Vector3(-4125.70, -274.93, -2794.99), 45, 74);

createInfospot(gb2TU, new THREE.Vector3(3364.12, -1604.15, 3320.88), gb2Kanan, new THREE.Vector3(-4985.42, -218.05, 114.72), 45, 135);

createInfospot(gb2Kanan, new THREE.Vector3(-4757.19, -1515.85, 120.94), gb2TanggaKanan, new THREE.Vector3(-4990.98, 5.65, -167.82), 45, 124);
createInfospot(gb2Kanan, new THREE.Vector3(4966.16, -457.80, -203.76), gb2TU, new THREE.Vector3(-4689.31, -58.02, -1710.60), 70, 171);


createInfospot(gb3Tangga, new THREE.Vector3(-4901.32, -942.96, -98.02), gb3Lobby, new THREE.Vector3(-520.95, -28.25, 4971.59), 45, 100);
createInfospot(gb3Tangga, new THREE.Vector3(3706.43, -1940.26, -2733.54), gb2TanggaKanan, new THREE.Vector3(-3763.42, -228.35, -3272.51), 45, 124);
createInfospot(gb3Tangga, new THREE.Vector3(3440.39, -1934.18, 3066.52), gb2TanggaKiri, new THREE.Vector3(-1314.32, -143.90, -4811.27), 45, 74);

createInfospot(gb3Lobby, new THREE.Vector3(521.18, -925.47, -4881.78), gb3Tangga, new THREE.Vector3(-4989.99, 105.21, 112.19), 33, 98);
createInfospot(gb3Lobby, new THREE.Vector3(4832.90, -1135.98, 562.50), gb3TanggaKiri, new THREE.Vector3(-4984.87, 15.60, 277.05), 45, 77);
createInfospot(gb3Lobby, new THREE.Vector3(-4860.23, -1049.94, -476.00), gb3TanggaKanan, new THREE.Vector3(-4986.78, -60.72, 206.81), 45, 119);
createInfospot(gb3Lobby, new THREE.Vector3(-512.02, -1805.53, 4629.71), gd3Koridor2, new THREE.Vector3(-4276.93, -129.72, -2572.57), 80, 100);

createInfospot(gb3TanggaKanan, new THREE.Vector3(-2158.98, -1061.97, -4372.51), gb4Tangga, new THREE.Vector3(-4982.74, 87.54, 263.71), 33, 98);
createInfospot(gb3TanggaKanan, new THREE.Vector3(4638.17, -1849.45, -92.07), gb3Lobby, new THREE.Vector3(4992.14, -182.87, -12.78), 45, 100);

createInfospot(gb3TanggaKiri, new THREE.Vector3(4712.47, -1615.69, -319.90), gb3Lobby, new THREE.Vector3(-4973.15, 46.44, -477.45), 45, 100);
createInfospot(gb3TanggaKiri, new THREE.Vector3(-4878.02, -1027.85, 220.41), gb3Kiri, new THREE.Vector3(479.55, -72.70, -4972.01), 45, 58);
createInfospot(gb3TanggaKiri, new THREE.Vector3(-1619.00, -1053.22, 4603.39), gb4Tangga, new THREE.Vector3(-4982.74, 87.54, 263.71), 33, 98);

createInfospot(gb3Kiri, new THREE.Vector3(473.04, -1163.44, -4837.81), gb3Kiri2, new THREE.Vector3(-4984.87, 15.60, 277.05), 45, 36);
createInfospot(gb3Kiri, new THREE.Vector3(-455.21, -1172.19, 4836.59), gb3TanggaKiri, new THREE.Vector3(4992.14, -182.87, -12.78), 45, 77);

createInfospot(gb3Kiri2, new THREE.Vector3(4822.47, -1265.03, -225.09), gb3Kiri, new THREE.Vector3(-464.55, -266.11, 4965.20), 45, 58);

createInfospot(gb4Tangga, new THREE.Vector3(-4870.61, -1116.78, 24.23), gb4Lobby, new THREE.Vector3(-93.36, 91.54, 4991.51), 45, 100);
createInfospot(gb4Tangga, new THREE.Vector3(3377.61, -1935.28, -3132.01), gb3TanggaKanan, new THREE.Vector3(3568.09, -620.14, 3433.43), 45, 119);
createInfospot(gb4Tangga, new THREE.Vector3(3721.61, -1973.17, 2688.67), gb3TanggaKiri, new THREE.Vector3(3799.92, -479.03, -3200.93), 45, 77);

createInfospot(gb4Lobby, new THREE.Vector3(105.69, -918.88, -4905.71), gb4Tangga, new THREE.Vector3(4963.91, -461.86, -237.52), 33, 98);

createInfoPlace(halamanKanan, new THREE.Vector3(4944.62, -220.74, 644.03), null, 'assets/icons/Enter.png');
createInfoPlace(halamanKanan, new THREE.Vector3(1854.06, 51.58, 4634.51), 'desc-mushola');

createInfoPlace(halamanULT, new THREE.Vector3(181 - 3790.29, 198.97, 3241.17), 'desc-ult');
createInfoPlace(halamanKiri, new THREE.Vector3(4971.73, -173.27, 409.47), null, 'assets/icons/Exit.png');

createInfoPlace(gd1Kiri2, new THREE.Vector3(3851.59, -226.35, 3163.76), 'desc-registrasi-statistik');

createInfoPlace(gd2Kiri3, new THREE.Vector3(-3609.32, -695.46, -3379.61), 'desc-keuangan');

const buttonData = {
  'Lobby': {
    page: gdLobby,
    coordinates: new THREE.Vector3(4941.28, -189.36, 672.96),
    top: 81,
    left: 98,
  },
  'Kendaraan Masuk': {
    page: halamanKanan,
    coordinates: new THREE.Vector3(4941.28, -189.36, 672.96),
    top: 61,
    left: 147
  },
  'Kendaraan Keluar': {
    page: halamanKiri,
    coordinates: new THREE.Vector3(4976.53, -86.25, 383.24),
    top: 61,
    left: 58
  },
  'Parkiran': {
    page: halamanMPK,
    coordinates: new THREE.Vector3(2855.55, 166.30, 4091.45),
    top: 73,
    left: 31
  },
  'Unit Layanan Terpadu (ULT)': {
    page: halamanULT,
    coordinates: new THREE.Vector3(-4231.21, 138.32, 2642.35)
  },
  'Ruang Akademik dan Evaluasi': {
    page: gd1Kiri,
    coordinates: new THREE.Vector3(4465.35, -339.47, -2205.26),
    top: 49,
    left: 58
  },
  'Ruang Registrasi dan Statistik': {
    page: gd1Kiri2,
    coordinates: new THREE.Vector3(2924.08, 9.09, 4054.30),
    top: 49,
    left: 38
  },
  'Ruang Wakil Rektor 3': {
    page: gd1Kanan,
    coordinates: new THREE.Vector3(-4848.31, -46.54, 1190.84),
    top: 49,
    left: 140
  },
  'Ruang Rapat Lt.1': {
    page: gd1Kanan2,
    coordinates: new THREE.Vector3(-4544.91, 1202.52, 1680.42),
    top: 49,
    left: 156
  },
  'Sekretariat WR 3': {
    page: gd1Kanan2,
    coordinates: new THREE.Vector3(4850.64, 717.78, -948.42),
    top: 49,
    left: 156
  },
  'Ruang Kesejahteraan Mahasiswa': {
    page: gd1Kanan3,
    coordinates: new THREE.Vector3(4635.21, 21.91, 1855.48),
    top: 49,
    left: 170
  },
  'Lobby2': {
    page: gb1Lobby,
    coordinates: new THREE.Vector3(4922.85, -329.88, -754.08),
    top: 50,
    left: 100
  },
  'Kantin': {
    page: gb1Kanan,
    coordinates: new THREE.Vector3(3682.00, -281.03, -3363.78),
    top: 42,
    left: 124
  },
  'Rumah Tangga': {
    page: gb2Kiri,
    coordinates: new THREE.Vector3(-2233.03, -24.06, 4465.09),
    top: 45,
    left: 48
  },
  'Tata Usaha': {
    page: gb2Kanan,
    coordinates: new THREE.Vector3(4976.97, -270.50, -236.62),
    top: 45,
    left: 135
  },
  'Keuangan': {
    page: gd2Kiri3,
    coordinates: new THREE.Vector3(-2346.43, -639.67, -4358.28),
    top: 52,
    left: 45
  },
  'Sekretariat WR 2': {
    page: gd2Kanan,
    coordinates: new THREE.Vector3(672.59, -450.06, -4926.36),
    top: 52,
    left: 127
  },
  'Tenaga Kependidikan': {
    page: gd2Kanan2,
    coordinates: new THREE.Vector3(3039.34, -476.80, 3931.11),
    top: 52,
    left: 142
  },
  'Kepegawaian': {
    page: gd2Kanan2,
    coordinates: new THREE.Vector3(-2539.42, -349.04, -4288.20),
    top: 52,
    left: 142
  },
  'Akuntansi dan Pelaporan': {
    page: gd2Kanan3,
    coordinates: new THREE.Vector3(4051.46, -644.93, 2846.03),
    top: 52,
    left: 168
  },
  'Ruang Rektor': {
    page: gd3Tangga,
    coordinates: new THREE.Vector3(-3497.82, -285.13, 3547.73),
    top: 76,
    left: 90
  },
  'Sekretariat Rektor': {
    page: gd3Kiri,
    coordinates: new THREE.Vector3(-413.54, -48.25, 4976.43),
    top: 76,
    left: 74
  },
  'Ruang Humas': {
    page: gd3LKiri2,
    coordinates: new THREE.Vector3(-1685.00, -634.46, 4654.43),
    top: 53,
    left: 35
  },
  'Ruang Rapat Lt.3': {
    page: gd3LKiri2,
    coordinates: new THREE.Vector3(4539.05, -34.65, 2086.96),
    top: 53,
    left: 35
  },
  'Ruang Wakil Rektor 4': {
    page: gb3Kiri2,
    coordinates: new THREE.Vector3(-4988.97, -90.78, 142.34),
    top: 45,
    left: 58
  },
  'Ruang Serbaguna Lt.4': {
    page: gb4Lobby,
    coordinates: new THREE.Vector3(4850.92, -170.99, 1162.23),
    top: 50,
    left: 100
  },
};

const selectButtons = document.querySelectorAll('.select-button');

selectButtons.forEach((button) => {
  button.addEventListener('click', () => {

    const parentElement = button.parentNode;
    const floorText = parentElement.querySelector('p').textContent;

    const text = button.querySelector('p').textContent;
    const data = buttonData[text];
    console.log();
    if (floorText === 'Gedung belakang Lt.1' && text === 'Lobby') {
      onButtonClick(buttonData.Lobby2.page, buttonData.Lobby2.top, buttonData.Lobby2.left);
      buttonData.Lobby2.page.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(buttonData.Lobby2.coordinates, 1);
      });
    } else if (data) {
      const currentActivePage = viewer.panorama;

      if (data.page.uuid === currentActivePage.uuid) {
        viewer.tweenControlCenter(data.coordinates, 3000);
      } else {
        // If the page is different, call the onButtonClick function
        onButtonClick(data.page, data.top, data.left);
        data.page.addEventListener('enter-fade-start', function () {
          viewer.tweenControlCenter(data.coordinates, 1);
        });
      }
    }
  });
});

featureButton.addEventListener('click', function (e) {
  controlIndex = controlIndex >= 1 ? 0 : controlIndex + 1;
  switch (controlIndex) {
    case 0: viewer.enableControl(PANOLENS.CONTROLS.ORBIT); break;
    case 1: viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION); break;
    default: break;
  }
});

featureButton2.addEventListener('click', function (e) {
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

featureButton3.addEventListener('click', function (e) {
  if (!document.fullscreenElement) {
    container.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }
});

// Changing Scroll Wheel Behaviour
container.addEventListener('wheel', function (e) {
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

const locationDropdown = document.getElementById('locationDropdown');
const searchContainer = document.getElementById('searchContainer');
const search = document.getElementById('search');


locationDropdown.addEventListener('click', function () {
  searchContainer.classList.toggle('visible');
});

document.addEventListener('click', function (event) {
  if (!locationDropdown.contains(event.target) && !search.contains(event.target)) {
    if (searchContainer.classList.contains('visible')) {
      searchContainer.classList.remove('visible');
    }
  }
});

function updateLocation(element) {

  selectButtons.forEach(button => {
    button.classList.remove('selected');
  });

  element.classList.add('selected');
}

function updateFilter(element) {
  element.classList.toggle('selected');

  const selectedFilters = document.querySelectorAll('.select-filter.selected');

  // Show all buildings and floors if no filters are selected
  if (selectedFilters.length === 0) {
    const buildings = document.querySelectorAll('.building');
    buildings.forEach(building => {
      building.style.display = 'flex';
    });

    const floors = document.querySelectorAll('.floor');
    floors.forEach(floor => {
      floor.style.display = 'flex';
    });

    return;
  }

  // Show all floors
  const floors = document.querySelectorAll('.floor');
  floors.forEach(floor => {
    floor.style.display = 'none';
  });

  // Hide all buildings
  const buildings = document.querySelectorAll('.building');
  buildings.forEach(building => {
    building.style.display = 'none';
  });

  // Show buildings and floors based on selected filters
  selectedFilters.forEach(filter => {
    const selectedBuildingFilters = Array.from(document.querySelectorAll('.building-filter .select-filter.selected'));
    const selectedFloorFilters = Array.from(document.querySelectorAll('.floor-filter .select-filter.selected'));

    const buildings = document.querySelectorAll('.building');
    buildings.forEach(building => {
      const isBuildingSelected = selectedBuildingFilters.length === 0 || selectedBuildingFilters.some(filter => building.classList.contains(filter.textContent.trim().toLowerCase()));
      building.style.display = isBuildingSelected ? 'flex' : 'none';

      const floors = building.querySelectorAll('.floor');
      floors.forEach(floor => {
        const isFloorSelected = selectedFloorFilters.length === 0 || selectedFloorFilters.some(filter => floor.classList.contains(filter.textContent.trim().toLowerCase()));
        const shouldShowFloor = isBuildingSelected && isFloorSelected;
        floor.style.display = shouldShowFloor ? 'flex' : 'none';
      });
    });
  });

}


function toggleFilterSection(element) {
  var filterSection = document.getElementById('filterSection');
  filterSection.classList.toggle('hidden');

  element.classList.toggle('selected');

  const imgElement = element.querySelector('img');
  const isActiveIcon = imgElement.src.includes('-white');

  imgElement.src = isActiveIcon ? imgElement.src.replace('-white.svg', '.svg')
    : imgElement.src.replace('.svg', '-white.svg');
}

function toggleFeatureSection(element) {
  element.classList.toggle('selected-feature');

  const imgElement = element.querySelector('img');
  const isActiveIcon = imgElement.src.includes('-white');

  imgElement.src = isActiveIcon ? imgElement.src.replace('-white.svg', '.svg')
    : imgElement.src.replace('.svg', '-white.svg');

  Event.preventDefault();
}

// Get references to the image and red dot elements
// const floorImage = document.getElementById("floorImage");
// const redDot = document.getElementById("redDot");

// // Add a click event listener to the image
// floorImage.addEventListener("click", function (event) {
//   // Calculate the top and left coordinates relative to the image
//   const rect = floorImage.getBoundingClientRect();
//   const top = event.clientY - rect.top;
//   const left = event.clientX - rect.left;

//   // Set the red dot's position and display it
//   redDot.style.top = top + "px";
//   redDot.style.left = left + "px";
//   redDot.style.display = "block";

//   // Show the coordinates as text (you can customize this part)
//   console.log(`Top: ${top}px, Left: ${left}px`);
// });

