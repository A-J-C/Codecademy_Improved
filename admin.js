function adminUpdater() {
	var searches = "";
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://docs.google.com/document/d/1KA9WnGympSal7VD6cP7PBVkovOiqAkgGywvWVCggIpQ/export?format=txt', true);
	xhr.onreadystatechange = function() {
		if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
			searches = xhr.responseText.split(";;;;;;;;;;");
			
			for(var a = 0; a < searches.length; a++)
				searches[a] = searches[a].split(/\n/g);

			var insert = "";

			for(var b = 1; b < searches.length; b++) {
				insert += "<div class='dashboard-stats'><table class='table table-condensed table-hover'><thead><tr><th class='title'>"+searches[b][1]+"</th></tr></thead>";
				for(var c = 3; c < searches[b].length ; c = c + 2) 
					insert += "<tbody><tr><td class='title'><div class='referred-topic-title'><div class='overflow-ellipsis'><a href= "+searches[b][c]+" target='_blank'>"+searches[b][c-1]+"</a></div></div></td></tr></tbody>";
				insert += "</table></div>";
			}
			
			document.getElementsByClassName("dashboard-right")[0].insertAdjacentHTML('afterbegin',insert);
		}
	};
	xhr.send();	
}

try {
    adminUpdater();
} catch (e) {
    console.log(e);
}