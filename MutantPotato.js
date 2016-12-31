function showEggThrow(id) {
 	createEgg(id);
 	var childEl = document.createElement('img');
 	childEl.src = 'http://i.imgur.com/zf5Gv7P.png';
 	childEl.id = 'throw_egg_' + id; 	childEl.style.opacity = 1.0;
 	childEl.style.position = 'absolute';
 	childEl.style.width = 2 + '%';
 	childEl.style.left = 49 + '%';
 	childEl.style.top = 34 + '%';
 	childEl.style.height = 2 + '%';
 	childEl.style.zIndex = 1000;
 	childEl.style.display = 'none';
 	 	document.getElementById('container').appendChild(childEl);
 	 	setTimeout("document.getElementById('throw_egg_"+id+"').style.display='block'; updateEggThrow("+id+",0);", 300 + Math.random() * 800);
 } 
function updateEggThrow(id, i) {
 	var max = 30;
 	i = parseInt(i);
 	var eggEl = document.getElementById('throw_egg_' + id);
 	if(i > max * 0.75) 	{ 
		eggEl.parentNode.removeChild(eggEl);
 		showEggBurst(id);
 		return;
 	} 	eggEl.style.top = 34 - i/max * (34 - 5) + '%';
 	eggEl.style.height = 2 + i/max * 58 + '%';
 	eggEl.style.width = 2 + i/max * 74 + '%'; 
	eggEl.style.left = 49 - i/max * (49 - 12) + '%';
 	setTimeout("updateEggThrow(" + id + "," + (i+1)+ ");", 20); } function showEggBurst(id) {
 	showEgg(id);
 	 	setTimeout("updateEggBurst("+id+",0);", 0);
 }
 function updateEggBurst(id, i) {
 	var max = 30;
 	var midPoint = max/2;
 	i = parseInt(i);
 	var eggEl = document.getElementById('egg_' + id);
 	if(i > max)
 	{ 		
//eggEl.parentNode.removeChild(eggEl);
 		setTimeout("updateEgg("+id+",0);", 1000);
 		return;
 	}
 	var growth = 5;
 	var percentage = (midPoint - Math.abs(midPoint - i))/midPoint;
 	eggEl.style.width = percentage * growth + 76 + '%';
 	eggEl.style.left = 12 - (percentage * growth)/2 + '%'; 	eggEl.style.top = 5 - (percentage * growth)/2 + '%';
 	eggEl.style.height = percentage * growth + 60 + '%';
 	setTimeout("updateEggBurst(" + id + "," + (i+1)+ ");", 20);
 }
 function createEgg(id) {
 	var childEl = document.createElement('img');
 	childEl.src = 'http://i.imgur.com/WvswZbz.png';
 	childEl.id = 'egg_' + id;
 	childEl.style.opacity = 1.0;
 	childEl.style.position = 'absolute';
 	childEl.style.width = 76 + '%';
 	childEl.style.left = 12 + '%'; 
	childEl.style.top = 5 + '%';
 	childEl.style.height = 60 + '%'; 
	childEl.style.zIndex = 1000;
 	childEl.style.display = 'none';
 	 	document.getElementById('container').appendChild(childEl);
 }
 function showEgg(id) { 
	document.getElementById('egg_' + id).style.display = 'block';
 }
 function updateEgg(id, i) {
 	var max = 150;
 	var fadeStart = 75;
 	i = parseInt(i);
 	var eggEl = document.getElementById('egg_' + id); 	
if(i > max)
 	{
 		eggEl.parentNode.removeChild(eggEl);
 		return;
 	} 
	eggEl.style.opacity = Math.min(1, ((max - fadeStart) - (i - fadeStart))/(max - fadeStart));
 	eggEl.style.top = 5 + i/max * 30 + '%';
 	eggEl.style.height = 60 + i/max * 20 + '%';

 	setTimeout("updateEgg(" + id + "," + (i+1)+ ");", 20);
 } 
var lastEggThrow = 0; function throwEgg(id) {
 	console.log('throw id: ' + id);
 	if(id <= lastEggThrow)
 	{ 		
// Egg already thrown
 		//return;
 	} 
	lastEggThrow = id;
 	 	showEggThrow(id);
 }