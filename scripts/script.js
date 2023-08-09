var container, selectLocation, infospot, infospot12, infospot2;

var controlIndex = PANOLENS.CONTROLS.ORBIT;
var isAutoRotate = false;

var infospotIcon;

bar = document.querySelector('#bar');

container = document.querySelector('#container');

function clearCache() {
  // Clear any variables or data that need to be reset
 
  localStorage.clear(); // This will clear all data stored in localStorage
  sessionStorage.clear(); // This will clear all data stored in sessionStorage

  // Reload the page after clearing the cache
  window.location.reload(true);
}

// Execute the clearCache function when the page is being unloaded (refreshed)
window.onbeforeunload = clearCache;

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
    viewer.tweenControlCenter(new THREE.Vector3(4944.62, -220.74, 644.03), 1);
    
    panorama.addEventListener('progress', onProgressUpdate);
    bar.classList.add('hide');
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
var gd3Koridor2= createPanorama('assets/images/gedung_depan/lt_3/Koridor2.jpg');

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

  [gdLobby.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gdLobby2.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gdLobbyKiri.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gdLobbyKanan.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lobby' }],
  [gd1Kiri.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kiri' }],
  [gd1Kiri2.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kiri' }],
  [gd1Kanan.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kanan' }],
  [gd1Kanan2.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kanan' }],
  [gd1Kanan3.uuid, { floor: 'Gedung Depan Lt.1', location: 'Lorong Kanan' }],
  [gd1Akademik.uuid, { floor: 'Gedung Depan Lt.1', location: 'Akademik dan Evaluasi' }],
  [gd1Registrasi.uuid, { floor: 'Gedung Depan Lt.1', location: 'Registrasi dan Statistik' }],
  [gd1SaranaP.uuid, { floor: 'Gedung Depan Lt.1', location: 'Sarana Pendidikan' }],

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
  [gd2Koridor.uuid, { floor: 'Gedung Depan Lt.2', location: 'Koridor' }],

  [gd3Tangga.uuid, { floor: 'Gedung Depan Lt.3', location: 'Tangga' }],
  [gd3Kanan.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kanan2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kanan3.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3LKanan.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kanan' }],
  [gd3LKanan2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kanan' }],
  [gd3LKanan2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kanan' }],
  [gd3Kiri.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kiri2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3Kiri3.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong' }],
  [gd3LKiri.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kiri' }],
  [gd3LKiri2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Lorong Kiri' }],
  [gd3Koridor.uuid, { floor: 'Gedung Depan Lt.3', location: 'Koridor' }],
  [gd3Koridor2.uuid, { floor: 'Gedung Depan Lt.3', location: 'Koridor' }],

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

document.addEventListener('DOMContentLoaded', function () {
  const splashScreen = document.getElementById('splashContainer');

  splashScreen.style.display = 'flex';
});

window.addEventListener('load', function () {
  const splashScreen = document.getElementById('splashContainer');
  const control = document.getElementById('control');
  
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
    }, 600);
  }, 4000); // 
});

function onButtonClick(targetPanorama) {
  bar.classList.remove('hide');
  viewer.setPanorama(targetPanorama);

  const locationText = document.getElementById('roomText');
  const floorText = document.getElementById('floorText');
  const panoramaData = panoramaTexts.get(targetPanorama.uuid);
  if (panoramaData) {
    viewer.add(targetPanorama);
    const { floor, location } = panoramaData;
    floorText.textContent = floor;
    locationText.textContent = location;
  }
}

function createInfospot(panorama, position, targetPanorama, coordinates) {
  var textureLoader = new THREE.TextureLoader();
  textureLoader.load('assets/icons/infospot.png', function () {
    var infospot = new PANOLENS.Infospot(500, 'assets/icons/infospot.png');
    infospot.position.copy(position);
    infospot.addEventListener('click', function () {
      viewer.add(targetPanorama);
      onButtonClick(targetPanorama);
      viewer.clearAllCache();
      targetPanorama.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(coordinates, 1);
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


createInfospot(halamanTiang, new THREE.Vector3(-4986.21, -69.52, 211.10), halamanDepan, new THREE.Vector3(-4960.98, 237.15, -536.58));

createInfospot(halamanDepan, new THREE.Vector3(-447.66, -422.90, 4957.50), halamanKanan, new THREE.Vector3(-1990.98, 342.98, 4569.70));
createInfospot(halamanDepan, new THREE.Vector3(4885.27, -843.06, 603.77), halamanTiang, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(halamanDepan, new THREE.Vector3(-4956.69, -366.28, -531.28), gdLobby, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(halamanDepan, new THREE.Vector3(743.10, -454.38, -4914.68), halamanKiri, new THREE.Vector3(705.35, 57.83, -4941.37));

createInfospot(halamanKanan, new THREE.Vector3(-1286.88, -601.83, -4782.89), halamanDepan, new THREE.Vector3(705.35, 57.83, -4941.37));
createInfospot(halamanKanan, new THREE.Vector3(-4977.46, -287.91, -214.31), halamanKananAtas, new THREE.Vector3(-4965.49, 107.20, -540.68));

createInfospot(halamanKananAtas, new THREE.Vector3(4935.11, -585.04, 508.73), halamanKanan, new THREE.Vector3(4965.71, 203.93, 501.47));
createInfospot(halamanKananAtas, new THREE.Vector3(286.19, -399.25, -4968.77), halamanPenghubung, new THREE.Vector3(79.40, 263.53, -4985.48));

createInfospot(halamanPenghubung, new THREE.Vector3(-211.86, -490.22, 4961.89), halamanKananAtas, new THREE.Vector3(-405.42, 28.87, 4977.62));
createInfospot(halamanPenghubung, new THREE.Vector3(65.84, -349.80, -4982.81), halamanKiriAtas2, new THREE.Vector3(-241.62, 245.92, 4977.68));
createInfospot(halamanPenghubung, new THREE.Vector3(4730.04, -813.56, -1377.70), gdLobby2, new THREE.Vector3(-4980.10, 158.98, -260.53));
createInfospot(halamanPenghubung, new THREE.Vector3(-4971.56, -227.91, -371.81), gb1Lobby, new THREE.Vector3(4914.81, -241.64, -826.97));

createInfospot(halamanKiriAtas2, new THREE.Vector3(-254.71, -482.44, 4960.57), halamanKiriAtas, new THREE.Vector3(-4905.65, 514.73, 754.50));
createInfospot(halamanKiriAtas2, new THREE.Vector3(563.21, -426.51, -4946.51), halamanPenghubung, new THREE.Vector3(-74.25, 38.93, 4994.58));

createInfospot(halamanKiriAtas, new THREE.Vector3(-659.88, -269.95, -4940.15), halamanKiri, new THREE.Vector3(4975.90, 111.93, 375.85));
createInfospot(halamanKiriAtas, new THREE.Vector3(4953.84, -639.68, 27.93), halamanKiriAtas2, new THREE.Vector3(452.74, 142.12, -4970.69));

createInfospot(halamanKiri, new THREE.Vector3(-689.16, -444.59, 4924.39), halamanDepan, new THREE.Vector3(-447.66, -422.90, 4957.50));
createInfospot(halamanKiri, new THREE.Vector3(-4976.04, -420.76, -98.72), halamanKiriAtas, new THREE.Vector3(370.93, 320.95, 4967.95));
createInfospot(halamanKiri, new THREE.Vector3(4870.96, -513.93, -974.17), halamanMPK, new THREE.Vector3(4993.73, 14.87, -108.50));

createInfospot(halamanMPK, new THREE.Vector3(-4883.64, -374.01, -990.58), halamanKiri, new THREE.Vector3(-447.66, -422.90, 4957.50));

createInfospot(gdLobby, new THREE.Vector3(-4925.31, -844.62, -13.58), halamanDepan, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(gdLobby, new THREE.Vector3(3661.43, -944.47, 3263.79), gdLobbyKiri, new THREE.Vector3(2697.65, -600.05, -4154.14));
createInfospot(gdLobby, new THREE.Vector3(1122.77, -1022.19, -4755.44), gdLobbyKanan, new THREE.Vector3(-1897.02, 239.75, -4610.11));
createInfospot(gdLobby, new THREE.Vector3(2468.64, -1477.17, -4081.91), gd2Tangga, new THREE.Vector3(-4952.06, -334.60, -568.49));

createInfospot(gdLobby2, new THREE.Vector3(4926.39, -724.57, 360.08), halamanPenghubung, new THREE.Vector3(-4976.35, 261.76, 254.96));
createInfospot(gdLobby2, new THREE.Vector3(-2628.56, -1186.21, -4075.77), gdLobbyKanan, new THREE.Vector3(-4179.59, -231.09, 2715.15));
createInfospot(gdLobby2, new THREE.Vector3(-3487.27, -1148.65, 3384.22), gdLobbyKiri, new THREE.Vector3(4822.92, -687.55, 1098.35));

createInfospot(gdLobbyKanan, new THREE.Vector3(33.79, -1157.67, 4861.98), gdLobby, new THREE.Vector3(-3022.15, -116.00, 3971.83));
createInfospot(gdLobbyKanan, new THREE.Vector3(3972.99, -1276.52, -2740.12), gdLobby2, new THREE.Vector3(3141.98, -417.46, 3857.02));
createInfospot(gdLobbyKanan, new THREE.Vector3(-4834.95, -1213.91, -261.96), gd1Kanan, new THREE.Vector3(-8.11, -52.24, 4997.52));

createInfospot(gd1Kanan, new THREE.Vector3(-51.65, -1501.55, -4764.85), gdLobbyKanan, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(gd1Kanan, new THREE.Vector3(-28.33, -867.48, 4919.99), gd1Kanan2, new THREE.Vector3(320.81, -15.37, -4982.58));

createInfospot(gd1Kanan2, new THREE.Vector3(-249.94, -1064.49, 4869.19), gd1Kanan, new THREE.Vector3(88.78, -177.77, -4988.36));
createInfospot(gd1Kanan2, new THREE.Vector3(306.56, -1020.12, -4875.05), gd1Kanan3, new THREE.Vector3(-891.50, -14.63, -4913.61));

createInfospot(gd1Kanan3, new THREE.Vector3(931.49, -859.96, 4829.97), gd1Kanan2, new THREE.Vector3(-218.33, -116.53, 4983.98));

createInfospot(gdLobbyKiri, new THREE.Vector3(-380.45, -865.16, 4902.00), gdLobby, new THREE.Vector3(-3610.17, -133.54, -3443.80));
createInfospot(gdLobbyKiri, new THREE.Vector3(-4008.05, -1296.55, -2564.74), gdLobby2, new THREE.Vector3(3218.45, -492.27, -3783.72));
createInfospot(gdLobbyKiri, new THREE.Vector3(4449.00, -1173.44, -1953.12), gd1Kiri, new THREE.Vector3(-3893.72, -836.30, -3011.08));

createInfospot(gd1Kiri, new THREE.Vector3(-3868.78, -993.15, -2992.36), gd1Kiri2, new THREE.Vector3(-4980.33, -419.91, -18.90));
createInfospot(gd1Kiri, new THREE.Vector3(3852.92, -1500.50, 2807.86), gdLobbyKiri, new THREE.Vector3(-4540.36, -292.63, 2062.10));

createInfospot(gd1Kiri2, new THREE.Vector3(4857.03, -1169.06, -82.12), gd1Kiri, new THREE.Vector3(4001.28, -190.52, 2981.15));

createInfospot(gd2Tangga, new THREE.Vector3(4627.02, -1329.76, -1313.84), gdLobby, new THREE.Vector3(4597.21, -1408.92, -1338.99));
createInfospot(gd2Tangga, new THREE.Vector3(2325.22, -1073.04, 4285.35), gd2Kanan, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(gd2Tangga, new THREE.Vector3(3558.40, -1178.10, -3303.54), gd2Kiri, new THREE.Vector3(-4151.22, -762.09, -2666.99));
createInfospot(gd2Tangga, new THREE.Vector3(3826.59, -1124.64, 3002.97), gd3Tangga, new THREE.Vector3(498.63, -11.73, 4973.41));
createInfospot(gd2Tangga, new THREE.Vector3(-4837.94, -1131.24, -536.67), gd2Koridor, new THREE.Vector3(609.10, -19.14, 4958.16));

createInfospot(gd2Kiri, new THREE.Vector3(-483.48, -1565.97, 4722.24), gd2Tangga, new THREE.Vector3(-4959.03, -224.82, -551.99));
createInfospot(gd2Kiri, new THREE.Vector3(-4758.40, -1490.48, -234.36), gd2Kiri2, new THREE.Vector3(486.93, -492.05, -4947.26));

createInfospot(gd2Kiri2, new THREE.Vector3(-483.48, -1565.97, 4722.24), gd2Kiri, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(gd2Kiri2, new THREE.Vector3(459.22, -1191.43, -4830.96), gd2Kiri3, new THREE.Vector3(-44.28, -473.02, -4972.71));

createInfospot(gd2Kiri3, new THREE.Vector3(-74.78, -1574.07, 4740.67), gd2Kiri2, new THREE.Vector3(-391.08, -411.29, 4961.84));
createInfospot(gd2Kiri3, new THREE.Vector3(-105.88, -1257.37, -4830.88), gd2Kiri4, new THREE.Vector3(-694.04, -129.14, -4940.33));
createInfospot(gd2Kiri3, new THREE.Vector3(-2348.41, -636.07, -4357.75), gd2Keuangan, new THREE.Vector3(4977.40, 304.08, 203.23));

createInfospot(gd2Keuangan, new THREE.Vector3(1607.78, -2941.09, -3707.94), gd2Kiri3, new THREE.Vector3(3195.60, -512.70, 3799.11));

createInfospot(gd2Kiri4, new THREE.Vector3(394.23, -1475.99, 4754.11), gd2Kiri3, new THREE.Vector3(26.91, -229.18, 4989.59));
createInfospot(gd2Kiri4, new THREE.Vector3(-732.22, -1819.85, -4589.50), gd2Kiri5, new THREE.Vector3(104.92, -290.58, -4983.08));

createInfospot(gd2Kiri5, new THREE.Vector3(271.29, -1527.68, 4745.97), gd2Kiri4, new THREE.Vector3(481.98, -229.87, 4965.71));

createInfospot(gd2Kanan, new THREE.Vector3(-746.82, -1336.54, 4749.14), gd2Tangga, new THREE.Vector3(-4965.94, 18.55, -560.11));
createInfospot(gd2Kanan, new THREE.Vector3(4767.42, -1348.32, 610.20), gd2Kanan2, new THREE.Vector3(-4980.88, -68.20, -313.71));

createInfospot(gd2Kanan2, new THREE.Vector3(4777.66, -1401.85, 343.71), gd2Kanan, new THREE.Vector3(-4970.86, -163.47, -433.53));
createInfospot(gd2Kanan2, new THREE.Vector3(-4851.10, -1142.85, -297.66), gd2Kanan3, new THREE.Vector3(-2823.44, -319.27, 4105.14));

createInfospot(gd2Kanan3, new THREE.Vector3(2932.12, -1146.89, -3878.27), gd2Kanan2, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(gd2Kanan3, new THREE.Vector3(-2595.92, -1574.04, 3963.73), gd2Kanan4, new THREE.Vector3(-139.43, -291.52, -4981.24));

createInfospot(gd2Kanan4, new THREE.Vector3(592.78, -1325.03, 4776.82), gd2Kanan3, new THREE.Vector3(3006.41, -223.37, -3979.16));


createInfospot(gd3Tangga, new THREE.Vector3(62.34, -3878.40, -3147.09), gd2Tangga, new THREE.Vector3(4597.21, -1408.92, -1338.99));
createInfospot(gd3Tangga, new THREE.Vector3(-4915.84, -821.02, 176.00), gd3Kanan, new THREE.Vector3(-4986.71, 79.17, -194.18));
createInfospot(gd3Tangga, new THREE.Vector3(4586.65, -1939.40, 396.31), gd3Kiri, new THREE.Vector3(-403.84, 114.20, 4974.35));

createInfospot(gd3Kiri, new THREE.Vector3(-300.33, -2026.52, -4551.52), gd3Tangga, new THREE.Vector3(-4990.63, -40.92, 148.11));
createInfospot(gd3Kiri, new THREE.Vector3(4754.07, -1542.46, 37.25), gd3Kiri2, new THREE.Vector3(100.40, 137.31, 4989.34));

createInfospot(gd3Kiri2, new THREE.Vector3(200.36, -1400.02, -4785.69), gd3Kiri, new THREE.Vector3(-4975.40, -57.19, 426.51));
createInfospot(gd3Kiri2, new THREE.Vector3(8.37, -1148.47, 4865.14), gd3Kiri3, new THREE.Vector3(241.88, 336.43, 4974.11));
createInfospot(gd3Kiri2, new THREE.Vector3(-4895.73, -994.43, 9.37), gd3LKiri, new THREE.Vector3(-254.71, -269.16, 4976.08));

createInfospot(gd3LKiri, new THREE.Vector3(486.46, -796.55, -4910.09), gd3Kiri2, new THREE.Vector3(4993.14, -73.55, 75.75));
createInfospot(gd3LKiri, new THREE.Vector3(-165.24, -1382.84, 4792.38), gd3LKiri2, new THREE.Vector3(412.48, -273.02, 4967.66));

createInfospot(gd3LKiri2, new THREE.Vector3(-323.41, -1123.77, -4853.54), gd3LKiri, new THREE.Vector3(471.02, -162.43, -4968.93));


createInfospot(gd3Kiri3, new THREE.Vector3(-1072.53, -1223.69, -4722.61), gd3Kiri2, new THREE.Vector3(191.25, -226.51, -4981.08));
createInfospot(gd3Kiri3, new THREE.Vector3(3959.23, -1097.96, 2843.08), gd3Koridor, new THREE.Vector3(4977.40, 304.08, 203.23));


createInfospot(gd3Kanan, new THREE.Vector3(4877.60, -1008.03, 303.63), gd3Tangga, new THREE.Vector3(4977.40, 304.08, 203.23));
createInfospot(gd3Kanan, new THREE.Vector3(121.63, -1380.44, -4795.34), gd3Kanan2, new THREE.Vector3(246.09, -96.97, 4983.29));

createInfospot(gd3Kanan2, new THREE.Vector3(-250.75, -1288.78, -4814.43), gd3Kanan, new THREE.Vector3(4488.20, 368.24, 4959.95));
createInfospot(gd3Kanan2, new THREE.Vector3(266.22, -1072.36, 4866.77), gd3Kanan3, new THREE.Vector3(4922.04, 269.58, -774.28));
createInfospot(gd3Kanan2, new THREE.Vector3(4789.00, -1388.48, -199.44), gd3LKanan, new THREE.Vector3(451.04, -108.19, -4972.11));

createInfospot(gd3LKanan, new THREE.Vector3(445.40, -1096.78, -4852.52), gd3LKanan2, new THREE.Vector3(360.56, -154.03, -4975.05));
createInfospot(gd3LKanan, new THREE.Vector3(-192.94, -1253.53, 4827.40), gd3Kanan2, new THREE.Vector3(-4991.75, 46.61, 122.49));

createInfospot(gd3LKanan2, new THREE.Vector3(338.78, -1441.53, -4766.73), gd3LKanan3, new THREE.Vector3(26.18, 75.54, 4995.66));
createInfospot(gd3LKanan2, new THREE.Vector3(-195.31, -976.84, 4889.48), gd3LKanan, new THREE.Vector3(-155.42, -152.54, 4985.86));

createInfospot(gd3LKanan3, new THREE.Vector3(121.51, -1470.08, -4770.07), gd3LKanan2, new THREE.Vector3(-213.43, -214.72, 4980.38));


createInfospot(gd3Kanan3, new THREE.Vector3(-4886.82, -1009.21, -123.31), gd3Kanan2, new THREE.Vector3(-214.66, 65.44, -4986.18));
createInfospot(gd3Kanan3, new THREE.Vector3(2968.19, -1268.63, 3807.11), gd3Koridor, new THREE.Vector3(4977.40, 304.08, 203.23));

createInfospot(gd3Koridor, new THREE.Vector3(-2263.96, -1032.66, -4325.56), gd3Kanan3, new THREE.Vector3(86.01, 340.23, -4982.12));
createInfospot(gd3Koridor, new THREE.Vector3(-2577.84, -1232.90, 4093.02), gd3Kiri3, new THREE.Vector3(86.01, 340.23, -4982.12));
createInfospot(gd3Koridor, new THREE.Vector3(4869.51, -1102.10, -100.93), gd3Koridor2, new THREE.Vector3(86.01, 340.23, -4982.12));

createInfospot(gd3Koridor2, new THREE.Vector3(4206.26, -427.56, 2654.83), gb3Lobby, new THREE.Vector3(86.01, 340.23, -4982.12));
createInfospot(gd3Koridor2, new THREE.Vector3(-4199.08, -949.42, -2527.92), gd3Koridor, new THREE.Vector3(86.01, 340.23, -4982.12));



createInfospot(gb1Lobby, new THREE.Vector3(-4971.56, -227.91, -371.81), halamanPenghubung, new THREE.Vector3(79.40, 263.53, -4985.48));
createInfospot(gb1Lobby, new THREE.Vector3(640.67, -1720.45, 4631.59), gb1Kiri, new THREE.Vector3(-2817.40, -183.49, -4115.42));
createInfospot(gb1Lobby, new THREE.Vector3(-824.54, -1702.28, -4618.73), gb1Kanan, new THREE.Vector3(4082.36, -260.97, -2862.72));

createInfospot(gb1Kiri, new THREE.Vector3(3292.55, -2045.92, -3145.04), gb1Lobby, new THREE.Vector3(-3677.92, 70.20, -3379.56));
createInfospot(gb1Kiri, new THREE.Vector3(-1584.94, -2054.51, 4263.28), gb2Tangga, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb1Kanan, new THREE.Vector3(-2352.69, -1859.25, -3996.39), gb1Lobby, new THREE.Vector3(-3156.16, -76.14, 3865.33));
createInfospot(gb1Kanan, new THREE.Vector3(1285.87, -1980.71, 4399.18), gb2Tangga, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb2Tangga, new THREE.Vector3(4877.68, -1086.24, 5.24), gb2Lobby, new THREE.Vector3(309.22, -174.21, -4976.95));
createInfospot(gb2Tangga, new THREE.Vector3(-3715.77, -1872.58, -2765.55), gb1Kiri, new THREE.Vector3(444.66, -136.94, -4971.32));
createInfospot(gb2Tangga, new THREE.Vector3(-3408.36, -1740.71, 3205.49), gb1Kanan, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb2Lobby, new THREE.Vector3(-209.95, -1007.56, 4882.61), gb2Tangga, new THREE.Vector3(79.40, 263.53, -4985.48));
createInfospot(gb2Lobby, new THREE.Vector3(-4789.64, -1372.60, -272.65), gb2TanggaKiri, new THREE.Vector3(-343.74, -31.29, 4980.76));
createInfospot(gb2Lobby, new THREE.Vector3(4835.55, -1205.93, 293.50), gb2TanggaKanan, new THREE.Vector3(4992.14, -182.87, -12.78));
createInfospot(gb2Lobby, new THREE.Vector3(323.69, -911.31, -4895.79), gd2Koridor, new THREE.Vector3(-585.82, -100.17, -4958.62));

createInfospot(gd2Koridor, new THREE.Vector3(-552.57, -782.28, -4905.61), gd2Tangga, new THREE.Vector3(4890.32, -245.53, 980.63));
createInfospot(gd2Koridor, new THREE.Vector3(584.83, -665.04, 4914.54), gb2Lobby, new THREE.Vector3(-207.43, 77.13, 4986.10));


createInfospot(gb2TanggaKiri, new THREE.Vector3(4572.83, -1288.11, 1540.42), gb3Tangga, new THREE.Vector3(-4992.54, -14.53, -131.36));
createInfospot(gb2TanggaKiri, new THREE.Vector3(-363.33, -1110.97, 4854.00), gb2Kiri, new THREE.Vector3(421.84, -150.13, -4971.99));
createInfospot(gb2TanggaKiri, new THREE.Vector3(230.43, -1439.06, -4773.11), gb2Lobby, new THREE.Vector3(4982.24, -187.19, 198.63));

createInfospot(gb2TanggaKanan, new THREE.Vector3(1287.52, -1190.96, 4674.55), gb3Tangga, new THREE.Vector3(-4992.54, -14.53, -131.36));
createInfospot(gb2TanggaKanan, new THREE.Vector3(4858.37, -1139.51, 171.54), gb2Kanan, new THREE.Vector3(4992.14, -182.87, -12.78));
createInfospot(gb2TanggaKanan, new THREE.Vector3(-4799.36, -1363.71, -135.07), gb2Lobby, new THREE.Vector3(-4985.05, -38.56, -256.39));

createInfospot(gb2Kiri, new THREE.Vector3(-447.73, -627.58, 4933.27), gb2TanggaKiri, new THREE.Vector3(288.16, -97.89, -4981.05));
createInfospot(gb2Kiri, new THREE.Vector3(-1994.90, -428.06, 4561.60), gb2RT, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb2RT, new THREE.Vector3(-1994.90, -428.06, 4561.60), gb2TanggaKiri, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb2Kanan, new THREE.Vector3(-4757.19, -1515.85, 120.94), gb2TanggaKanan, new THREE.Vector3(-4990.98, 5.65, -167.82));
createInfospot(gb2Kanan, new THREE.Vector3(4966.16, -457.80, -203.76), gb2TU, new THREE.Vector3(-4689.31, -58.02, -1710.60));


createInfospot(gb3Tangga, new THREE.Vector3(-4901.32, -942.96, -98.02), gb3Lobby, new THREE.Vector3(-520.95, -28.25, 4971.59));
createInfospot(gb3Tangga, new THREE.Vector3(3706.43, -1940.26, -2733.54), gb2TanggaKanan, new THREE.Vector3(4992.14, -182.87, -12.78));
createInfospot(gb3Tangga, new THREE.Vector3(3440.39, -1934.18, 3066.52), gb2TanggaKiri, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb3Lobby, new THREE.Vector3(521.18, -925.47, -4881.78), gb3Tangga, new THREE.Vector3(4992.14, -182.87, -12.78));
createInfospot(gb3Lobby, new THREE.Vector3(4832.90, -1135.98, 562.50), gb3TanggaKiri, new THREE.Vector3(-4984.87, 15.60, 277.05));
createInfospot(gb3Lobby, new THREE.Vector3(-4860.23, -1049.94, -476.00), gb3TanggaKanan, new THREE.Vector3(-4986.78, -60.72, 206.81));
createInfospot(gb3Lobby, new THREE.Vector3(-512.02, -1805.53, 4629.71), gd3Koridor2, new THREE.Vector3(-4276.93, -129.72, -2572.57));

createInfospot(gb3TanggaKanan, new THREE.Vector3(-2158.98, -1061.97, -4372.51), gb4Tangga, new THREE.Vector3(-4982.74, 87.54, 263.71));
createInfospot(gb3TanggaKanan, new THREE.Vector3(4638.17, -1849.45, -92.07), gb3Lobby, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb3TanggaKiri, new THREE.Vector3(4712.47, -1615.69, -319.90), gb3Lobby, new THREE.Vector3(-4973.15, 46.44, -477.45));
createInfospot(gb3TanggaKiri, new THREE.Vector3(-4878.02, -1027.85, 220.41), gb3Kiri, new THREE.Vector3(479.55, -72.70, -4972.01));
createInfospot(gb3TanggaKiri, new THREE.Vector3(-1619.00, -1053.22, 4603.39), gb4Tangga, new THREE.Vector3(-4982.74, 87.54, 263.71));

createInfospot(gb3Kiri, new THREE.Vector3(473.04, -1163.44, -4837.81), gb3Kiri2, new THREE.Vector3(-4984.87, 15.60, 277.05));
createInfospot(gb3Kiri, new THREE.Vector3(-1619.00, -1053.22, 4603.39), gb3TanggaKiri, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb3Kiri2, new THREE.Vector3(4822.47, -1265.03, -225.09), gb3Kiri, new THREE.Vector3(4992.14, -182.87, -12.78));

createInfospot(gb4Tangga, new THREE.Vector3(-4870.61, -1116.78, 24.23), gb4Lobby, new THREE.Vector3(-93.36, 91.54, 4991.51));
createInfospot(gb4Tangga, new THREE.Vector3(3377.61, -1935.28, -3132.01), gb3TanggaKanan, new THREE.Vector3(1347.65, -529.42, 4775.47));
createInfospot(gb4Tangga, new THREE.Vector3(3721.61, -1973.17, 2688.67), gb3TanggaKiri, new THREE.Vector3(800.38, -385.05, -4913.32));

createInfospot(gb4Lobby, new THREE.Vector3(105.69, -918.88, -4905.71), gb4Tangga, new THREE.Vector3(4963.91, -461.86, -237.52));

createInfoPlace(halamanKanan, new THREE.Vector3(4944.62, -220.74, 644.03), null, 'assets/icons/Enter.png');
createInfoPlace(halamanKanan, new THREE.Vector3(1854.06, 51.58, 4634.51), 'desc-mushola');

createInfoPlace(halamanKiri, new THREE.Vector3(894.09, -129.04, -4908.65), 'desc-ult');
createInfoPlace(halamanKiri, new THREE.Vector3(4971.73, -173.27, 409.47), null, 'assets/icons/Exit.png');

createInfoPlace(gd2Kiri3, new THREE.Vector3(-3609.32, -695.46, -3379.61), 'desc-keuangan');

const buttonData = {
  'Lobby': {
    page: gdLobby,
    coordinates: new THREE.Vector3(4941.28, -189.36, 672.96)
  },
  'Kendaraan Masuk': {
    page: halamanKanan,
    coordinates: new THREE.Vector3(4941.28, -189.36, 672.96)
  },
  'Kendaraan Keluar': {
    page: halamanKiri,
    coordinates: new THREE.Vector3(4976.53, -86.25, 383.24)
  },
  'Parkiran': {
    page: halamanKananAtas,
    coordinates: new THREE.Vector3(-4965.49, 107.20, -540.68)
  },
  'ULT': {
    page: halamanKiri,
    coordinates: new THREE.Vector3(894.09, -129.04, -4908.65)
  },
  'Akademik dan Evaluasi': {
    page: gd1Kiri,
    coordinates: new THREE.Vector3(4465.35, -339.47, -2205.26)
  },
  'Registrasi dan Statistik': {
    page: gd1Kiri2,
    coordinates: new THREE.Vector3(2924.08, 9.09, 4054.30)
  },
  'Wakil Rektor 3': {
    page: gd1Kanan,
    coordinates: new THREE.Vector3(-4848.31, -46.54, 1190.84)
  },
  'Rapat 3 Lt.1': {
    page: gd1Kanan2,
    coordinates: new THREE.Vector3(-4544.91, 1202.52, 1680.42)
  },
  'Sekretariat WR 3': {
    page: gd1Kanan2,
    coordinates: new THREE.Vector3(4850.64, 717.78, -948.42)
  },
  'Kesejahteraan Mahasiswa': {
    page: gd1Kanan3,
    coordinates: new THREE.Vector3(4635.21, 21.91, 1855.48)
  },
  'Lobby2': {
    page: gb1Lobby,
    coordinates: new THREE.Vector3(4922.85, -329.88, -754.08)
  },
  'Kantin 1': {
    page: gb1Kiri,
    coordinates: new THREE.Vector3(-2781.08, -152.93, -4140.44)
  },
  'Kantin 2': {
    page: gb1Kanan,
    coordinates: new THREE.Vector3(3682.00, -281.03, -3363.78)
  },
  'Rumah Tangga': {
    page: gb2Kiri,
    coordinates: new THREE.Vector3(-2233.03, -24.06, 4465.09)
  },
  'Tata Usaha': {
    page: gb2Kanan,
    coordinates: new THREE.Vector3(4976.97, -270.50, -236.62)
  },
  'Keuangan': {
    page: gd2Kiri3,
    coordinates: new THREE.Vector3(-2346.43, -639.67, -4358.28)
  },
  'Sekretariat WR 2': {
    page: gd2Kanan,
    coordinates: new THREE.Vector3(672.59, -450.06, -4926.36)
  },
  'Tenaga Kependidikan': {
    page: gd2Kanan2,
    coordinates: new THREE.Vector3(3039.34, -476.80, 3931.11)
  },
  'Kepegawaian': {
    page: gd2Kanan2,
    coordinates: new THREE.Vector3(-2539.42, -349.04, -4288.20)
  },
  'Akuntansi dan Pelaporan': {
    page: gd2Kanan3,
    coordinates: new THREE.Vector3(4051.46, -644.93, 2846.03)
  },
  'Rektor': {
    page: gd3Tangga,
    coordinates: new THREE.Vector3(-3497.82, -285.13, 3547.73)
  },
  'Sekretariat Rektor': {
    page: gd3Kiri,
    coordinates: new THREE.Vector3(-413.54, -48.25, 4976.43)
  },
  'Serbaguna Lt.4': {
    page: gb4Lobby,
    coordinates: new THREE.Vector3(4850.92, -170.99, 1162.23)
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
      onButtonClick(buttonData.Lobby2.page);
      buttonData.Lobby2.page.addEventListener('enter-fade-start', function () {
        viewer.tweenControlCenter(buttonData.Lobby2.coordinates, 1);
      });
    } else if (data) {
      const currentActivePage = viewer.panorama;

      if (data.page.uuid === currentActivePage.uuid) {
        viewer.tweenControlCenter(data.coordinates, 3000);
      } else {
        // If the page is different, call the onButtonClick function
        onButtonClick(data.page);
        data.page.addEventListener('enter-fade-start', function () {
          viewer.tweenControlCenter(data.coordinates, 1);
        });
      }
    }
  });
});

// var gyroPresent = true;
// window.addEventListener("devicemotion", function(event){
//     if(event.rotationRate.alpha || event.rotationRate.beta || event.rotationRate.gamma)
//         gyroPresent = true;
// });

$('#featureButton').on('click', function (e) {
  controlIndex = controlIndex >= 1 ? 0 : controlIndex + 1;
  switch (controlIndex) {
    case 0: viewer.enableControl(PANOLENS.CONTROLS.ORBIT); break;
    case 1: viewer.enableControl(PANOLENS.CONTROLS.DEVICEORIENTATION); break;
    default: break;
  }
});
// if (gyroPresent) {
//   // If supported, show the feature button and attach the click event
// } else {
//   $('#featureButton').hide();
// }

$('#featureButton2').on('click', function (e) {
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

$('#featureButton3').on('click', function (e) {
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
$('#container').on('wheel', function (e) {
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

function filterBuildingsAndFloors() {
  const selectedBuildingFilters = Array.from(document.querySelectorAll('.building-filter .select-filter.selected'));
  const selectedFloorFilters = Array.from(document.querySelectorAll('.floor-filter .select-filter.selected'));
  const searchText = document.getElementById('searchInput').value.toLowerCase();
  console.log(searchText);

  const buildings = document.querySelectorAll('.building');
  buildings.forEach(building => {
    const isBuildingSelected = selectedBuildingFilters.length === 0 || selectedBuildingFilters.some(filter => building.classList.contains(filter.textContent.trim().toLowerCase()));
    building.style.display = isBuildingSelected ? 'flex' : 'none';

    const floors = building.querySelectorAll('.floor');
    floors.forEach(floor => {
      const isFloorSelected = selectedFloorFilters.length === 0 || selectedFloorFilters.some(filter => floor.classList.contains(filter.textContent.trim().toLowerCase()));
      const shouldShowFloor = isBuildingSelected && isFloorSelected && floor.dataset.floorText.toLowerCase().includes(searchText);
      floor.style.display = shouldShowFloor ? 'flex' : 'none';
    });
  });
}

function filterSelectButtons(searchText) {
  const floors = document.querySelectorAll('.floor');
  floors.forEach(floor => {
    const selectButtons = floor.querySelectorAll('.select-button');
    let shouldShowFloor = false;

    selectButtons.forEach(button => {
      const text = button.querySelector('p').textContent.toLowerCase();
      if (text.includes(searchText)) {
        button.style.display = 'block';
        shouldShowFloor = true;
      } else {
        button.style.display = 'none';
      }
    });

    floor.style.display = shouldShowFloor ? 'flex' : 'none';
  });

  filterBuildingsAndFloors();
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

  // Hide all buildings and floors first
  const buildings = document.querySelectorAll('.building');
  buildings.forEach(building => {
    building.style.display = 'none';
  });

  const floors = document.querySelectorAll('.floor');
  floors.forEach(floor => {
    floor.style.display = 'none';
  });

  // Get the selected filters and search text
  const selectedBuildingFilters = Array.from(document.querySelectorAll('.building-filter .select-filter.selected'));
  const selectedFloorFilters = Array.from(document.querySelectorAll('.floor-filter .select-filter.selected'));
  const searchText = document.querySelector('.searchInput').value.toLowerCase();

  // Show the buildings and floors based on the selected filters and search text
  buildings.forEach(building => {
    const isBuildingSelected = selectedBuildingFilters.length === 0 || selectedBuildingFilters.some(filter => building.classList.contains(filter.textContent.trim().toLowerCase()));
    building.style.display = isBuildingSelected ? 'flex' : 'none';

    const floors = building.querySelectorAll('.floor');
    floors.forEach(floor => {
      const isFloorSelected = selectedFloorFilters.length === 0 || selectedFloorFilters.some(filter => floor.classList.contains(filter.textContent.trim().toLowerCase()));
      const shouldShowFloor = isBuildingSelected && isFloorSelected;

      // Check if the searchText matches the floor text
      if (shouldShowFloor) {
        const floorText = floor.querySelector('.text-sm-medium.gray-text').textContent.toLowerCase();
        if (searchText && !floorText.includes(searchText)) {
          floor.style.display = 'none';
        } else {
          floor.style.display = 'flex';
        }
      }
    });
  });
}



function toggleFilterSection() {
  var filterSection = document.getElementById('filterSection');
  filterSection.classList.toggle('hidden');
}

function toggleFeatureSection(element) {
  element.classList.toggle('selected-feature');
  
  const imgElement = element.querySelector('img');
  const isActiveIcon = imgElement.src.includes('-white');

  imgElement.src = isActiveIcon ? imgElement.src.replace('-white.svg', '.svg')
                                 : imgElement.src.replace('.svg', '-white.svg');
}