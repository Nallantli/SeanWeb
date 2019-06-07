loadJSON('info.json', (raw_AUTHORS) => {
	var inner = "";

	if (raw_AUTHORS == null)
		return;

	var AUTHORS = {};
	Object.keys(raw_AUTHORS).sort().forEach(function (key) {
		AUTHORS[key] = raw_AUTHORS[key];
	});

	for (var key in AUTHORS) {
		inner += '<a class="catblock" href="profile.html?id=' + key + '"><img src="images/' + key + '.jpg"><div class="hovering"><h4><b>' + (AUTHORS[key].first_name + "</b> " + AUTHORS[key].last_name).toUpperCase() + '</h4></div></a>'
	}

	document.getElementById("container").innerHTML = inner;
});