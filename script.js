// adicionar o header 
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
    });

// adicionar o listagem 
fetch('listagem.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('listagem-container').innerHTML = data;
        addHoverEffect();
    });

// acionar side-bar
function sideBar() {
    const sideBar = document.getElementById('listagem-container');
    sideBar.classList.toggle('show');
}

