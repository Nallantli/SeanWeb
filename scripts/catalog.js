var inner = "";

for (var key in AUTHORS) {
	inner += '<a class="catblock" href="profile.html?id=' + key + '"><img src="images/' + key + '.jpg"><div class="hovering"><h4><b>' + (AUTHORS[key].first_name + "</b> " + AUTHORS[key].last_name).toUpperCase() + '</h4></div></a>'
}

document.getElementById("container").innerHTML = inner;