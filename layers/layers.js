var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Limitesdescommunes_2 = new ol.format.GeoJSON();
var features_Limitesdescommunes_2 = format_Limitesdescommunes_2.readFeatures(json_Limitesdescommunes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limitesdescommunes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limitesdescommunes_2.addFeatures(features_Limitesdescommunes_2);
var lyr_Limitesdescommunes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Limitesdescommunes_2, 
                style: style_Limitesdescommunes_2,
                popuplayertitle: 'Limites des communes',
                interactive: false,
                title: '<img src="styles/legend/Limitesdescommunes_2.png" /> Limites des communes'
            });
var format_Maillesprospectesen2022etou2023etou2024etou2025_3 = new ol.format.GeoJSON();
var features_Maillesprospectesen2022etou2023etou2024etou2025_3 = format_Maillesprospectesen2022etou2023etou2024etou2025_3.readFeatures(json_Maillesprospectesen2022etou2023etou2024etou2025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Maillesprospectesen2022etou2023etou2024etou2025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Maillesprospectesen2022etou2023etou2024etou2025_3.addFeatures(features_Maillesprospectesen2022etou2023etou2024etou2025_3);
var lyr_Maillesprospectesen2022etou2023etou2024etou2025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Maillesprospectesen2022etou2023etou2024etou2025_3, 
                style: style_Maillesprospectesen2022etou2023etou2024etou2025_3,
                popuplayertitle: 'Mailles prospectées en 2022 et/ ou 2023 et/ou 2024 et/ ou 2025',
                interactive: false,
                title: '<img src="styles/legend/Maillesprospectesen2022etou2023etou2024etou2025_3.png" /> Mailles prospectées en 2022 et/ ou 2023 et/ou 2024 et/ ou 2025'
            });
var format_MaillesprospecterpourlenquteHirondelles_4 = new ol.format.GeoJSON();
var features_MaillesprospecterpourlenquteHirondelles_4 = format_MaillesprospecterpourlenquteHirondelles_4.readFeatures(json_MaillesprospecterpourlenquteHirondelles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MaillesprospecterpourlenquteHirondelles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MaillesprospecterpourlenquteHirondelles_4.addFeatures(features_MaillesprospecterpourlenquteHirondelles_4);
var lyr_MaillesprospecterpourlenquteHirondelles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MaillesprospecterpourlenquteHirondelles_4, 
                style: style_MaillesprospecterpourlenquteHirondelles_4,
                popuplayertitle: 'Mailles à prospecter pour l\'enquête Hirondelles',
                interactive: true,
                title: '<img src="styles/legend/MaillesprospecterpourlenquteHirondelles_4.png" /> Mailles à prospecter pour l\'enquête Hirondelles'
            });
var format_Autresdonnesantrieures_5 = new ol.format.GeoJSON();
var features_Autresdonnesantrieures_5 = format_Autresdonnesantrieures_5.readFeatures(json_Autresdonnesantrieures_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autresdonnesantrieures_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autresdonnesantrieures_5.addFeatures(features_Autresdonnesantrieures_5);
var lyr_Autresdonnesantrieures_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autresdonnesantrieures_5, 
                style: style_Autresdonnesantrieures_5,
                popuplayertitle: 'Autres données antérieures',
                interactive: false,
    title: 'Autres données antérieures<br />\
    <img src="styles/legend/Autresdonnesantrieures_5_0.png" /> Hirondelle rustique<br />\
    <img src="styles/legend/Autresdonnesantrieures_5_1.png" /> Hirondelle de fenêtre<br />' });
var format_Donnesdelenqute2025_6 = new ol.format.GeoJSON();
var features_Donnesdelenqute2025_6 = format_Donnesdelenqute2025_6.readFeatures(json_Donnesdelenqute2025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Donnesdelenqute2025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Donnesdelenqute2025_6.addFeatures(features_Donnesdelenqute2025_6);
var lyr_Donnesdelenqute2025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Donnesdelenqute2025_6, 
                style: style_Donnesdelenqute2025_6,
                popuplayertitle: 'Données de l\'enquête 2025',
                interactive: false,
    title: 'Données de l\'enquête 2025<br />\
    <img src="styles/legend/Donnesdelenqute2025_6_0.png" /> Hirondelle rustique<br />\
    <img src="styles/legend/Donnesdelenqute2025_6_1.png" /> Hirondelle de fenêtre<br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_Limitesdescommunes_2.setVisible(true);lyr_Maillesprospectesen2022etou2023etou2024etou2025_3.setVisible(true);lyr_MaillesprospecterpourlenquteHirondelles_4.setVisible(true);lyr_Autresdonnesantrieures_5.setVisible(true);lyr_Donnesdelenqute2025_6.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_OSMStandard_1,lyr_Limitesdescommunes_2,lyr_Maillesprospectesen2022etou2023etou2024etou2025_3,lyr_MaillesprospecterpourlenquteHirondelles_4,lyr_Autresdonnesantrieures_5,lyr_Donnesdelenqute2025_6];
lyr_Limitesdescommunes_2.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Maillesprospectesen2022etou2023etou2024etou2025_3.set('fieldAliases', {'fid': 'fid', 'Identifian': 'Identifian', 'Commune': 'Commune', 'nids_naturels_bon_etat_sum': 'nids_naturels_bon_etat_sum', 'nids_artificiels_bon_etat_sum': 'nids_artificiels_bon_etat_sum', 'nids_naturels_actifs_sum': 'nids_naturels_actifs_sum', 'nids_artificiels_actifs_sum': 'nids_artificiels_actifs_sum', 'nids_naturels_perdus_sum': 'nids_naturels_perdus_sum', 'nids_artificiels_perdus_sum': 'nids_artificiels_perdus_sum', 'nids_naturels_inoccupes_sum': 'nids_naturels_inoccupes_sum', 'nids_artificiels_inoccupes_sum': 'nids_artificiels_inoccupes_sum', 'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'bottom_bis': 'bottom_bis', 'left_bis': 'left_bis', 'ID_new': 'ID_new', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'NOM_2': 'NOM_2', 'layer': 'layer', 'path': 'path', });
lyr_MaillesprospecterpourlenquteHirondelles_4.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', 'Identifian': 'Identifiant', 'bottom_bis': 'bottom_bis', 'left_bis': 'left_bis', 'ID_new': 'ID_new', 'CODE_POST': 'Code postal', 'NOM': 'Commune', 'NOM_2': 'Departement', });
lyr_Autresdonnesantrieures_5.set('fieldAliases', {'ID universel observation': 'ID universel observation', 'Ref': 'Ref', 'Nom espèce': 'Nom espèce', 'Nom scientifique': 'Nom scientifique', 'ID Lieu-dit': 'ID Lieu-dit', 'Lieu-dit': 'Lieu-dit', 'Date': 'Date', 'Jour': 'Jour', 'Mois': 'Mois', 'Année': 'Année', 'Jour de l\'année': 'Jour de l\'année', 'Pentade': 'Pentade', 'Décade': 'Décade', 'numéro de la semaine': 'numéro de la semaine', 'Horaire': 'Horaire', 'Commune': 'Commune', 'X Lambert IIe [m]': 'X Lambert IIe [m]', 'Y Lambert IIe [m]': 'Y Lambert IIe [m]', 'X Lambert93 [m]': 'X Lambert93 [m]', 'Y Lambert93 [m]': 'Y Lambert93 [m]', 'Lat (WGS84)': 'Lat (WGS84)', 'Lon (WGS84)': 'Lon (WGS84)', 'latitude (DMS)': 'latitude (DMS)', 'longitude (DMS)': 'longitude (DMS)', 'fuseau UTM Nord': 'fuseau UTM Nord', 'UTM X [m]': 'UTM X [m]', 'UTM Y [m]': 'UTM Y [m]', 'Type de localisation': 'Type de localisation', 'Maille': 'Maille', 'Département': 'Département', 'Estimation': 'Estimation', 'Nombre': 'Nombre', 'Détails': 'Détails', 'Code atlas': 'Code atlas', 'Comportement': 'Comportement', 'Vérification': 'Vérification', 'Code projet': 'Code projet', 'ID de l\'observateur': 'ID de l\'observateur', 'ID universel observateur': 'ID universel observateur', 'Prénom': 'Prénom', 'Nom': 'Nom', 'E-mail': 'E-mail', 'Prénom transmetteur': 'Prénom transmetteur', 'Nom transmetteur': 'Nom transmetteur', 'Remarque': 'Remarque', 'Protégée': 'Protégée', 'Remarque privée': 'Remarque privée', 'Protocole': 'Protocole', 'Nom du projet': 'Nom du projet', 'Date d\'insertion': 'Date d\'insertion', 'Date de dernière modification': 'Date de dernière modification', 'Source': 'Source', 'UUID': 'UUID', });
lyr_Donnesdelenqute2025_6.set('fieldAliases', {'Ref': 'Ref', 'Nom_espece': 'Nom_espece', 'Details': 'Details', 'Identifian': 'Identifian', 'Département': 'Département', 'Commune_2': 'Commune_2', 'X_Lambert93_.m.': 'X_Lambert93_.m.', 'Y_Lambert93_.m.': 'Y_Lambert93_.m.', 'Nids.naturels.occupés': 'Nids.naturels.occupés', 'Nids.artificiels.occupés': 'Nids.artificiels.occupés', 'Nombre.de.nids.occupés.par.d.autres.espèces': 'Nombre.de.nids.occupés.par.d.autres.espèces', 'Nids.artificiels.occupés.par.une.autre.espèce': 'Nids.artificiels.occupés.par.une.autre.espèce', 'Nombre.de.nids.détruits': 'Nombre.de.nids.détruits', 'Nids.artificiels.détruits': 'Nids.artificiels.détruits', 'Nombre.de.nids.en.construction': 'Nombre.de.nids.en.construction', 'pres_abs': 'pres_abs', 'dept': 'dept', 'nids_naturels_actifs': 'nids_naturels_actifs', 'nids_artificiels_actifs': 'nids_artificiels_actifs', 'nids_naturels_perdus': 'nids_naturels_perdus', 'nids_artificiels_perdus': 'nids_artificiels_perdus', 'nids_naturels_inoccupes': 'nids_naturels_inoccupes', 'nids_artificiels_inoccupes': 'nids_artificiels_inoccupes', 'nids_naturels_bon_etat': 'nids_naturels_bon_etat', 'nids_artificiels_bon_etat': 'nids_artificiels_bon_etat', });
lyr_Limitesdescommunes_2.set('fieldImages', {'ID': '', 'INSEE_COM': '', 'INSEE_ARR': '', 'INSEE_COL': '', 'INSEE_DEP': '', 'INSEE_REG': '', 'POPULATION': '', 'SURFACE_HA': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'CODE_POST': '', 'NOM': '', 'CL_ARROND': '', 'CL_COLLTER': '', 'CL_DEPART': '', 'CL_REGION': '', 'CAPITALE': '', 'DATE_RCT': '', 'RECENSEUR': '', 'SIREN_EPCI': '', 'ID_CH_LIEU': '', 'ID_AUT_ADM': '', 'CODE_SIREN': '', });
lyr_Maillesprospectesen2022etou2023etou2024etou2025_3.set('fieldImages', {'fid': '', 'Identifian': '', 'Commune': '', 'nids_naturels_bon_etat_sum': '', 'nids_artificiels_bon_etat_sum': '', 'nids_naturels_actifs_sum': '', 'nids_artificiels_actifs_sum': '', 'nids_naturels_perdus_sum': '', 'nids_artificiels_perdus_sum': '', 'nids_naturels_inoccupes_sum': '', 'nids_artificiels_inoccupes_sum': '', 'id': '', 'left': '', 'top': '', 'right': '', 'bottom': '', 'bottom_bis': '', 'left_bis': '', 'ID_new': '', 'CODE_POST': '', 'NOM': '', 'NOM_2': '', 'layer': '', 'path': '', });
lyr_MaillesprospecterpourlenquteHirondelles_4.set('fieldImages', {'id': 'Hidden', 'left': 'Hidden', 'top': 'Hidden', 'right': 'Hidden', 'bottom': 'Hidden', 'Identifian': 'TextEdit', 'bottom_bis': 'Hidden', 'left_bis': 'Hidden', 'ID_new': 'Hidden', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'NOM_2': 'TextEdit', });
lyr_Autresdonnesantrieures_5.set('fieldImages', {'ID universel observation': '', 'Ref': 'Range', 'Nom espèce': 'TextEdit', 'Nom scientifique': 'TextEdit', 'ID Lieu-dit': 'Range', 'Lieu-dit': 'TextEdit', 'Date': 'TextEdit', 'Jour': 'Range', 'Mois': 'Range', 'Année': 'Range', 'Jour de l\'année': 'Range', 'Pentade': 'Range', 'Décade': 'Range', 'numéro de la semaine': 'Range', 'Horaire': 'DateTime', 'Commune': 'TextEdit', 'X Lambert IIe [m]': 'Range', 'Y Lambert IIe [m]': 'Range', 'X Lambert93 [m]': 'Range', 'Y Lambert93 [m]': 'Range', 'Lat (WGS84)': 'TextEdit', 'Lon (WGS84)': 'TextEdit', 'latitude (DMS)': 'TextEdit', 'longitude (DMS)': 'TextEdit', 'fuseau UTM Nord': 'Range', 'UTM X [m]': 'Range', 'UTM Y [m]': 'Range', 'Type de localisation': 'TextEdit', 'Maille': 'TextEdit', 'Département': 'TextEdit', 'Estimation': 'TextEdit', 'Nombre': 'Range', 'Détails': 'TextEdit', 'Code atlas': 'Range', 'Comportement': 'TextEdit', 'Vérification': 'TextEdit', 'Code projet': 'TextEdit', 'ID de l\'observateur': '', 'ID universel observateur': '', 'Prénom': 'TextEdit', 'Nom': 'TextEdit', 'E-mail': '', 'Prénom transmetteur': 'TextEdit', 'Nom transmetteur': 'TextEdit', 'Remarque': 'TextEdit', 'Protégée': 'TextEdit', 'Remarque privée': 'TextEdit', 'Protocole': '', 'Nom du projet': 'TextEdit', 'Date d\'insertion': 'TextEdit', 'Date de dernière modification': 'TextEdit', 'Source': '', 'UUID': '', });
lyr_Donnesdelenqute2025_6.set('fieldImages', {'Ref': 'Range', 'Nom_espece': 'TextEdit', 'Details': 'TextEdit', 'Identifian': 'TextEdit', 'Département': 'Range', 'Commune_2': 'TextEdit', 'X_Lambert93_.m.': 'Range', 'Y_Lambert93_.m.': 'Range', 'Nids.naturels.occupés': 'Range', 'Nids.artificiels.occupés': 'Range', 'Nombre.de.nids.occupés.par.d.autres.espèces': 'Range', 'Nids.artificiels.occupés.par.une.autre.espèce': 'Range', 'Nombre.de.nids.détruits': 'Range', 'Nids.artificiels.détruits': 'Range', 'Nombre.de.nids.en.construction': 'Range', 'pres_abs': 'CheckBox', 'dept': '', 'nids_naturels_actifs': 'Range', 'nids_artificiels_actifs': 'Range', 'nids_naturels_perdus': 'Range', 'nids_artificiels_perdus': 'Range', 'nids_naturels_inoccupes': 'Range', 'nids_artificiels_inoccupes': 'Range', 'nids_naturels_bon_etat': 'Range', 'nids_artificiels_bon_etat': 'Range', });
lyr_Limitesdescommunes_2.set('fieldLabels', {'ID': 'no label', 'INSEE_COM': 'no label', 'INSEE_ARR': 'no label', 'INSEE_COL': 'no label', 'INSEE_DEP': 'no label', 'INSEE_REG': 'no label', 'POPULATION': 'no label', 'SURFACE_HA': 'no label', 'DATE_CREAT': 'no label', 'DATE_MAJ': 'no label', 'DATE_APP': 'no label', 'DATE_CONF': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'CL_ARROND': 'no label', 'CL_COLLTER': 'no label', 'CL_DEPART': 'no label', 'CL_REGION': 'no label', 'CAPITALE': 'no label', 'DATE_RCT': 'no label', 'RECENSEUR': 'no label', 'SIREN_EPCI': 'no label', 'ID_CH_LIEU': 'no label', 'ID_AUT_ADM': 'no label', 'CODE_SIREN': 'no label', });
lyr_Maillesprospectesen2022etou2023etou2024etou2025_3.set('fieldLabels', {'fid': 'no label', 'Identifian': 'no label', 'Commune': 'no label', 'nids_naturels_bon_etat_sum': 'no label', 'nids_artificiels_bon_etat_sum': 'no label', 'nids_naturels_actifs_sum': 'no label', 'nids_artificiels_actifs_sum': 'no label', 'nids_naturels_perdus_sum': 'no label', 'nids_artificiels_perdus_sum': 'no label', 'nids_naturels_inoccupes_sum': 'no label', 'nids_artificiels_inoccupes_sum': 'no label', 'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', 'bottom_bis': 'no label', 'left_bis': 'no label', 'ID_new': 'no label', 'CODE_POST': 'no label', 'NOM': 'no label', 'NOM_2': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_MaillesprospecterpourlenquteHirondelles_4.set('fieldLabels', {'Identifian': 'header label - always visible', 'CODE_POST': 'inline label - always visible', 'NOM': 'inline label - always visible', 'NOM_2': 'inline label - always visible', });
lyr_Autresdonnesantrieures_5.set('fieldLabels', {'ID universel observation': 'no label', 'Ref': 'no label', 'Nom espèce': 'no label', 'Nom scientifique': 'no label', 'ID Lieu-dit': 'no label', 'Lieu-dit': 'no label', 'Date': 'no label', 'Jour': 'no label', 'Mois': 'no label', 'Année': 'no label', 'Jour de l\'année': 'no label', 'Pentade': 'no label', 'Décade': 'no label', 'numéro de la semaine': 'no label', 'Horaire': 'no label', 'Commune': 'no label', 'X Lambert IIe [m]': 'no label', 'Y Lambert IIe [m]': 'no label', 'X Lambert93 [m]': 'no label', 'Y Lambert93 [m]': 'no label', 'Lat (WGS84)': 'no label', 'Lon (WGS84)': 'no label', 'latitude (DMS)': 'no label', 'longitude (DMS)': 'no label', 'fuseau UTM Nord': 'no label', 'UTM X [m]': 'no label', 'UTM Y [m]': 'no label', 'Type de localisation': 'no label', 'Maille': 'no label', 'Département': 'no label', 'Estimation': 'no label', 'Nombre': 'no label', 'Détails': 'no label', 'Code atlas': 'no label', 'Comportement': 'no label', 'Vérification': 'no label', 'Code projet': 'no label', 'ID de l\'observateur': 'no label', 'ID universel observateur': 'no label', 'Prénom': 'no label', 'Nom': 'no label', 'E-mail': 'no label', 'Prénom transmetteur': 'no label', 'Nom transmetteur': 'no label', 'Remarque': 'no label', 'Protégée': 'no label', 'Remarque privée': 'no label', 'Protocole': 'no label', 'Nom du projet': 'no label', 'Date d\'insertion': 'no label', 'Date de dernière modification': 'no label', 'Source': 'no label', 'UUID': 'no label', });
lyr_Donnesdelenqute2025_6.set('fieldLabels', {'Ref': 'no label', 'Nom_espece': 'no label', 'Details': 'no label', 'Identifian': 'no label', 'Département': 'no label', 'Commune_2': 'no label', 'X_Lambert93_.m.': 'no label', 'Y_Lambert93_.m.': 'no label', 'Nids.naturels.occupés': 'no label', 'Nids.artificiels.occupés': 'no label', 'Nombre.de.nids.occupés.par.d.autres.espèces': 'no label', 'Nids.artificiels.occupés.par.une.autre.espèce': 'no label', 'Nombre.de.nids.détruits': 'no label', 'Nids.artificiels.détruits': 'no label', 'Nombre.de.nids.en.construction': 'no label', 'pres_abs': 'no label', 'dept': 'no label', 'nids_naturels_actifs': 'no label', 'nids_artificiels_actifs': 'no label', 'nids_naturels_perdus': 'no label', 'nids_artificiels_perdus': 'no label', 'nids_naturels_inoccupes': 'no label', 'nids_artificiels_inoccupes': 'no label', 'nids_naturels_bon_etat': 'no label', 'nids_artificiels_bon_etat': 'no label', });
lyr_Donnesdelenqute2025_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});