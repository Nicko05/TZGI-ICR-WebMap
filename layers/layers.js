var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">Kartendaten: © OpenStreetMap-Mitwirkende, SRTM | Kartendarstellung: © OpenTopoMap (CC-BY-SA)</a>',
                url: 'https://a.tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_WazeWorld_2 = new ol.layer.Tile({
            'title': 'Waze (World)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });

        var lyr_ESRITopo_3 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CartoLight_4 = new ol.layer.Tile({
            'title': 'Carto Light',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_OpenStreetMap_5 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Opina_6 = new ol.format.GeoJSON();
var features_Opina_6 = format_Opina_6.readFeatures(json_Opina_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Opina_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Opina_6.addFeatures(features_Opina_6);
var lyr_Opina_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Opina_6, 
                style: style_Opina_6,
                interactive: true,
                title: '<img src="styles/legend/Opina_6.png" /> Općina'
            });
var format_Naselja_7 = new ol.format.GeoJSON();
var features_Naselja_7 = format_Naselja_7.readFeatures(json_Naselja_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Naselja_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Naselja_7.addFeatures(features_Naselja_7);
var lyr_Naselja_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Naselja_7, 
                style: style_Naselja_7,
                interactive: true,
                title: '<img src="styles/legend/Naselja_7.png" /> Naselja'
            });
var format_ICRintegralnerute_8 = new ol.format.GeoJSON();
var features_ICRintegralnerute_8 = format_ICRintegralnerute_8.readFeatures(json_ICRintegralnerute_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICRintegralnerute_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICRintegralnerute_8.addFeatures(features_ICRintegralnerute_8);
var lyr_ICRintegralnerute_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ICRintegralnerute_8, 
                style: style_ICRintegralnerute_8,
                interactive: true,
                title: '<img src="styles/legend/ICRintegralnerute_8.png" /> ICR integralne rute'
            });
var format_ICRmain_9 = new ol.format.GeoJSON();
var features_ICRmain_9 = format_ICRmain_9.readFeatures(json_ICRmain_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICRmain_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICRmain_9.addFeatures(features_ICRmain_9);
var lyr_ICRmain_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ICRmain_9, 
                style: style_ICRmain_9,
                interactive: true,
                title: '<img src="styles/legend/ICRmain_9.png" /> ICR main'
            });
var format_Javneslube_10 = new ol.format.GeoJSON();
var features_Javneslube_10 = format_Javneslube_10.readFeatures(json_Javneslube_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Javneslube_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Javneslube_10.addFeatures(features_Javneslube_10);
var lyr_Javneslube_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Javneslube_10, 
                style: style_Javneslube_10,
                interactive: true,
                title: '<img src="styles/legend/Javneslube_10.png" /> Javne službe'
            });
var format_Turistikisadraji_11 = new ol.format.GeoJSON();
var features_Turistikisadraji_11 = format_Turistikisadraji_11.readFeatures(json_Turistikisadraji_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turistikisadraji_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turistikisadraji_11.addFeatures(features_Turistikisadraji_11);
var lyr_Turistikisadraji_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turistikisadraji_11, 
                style: style_Turistikisadraji_11,
                interactive: true,
                title: '<img src="styles/legend/Turistikisadraji_11.png" /> Turistički sadržaji'
            });
var format_Uslunelokacije_12 = new ol.format.GeoJSON();
var features_Uslunelokacije_12 = format_Uslunelokacije_12.readFeatures(json_Uslunelokacije_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uslunelokacije_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uslunelokacije_12.addFeatures(features_Uslunelokacije_12);
var lyr_Uslunelokacije_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uslunelokacije_12, 
                style: style_Uslunelokacije_12,
                interactive: true,
                title: '<img src="styles/legend/Uslunelokacije_12.png" /> Uslužne lokacije'
            });
var format_Turistikainfrastruktura_13 = new ol.format.GeoJSON();
var features_Turistikainfrastruktura_13 = format_Turistikainfrastruktura_13.readFeatures(json_Turistikainfrastruktura_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turistikainfrastruktura_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turistikainfrastruktura_13.addFeatures(features_Turistikainfrastruktura_13);
var lyr_Turistikainfrastruktura_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turistikainfrastruktura_13, 
                style: style_Turistikainfrastruktura_13,
                interactive: true,
                title: '<img src="styles/legend/Turistikainfrastruktura_13.png" /> Turistička infrastruktura'
            });
var format_Sakralnabatina_14 = new ol.format.GeoJSON();
var features_Sakralnabatina_14 = format_Sakralnabatina_14.readFeatures(json_Sakralnabatina_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sakralnabatina_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sakralnabatina_14.addFeatures(features_Sakralnabatina_14);
var lyr_Sakralnabatina_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sakralnabatina_14, 
                style: style_Sakralnabatina_14,
                interactive: true,
                title: '<img src="styles/legend/Sakralnabatina_14.png" /> Sakralna baština'
            });
var format_Kulturnabastina_15 = new ol.format.GeoJSON();
var features_Kulturnabastina_15 = format_Kulturnabastina_15.readFeatures(json_Kulturnabastina_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturnabastina_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturnabastina_15.addFeatures(features_Kulturnabastina_15);
var lyr_Kulturnabastina_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulturnabastina_15, 
                style: style_Kulturnabastina_15,
                interactive: true,
                title: '<img src="styles/legend/Kulturnabastina_15.png" /> Kulturna bastina'
            });
var format_Prirodnabastina_16 = new ol.format.GeoJSON();
var features_Prirodnabastina_16 = format_Prirodnabastina_16.readFeatures(json_Prirodnabastina_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prirodnabastina_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prirodnabastina_16.addFeatures(features_Prirodnabastina_16);
var lyr_Prirodnabastina_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prirodnabastina_16, 
                style: style_Prirodnabastina_16,
                interactive: true,
                title: '<img src="styles/legend/Prirodnabastina_16.png" /> Prirodna bastina'
            });
var format_Caffebarovi_17 = new ol.format.GeoJSON();
var features_Caffebarovi_17 = format_Caffebarovi_17.readFeatures(json_Caffebarovi_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caffebarovi_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caffebarovi_17.addFeatures(features_Caffebarovi_17);
var lyr_Caffebarovi_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caffebarovi_17, 
                style: style_Caffebarovi_17,
                interactive: true,
                title: '<img src="styles/legend/Caffebarovi_17.png" /> Caffe barovi'
            });
var format_Ugostiteljskiobjekti_18 = new ol.format.GeoJSON();
var features_Ugostiteljskiobjekti_18 = format_Ugostiteljskiobjekti_18.readFeatures(json_Ugostiteljskiobjekti_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ugostiteljskiobjekti_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ugostiteljskiobjekti_18.addFeatures(features_Ugostiteljskiobjekti_18);
var lyr_Ugostiteljskiobjekti_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ugostiteljskiobjekti_18, 
                style: style_Ugostiteljskiobjekti_18,
                interactive: true,
                title: '<img src="styles/legend/Ugostiteljskiobjekti_18.png" /> Ugostiteljski objekti'
            });
var format_Smjestajniobjekti_19 = new ol.format.GeoJSON();
var features_Smjestajniobjekti_19 = format_Smjestajniobjekti_19.readFeatures(json_Smjestajniobjekti_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smjestajniobjekti_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smjestajniobjekti_19.addFeatures(features_Smjestajniobjekti_19);
var lyr_Smjestajniobjekti_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Smjestajniobjekti_19, 
                style: style_Smjestajniobjekti_19,
                interactive: true,
                title: '<img src="styles/legend/Smjestajniobjekti_19.png" /> Smjestajni objekti'
            });

lyr_GoogleTerrain_0.setVisible(false);lyr_OpenTopoMap_1.setVisible(false);lyr_WazeWorld_2.setVisible(false);lyr_ESRITopo_3.setVisible(true);lyr_CartoLight_4.setVisible(false);lyr_OpenStreetMap_5.setVisible(false);lyr_Opina_6.setVisible(true);lyr_Naselja_7.setVisible(false);lyr_ICRintegralnerute_8.setVisible(true);lyr_ICRmain_9.setVisible(true);lyr_Javneslube_10.setVisible(false);lyr_Turistikisadraji_11.setVisible(false);lyr_Uslunelokacije_12.setVisible(false);lyr_Turistikainfrastruktura_13.setVisible(false);lyr_Sakralnabatina_14.setVisible(false);lyr_Kulturnabastina_15.setVisible(false);lyr_Prirodnabastina_16.setVisible(false);lyr_Caffebarovi_17.setVisible(false);lyr_Ugostiteljskiobjekti_18.setVisible(false);lyr_Smjestajniobjekti_19.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_OpenTopoMap_1,lyr_WazeWorld_2,lyr_ESRITopo_3,lyr_CartoLight_4,lyr_OpenStreetMap_5,lyr_Opina_6,lyr_Naselja_7,lyr_ICRintegralnerute_8,lyr_ICRmain_9,lyr_Javneslube_10,lyr_Turistikisadraji_11,lyr_Uslunelokacije_12,lyr_Turistikainfrastruktura_13,lyr_Sakralnabatina_14,lyr_Kulturnabastina_15,lyr_Prirodnabastina_16,lyr_Caffebarovi_17,lyr_Ugostiteljskiobjekti_18,lyr_Smjestajniobjekti_19];
lyr_Opina_6.set('fieldAliases', {'id': 'id', 'maticni_br': 'maticni_br', 'naziv': 'naziv', 'zupanija': 'zupanija', });
lyr_Naselja_7.set('fieldAliases', {'id': 'id', 'na_mb': 'na_mb', 'na_ime': 'na_ime', 'na_mbr': 'na_mbr', });
lyr_ICRintegralnerute_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Lenght': 'Lenght', });
lyr_ICRmain_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Lenght (m)': 'Lenght (m)', });
lyr_Javneslube_10.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', 'Opis': 'Opis', });
lyr_Turistikisadraji_11.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', 'Opis': 'Opis', });
lyr_Uslunelokacije_12.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', });
lyr_Turistikainfrastruktura_13.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', });
lyr_Sakralnabatina_14.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', });
lyr_Kulturnabastina_15.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', });
lyr_Prirodnabastina_16.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Koordinate': 'Koordinate', });
lyr_Caffebarovi_17.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Kontakt': 'Kontakt', 'Email': 'Email', 'Web': 'Web', });
lyr_Ugostiteljskiobjekti_18.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Kontakt': 'Kontakt', 'Email': 'Email', 'Web': 'Web', });
lyr_Smjestajniobjekti_19.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Adresa': 'Adresa', 'Kapacitet': 'Kapacitet', 'Kontakt': 'Kontakt', 'Email': 'Email', 'Web': 'Web', 'Kategorija': 'Kategorija', });
lyr_Opina_6.set('fieldImages', {'id': 'Range', 'maticni_br': 'TextEdit', 'naziv': 'TextEdit', 'zupanija': 'TextEdit', });
lyr_Naselja_7.set('fieldImages', {'id': 'Range', 'na_mb': 'TextEdit', 'na_ime': 'TextEdit', 'na_mbr': 'TextEdit', });
lyr_ICRintegralnerute_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Lenght': 'TextEdit', });
lyr_ICRmain_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Lenght (m)': '', });
lyr_Javneslube_10.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', 'Opis': 'TextEdit', });
lyr_Turistikisadraji_11.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', 'Opis': 'TextEdit', });
lyr_Uslunelokacije_12.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', });
lyr_Turistikainfrastruktura_13.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', });
lyr_Sakralnabatina_14.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', });
lyr_Kulturnabastina_15.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', });
lyr_Prirodnabastina_16.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Koordinate': 'TextEdit', });
lyr_Caffebarovi_17.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Kontakt': 'TextEdit', 'Email': 'TextEdit', 'Web': 'TextEdit', });
lyr_Ugostiteljskiobjekti_18.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Kontakt': 'TextEdit', 'Email': 'TextEdit', 'Web': 'TextEdit', });
lyr_Smjestajniobjekti_19.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Adresa': 'TextEdit', 'Kapacitet': 'TextEdit', 'Kontakt': 'TextEdit', 'Email': 'TextEdit', 'Web': 'TextEdit', 'Kategorija': 'TextEdit', });
lyr_Opina_6.set('fieldLabels', {'id': 'no label', 'maticni_br': 'no label', 'naziv': 'no label', 'zupanija': 'no label', });
lyr_Naselja_7.set('fieldLabels', {'id': 'no label', 'na_mb': 'no label', 'na_ime': 'no label', 'na_mbr': 'no label', });
lyr_ICRintegralnerute_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Lenght': 'no label', });
lyr_ICRmain_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Lenght (m)': 'no label', });
lyr_Javneslube_10.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', 'Opis': 'no label', });
lyr_Turistikisadraji_11.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', 'Opis': 'no label', });
lyr_Uslunelokacije_12.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', });
lyr_Turistikainfrastruktura_13.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', });
lyr_Sakralnabatina_14.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', });
lyr_Kulturnabastina_15.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', });
lyr_Prirodnabastina_16.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Koordinate': 'no label', });
lyr_Caffebarovi_17.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Kontakt': 'no label', 'Email': 'no label', 'Web': 'no label', });
lyr_Ugostiteljskiobjekti_18.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Kontakt': 'no label', 'Email': 'no label', 'Web': 'no label', });
lyr_Smjestajniobjekti_19.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Adresa': 'no label', 'Kapacitet': 'no label', 'Kontakt': 'no label', 'Email': 'no label', 'Web': 'no label', 'Kategorija': 'no label', });
lyr_Smjestajniobjekti_19.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});