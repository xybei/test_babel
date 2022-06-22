const lib1 = new Lib1();

const connectButton = document.getElementById('connect');


function onConnectButtonClicked() {
    lib1.test();
}

connectButton.addEventListener('click', onConnectButtonClicked);