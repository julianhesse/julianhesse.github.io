// $(document).ready(function(){
    // var map = L.map('map').setView([52.4524, 13.3037], 14); // FU University
    var map = L.map('map').setView([52.533, 13.426], 14);
    //         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    //     maxZoom: 19,
    //     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    // }).addTo(map);
    var cyclosm = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
                    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
                    minZoom: 0,
                    maxZoom: 20,
                }).addTo(map);
    var marker = L.marker([52.53393955, 13.42689483]).addTo(map);
    // var map = new L.Map('map', {
    //     zoomControl: true, layers: [cyclosm]
    // });
    // map.attributionControl.setPrefix('<a href="http://leafletjs.com" title="A JS library for interactive maps">Leaflet</a> | <a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> ' + VERSION);
    // if (!map.restoreView()) {
    //     // Default view on Amsterdam
    //     map.setView([52.3727598, 4.8936041], 12);
    // }
    // var baseMaps = {
    //                     "CyclOSM": cyclosm,
    // };
    // L.control.layers(baseMaps, None, { collapsed: true }).addTo(map);
    // L.hash(map, allMapLayers);

    // load stats
    const url_18 = "https://raw.githubusercontent.com/Waschi97/DataViz/main/final_project/json_files/data_2018.json";
    const url_19 = "https://raw.githubusercontent.com/Waschi97/DataViz/main/final_project/json_files/data_2019.json";
    const url_20 = "https://raw.githubusercontent.com/Waschi97/DataViz/main/final_project/json_files/data_2020.json";
    const url_21 = "https://raw.githubusercontent.com/Waschi97/DataViz/main/final_project/json_files/data_2021.json";

    import stats_18 from '../json_files/data_2018.json' assert {type: 'json'};
    // resp = fetch('./json_files/data_2018.json').then();
    // var stats_18 = resp.json;
    console.log(stats_18[0]);

    for (var i = 0; i < 100; i++) {
        L.marker([stats_18[i].YGCSWGS84, stats_18[i].XGCSWGS84]).addTo(map);
    }

// });