function fR(angka){
var reverse = angka.toFixed(0).split('').reverse().join(''),
ribuan = reverse.match(/\d{1,3}/g);
return ribuan = ribuan.join('.').split('').reverse().join('');
}
function s0(ss){
s100 = ss / 100 + 0.5; return s100 = s100.toFixed(0) * 100; 
}
function phi(){
brt = di * di * 156.6 * 0.006165;
berat = brt.toFixed(2);
  if (di < 5.6){hbes = Number(hwmes) + 200}
  else if (di < 4.6){hbes = Number(hwmes) + 1700}
  else if (di > 9.6){hbes = Number(hwmes) + 100}
  else if (di > 10.5){hbes = Number(hwmes) + 200}
  else if (di > 11.5){hbes = Number(hwmes) + 1450}
  else{hbes = Number(hwmes)}
}
di = 4; phi(); mm = hbes * berat; m4 = fR(s0(mm))+" per lembar";mm4 = mm * 10; mm4 = fR(mm4);
di = 5; phi(); mm = hbes * berat; m5 = fR(s0(mm))+" per lembar";mm5 = mm * 10; mm5 = fR(mm5);
di = 6; phi(); mm = hbes * berat; m6 = fR(s0(mm))+" per lembar";mm6 = mm * 10; mm6 = fR(mm6);
di = 7; phi(); mm = hbes * berat; m7 = fR(s0(mm));
di = 8; phi(); mm = hbes * berat; m8 = fR(s0(mm));
di = 9; phi(); mm = hbes * berat; m9 = fR(s0(mm))+" per lmb";
di = 10; phi(); mm = hbes * berat; m10 = fR(s0(mm))+" / lmb";
di = 11; phi(); mm = hbes * berat; m11 = fR(s0(mm));
di = 12; phi(); mm = hbes * berat; m12 = fR(s0(mm));
var im = Math.floor(7*Math.random());
if (im > 4){m5 = mm5+" per roll";m10 = hbes+" per kg";}if(im < 2){m6 = mm6+" per roll";m9 = hbes+" per kg";}if(im < 4){m4 = mm4+" / roll";m7 = hbes+" / kg";}
function bphi(){
bbrt = bdi * bdi * 12 * 0.006165;
bberat = bbrt.toFixed(2);
  if (bdi < 6.1){bhbes = Number(hbesi) + 400}
  else if (bdi > 12.9){bhbes = Number(hbesi) + 50}
  else{bhbes = Number(hbesi)}
}
bdi = 6; bphi(); bb = bhbes * bberat; b6 = fR(s0(bb))+" / btg";
bdi = 8; bphi(); bb = bhbes * bberat; b8 = fR(s0(bb))+" per batang";
bdi = 10; bphi(); bb = bhbes * bberat; b10 = fR(s0(bb))+" per lonjor";
bdi = 12; bphi(); bb = bhbes * bberat; b12 = fR(s0(bb))+" per btg";
bdi = 13; bphi(); bb = bhbes * bberat; b13 = fR(s0(bb))+" per ljr";
bdi = 16; bphi(); bb = bhbes * bberat; b16 = fR(s0(bb))+" per batang";
bdi = 19; bphi(); bb = bhbes * bberat; b19 = fR(s0(bb))+" per batang";
bdi = 22; bphi(); bb = bhbes * bberat; b22 = fR(s0(bb))+" / batang";
bdi = 25; bphi(); bb = bhbes * bberat; b25 = fR(s0(bb))+" per btg";
bdi = 32; bphi(); bb = bhbes * bberat; b32 = fR(s0(bb))+" / batang";
if (im > 4){b10 = bhbes+" per kg";b25 = fR(bhbes * 1000) +" / ton";}
if(im < 2){b16 = fR(bhbes * 1000) +" per ton";b8 = bhbes+" / KG";}
if(im < 4){b19 = bhbes+" per kg";b32 = bhbes+" / kg";b6 = fR(bhbes * 1000) +" / ton";}
var bb = new Array ();
bb[0] = " Termurah";
bb[1] = " Terbaik";
bb[2] = " Terlaris";
bb[3] = " Murah";
bb[4] = " Laris";
bb[5] = "";
bb[6] = " Bulan Ini";
bb[7] = " Hari Ini";
bb[8] = " Terkini";
bb[9] = " Terbaru";
var bc = new Array ();
bc[0] = "Update ";
bc[1] = "";
bc[2] = "Info ";
bc[3] = "Informasi ";
bc[4] = "Inilah ";
bc[5] = "Dapatkan ";
bc[6] = "Buka: ";
bc[7] = "Selengkapnya: ";
bc[8] = "Update: ";
bc[9] = "Update - ";

function count(main_str, sub_str){
main_str += '';
sub_str += '';
if (sub_str.length <= 0){return main_str.length + 1;}
subStr = sub_str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
return (main_str.match(new RegExp(subStr, 'gi')) || []).length;
}
var nui = Math.floor(3*Math.random());
if (nui > 1){var i1 = 0}else{var i1 = 1}
var jjud = document.title; 
var byk = count(jjud, 'wiremesh');
if (byk > 0){var lab = 'Wiremesh'
s1[0] = "Wiremesh M4 harga = ";
s1[1] = "Wiremesh M5 harga = ";
s1[2] = "Wiremesh M6 harga = ";
s1[3] = "Wiremesh M7 harga = ";
s1[4] = "Wiremesh M8 harga = ";
s1[5] = "Wiremesh M9 harga = ";
s1[6] = "Wiremesh M10 harga = ";
var s2 = new Array ();
s2[0] = "Rp "+m4;
s2[1] = "Rp "+m5;
s2[2] = "Rp "+m6;
s2[3] = "Rp "+m7;
s2[4] = "Rp "+m8;
s2[5] = "Rp "+m9;
s2[6] = "Rp "+m10;   
}
else{var lab = 'Besi%20Beton'
var s1 = new Array ();
if (Math.floor(2*Math.random()) > 0){var i1 = 7};
s1[0] = "Besi Beton &#8960; 6 harga = ";
s1[1] = "Besi Beton &#8960; 8 harga = ";
s1[2] = "Besi Beton &#8960; 10 harga = ";
s1[3] = "Besi Beton &#8960; 12 harga = ";
s1[4] = "Besi Beton &#8960; 16 harga = ";
s1[5] = "Besi Beton &#8960; 19 harga = ";
s1[6] = "Besi Beton &#8960; 25 harga = ";
s1[7] = "Besi Beton D 10 harga = ";
s1[8] = "Besi Beton D 13 harga = ";
s1[9] = "Besi Beton D 16 harga = ";
s1[10] = "Besi Beton D 19 harga = ";
s1[11] = "Besi Beton D 22 harga = ";
s1[12] = "Besi Beton D 25 harga = ";
s1[13] = "Besi Beton D 32 harga = ";
var s2 = new Array ();
s2[0] = "Rp "+b6;
s2[1] = "Rp "+b8;
s2[2] = "Rp "+b10;
s2[3] = "Rp "+b12;
s2[4] = "Rp "+b16;
s2[5] = "Rp "+b19;
s2[6] = "Rp "+b25;  
s2[7] = "Rp "+b10;
s2[8] = "Rp "+b13;
s2[9] = "Rp "+b16;
s2[10] = "Rp "+b19;
s2[11] = "Rp "+b22;
s2[12] = "Rp "+b25;
s2[13] = "Rp "+b32;  
}
num = 1 + nui;
