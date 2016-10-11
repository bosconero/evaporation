function controllo(){
if(document.getElementById('rck').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la R<inf>ck>/inf></span>" ;
document.getElementById('rck').focus();
} else{
controllo1()}
}
function controllo1(){
if(document.getElementById('digiucont').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire la distanza dei giunti di contrazione</span>" ;
document.getElementById('digiucont').focus();
} else{
controllo2()}
}
function controllo2(){
if(document.getElementById('umidita').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire l'umidit$agrave; relativa</span>" ;
document.getElementById('umidita').focus();
} else{
controllo3()}
}
function controllo3(){
if(document.getElementById('spesspav').value==''){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi inserire lo spessore del pavimento </span>" ;
document.getElementById('spesspav').focus();
} else{
controllo4()}
}
function controllo4(){
if(document.getElementById('classesp').value=='null'){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi scegliere la classe di esposizione del calcestruzzo</span>" ;
document.getElementById('classesp').focus();
} else{
controllo5()}
}
function controllo5(){
if(document.getElementById('tipogetto').value=='null'){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'>Devi lo spessore del pavimento</span>" ;
document.getElementById('tipogetto').focus();
} else{
controllo6()}
}
function controllo6{
if(document.getElementById('barriera').value==""){
attenzione.innerHTML="<span style='background-color:#222;font:bold 16px arial;color:#fff;line-height:22px;display:block;margin:0 auto;'> Devi rispondere alla domanda";
document.getElementById('barriera').focus;
} else{
imbarcamento()}
}


function imbarcamento(){
 document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var rck=document.getElementById('rck').value;
var distcont=document.getElementById('digiucont').value;
var umrel=document.getElementById('umidita').value;
var spess=document.getElementById('spesspav').value;
var cespo=document.getElementById('classesp').value;
var tgetto=document.getElementById('tipogetto').value;
var barvap=document.getElementById('barriera').value;
if (tgetto=="diretto" && cespo==0.6){
srit=700;}
if (tgetto=="diretto" && cespo==0.55){
srit=650;}
if (tgetto=="diretto" && cespo==0.5){
srit=600;}
if (tgetto=="pompa" && cespo==0.6){
srit=800;}
if (tgetto=="pompa" && cespo==0.55){
srit=750;}
if (tgetto=="pompa" && cespo==0.5){
srit=700;}
if(umrel<40){
umi=1.15;
}else if (umrel==40) {
umi=1.1 ;
}else if (umrel>40 && umrel<60){
umi=1.1-((umrel-40)*0.01);
}else if(umrel>=60 && umrel<80) {
umi=0.9-((umrel-60)*0.02);
}else if(umrel>80){
umi=0.45;
}

ritteo=(umi*srit*1.15)/1000000;
disdia=Math.sqrt((Math.pow(distcont,2)+Math.pow(distcont,2))) ;
raggio=((spess*(1-ritteo))/ritteo)/100;
alfa=disdia/(raggio+(spess/100));
alfa1=alfa/2;
cosalfa1=Math.cos(alfa1);
alfa2=1-cosalfa1;
imb1=(raggio*alfa2)*100;
imbarcafinale=imb1-((100-(spess*2.35)*imb1)/100);
imbarcamfinale=Math.round(imbarcafinale*100)/100;
if (barvap="no"){
imbarcamentot.innerHTML="La piastra di calcestruzzo subir&agrave; un imbarcamento tra il centro e l'incrocio dei giunti di cm <span style='font:bold 18px arial;color:#ff2200;'>"+imbarcamfinale+"  </span>";
}else if (barvap="si"){
imbavapo=imbarcafinale+(imbarcafinale*15/100);
imbavap=Math.round(imbavapo*100)/100;
imbarcamentot.innerHTML="nel caso il pavimento sia su un supporto impermeabile o foglio di polietilene  l'imbarcamento tra il centro e l'incrocio dei giunti sar&agrave; di cm <span style='font:bold 20px arial;color:#ff2200;'>"+imbavap+"  </span>";
if{barvap=="no"}{
imbares=imbarcamfinale;
} else if(barvap=="si"){
imbares=imbavap;
}

var canvas = document.getElementById("imbarcamento");
var ctx=canvas.getContext("2d");
ctx.font="25px arial";
ctx.fillStyle = "#000040";
ctx.textAlign = "center";
ctx.fillText(imbares+" cm", 260, 125);
 }
}
function init(){
var viewportScale = 1 / window.devicePixelRatio;
document.getElementById("viewport").setAttribute("content","user-scalable=no, initial-scale="+viewportScale+", minimum-scale=0.2, maximum-scale=2, width=device-width");
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 navigator.app.exitApp();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "imbarcamento.html";

} 
function inizio(){
var viewportScale = 1 / window.devicePixelRatio;
document.getElementById("viewport").setAttribute("content","user-scalable=no, initial-scale="+viewportScale+", minimum-scale=0.2, maximum-scale=2, width=device-width");
}


 </script>
