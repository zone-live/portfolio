//////////////////////////////////////////////////////////
var dataRadar = {
    labels : ["HTML5","JS","CSS3","PHP",".NET MVC","SEO","UX Design"],
    datasets : [
        {
            fillColor : "rgba(107,181,255,0.5)",
            strokeColor : "rgba(87,161,235,1)",
            pointColor : "rgba(87,161,235,1)",
            pointStrokeColor : "#fff",
            data : [85,75,80,75,55,80,75]
        },
    ]
}
var ctx = document.getElementById("hs").getContext("2d");
var radar = new Chart(ctx).Radar(dataRadar);
new Chart(ctx).Radar(dataRadar);

//////////////////////////////////////////////////////////
var dataBar = {
    labels : ["creativity","smiles rate","communication","team work","attention to detail","organized"],
    datasets : [
        {
            fillColor : "rgba(255,107,126,0.5)",
            strokeColor : "rgba(235,87,106,1)",
            data : [80,90,80,90,70,65]
        }
    ]
}
var ctx = document.getElementById("ss").getContext("2d");
var doughnut = new Chart(ctx).Bar(dataBar);
new Chart(ctx).Bar(dataBar);

//////////////////////////////////////////////////////////
$(document).ready(function() {
	$('body').hide();
	$('body').fadeIn('slow');

	var stickyPanelSettings = {
        topPadding: 0,
        afterDetachCSSClass: "mainMenu_detach",
        savePanelSpace: false,
        onDetached: null,
        onReAttached: null,
        parentSelector: null
    };

    $(".main_menu").stickyPanel(stickyPanelSettings);
});
//////////////////////////////////////////////////////////