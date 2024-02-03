import { React, useState, useEffect } from 'react'

import PlayerProfileImage from '../components/PlayerProfileImage';
import PlayerSearchForm from '../components/PlayerSearchForm';
import PlayerYearTable from '../components/PlayerYearTable';

import Navbar from '@/components/Navbar';
import { bowlColumns, batColumns } from "../components/Columns"
import { DataTable } from "../components/BattingTable"

function Player() {


    const dataArray = [
        ['head1', 'head2', 'head3'],
        ['year', 'stat1', 'stat2'],
        ['2021', 'value1', 'value2'],
        // Additional rows...
    ];


    const [data, setData] = useState(
        {
            "batNest": [
                [
                    "year",
                    "inns",
                    "balls",
                    "runs",
                    "HS",
                    "avg",
                    "sr",
                    "100s",
                    "50s",
                    "30s",
                    "outs",
                    "6s",
                    "4s",
                    "dots",
                    "bpb",
                    "bp4",
                    "bp6",
                    "Rf4",
                    "Rf6",
                    "Rfb",
                    "Rpb",
                    "basra",
                    "db%"
                ],
                [
                    "Career",
                    87,
                    2081,
                    2790,
                    129,
                    37.7,
                    134.07,
                    3,
                    18,
                    20,
                    74,
                    80,
                    273,
                    676,
                    5.9,
                    7.62,
                    26.01,
                    1092,
                    480,
                    1572,
                    4.45,
                    171.77,
                    32.0
                ],
                [
                    2018,
                    10,
                    139,
                    203,
                    57,
                    40.6,
                    146.04,
                    0,
                    1,
                    2,
                    5,
                    5,
                    22,
                    37,
                    5.15,
                    6.32,
                    27.8,
                    88,
                    30,
                    118,
                    4.37,
                    186.64,
                    27.0
                ],
                [
                    2019,
                    13,
                    238,
                    296,
                    76,
                    32.89,
                    124.37,
                    0,
                    3,
                    0,
                    9,
                    10,
                    21,
                    76,
                    7.68,
                    11.33,
                    23.8,
                    84,
                    60,
                    144,
                    4.65,
                    157.26,
                    32.0
                ],
                [
                    2020,
                    14,
                    373,
                    440,
                    70,
                    36.67,
                    117.96,
                    0,
                    3,
                    4,
                    12,
                    9,
                    44,
                    134,
                    7.04,
                    8.48,
                    41.44,
                    176,
                    54,
                    230,
                    4.34,
                    154.63,
                    36.0
                ],
                [
                    2021,
                    17,
                    402,
                    478,
                    57,
                    28.12,
                    118.91,
                    0,
                    3,
                    5,
                    17,
                    12,
                    50,
                    162,
                    6.48,
                    8.04,
                    33.5,
                    200,
                    72,
                    272,
                    4.39,
                    147.03,
                    40.0
                ],
                [
                    2022,
                    16,
                    365,
                    483,
                    96,
                    34.5,
                    132.33,
                    0,
                    4,
                    3,
                    14,
                    11,
                    51,
                    117,
                    5.89,
                    7.16,
                    33.18,
                    204,
                    66,
                    270,
                    4.35,
                    166.83,
                    32.0
                ],
                [
                    2023,
                    17,
                    564,
                    890,
                    129,
                    59.33,
                    157.8,
                    3,
                    4,
                    6,
                    15,
                    33,
                    85,
                    150,
                    4.78,
                    6.64,
                    17.09,
                    340,
                    198,
                    538,
                    4.56,
                    217.13,
                    27.0
                ]
            ],
            "bowlNest": [
                [
                    "year",
                    "inns",
                    "balls",
                    "overs",
                    "maidens",
                    "runs",
                    "wkts",
                    "avg",
                    "eco",
                    "sr",
                    "WpI",
                    "Wp4",
                    "0w",
                    "3w",
                    "4w",
                    "5w",
                    "Wides",
                    "nb",
                    "acc"
                ],
                [
                    "Career",
                    0,
                    0,
                    0.0,
                    0,
                    0,
                    0, NaN, NaN, NaN, NaN, NaN,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0, NaN
                ]
            ],
            "graphJSON": "{\"data\": [{\"customdata\": [[20.0, \"HH Pandya\"], [159.09, \"A Nortje\"], [137.74, \"DL Chahar\"], [106.12, \"B Kumar\"], [133.33, \"R Tewatia\"], [117.65, \"SN Thakur\"], [102.33, \"K Rabada\"], [152.0, \"KK Ahmed\"], [116.67, \"Mohammed Shami\"], [177.27, \"RD Chahar\"], [81.58, \"Rashid Khan\"], [113.33, \"Avesh Khan\"], [69.23, \"JC Archer\"], [108.33, \"SP Narine\"], [102.44, \"YS Chahal\"], [183.33, \"Akash Madhwal\"], [50.0, \"TG Southee\"], [108.7, \"JJ Bumrah\"], [100.0, \"JR Hazlewood\"], [154.55, \"K Kartikeya\"], [138.89, \"VR Aaron\"], [194.44, \"KA Jamieson\"], [101.92, \"KH Pandya\"], [190.91, \"Umran Malik\"], [190.0, \"KMA Paul\"], [100.0, \"KV Sharma\"], [167.74, \"TU Deshpande\"], [88.89, \"M Pathirana\"], [105.36, \"TA Boult\"], [50.0, \"Mukesh Choudhary\"], [60.0, \"Navdeep Saini\"], [146.67, \"PVD Chameera\"], [160.0, \"R Parag\"], [85.71, \"Imran Tahir\"], [141.18, \"RA Jadeja\"], [127.27, \"Shahbaz Ahmed\"], [68.75, \"Sandeep Sharma\"], [78.95, \"S Kaul\"], [118.75, \"SM Curran\"], [117.65, \"A Mishra\"], [144.44, \"M Ashwin\"], [103.45, \"CH Morris\"], [140.0, \"DW Steyn\"], [110.0, \"HV Patel\"], [122.5, \"Arshdeep Singh\"], [141.94, \"I Sharma\"], [130.77, \"RP Meredith\"], [166.67, \"SL Malinga\"], [33.33, \"SC Kuggeleijn\"], [0.0, \"B Stanlake\"], [188.46, \"S Gopal\"], [80.0, \"S Dube\"], [168.97, \"Ravi Bishnoi\"], [111.11, \"BA Stokes\"], [175.0, \"RS Hangargekar\"], [187.5, \"Basil Thampi\"], [212.5, \"BB Sran\"], [286.67, \"C Green\"], [100.0, \"C Sakariya\"], [162.3, \"R Ashwin\"], [133.33, \"PWH de Silva\"], [215.0, \"PP Chawla\"], [100.0, \"PH Solanki\"], [180.0, \"OF Smith\"], [166.67, \"B Laughlin\"], [140.0, \"O Thomas\"], [153.85, \"AJ Tye\"], [107.69, \"A Zampa\"], [130.0, \"Washington Sundar\"], [220.0, \"WD Parnell\"], [180.0, \"Vijaykumar Vyshak\"], [166.67, \"AD Russell\"], [184.62, \"VG Arora\"], [107.14, \"V Shankar\"], [50.0, \"AF Milne\"], [175.0, \"UT Yadav\"], [100.0, \"TK Curran\"], [200.0, \"SR Watson\"], [240.0, \"AK Markram\"], [141.18, \"AR Patel\"], [138.24, \"T Natarajan\"], [150.0, \"Swapnil Singh\"], [133.33, \"Suyash Sharma\"], [50.0, \"Simarjeet Singh\"], [228.57, \"Shakib Al Hasan\"], [200.0, \"AS Rajpoot\"], [210.0, \"Abhishek Sharma\"], [162.5, \"OC McCoy\"], [150.0, \"NM Coulter-Nile\"], [117.24, \"CJ Jordan\"], [100.0, \"KA Pollard\"], [66.67, \"L Ngidi\"], [181.82, \"Kuldeep Yadav\"], [66.67, \"Kartik Tyagi\"], [100.0, \"KR Sen\"], [100.0, \"KR Mayers\"], [300.0, \"KM Asif\"], [200.0, \"Fazalhaq Farooqi\"], [228.57, \"GHS Garton\"], [100.0, \"IS Sodhi\"], [114.29, \"GJ Maxwell\"], [222.22, \"H Sharma\"], [111.11, \"JP Behrendorff\"], [147.37, \"JO Holder\"], [81.82, \"Harbhajan Singh\"], [94.44, \"JD Unadkat\"], [92.86, \"Harpreet Brar\"], [181.82, \"Harshit Rana\"], [60.0, \"LE Plunkett\"], [40.0, \"LH Ferguson\"], [220.0, \"LS Livingstone\"], [88.89, \"Lalit Yadav\"], [114.29, \"Mustafizur Rahman\"], [112.5, \"Mukesh Kumar\"], [126.67, \"Mujeeb Ur Rahman\"], [145.45, \"Mohsin Khan\"], [161.11, \"Mohammed Siraj\"], [178.57, \"CV Varun\"], [76.47, \"Mohammad Nabi\"], [100.0, \"MW Short\"], [212.5, \"MP Stoinis\"], [138.1, \"MJ Santner\"], [100.0, \"MJ McClenaghan\"], [266.67, \"MG Bracewell\"], [166.67, \"MC Henriques\"], [188.89, \"M Theekshana\"], [106.25, \"M Prasidh Krishna\"], [100.0, \"DJ Bravo\"], [163.64, \"M Markande\"], [116.13, \"M Jansen\"], [260.0, \"DR Sams\"], [190.91, \"Yash Thakur\"]], \"hovertemplate\": \"runs=%{x}<br>balls=%{y}<br>out=%{marker.size}<br>strikerate=%{customdata[0]}<br>bowler=%{customdata[1]}<br>average=%{marker.color}<extra></extra>\", \"legendgroup\": \"\", \"marker\": {\"color\": [0.33, 11.67, 18.25, 17.33, 6.0, 20.0, 22.0, 19.0, 14.0, 39.0, 15.5, 25.5, 4.5, 6.5, 21.0, 16.5, 1.0, 25.0, 13.0, 34.0, 25.0, 35.0, 53.0, 21.0, 19.0, 4.0, 52.0, 8.0, 59.0, 1.0, 9.0, 22.0, 8.0, 6.0, 72.0, 14.0, 11.0, 15.0, 38.0, 20.0, 39.0, 30.0, 7.0, 33.0, 24.5, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 99.0, null, null, null, null, null, null, null, 14.0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 24.0, null, null, null, null, null, null, null, null, null, null, null, null, null, 17.0, null, null, null, null, null], \"coloraxis\": \"coloraxis\", \"size\": [3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], \"sizemode\": \"area\", \"sizeref\": 0.0075, \"symbol\": \"circle\"}, \"mode\": \"markers\", \"name\": \"\", \"orientation\": \"v\", \"showlegend\": false, \"x\": [1, 35, 73, 52, 12, 40, 44, 38, 42, 78, 31, 51, 9, 13, 42, 33, 1, 25, 13, 34, 25, 35, 53, 21, 19, 4, 52, 8, 59, 1, 9, 22, 8, 6, 72, 14, 22, 15, 38, 20, 39, 30, 7, 33, 49, 44, 17, 20, 1, 0, 49, 4, 49, 10, 7, 15, 34, 43, 15, 99, 12, 43, 3, 9, 5, 7, 20, 14, 13, 22, 18, 10, 24, 15, 1, 14, 2, 12, 12, 72, 47, 6, 20, 1, 16, 22, 21, 13, 12, 34, 4, 4, 20, 2, 2, 2, 15, 24, 16, 5, 8, 20, 20, 28, 9, 17, 13, 20, 3, 2, 11, 8, 24, 9, 19, 16, 58, 25, 13, 2, 17, 29, 10, 16, 5, 17, 17, 9, 18, 36, 13, 21], \"xaxis\": \"x\", \"y\": [5, 22, 53, 49, 9, 34, 43, 25, 36, 44, 38, 45, 13, 12, 41, 18, 2, 23, 13, 22, 18, 18, 52, 11, 10, 4, 31, 9, 56, 2, 15, 15, 5, 7, 51, 11, 32, 19, 32, 17, 27, 29, 5, 30, 40, 31, 13, 12, 3, 2, 26, 5, 29, 9, 4, 8, 16, 15, 15, 61, 9, 20, 3, 5, 3, 5, 13, 13, 10, 10, 10, 6, 13, 14, 2, 8, 2, 6, 5, 51, 34, 4, 15, 2, 7, 11, 10, 8, 8, 29, 4, 6, 11, 3, 2, 2, 5, 12, 7, 5, 7, 9, 18, 19, 11, 18, 14, 11, 5, 5, 5, 9, 21, 8, 15, 11, 36, 14, 17, 2, 8, 21, 10, 6, 3, 9, 16, 9, 11, 31, 5, 11], \"yaxis\": \"y\", \"type\": \"scatter\"}, {\"hovertemplate\": \"<b>OLS trendline</b><br>balls = 0.684644 * runs + 1.18831<br>R<sup>2</sup>=0.855402<br><br>runs=%{x}<br>balls=%{y} <b>(trend)</b><extra></extra>\", \"legendgroup\": \"\", \"marker\": {\"symbol\": \"circle\"}, \"mode\": \"lines\", \"name\": \"\", \"showlegend\": false, \"x\": [0, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 10, 10, 10, 11, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 15, 15, 15, 15, 15, 16, 16, 16, 16, 17, 17, 17, 17, 17, 18, 18, 19, 19, 20, 20, 20, 20, 20, 20, 20, 20, 21, 21, 21, 22, 22, 22, 22, 24, 24, 24, 25, 25, 25, 28, 29, 30, 31, 33, 33, 34, 34, 34, 35, 35, 36, 38, 38, 39, 40, 42, 42, 43, 43, 44, 44, 47, 49, 49, 49, 51, 52, 52, 53, 58, 59, 72, 72, 73, 78, 99], \"xaxis\": \"x\", \"y\": [1.1883117366217941, 1.8729553350832526, 1.8729553350832526, 1.8729553350832526, 1.8729553350832526, 1.8729553350832526, 1.8729553350832526, 2.5575989335447114, 2.5575989335447114, 2.5575989335447114, 2.5575989335447114, 2.5575989335447114, 2.5575989335447114, 3.24224253200617, 3.24224253200617, 3.9268861304676284, 3.9268861304676284, 3.9268861304676284, 3.9268861304676284, 4.611529728929087, 4.611529728929087, 4.611529728929087, 5.296173327390545, 5.296173327390545, 5.980816925852004, 5.980816925852004, 5.980816925852004, 6.665460524313462, 6.665460524313462, 6.665460524313462, 6.665460524313462, 7.350104122774921, 7.350104122774921, 7.350104122774921, 7.350104122774921, 7.350104122774921, 7.350104122774921, 8.034747721236378, 8.034747721236378, 8.034747721236378, 8.719391319697838, 9.404034918159295, 9.404034918159295, 9.404034918159295, 9.404034918159295, 9.404034918159295, 10.088678516620755, 10.088678516620755, 10.088678516620755, 10.088678516620755, 10.088678516620755, 10.088678516620755, 10.088678516620755, 10.773322115082212, 10.773322115082212, 10.773322115082212, 11.45796571354367, 11.45796571354367, 11.45796571354367, 11.45796571354367, 11.45796571354367, 12.14260931200513, 12.14260931200513, 12.14260931200513, 12.14260931200513, 12.827252910466589, 12.827252910466589, 12.827252910466589, 12.827252910466589, 12.827252910466589, 13.511896508928047, 13.511896508928047, 14.196540107389504, 14.196540107389504, 14.881183705850964, 14.881183705850964, 14.881183705850964, 14.881183705850964, 14.881183705850964, 14.881183705850964, 14.881183705850964, 14.881183705850964, 15.565827304312423, 15.565827304312423, 15.565827304312423, 16.25047090277388, 16.25047090277388, 16.25047090277388, 16.25047090277388, 17.6197580996968, 17.6197580996968, 17.6197580996968, 18.30440169815826, 18.30440169815826, 18.30440169815826, 20.358332493542633, 21.042976092004093, 21.72761969046555, 22.412263288927008, 23.781550485849927, 23.781550485849927, 24.466194084311386, 24.466194084311386, 24.466194084311386, 25.150837682772842, 25.150837682772842, 25.8354812812343, 27.204768478157217, 27.204768478157217, 27.889412076618676, 28.574055675080135, 29.943342872003054, 29.943342872003054, 30.62798647046451, 30.62798647046451, 31.31263006892597, 31.31263006892597, 33.366560864310344, 34.735848061233256, 34.735848061233256, 34.735848061233256, 36.105135258156174, 36.78977885661764, 36.78977885661764, 37.47442245507909, 40.89764044738639, 41.58228404584784, 50.482650825846804, 50.482650825846804, 51.16729442430826, 54.59051241661555, 68.96802798430619], \"yaxis\": \"y\", \"type\": \"scatter\"}], \"layout\": {\"template\": {\"data\": {\"histogram2dcontour\": [{\"type\": \"histogram2dcontour\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}], \"choropleth\": [{\"type\": \"choropleth\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}], \"histogram2d\": [{\"type\": \"histogram2d\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}], \"heatmap\": [{\"type\": \"heatmap\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}], \"heatmapgl\": [{\"type\": \"heatmapgl\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}], \"contourcarpet\": [{\"type\": \"contourcarpet\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}], \"contour\": [{\"type\": \"contour\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}], \"surface\": [{\"type\": \"surface\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}], \"mesh3d\": [{\"type\": \"mesh3d\", \"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}], \"scatter\": [{\"fillpattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}, \"type\": \"scatter\"}], \"parcoords\": [{\"type\": \"parcoords\", \"line\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"scatterpolargl\": [{\"type\": \"scatterpolargl\", \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"bar\": [{\"error_x\": {\"color\": \"#2a3f5f\"}, \"error_y\": {\"color\": \"#2a3f5f\"}, \"marker\": {\"line\": {\"color\": \"#E5ECF6\", \"width\": 0.5}, \"pattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}}, \"type\": \"bar\"}], \"scattergeo\": [{\"type\": \"scattergeo\", \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"scatterpolar\": [{\"type\": \"scatterpolar\", \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"histogram\": [{\"marker\": {\"pattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}}, \"type\": \"histogram\"}], \"scattergl\": [{\"type\": \"scattergl\", \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"scatter3d\": [{\"type\": \"scatter3d\", \"line\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"scattermapbox\": [{\"type\": \"scattermapbox\", \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"scatterternary\": [{\"type\": \"scatterternary\", \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"scattercarpet\": [{\"type\": \"scattercarpet\", \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}}], \"carpet\": [{\"aaxis\": {\"endlinecolor\": \"#2a3f5f\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"minorgridcolor\": \"white\", \"startlinecolor\": \"#2a3f5f\"}, \"baxis\": {\"endlinecolor\": \"#2a3f5f\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"minorgridcolor\": \"white\", \"startlinecolor\": \"#2a3f5f\"}, \"type\": \"carpet\"}], \"table\": [{\"cells\": {\"fill\": {\"color\": \"#EBF0F8\"}, \"line\": {\"color\": \"white\"}}, \"header\": {\"fill\": {\"color\": \"#C8D4E3\"}, \"line\": {\"color\": \"white\"}}, \"type\": \"table\"}], \"barpolar\": [{\"marker\": {\"line\": {\"color\": \"#E5ECF6\", \"width\": 0.5}, \"pattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}}, \"type\": \"barpolar\"}], \"pie\": [{\"automargin\": true, \"type\": \"pie\"}]}, \"layout\": {\"autotypenumbers\": \"strict\", \"colorway\": [\"#636efa\", \"#EF553B\", \"#00cc96\", \"#ab63fa\", \"#FFA15A\", \"#19d3f3\", \"#FF6692\", \"#B6E880\", \"#FF97FF\", \"#FECB52\"], \"font\": {\"color\": \"#2a3f5f\"}, \"hovermode\": \"closest\", \"hoverlabel\": {\"align\": \"left\"}, \"paper_bgcolor\": \"white\", \"plot_bgcolor\": \"#E5ECF6\", \"polar\": {\"bgcolor\": \"#E5ECF6\", \"angularaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}, \"radialaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}}, \"ternary\": {\"bgcolor\": \"#E5ECF6\", \"aaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}, \"baxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}, \"caxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\"}}, \"coloraxis\": {\"colorbar\": {\"outlinewidth\": 0, \"ticks\": \"\"}}, \"colorscale\": {\"sequential\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"sequentialminus\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]], \"diverging\": [[0, \"#8e0152\"], [0.1, \"#c51b7d\"], [0.2, \"#de77ae\"], [0.3, \"#f1b6da\"], [0.4, \"#fde0ef\"], [0.5, \"#f7f7f7\"], [0.6, \"#e6f5d0\"], [0.7, \"#b8e186\"], [0.8, \"#7fbc41\"], [0.9, \"#4d9221\"], [1, \"#276419\"]]}, \"xaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\", \"title\": {\"standoff\": 15}, \"zerolinecolor\": \"white\", \"automargin\": true, \"zerolinewidth\": 2}, \"yaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"ticks\": \"\", \"title\": {\"standoff\": 15}, \"zerolinecolor\": \"white\", \"automargin\": true, \"zerolinewidth\": 2}, \"scene\": {\"xaxis\": {\"backgroundcolor\": \"#E5ECF6\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"showbackground\": true, \"ticks\": \"\", \"zerolinecolor\": \"white\", \"gridwidth\": 2}, \"yaxis\": {\"backgroundcolor\": \"#E5ECF6\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"showbackground\": true, \"ticks\": \"\", \"zerolinecolor\": \"white\", \"gridwidth\": 2}, \"zaxis\": {\"backgroundcolor\": \"#E5ECF6\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"showbackground\": true, \"ticks\": \"\", \"zerolinecolor\": \"white\", \"gridwidth\": 2}}, \"shapedefaults\": {\"line\": {\"color\": \"#2a3f5f\"}}, \"annotationdefaults\": {\"arrowcolor\": \"#2a3f5f\", \"arrowhead\": 0, \"arrowwidth\": 1}, \"geo\": {\"bgcolor\": \"white\", \"landcolor\": \"#E5ECF6\", \"subunitcolor\": \"white\", \"showland\": true, \"showlakes\": true, \"lakecolor\": \"white\"}, \"title\": {\"x\": 0.05}, \"mapbox\": {\"style\": \"light\"}}}, \"xaxis\": {\"anchor\": \"y\", \"domain\": [0.0, 1.0], \"title\": {\"text\": \"runs\"}, \"showgrid\": false}, \"yaxis\": {\"anchor\": \"x\", \"domain\": [0.0, 1.0], \"title\": {\"text\": \"balls\"}, \"showgrid\": false}, \"coloraxis\": {\"colorbar\": {\"title\": {\"text\": \"average\"}}, \"colorscale\": [[0.0, \"#0d0887\"], [0.1111111111111111, \"#46039f\"], [0.2222222222222222, \"#7201a8\"], [0.3333333333333333, \"#9c179e\"], [0.4444444444444444, \"#bd3786\"], [0.5555555555555556, \"#d8576b\"], [0.6666666666666666, \"#ed7953\"], [0.7777777777777778, \"#fb9f3a\"], [0.8888888888888888, \"#fdca26\"], [1.0, \"#f0f921\"]]}, \"legend\": {\"tracegroupgap\": 0, \"itemsizing\": \"constant\"}, \"margin\": {\"t\": 60}, \"uniformtext\": {\"minsize\": 10, \"mode\": \"hide\"}, \"annotations\": [{\"showarrow\": false, \"text\": \"HH Pandya\", \"x\": 1, \"y\": 5, \"yshift\": 15}, {\"showarrow\": false, \"text\": \"A Nortje\", \"x\": 35, \"y\": 22, \"yshift\": 15}, {\"showarrow\": false, \"text\": \"DL Chahar\", \"x\": 73, \"y\": 53, \"yshift\": 15}, {\"showarrow\": false, \"text\": \"B Kumar\", \"x\": 52, \"y\": 49, \"yshift\": 15}]}}",
            "pieJSON": "{\"data\": [{\"domain\": {\"x\": [0.0, 1.0], \"y\": [0.0, 1.0]}, \"hovertemplate\": \"way=%{label}<br>outs=%{value}<extra></extra>\", \"labels\": [\"caught\", \"run out\", \"caught and bowled\", \"stumped\", \"bowled\", \"lbw\"], \"legendgroup\": \"\", \"name\": \"\", \"showlegend\": true, \"values\": [47, 8, 2, 3, 9, 5], \"type\": \"pie\", \"marker\": {\"line\": {\"color\": \"#000000\", \"width\": 1}}, \"textinfo\": \"percent+label\", \"textposition\": \"inside\"}], \"layout\": {\"template\": {\"data\": {\"barpolar\": [{\"marker\": {\"line\": {\"color\": \"rgb(237,237,237)\", \"width\": 0.5}, \"pattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}}, \"type\": \"barpolar\"}], \"bar\": [{\"error_x\": {\"color\": \"rgb(51,51,51)\"}, \"error_y\": {\"color\": \"rgb(51,51,51)\"}, \"marker\": {\"line\": {\"color\": \"rgb(237,237,237)\", \"width\": 0.5}, \"pattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}}, \"type\": \"bar\"}], \"carpet\": [{\"aaxis\": {\"endlinecolor\": \"rgb(51,51,51)\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"minorgridcolor\": \"white\", \"startlinecolor\": \"rgb(51,51,51)\"}, \"baxis\": {\"endlinecolor\": \"rgb(51,51,51)\", \"gridcolor\": \"white\", \"linecolor\": \"white\", \"minorgridcolor\": \"white\", \"startlinecolor\": \"rgb(51,51,51)\"}, \"type\": \"carpet\"}], \"choropleth\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"type\": \"choropleth\"}], \"contourcarpet\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"type\": \"contourcarpet\"}], \"contour\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"colorscale\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]], \"type\": \"contour\"}], \"heatmapgl\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"colorscale\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]], \"type\": \"heatmapgl\"}], \"heatmap\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"colorscale\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]], \"type\": \"heatmap\"}], \"histogram2dcontour\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"colorscale\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]], \"type\": \"histogram2dcontour\"}], \"histogram2d\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"colorscale\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]], \"type\": \"histogram2d\"}], \"histogram\": [{\"marker\": {\"pattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}}, \"type\": \"histogram\"}], \"mesh3d\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"type\": \"mesh3d\"}], \"parcoords\": [{\"line\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"parcoords\"}], \"pie\": [{\"automargin\": true, \"type\": \"pie\"}], \"scatter3d\": [{\"line\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scatter3d\"}], \"scattercarpet\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scattercarpet\"}], \"scattergeo\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scattergeo\"}], \"scattergl\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scattergl\"}], \"scattermapbox\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scattermapbox\"}], \"scatterpolargl\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scatterpolargl\"}], \"scatterpolar\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scatterpolar\"}], \"scatter\": [{\"fillpattern\": {\"fillmode\": \"overlay\", \"size\": 10, \"solidity\": 0.2}, \"type\": \"scatter\"}], \"scatterternary\": [{\"marker\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"type\": \"scatterternary\"}], \"surface\": [{\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}, \"colorscale\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]], \"type\": \"surface\"}], \"table\": [{\"cells\": {\"fill\": {\"color\": \"rgb(237,237,237)\"}, \"line\": {\"color\": \"white\"}}, \"header\": {\"fill\": {\"color\": \"rgb(217,217,217)\"}, \"line\": {\"color\": \"white\"}}, \"type\": \"table\"}]}, \"layout\": {\"annotationdefaults\": {\"arrowhead\": 0, \"arrowwidth\": 1}, \"autotypenumbers\": \"strict\", \"coloraxis\": {\"colorbar\": {\"outlinewidth\": 0, \"tickcolor\": \"rgb(237,237,237)\", \"ticklen\": 6, \"ticks\": \"inside\"}}, \"colorscale\": {\"sequential\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]], \"sequentialminus\": [[0, \"rgb(20,44,66)\"], [1, \"rgb(90,179,244)\"]]}, \"colorway\": [\"#F8766D\", \"#A3A500\", \"#00BF7D\", \"#00B0F6\", \"#E76BF3\"], \"font\": {\"color\": \"rgb(51,51,51)\"}, \"geo\": {\"bgcolor\": \"white\", \"lakecolor\": \"white\", \"landcolor\": \"rgb(237,237,237)\", \"showlakes\": true, \"showland\": true, \"subunitcolor\": \"white\"}, \"hoverlabel\": {\"align\": \"left\"}, \"hovermode\": \"closest\", \"paper_bgcolor\": \"white\", \"plot_bgcolor\": \"rgb(237,237,237)\", \"polar\": {\"angularaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\"}, \"bgcolor\": \"rgb(237,237,237)\", \"radialaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\"}}, \"scene\": {\"xaxis\": {\"backgroundcolor\": \"rgb(237,237,237)\", \"gridcolor\": \"white\", \"gridwidth\": 2, \"linecolor\": \"white\", \"showbackground\": true, \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\", \"zerolinecolor\": \"white\"}, \"yaxis\": {\"backgroundcolor\": \"rgb(237,237,237)\", \"gridcolor\": \"white\", \"gridwidth\": 2, \"linecolor\": \"white\", \"showbackground\": true, \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\", \"zerolinecolor\": \"white\"}, \"zaxis\": {\"backgroundcolor\": \"rgb(237,237,237)\", \"gridcolor\": \"white\", \"gridwidth\": 2, \"linecolor\": \"white\", \"showbackground\": true, \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\", \"zerolinecolor\": \"white\"}}, \"shapedefaults\": {\"fillcolor\": \"black\", \"line\": {\"width\": 0}, \"opacity\": 0.3}, \"ternary\": {\"aaxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\"}, \"baxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\"}, \"bgcolor\": \"rgb(237,237,237)\", \"caxis\": {\"gridcolor\": \"white\", \"linecolor\": \"white\", \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\"}}, \"xaxis\": {\"automargin\": true, \"gridcolor\": \"white\", \"linecolor\": \"white\", \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\", \"title\": {\"standoff\": 15}, \"zerolinecolor\": \"white\"}, \"yaxis\": {\"automargin\": true, \"gridcolor\": \"white\", \"linecolor\": \"white\", \"showgrid\": true, \"tickcolor\": \"rgb(51,51,51)\", \"ticks\": \"outside\", \"title\": {\"standoff\": 15}, \"zerolinecolor\": \"white\"}}}, \"legend\": {\"tracegroupgap\": 0}, \"margin\": {\"t\": 60}, \"piecolorway\": [\"rgb(75, 41, 145)\", \"rgb(135, 44, 162)\", \"rgb(192, 54, 157)\", \"rgb(234, 79, 136)\", \"rgb(250, 120, 118)\", \"rgb(246, 169, 122)\", \"rgb(237, 217, 163)\"], \"uniformtext\": {\"minsize\": 12, \"mode\": \"hide\"}}}",
            "player": "Shubman Gill",
            "player_color": "#77c7f2",
            "player_img": "https://res.cloudinary.com/dzkylos5o/image/upload/v1691819995/gujarat-titans/Shubman%20Gill.png"
        }
    );

    const [player, setPlayer] = useState(data["player"]);


    const batheaders = data["batNest"][0];
    const bowlheaders = data["bowlNest"][0];

    const [batData, setBatData] = useState(data["batNest"].slice(1).map(dataArray => {
        const obj = {};
        batheaders.forEach((header, index) => {
            obj[header] = dataArray[index];
        });
        return obj;
    }));

    const [bowlData, setBowlData] = useState(data["bowlNest"].slice(1).map(dataArray => {
        const obj = {};
        bowlheaders.forEach((header, index) => {
            obj[header] = dataArray[index];
        });
        return obj;
    }));


    useEffect(() => {
        console.log("hi", player);
        if (player !== "") {
            fetch(`https://ipl-sabermetrics.onrender.com/playersearch?player=${encodeURIComponent(player)}`
                , {
                    method: 'POST',
                }).then((response) => response.json()).then((json) => { console.log(json); setData(json); });
        }
        console.log("data", data["player_color"]);

    }, [player]);

    useEffect(() => {
        document.documentElement.style.setProperty('--playercolor', data["player_color"]);
        setBatData(data["batNest"].slice(1).map(dataArray => {
            const obj = {};
            batheaders.forEach((header, index) => {
                obj[header] = dataArray[index];
            });
            return obj;
        }));

        setBowlData(data["bowlNest"].slice(1).map(dataArray => {
            const obj = {};
            bowlheaders.forEach((header, index) => {
                obj[header] = dataArray[index];
            });
            return obj;
        }))

        setPlayer(data["player"]);

    }, [data]);


    return (
        <>
            <PlayerSearchForm setPlayer={setPlayer} />
            <PlayerProfileImage player={player} player_img={data["player_img"]} ></PlayerProfileImage>
            <p className="text-3xl font-extrabold font-PlayfairDisplay mx-[3%] px-10">Batting</p>

            <DataTable columns={batColumns} data={batData} />

            <p className="text-3xl font-extrabold font-PlayfairDisplay mx-[3%] px-10">Bowling</p>

            <DataTable columns={bowlColumns} data={bowlData} />

        </>

    )
}

export default Player