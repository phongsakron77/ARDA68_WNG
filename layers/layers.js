ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32647").setExtent([593071.153600, 2115075.427743, 596690.540685, 2121172.564800]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Flood_2 = new ol.format.GeoJSON();
var features_Flood_2 = format_Flood_2.readFeatures(json_Flood_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_Flood_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Flood_2.addFeatures(features_Flood_2);
var lyr_Flood_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Flood_2, 
                style: style_Flood_2,
                popuplayertitle: 'Flood',
                interactive: true,
                title: '<img src="styles/legend/Flood_2.png" /> Flood'
            });
var format_str_wng_3 = new ol.format.GeoJSON();
var features_str_wng_3 = format_str_wng_3.readFeatures(json_str_wng_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_str_wng_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_str_wng_3.addFeatures(features_str_wng_3);
var lyr_str_wng_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_str_wng_3, 
                style: style_str_wng_3,
                popuplayertitle: 'str_wng',
                interactive: true,
                title: '<img src="styles/legend/str_wng_3.png" /> str_wng'
            });
var format_test_4 = new ol.format.GeoJSON();
var features_test_4 = format_test_4.readFeatures(json_test_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_test_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_test_4.addFeatures(features_test_4);
var lyr_test_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_test_4, 
                style: style_test_4,
                popuplayertitle: 'test',
                interactive: true,
    title: 'test<br />\
    <img src="styles/legend/test_4_0.png" /> A<br />\
    <img src="styles/legend/test_4_1.png" /> M<br />\
    <img src="styles/legend/test_4_2.png" /> U<br />\
    <img src="styles/legend/test_4_3.png" /> W<br />' });
var format_bdy_wng_5 = new ol.format.GeoJSON();
var features_bdy_wng_5 = format_bdy_wng_5.readFeatures(json_bdy_wng_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32647'});
var jsonSource_bdy_wng_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bdy_wng_5.addFeatures(features_bdy_wng_5);
var lyr_bdy_wng_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bdy_wng_5, 
                style: style_bdy_wng_5,
                popuplayertitle: 'bdy_wng',
                interactive: true,
                title: '<img src="styles/legend/bdy_wng_5.png" /> bdy_wng'
            });
var group_MTM = new ol.layer.Group({
                                layers: [lyr_Flood_2,lyr_str_wng_3,lyr_test_4,lyr_bdy_wng_5,],
                                fold: 'open',
                                title: 'MTM'});
var group_SPM = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'SPM'});

lyr_GoogleMaps_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_Flood_2.setVisible(true);lyr_str_wng_3.setVisible(true);lyr_test_4.setVisible(true);lyr_bdy_wng_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleSatellite_1,group_MTM];
lyr_Flood_2.set('fieldAliases', {'id': 'id', });
lyr_str_wng_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'HY_USE': 'HY_USE', 'HY_LNAME': 'HY_LNAME', 'HY_MRIVER': 'HY_MRIVER', 'LENGTH': 'LENGTH', 'TAM_NAM_T': 'TAM_NAM_T', });
lyr_test_4.set('fieldAliases', {'LU_ID_L1': 'LU_ID_L1', 'LU_ID_L2': 'LU_ID_L2', 'LU_ID_L3': 'LU_ID_L3', 'LU_CODE': 'LU_CODE', 'LU_DES_TH': 'LU_DES_TH', 'LU_DES_EN': 'LU_DES_EN', 'LUL1_CODE': 'LUL1_CODE', 'LUL2_CODE': 'LUL2_CODE', 'LU_DES': 'LU_DES', 'Shape_Area': 'Shape_Area', 'Area_Sqm': 'Area_Sqm', 'Area_Rai': 'Area_Rai', });
lyr_bdy_wng_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TAMBON_IDN': 'TAMBON_IDN', 'TAM_CODE': 'TAM_CODE', 'TAM_NAM_T': 'TAM_NAM_T', 'AMPHOE_IDN': 'AMPHOE_IDN', 'AMP_CODE': 'AMP_CODE', 'AMPHOE_T': 'AMPHOE_T', 'AMPHOE_E': 'AMPHOE_E', 'PROV_CODE': 'PROV_CODE', 'PROV_NAM_T': 'PROV_NAM_T', 'PROV_NAM_E': 'PROV_NAM_E', 'P_CODE': 'P_CODE', 'remark': 'remark', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Flood_2.set('fieldImages', {'id': 'TextEdit', });
lyr_str_wng_3.set('fieldImages', {'OBJECTID': 'Range', 'HY_USE': 'Range', 'HY_LNAME': 'TextEdit', 'HY_MRIVER': 'TextEdit', 'LENGTH': 'TextEdit', 'TAM_NAM_T': 'TextEdit', });
lyr_test_4.set('fieldImages', {'LU_ID_L1': 'TextEdit', 'LU_ID_L2': 'TextEdit', 'LU_ID_L3': 'TextEdit', 'LU_CODE': 'TextEdit', 'LU_DES_TH': 'TextEdit', 'LU_DES_EN': 'TextEdit', 'LUL1_CODE': 'TextEdit', 'LUL2_CODE': 'TextEdit', 'LU_DES': 'TextEdit', 'Shape_Area': 'TextEdit', 'Area_Sqm': 'Range', 'Area_Rai': 'Range', });
lyr_bdy_wng_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'TAMBON_IDN': 'TextEdit', 'TAM_CODE': 'TextEdit', 'TAM_NAM_T': 'TextEdit', 'AMPHOE_IDN': 'TextEdit', 'AMP_CODE': 'TextEdit', 'AMPHOE_T': 'TextEdit', 'AMPHOE_E': 'TextEdit', 'PROV_CODE': 'TextEdit', 'PROV_NAM_T': 'TextEdit', 'PROV_NAM_E': 'TextEdit', 'P_CODE': 'TextEdit', 'remark': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Flood_2.set('fieldLabels', {'id': 'no label', });
lyr_str_wng_3.set('fieldLabels', {'OBJECTID': 'no label', 'HY_USE': 'no label', 'HY_LNAME': 'no label', 'HY_MRIVER': 'no label', 'LENGTH': 'no label', 'TAM_NAM_T': 'no label', });
lyr_test_4.set('fieldLabels', {'LU_ID_L1': 'no label', 'LU_ID_L2': 'no label', 'LU_ID_L3': 'no label', 'LU_CODE': 'no label', 'LU_DES_TH': 'no label', 'LU_DES_EN': 'no label', 'LUL1_CODE': 'no label', 'LUL2_CODE': 'no label', 'LU_DES': 'no label', 'Shape_Area': 'no label', 'Area_Sqm': 'no label', 'Area_Rai': 'no label', });
lyr_bdy_wng_5.set('fieldLabels', {'OBJECTID': 'no label', 'TAMBON_IDN': 'no label', 'TAM_CODE': 'no label', 'TAM_NAM_T': 'no label', 'AMPHOE_IDN': 'no label', 'AMP_CODE': 'no label', 'AMPHOE_T': 'no label', 'AMPHOE_E': 'no label', 'PROV_CODE': 'no label', 'PROV_NAM_T': 'no label', 'PROV_NAM_E': 'no label', 'P_CODE': 'no label', 'remark': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_bdy_wng_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});