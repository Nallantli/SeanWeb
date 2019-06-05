var inner = "";

for (var key in AUTHORS) {
	inner += '<a class="catblock" href="profile.html?id=' + key + '"><img src="images/' + key + '.jpg"></a>'
}

document.getElementById("container").innerHTML = inner;