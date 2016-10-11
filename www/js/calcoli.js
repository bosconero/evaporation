function controllo(){
if(document.getElementById('temperaturaaria').value==''){
alert("Vous devez entrer la temperature de l'air") ;
document.getElementById('temperaturaaria').focus();
} else{
controllo1()}
}
function controllo1(){
if(document.getElementById('temperaturacls').value==''){
alert("Vous devez entrer la température du beton") ;
document.getElementById('temperaturacls').focus();
} else{
controllo2()}
}
function controllo2(){
if(document.getElementById('umidita').value==''){
alert("Vous devez entrer l'humidité relative") ;
document.getElementById('umidita').focus();
} else{
controllo3()}
}
function controllo3(){
if(document.getElementById('velvento').value==''){
alert("Vous devez entrer la vitesse du vent") ;
document.getElementById('velvento').focus();
} else{
controllo4()}
}
function controllo4(){
if(document.getElementById('quantcem').value==''){
alert("Vous devez entrer la quantité de ciment par mètre cube de béton") ;
document.getElementById('quantcem').focus();
} else{
controllo5()}
}
function controllo5(){
if(document.getElementById('spesspav').value==''){
alert("Vous devez entrer l'epaisseur de la dalle") ;
document.getElementById('spesspav').focus();
} else{
evaporation()}
}

function evaporation(){
document.getElementById('pinserimento').style.display="none";
document.getElementById('risultati').style.display="block";
var tempair=document.getElementById('temperaturaaria').value;
var tempcls=document.getElementById('temperaturacls').value;
var ur=document.getElementById('umidita').value;
var velwind=document.getElementById('velvento').value;
var qcem=document.getElementById('quantcem').value;
var spesscls=document.getElementById('spesspav').value;

ktempcls=(tempcls*1)+18;
fattempcls=Math.pow(ktempcls,2.5);


ktempair=(tempair*1)+18;
fattempair=Math.pow(ktempair,2.5);
rateur=(fattempair*(ur*1))/100;
diffcla=fattempcls-rateur;
kdiffcla=diffcla*5;
velocitaven=velwind*1;
kwind=(velwind*1)+4;
fkwind=Math.pow(10,-6)*kwind;
rateevap=kdiffcla*fkwind;
ratevap=Math.round(rateevap*Math.pow(10,2))/Math.pow(10,2);
if(ratevap < 0.5){
alertfess="<span style='font:normal 14px arial; color:#333333'>Aux conditions météo donnees les litres d'eau évaporée seront  égal à <br /></span><span style='display:block;margin:0 auto;font:bold 24px arial;color:#006600;text-align:center;'> "+ratevap+" litres/h/m2</span><br /><span style='font:bold 20px arial;color:#006600;text-align:center;'> IL N&rsquo;Y A PAS DES RISQUES DE FISSURATION</span>";
}else if(ratevap > 1 ){
alertfess="<span style='font:normal 14px arial; color:#aa2200'>Aux conditions météo donnees les litres d'eau évaporée seront  égal à <br /></span><span style='display:block;margin:0 auto;font:bold 24px arial;color:#aa2200;text-align:center;'> "+ratevap+" litres/h/m2</span><br /><span style='font:bold 20px arial;color:#aa2200;text-align:center;'> HAUTE POSSIBILITE' DE FISSURATION</span><br /><hr /><span style='font:bold 14px arial; color:#aa2200'>REMETTRE LE COULAGE DU BETON A L' APRES-MIDI</span>";
}else{
alertfess="<span style='font:normal 14px arial; color:#333333'>Aux conditions météo donnees les litres d'eau évaporée seront  égal à <br /></span><span style='display:block;margin:0 auto;font:bold 24px arial;color:#222222;text-align:center;'> "+ratevap+" litres/h/m2</span><br /><span style='font:bold 20px arial;color:#aa2200;text-align:center;'> POSSIBLE SORTIE  DES FISSURES EN PHASE PLASTIQUE</span>";
}
boxalert.innerHTML=alertfess;

//formula acqua da evaporare
aacqua=0.4*qcem;
bacqua=170-aacqua;
cacqua=(spesscls/100)*bacqua;
acquaevap=cacqua-2;       ;

//calcolo tempo
tempfratt=acquaevap-ratevap;
tempfr=Math.round(tempfratt*Math.pow(10,2))/Math.pow(10,2);
htempfr=Math.floor(tempfr);
ktempfr=tempfr-Math.floor(tempfr);
minktempfr=ktempfr*60;
minuti=Math.floor(minktempfr);
if((minuti-15)<0){
minuti_ante=60+(minuti-15);
}else {minuti_ante=minuti-15}
if((minuti-15)<0){
ore_ante=htempfr-1;
}else{
ore_ante=htempfr;}
if((minuti+15)>60)   {
minuti_post=(minuti+15)-60;
}else{
minuti_post=minuti+15;}
if((minuti+15)>60){
ore_post=htempfr+1;
}else{
ore_post=htempfr;}



tempo.innerHTML="<span style='font:normal 14px arial; color:#333;'>La vrai fenetre de finition est prevue entre</span> <br/><span style='display:block; margin-left:auto; font:bold 18px arial; color:#aa2222;text-align:center;'>"+ore_ante+" heures et  "+minuti_ante+" minutes</span><span style='font:normal 14px arial; color:#333;display:block;margin:0 auto; text-align:center;' >et  </span><br /><span style='display:block;margin-left:auto;font:bold 18px arial;color:#aa2222;text-align:center;'>"+ore_post+" heures et "+minuti_post+" minutes </span><span style='font:normal 14px arial; color:#333;text-align:center;'> avant de passer l'helicoptere.</span>";



}
function init(){
document.getElementById('intro').style.display="block";
document.getElementById('risultati').style.display="none";
document.getElementById('pinserimento').style.display="none";
}
function fineintro(){
document.getElementById('intro').style.display="none";
document.getElementById('pinserimento').style.display="block";
}
function esci(){
 window.close();
}
function ripeti(){
window.location="index.html";
}
function gocalcolo(){
 window.location = "evaporation.html";

}

