var policyurl = "#",
    okcolor = "#7CCBDE";

document.write("<div id='cookie-bar' style='position:fixed; bottom:0; left:0; width: 100%; text-align: center; padding: 12px 0; margin:0; background: #808080;  color: #000000;  font: 14px arial, sans-serif;'><div style='display:inline-block;width:78%;margin:0; font-family: Arial;'>En continuant sur ce site, vous acceptez que nous ne sommes responsable en aucun cas de la perte de fichiers personnels, ou du fait de rendre inutilisable votre appareil -<a id='cookie-policy' href='"+policyurl+"' style='color: #000000;font-weight:bold;'>Consulter notre politique !</a>.</div><div style='width:20%;'></div></div><span id='agree' style='position:fixed;bottom:5px;right:4%;color: #000000;background: transparent;; cursor: pointer;border-radius: 3px; line-height: 30px; padding: 0 15px;margin: 0;font-weight: 600;'>ok</span>");


document.getElementById("agree").addEventListener("click", hideCookiebar);
function hideCookiebar() {
    document.getElementById("agree").innerHTML = "";
  document.getElementById("cookie-bar").style.display = 'none';
}


$(document).ready(function() {
    $('#agree').click(function(){
     $('#cookie-bar').hide(500);
      // document.getElementById("agree").innerHTML = "cookies";
    document.getElementById("agree").innerHTML = "<a href='policyurl' target='_blank' style='color:white;'>Our cookies policy</a>";
   });
});