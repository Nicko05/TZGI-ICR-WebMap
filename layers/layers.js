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

        var lyr_ESRITopo_2 = new ol.layer.Tile({
            'title': 'ESRI Topo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_ESRIGraylight_3 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_4 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Opina_5 = new ol.format.GeoJSON();
var features_Opina_5 = format_Opina_5.readFeatures(json_Opina_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Opina_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Opina_5.addFeatures(features_Opina_5);
var lyr_Opina_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Opina_5, 
                style: style_Opina_5,
                interactive: true,
                title: '<img src="styles/legend/Opina_5.png" /> Općina'
            });
var format_Naselja_6 = new ol.format.GeoJSON();
var features_Naselja_6 = format_Naselja_6.readFeatures(json_Naselja_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Naselja_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Naselja_6.addFeatures(features_Naselja_6);
var lyr_Naselja_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Naselja_6, 
                style: style_Naselja_6,
                interactive: true,
                title: '<img src="styles/legend/Naselja_6.png" /> Naselja'
            });
var format_ICRintegralnerute_7 = new ol.format.GeoJSON();
var features_ICRintegralnerute_7 = format_ICRintegralnerute_7.readFeatures(json_ICRintegralnerute_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICRintegralnerute_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICRintegralnerute_7.addFeatures(features_ICRintegralnerute_7);
var lyr_ICRintegralnerute_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ICRintegralnerute_7, 
                style: style_ICRintegralnerute_7,
                interactive: true,
                title: '<img src="styles/legend/ICRintegralnerute_7.png" /> ICR integralne rute'
            });
var format_ICRmain_8 = new ol.format.GeoJSON();
var features_ICRmain_8 = format_ICRmain_8.readFeatures(json_ICRmain_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICRmain_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICRmain_8.addFeatures(features_ICRmain_8);
var lyr_ICRmain_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ICRmain_8, 
                style: style_ICRmain_8,
                interactive: true,
                title: '<img src="styles/legend/ICRmain_8.png" /> ICR main'
            });
var format_Javneslube_9 = new ol.format.GeoJSON();
var features_Javneslube_9 = format_Javneslube_9.readFeatures(json_Javneslube_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Javneslube_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Javneslube_9.addFeatures(features_Javneslube_9);
var lyr_Javneslube_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Javneslube_9, 
                style: style_Javneslube_9,
                interactive: true,
                title: '<img src="styles/legend/Javneslube_9.png" /> Javne službe'
            });
var format_Turistikisadraji_10 = new ol.format.GeoJSON();
var features_Turistikisadraji_10 = format_Turistikisadraji_10.readFeatures(json_Turistikisadraji_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turistikisadraji_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turistikisadraji_10.addFeatures(features_Turistikisadraji_10);
var lyr_Turistikisadraji_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turistikisadraji_10, 
                style: style_Turistikisadraji_10,
                interactive: true,
                title: '<img src="styles/legend/Turistikisadraji_10.png" /> Turistički sadržaji'
            });
var format_Uslunelokacije_11 = new ol.format.GeoJSON();
var features_Uslunelokacije_11 = format_Uslunelokacije_11.readFeatures(json_Uslunelokacije_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Uslunelokacije_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Uslunelokacije_11.addFeatures(features_Uslunelokacije_11);
var lyr_Uslunelokacije_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Uslunelokacije_11, 
                style: style_Uslunelokacije_11,
                interactive: true,
                title: '<img src="styles/legend/Uslunelokacije_11.png" /> Uslužne lokacije'
            });
var format_Turistikainfrastruktura_12 = new ol.format.GeoJSON();
var features_Turistikainfrastruktura_12 = format_Turistikainfrastruktura_12.readFeatures(json_Turistikainfrastruktura_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turistikainfrastruktura_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turistikainfrastruktura_12.addFeatures(features_Turistikainfrastruktura_12);
var lyr_Turistikainfrastruktura_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Turistikainfrastruktura_12, 
                style: style_Turistikainfrastruktura_12,
                interactive: true,
                title: '<img src="styles/legend/Turistikainfrastruktura_12.png" /> Turistička infrastruktura'
            });
var format_Sakralnabatina_13 = new ol.format.GeoJSON();
var features_Sakralnabatina_13 = format_Sakralnabatina_13.readFeatures(json_Sakralnabatina_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sakralnabatina_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sakralnabatina_13.addFeatures(features_Sakralnabatina_13);
var lyr_Sakralnabatina_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sakralnabatina_13, 
                style: style_Sakralnabatina_13,
                interactive: true,
                title: '<img src="styles/legend/Sakralnabatina_13.png" /> Sakralna baština'
            });
var format_Kulturnabatina_14 = new ol.format.GeoJSON();
var features_Kulturnabatina_14 = format_Kulturnabatina_14.readFeatures(json_Kulturnabatina_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kulturnabatina_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kulturnabatina_14.addFeatures(features_Kulturnabatina_14);
var lyr_Kulturnabatina_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kulturnabatina_14, 
                style: style_Kulturnabatina_14,
                interactive: true,
                title: '<img src="styles/legend/Kulturnabatina_14.png" /> Kulturna baština'
            });
var format_Prirodnabatina_15 = new ol.format.GeoJSON();
var features_Prirodnabatina_15 = format_Prirodnabatina_15.readFeatures(json_Prirodnabatina_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prirodnabatina_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prirodnabatina_15.addFeatures(features_Prirodnabatina_15);
var lyr_Prirodnabatina_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Prirodnabatina_15, 
                style: style_Prirodnabatina_15,
                interactive: true,
                title: '<img src="styles/legend/Prirodnabatina_15.png" /> Prirodna baština'
            });
var format_Caffebarovi_16 = new ol.format.GeoJSON();
var features_Caffebarovi_16 = format_Caffebarovi_16.readFeatures(json_Caffebarovi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Caffebarovi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Caffebarovi_16.addFeatures(features_Caffebarovi_16);
var lyr_Caffebarovi_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Caffebarovi_16, 
                style: style_Caffebarovi_16,
                interactive: true,
                title: '<img src="styles/legend/Caffebarovi_16.png" /> Caffe barovi'
            });
var format_Ugostiteljskiobjekti_17 = new ol.format.GeoJSON();
var features_Ugostiteljskiobjekti_17 = format_Ugostiteljskiobjekti_17.readFeatures(json_Ugostiteljskiobjekti_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ugostiteljskiobjekti_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ugostiteljskiobjekti_17.addFeatures(features_Ugostiteljskiobjekti_17);
var lyr_Ugostiteljskiobjekti_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ugostiteljskiobjekti_17, 
                style: style_Ugostiteljskiobjekti_17,
                interactive: true,
                title: '<img src="styles/legend/Ugostiteljskiobjekti_17.png" /> Ugostiteljski objekti'
            });
var format_Smjetajniobjekti_18 = new ol.format.GeoJSON();
var features_Smjetajniobjekti_18 = format_Smjetajniobjekti_18.readFeatures(json_Smjetajniobjekti_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Smjetajniobjekti_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Smjetajniobjekti_18.addFeatures(features_Smjetajniobjekti_18);
var lyr_Smjetajniobjekti_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Smjetajniobjekti_18, 
                style: style_Smjetajniobjekti_18,
                interactive: true,
                title: '<img src="styles/legend/Smjetajniobjekti_18.png" /> Smještajni objekti'
            });

lyr_GoogleTerrain_0.setVisible(false);lyr_OpenTopoMap_1.setVisible(false);lyr_ESRITopo_2.setVisible(true);lyr_ESRIGraylight_3.setVisible(false);lyr_OpenStreetMap_4.setVisible(false);lyr_Opina_5.setVisible(true);lyr_Naselja_6.setVisible(false);lyr_ICRintegralnerute_7.setVisible(true);lyr_ICRmain_8.setVisible(true);lyr_Javneslube_9.setVisible(false);lyr_Turistikisadraji_10.setVisible(false);lyr_Uslunelokacije_11.setVisible(false);lyr_Turistikainfrastruktura_12.setVisible(false);lyr_Sakralnabatina_13.setVisible(false);lyr_Kulturnabatina_14.setVisible(false);lyr_Prirodnabatina_15.setVisible(false);lyr_Caffebarovi_16.setVisible(false);lyr_Ugostiteljskiobjekti_17.setVisible(false);lyr_Smjetajniobjekti_18.setVisible(false);
var layersList = [lyr_GoogleTerrain_0,lyr_OpenTopoMap_1,lyr_ESRITopo_2,lyr_ESRIGraylight_3,lyr_OpenStreetMap_4,lyr_Opina_5,lyr_Naselja_6,lyr_ICRintegralnerute_7,lyr_ICRmain_8,lyr_Javneslube_9,lyr_Turistikisadraji_10,lyr_Uslunelokacije_11,lyr_Turistikainfrastruktura_12,lyr_Sakralnabatina_13,lyr_Kulturnabatina_14,lyr_Prirodnabatina_15,lyr_Caffebarovi_16,lyr_Ugostiteljskiobjekti_17,lyr_Smjetajniobjekti_18];
lyr_Opina_5.set('fieldAliases', {'id': 'id', 'maticni_br': 'maticni_br', 'naziv': 'naziv', 'zupanija': 'zupanija', });
lyr_Naselja_6.set('fieldAliases', {'id': 'id', 'na_mb': 'na_mb', 'na_ime': 'na_ime', 'na_mbr': 'na_mbr', });
lyr_ICRintegralnerute_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Lenght': 'Lenght', });
lyr_ICRmain_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Lenght (m)': 'Lenght (m)', });
lyr_Javneslube_9.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', 'Opis': 'Opis', });
lyr_Turistikisadraji_10.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', 'Opis': 'Opis', });
lyr_Uslunelokacije_11.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', });
lyr_Turistikainfrastruktura_12.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', 'email': 'email', 'Kontakt': 'Kontakt', });
lyr_Sakralnabatina_13.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', });
lyr_Kulturnabatina_14.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Koordinate': 'Koordinate', });
lyr_Prirodnabatina_15.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Koordinate': 'Koordinate', });
lyr_Caffebarovi_16.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Kontakt': 'Kontakt', 'Email': 'Email', 'Web': 'Web', });
lyr_Ugostiteljskiobjekti_17.set('fieldAliases', {'id': 'id', 'Naziv': 'Naziv', 'Adresa': 'Adresa', 'Kontakt': 'Kontakt', 'Email': 'Email', 'Web': 'Web', });
lyr_Smjetajniobjekti_18.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'Adresa': 'Adresa', 'Kapacitet': 'Kapacitet', 'Kontakt': 'Kontakt', 'Email': 'Email', 'Web': 'Web', 'Kategorija': 'Kategorija', });
lyr_Opina_5.set('fieldImages', {'id': 'Range', 'maticni_br': 'TextEdit', 'naziv': 'TextEdit', 'zupanija': 'TextEdit', });
lyr_Naselja_6.set('fieldImages', {'id': 'Range', 'na_mb': 'TextEdit', 'na_ime': 'TextEdit', 'na_mbr': 'TextEdit', });
lyr_ICRintegralnerute_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Lenght': 'TextEdit', });
lyr_ICRmain_8.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Lenght (m)': '', });
lyr_Javneslube_9.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', 'Opis': 'TextEdit', });
lyr_Turistikisadraji_10.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', 'Opis': 'TextEdit', });
lyr_Uslunelokacije_11.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', });
lyr_Turistikainfrastruktura_12.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', 'email': 'TextEdit', 'Kontakt': 'TextEdit', });
lyr_Sakralnabatina_13.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', });
lyr_Kulturnabatina_14.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Koordinate': 'TextEdit', });
lyr_Prirodnabatina_15.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Koordinate': 'TextEdit', });
lyr_Caffebarovi_16.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Kontakt': 'TextEdit', 'Email': 'TextEdit', 'Web': 'TextEdit', });
lyr_Ugostiteljskiobjekti_17.set('fieldImages', {'id': 'TextEdit', 'Naziv': 'TextEdit', 'Adresa': 'TextEdit', 'Kontakt': 'TextEdit', 'Email': 'TextEdit', 'Web': 'TextEdit', });
lyr_Smjetajniobjekti_18.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'Adresa': 'TextEdit', 'Kapacitet': 'TextEdit', 'Kontakt': 'TextEdit', 'Email': 'TextEdit', 'Web': 'TextEdit', 'Kategorija': 'TextEdit', });
lyr_Opina_5.set('fieldLabels', {'id': 'no label', 'maticni_br': 'no label', 'naziv': 'no label', 'zupanija': 'no label', });
lyr_Naselja_6.set('fieldLabels', {'id': 'no label', 'na_mb': 'no label', 'na_ime': 'no label', 'na_mbr': 'no label', });
lyr_ICRintegralnerute_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Lenght': 'no label', });
lyr_ICRmain_8.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Lenght (m)': 'no label', });
lyr_Javneslube_9.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', 'Opis': 'no label', });
lyr_Turistikisadraji_10.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', 'Opis': 'no label', });
lyr_Uslunelokacije_11.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', });
lyr_Turistikainfrastruktura_12.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', 'email': 'no label', 'Kontakt': 'no label', });
lyr_Sakralnabatina_13.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', });
lyr_Kulturnabatina_14.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Koordinate': 'no label', });
lyr_Prirodnabatina_15.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Koordinate': 'no label', });
lyr_Caffebarovi_16.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Kontakt': 'no label', 'Email': 'no label', 'Web': 'no label', });
lyr_Ugostiteljskiobjekti_17.set('fieldLabels', {'id': 'no label', 'Naziv': 'no label', 'Adresa': 'no label', 'Kontakt': 'no label', 'Email': 'no label', 'Web': 'no label', });
lyr_Smjetajniobjekti_18.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'Adresa': 'no label', 'Kapacitet': 'no label', 'Kontakt': 'no label', 'Email': 'no label', 'Web': 'no label', 'Kategorija': 'no label', });
lyr_Smjetajniobjekti_18.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});