document.getElementById('close-button').addEventListener('click', function() {
    $('#info-box').modal('hide');
});

    document.addEventListener("DOMContentLoaded", function () {
        var map = L.map('map').setView([-14.2350, -51.9253], 4);


        var satelliteLayer = L.tileLayer('https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}', {
            maxZoom: 20,
            subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
            attribution: '&copy; <a href="https://www.google.com/">Google Maps</a>',
        }).addTo(map);


        var labelsLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            subdomains: ['a', 'b', 'c'],
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        });

        
        labelsLayer.setOpacity(0.7); 

        var baseLayers = {
            "Satélite": satelliteLayer,
            "Rótulos": labelsLayer,
        };

        L.control.layers(baseLayers).addTo(map);

        var estados = [
            {
    // Lista de Vendedores
    nome: "São Paulo",
    coordenadas: [ -23.4042, -46.6736],
    informacoes: `
        <p class="Title_Vendedores">São Paulo</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Ana Claudia - (11) 97318-1698</li>
            <br>
            <li>Giovanna Larranhaga - (17) 99165-0708</li>
            <br>
            <li>Antonio Soares - (11) 94249-8265</li>
            <br>
            <li>Barroca - (11) 99601-5315</li>
            <br>
            <li>Bruno Aro Marques - (15) 99607-6265</li>
            <br>
            <li>Claudio Biondi - (19) 99106-6223</li>
            <br>
            <li>Delio - (11) 99561-2912</li>
            <br>
            <li>Eduardo Maginador - (14) 99703-4015</li>
            <br>
            <li>Garcia - (18) 99723-1873</li>
            <br>
            <li>José Ronaldo/Silvana - (19) 99760-1100</li>
            <br>
            <li>Junior - (16) 99791-0000</li>
            <br>
            <li>Luiz Carlos - (11) 99135-0421</li>
            <br>
            <li>Luiz Carlos Marilia - (14) 99766-8800</li>
            <br>
            <li>Marcelo Melfi - (11) 99322-0395 / (11) 99572-2409</li>
            <br>
            <li>Marcio Oronfle - (11) 97617-4668 / (11) 99958-5963</li>
            <br>
            <li>Mauricio - (16) 99261-3391</li>
            <br>
            <li>Milena - (12) 99102-9931</li>
            <br>
            <li>Nancy - (13) 99661-8088</li>
            <br>
            <li>Onias - (19) 98238-2530</li>
            <br>
            <li>Rogerio - (11) 94768-8245</li>
            <br>
            <li>Silvio - (14) 99601-2502</li>
            <br>
            <li>Vanderlei - (11) 99731-2874</li>
        </ul>
    `
},

    {
        nome: "Paraná",
        coordenadas: [-24.7085, -51.9191],
        informacoes: `
        <p class="Title_Vendedores">Paraná</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Carlos Amaral - (44) 9936-2124</li>
        </ul>
    `
},

    {
        nome: "Rio De Janeiro",
        coordenadas: [-22.7693, -43.2816],
        informacoes: `
        <p class="Title_Vendedores">Rio De Janeiro</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Antonio Pombo - (21) 99687-3324</li>
            <br>
            <li>Venancio - (21) 99927-4301</li>
            <br>
            <li>Oscar - (21) 99644-2922</li>
            <br>
            <li>João Francisco/Linik Santos - (22) 99965-0430</li>
            <br>
            <li>João Paulo Hortencio/Luiz Ferreira - (21) 96924-6039</li>
            <br>
            <li>João Batista - (24) 98105-5275</li>
        </ul>
    `
},

    {
        nome: "Mato Grosso Do Sul",
        coordenadas: [-19.4380, -54.4690],
        informacoes: `
        <p class="Title_Vendedores">Mato Grosso Do Sul</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Garcia - (18) 99723-1873</li>
        </ul>
    `
},

    {
        nome: "Minas Gerais",
        coordenadas: [-19.7108, -44.0332],
        informacoes: `
        <p class="Title_Vendedores">Minas Gerais</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Gilmar Moreira - (31) 9912-3645</li>
            <br>
            <li>Alvaro - (35)8811-9909</li>
        </ul>
    `
},

    {
        nome: "Espiríto Santo",
        coordenadas: [-20.0279, -40.3809],
        informacoes: `
        <p class="Title_Vendedores">Espiríto Santo</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Flavio - (27) 99760-9636</li>
        </ul>
    `
},

    {
        nome: "Distrito Federal",
        coordenadas: [-15.4627, -47.8353],
        informacoes: `
        <p class="Title_Vendedores">Distrito Federal</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Wellington Pereira: (62)9648-4015</li>
        </ul>
    `
},

    {
        nome: "Goiás",
        coordenadas: [-15.8484, -50.1374],
        informacoes: `
        <p class="Title_Vendedores">Goiás</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Wellington Pereira: (62) 9648-4015</li>
        </ul>
    `
},

    {
        nome: "Bahia",
        coordenadas: [-12.1483, -41.8842],
        informacoes: `
        <p class="Title_Vendedores">Bahia</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>J Messias - (75) 9148-1614</li>
            <br>
            <li>Gilberto - (71) 9127-9059</li>
            <br>
            <li>Santos e Santana -(71)9974-5747</li>
            
        </ul>
    `
},

    {
        nome: "Sergipe",
        coordenadas: [-10.6446, -37.3780],
        informacoes: `
        <p class="Title_Vendedores">Sergipe</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Mário - (79) 99977-9004  / (79) 99124-6386</li>
        </ul>
    `
},

    {
        nome: "Alagoas",
        coordenadas: [ -9.6386, -36.6478],
        informacoes: `
        <p class="Title_Vendedores">Alagoas</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Claudio Clemente - (82) 9925-2070</li>
        </ul>
    `
},

    {
        nome: "Pernanbuco",
        coordenadas: [-8.2913, -37.5923],
        informacoes: `
        <p class="Title_Vendedores">Pernambuco</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>João Raimundo - (81) 9926-3007</li>
        </ul>
    `
},

    {
        nome: "Piauí",
        coordenadas: [-7.5828, -42.5035],
        informacoes: `
        <p class="Title_Vendedores">Piauí</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Alexandre Pacheco (Jatai) - (86) 9936-3247 / (86) 9945-9546</li>
        </ul>
    `
},

    {
        nome: "Rio Grande Do Norte",
        coordenadas: [-5.6219 , -36.4760],
        informacoes: `
        <p class="Title_Vendedores">Rio Grande Do Norte</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>João Raimundo - (81) 9926-3007</li>
            <br>
            <li>Guimarães: (83) 9879-9750</li>
        </ul>
    `
},

    {
        nome: "Paraíba",
        coordenadas: [-7.0929, -36.7207],
        informacoes: `
        <p class="Title_Vendedores">Paraíba</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>João Raimundo - (81) 9926-3007</li>
            <br>
            <li>Guimarães: (83) 9879-9750</li>
        </ul>
    `
},

    {
        nome: "Pará",
        coordenadas: [-5.0581, -52.8296],
        informacoes: `
        <p class="Title_Vendedores">Pará</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Emil Junior - (91) 8349-9226</li>
        </ul>
    `
},

    {
        nome: "Maranhão",
        coordenadas: [ -5.0961, -45.3933],
        informacoes: `
        <p class="Title_Vendedores">Maranhão</p>
        <div class="Divisor_Vendedores"></div>
        <ul class="Lista_Vendedores">
            <li>Alexandre Pacheco (Jatai) - (86) 9936-3247 / (86) 9945-9546</li>
            <br>
            <li>Francisco Santana - (71)9974-5747</li>
        </ul>
    `
},
];

var redIcon = L.icon({
        iconUrl: 'Map/leaflet/images/local.png', 
        iconSize: [40, 40], 
        iconAnchor: [15, 30], 
    });

    estados.forEach(function (estado) {
            var marker = L.marker(estado.coordenadas, { icon: redIcon }).addTo(map);
            marker.on('click', function () {
                document.getElementById('info-content').innerHTML = estado.informacoes;
                $('#info-box').modal('show'); 
        });
    });
});