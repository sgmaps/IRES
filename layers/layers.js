var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_landuse_orchard_1 = new ol.format.GeoJSON();
var features_landuse_orchard_1 = format_landuse_orchard_1.readFeatures(json_landuse_orchard_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_orchard_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_orchard_1.addFeatures(features_landuse_orchard_1);
var lyr_landuse_orchard_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landuse_orchard_1, 
                style: style_landuse_orchard_1,
                interactive: true,
                title: '<img src="styles/legend/landuse_orchard_1.png" /> landuse_orchard'
            });
var format_landuse_orchard_2 = new ol.format.GeoJSON();
var features_landuse_orchard_2 = format_landuse_orchard_2.readFeatures(json_landuse_orchard_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_landuse_orchard_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_landuse_orchard_2.addFeatures(features_landuse_orchard_2);
var lyr_landuse_orchard_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_landuse_orchard_2, 
                style: style_landuse_orchard_2,
                interactive: true,
                title: '<img src="styles/legend/landuse_orchard_2.png" /> landuse_orchard'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_landuse_orchard_1.setVisible(true);lyr_landuse_orchard_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_landuse_orchard_1,lyr_landuse_orchard_2];
lyr_landuse_orchard_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'natural': 'natural', 'barrier': 'barrier', 'ford': 'ford', });
lyr_landuse_orchard_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'landuse': 'landuse', 'trees': 'trees', 'name:en': 'name:en', 'name': 'name', 'type': 'type', });
lyr_landuse_orchard_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'natural': '', 'barrier': '', 'ford': '', });
lyr_landuse_orchard_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'landuse': '', 'trees': '', 'name:en': '', 'name': '', 'type': '', });
lyr_landuse_orchard_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'natural': 'no label', 'barrier': 'no label', 'ford': 'no label', });
lyr_landuse_orchard_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'landuse': 'no label', 'trees': 'no label', 'name:en': 'no label', 'name': 'no label', 'type': 'no label', });
lyr_landuse_orchard_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});