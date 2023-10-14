document.addEventListener("DOMContentLoaded", function () {
    let mainElement = document.createElement('div');
    mainElement.className = "main-element";
    let tableElement = document.getElementById("tabla");
    mainElement.appendChild(tableElement);

    function randomColor() {
        let color = [];
        for (let i = 0; i < 3; i++) {
            color.push(Math.floor(Math.random() * 256));
        }
        return 'rgb(' + color.join(', ') + ')';
    }

    for (let i = 0; i < 26; i++) {
        let fila = tableElement.insertRow(i);
        for (let j = 0; j < 21; j++) {
            let celda = fila.insertCell(j);
            celda.className = "cuadro";
            celda.setAttribute("data-original-color", "#fff"); // Almacena el color original

            celda.addEventListener('mouseover', event => {
                // Cambia al color aleatorio
                event.target.style.transition = "background-color 0.1s";
                event.target.style.backgroundColor = randomColor();

                
                setTimeout(() => {
                    event.target.style.backgroundColor = event.target.getAttribute("data-original-color");
                }, 500);
            });
        }
    }

    document.body.appendChild(mainElement);
});
