parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./ajax-loader.gif":[["ajax-loader.dd4d6c6b.gif","efLh"],"efLh"],"./fonts/slick.eot":[["slick.89a384e8.eot","LUen"],"LUen"],"./fonts/slick.woff":[["slick.e2a2ba3c.woff","durV"],"durV"],"./fonts/slick.ttf":[["slick.b15f1b73.ttf","jmjS"],"jmjS"],"./fonts/slick.svg":[["slick.cc44e200.svg","wSKV"],"wSKV"],"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"],"./../fonts/montserrat-v15-latin-regular.eot":[["montserrat-v15-latin-regular.d6560801.eot","Clvb"],"Clvb"],"./../fonts/montserrat-v15-latin-regular.woff2":[["montserrat-v15-latin-regular.2c9a9f66.woff2","VWGU"],"VWGU"],"./../fonts/montserrat-v15-latin-regular.woff":[["montserrat-v15-latin-regular.e709e0a7.woff","ZHAF"],"ZHAF"],"./../fonts/montserrat-v15-latin-regular.ttf":[["montserrat-v15-latin-regular.74aa654b.ttf","tBR7"],"tBR7"],"./../fonts/montserrat-v15-latin-regular.svg":[["montserrat-v15-latin-regular.be13e628.svg","CnQX"],"CnQX"],"./../fonts/montserrat-v15-latin-500.eot":[["montserrat-v15-latin-500.d062e8e4.eot","g0TN"],"g0TN"],"./../fonts/montserrat-v15-latin-500.woff2":[["montserrat-v15-latin-500.d62ee36a.woff2","MVur"],"MVur"],"./../fonts/montserrat-v15-latin-500.woff":[["montserrat-v15-latin-500.8d467d72.woff","kjEl"],"kjEl"],"./../fonts/montserrat-v15-latin-500.ttf":[["montserrat-v15-latin-500.bfefcd3b.ttf","wATj"],"wATj"],"./../fonts/montserrat-v15-latin-500.svg":[["montserrat-v15-latin-500.0b20f664.svg","FSZd"],"FSZd"],"./../fonts/montserrat-v15-latin-500italic.eot":[["montserrat-v15-latin-500italic.930fed44.eot","yjMz"],"yjMz"],"./../fonts/montserrat-v15-latin-500italic.woff2":[["montserrat-v15-latin-500italic.5a2b2241.woff2","A6Md"],"A6Md"],"./../fonts/montserrat-v15-latin-500italic.woff":[["montserrat-v15-latin-500italic.6574f67d.woff","GUvM"],"GUvM"],"./../fonts/montserrat-v15-latin-500italic.ttf":[["montserrat-v15-latin-500italic.e517208f.ttf","QFOT"],"QFOT"],"./../fonts/montserrat-v15-latin-500italic.svg":[["montserrat-v15-latin-500italic.cc5967c5.svg","ZB15"],"ZB15"],"./../fonts/caveat-brush-v6-latin-regular.eot":[["caveat-brush-v6-latin-regular.7735d719.eot","IWk2"],"IWk2"],"./../fonts/caveat-brush-v6-latin-regular.woff2":[["caveat-brush-v6-latin-regular.b846719e.woff2","CkhE"],"CkhE"],"./../fonts/caveat-brush-v6-latin-regular.woff":[["caveat-brush-v6-latin-regular.c1a233de.woff","B0yJ"],"B0yJ"],"./../fonts/caveat-brush-v6-latin-regular.ttf":[["caveat-brush-v6-latin-regular.f7693c93.ttf","xeOK"],"xeOK"],"./../fonts/caveat-brush-v6-latin-regular.svg":[["caveat-brush-v6-latin-regular.04b597fd.svg","YfzK"],"YfzK"],"./../images/background/bgtop-mob.png":[["bgtop-mob.94ba4a6a.png","bVzA"],"bVzA"],"./../images/background/bgtop-tablet.png":[["bgtop-tablet.a879660d.png","YD7T"],"YD7T"],"./../images/background/bgtop-desktop.png":[["bgtop-desktop.6decd979.png","CaUr"],"CaUr"],"./../images/png/mobile/header-donuts_mobile_2x.png":[["header-donuts_mobile_2x.3a6b7626.png","ZPxl"],"ZPxl"],"./../images/png/mobile/header-donuts_mobile_4x.png":[["header-donuts_mobile_4x.feb84117.png","v69v"],"v69v"],"./../images/png/tablet/header-donuts_tablet.png":[["header-donuts_tablet.00a98392.png","uEwU"],"uEwU"],"./../images/png/tablet/header-donuts_tablet_2x.png":[["header-donuts_tablet_2x.20a9e6d9.png","aWCO"],"aWCO"],"./../images/png/desctop/header-donuts_desctop.png":[["header-donuts_desctop.c4515400.png","r1N6"],"r1N6"],"./../images/png/desctop/header-donuts_desctop_2x.png":[["header-donuts_desctop_2x.e1d09e10.png","XCBw"],"XCBw"],"./../images/png/desctop/spoon_desctop.png":[["spoon_desctop.4720b0da.png","l7qh"],"l7qh"],"./../images/png/desctop/spoon_desctop_2x.png":[["spoon_desctop_2x.d7e62614.png","we7W"],"we7W"],"./../images/png/mobile/free-cupcake-box_mobile.png":[["free-cupcake-box_mobile.00a2a044.png","pi1Z"],"pi1Z"],"./../images/png/mobile/free-cupcake-box_mobile_2x.png":[["free-cupcake-box_mobile_2x.4e06d795.png","sIQx"],"sIQx"],"./../images/png/tablet/free-cupcake-box_tablet.png":[["free-cupcake-box_tablet.693493e2.png","xkRS"],"xkRS"],"./../images/png/tablet/free-cupcake-box_tablet_2x.png":[["free-cupcake-box_tablet_2x.e88ea5ef.png","uaFK"],"uaFK"],"./../images/png/desctop/free-cupcake-box_desctop.png":[["free-cupcake-box_desctop.f221cc4d.png","MYWn"],"MYWn"],"./../images/png/desctop/free-cupcake-box_desctop_2x.png":[["free-cupcake-box_desctop_2x.a1620f73.png","pbq7"],"pbq7"],"./../images/png/mobile/donat1_mobile.png":[["donat1_mobile.b60e8e45.png","e4FO"],"e4FO"],"./../images/png/tablet/donut1_tablet.png":[["donut1_tablet.b60e8e45.png","r55H"],"r55H"],"./../images/png/desctop/donut1_desctop.png":[["donut1_desctop.9150b4d0.png","H67q"],"H67q"],"./../images/png/mobile/donat2_mobile.png":[["donat2_mobile.943db96b.png","qa7J"],"qa7J"],"./../images/png/tablet/donut2_tablet.png":[["donut2_tablet.943db96b.png","EvIY"],"EvIY"],"./../images/png/desctop/donut2_desctop.png":[["donut2_desctop.06cd1cfd.png","JKoL"],"JKoL"],"./../images/png/mobile/donat3_mobile.png":[["donat3_mobile.60e82731.png","erPp"],"erPp"],"./../images/png/tablet/donut3_tablet.png":[["donut3_tablet.60e82731.png","dAjH"],"dAjH"],"./../images/png/desctop/donut3_desctop.png":[["donut3_desctop.6e78223e.png","VDSi"],"VDSi"],"./../images/png/mobile/donat4_mobile.png":[["donat4_mobile.f1414a8a.png","oSXG"],"oSXG"],"./../images/png/tablet/donut4_tablet.png":[["donut4_tablet.f1414a8a.png","W7c8"],"W7c8"],"./../images/png/desctop/donut4_desctop.png":[["donut4_desctop.2c50c987.png","T61h"],"T61h"],"./../images/png/mobile/donat1_mobile_2x.png":[["donat1_mobile_2x.5b8b27cf.png","YwBL"],"YwBL"],"./../images/png/tablet/donut1_tablet_2x.png":[["donut1_tablet_2x.5b8b27cf.png","cGu8"],"cGu8"],"./../images/png/desctop/donut1_desctop_2x.png":[["donut1_desctop_2x.31a93bf0.png","aVMg"],"aVMg"],"./../images/png/mobile/donat2_mobile_2x.png":[["donat2_mobile_2x.7d42e711.png","Hix8"],"Hix8"],"./../images/png/tablet/donut2_tablet_2x.png":[["donut2_tablet_2x.7d42e711.png","RL30"],"RL30"],"./../images/png/desctop/donut2_desctop_2x.png":[["donut2_desctop_2x.d59a4e0b.png","IZZO"],"IZZO"],"./../images/png/mobile/donat3_mobile_2x.png":[["donat3_mobile_2x.83919baa.png","E0dd"],"E0dd"],"./../images/png/tablet/donut3_tablet_2x.png":[["donut3_tablet_2x.83919baa.png","QdXv"],"QdXv"],"./../images/png/desctop/donut3_desctop_2x.png":[["donut3_desctop_2x.cab508b9.png","IJ8a"],"IJ8a"],"./../images/png/mobile/donat4_mobile_2x.png":[["donat4_mobile_2x.e7702c1d.png","cug0"],"cug0"],"./../images/png/tablet/donut4_tablet_2x.png":[["donut4_tablet_2x.e7702c1d.png","BGO5"],"BGO5"],"./../images/png/desctop/donut4_desctop_2x.png":[["donut4_desctop_2x.5f7e2143.png","QRi6"],"QRi6"],"./../images/background/bgbott-mob.png":[["bgbott-mob.0075bc7f.png","I0dK"],"I0dK"],"./../images/background/bgbott-tablet.png":[["bgbott-tablet.de096284.png","k3Mw"],"k3Mw"],"./../images/background/bgbott-desk.png":[["bgbott-desk.8707392f.png","hc6P"],"hc6P"],"./../images/png/mobile/wheat_flour_mobile.png":[["wheat_flour_mobile.3c796441.png","Qnlw"],"Qnlw"],"./../images/png/mobile/wheat_flour_mobile_2x.png":[["wheat_flour_mobile_2x.25b1d3d2.png","LOVa"],"LOVa"],"./../images/png/tablet/wheat_flour_tablet.png":[["wheat_flour_tablet.451a9018.png","jhSN"],"jhSN"],"./../images/png/tablet/wheat_flour_tablet_2x.png":[["wheat_flour_tablet_2x.c6c8f173.png","LG8u"],"LG8u"],"./../images/png/desctop/wheat_flour_desctop.png":[["wheat_flour_desctop.095f753f.png","fIkr"],"fIkr"],"./../images/png/desctop/wheat_flour_desctop_2x.png":[["wheat_flour_desctop_2x.180476ba.png","q7rS"],"q7rS"]}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss");
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/donut-project/src.94a6613c.js.map