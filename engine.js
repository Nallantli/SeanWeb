function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function init() {
	author = AUTHORS[getParameterByName("id")];
	document.getElementById("profile").src = "images/" + getParameterByName("id") + ".jpg";
	name = author.first_name + " " + author.last_name;
	document.getElementById("name").innerHTML = (author.prefix + " <b>" + author.first_name + " </b>" + author.last_name).toUpperCase();
	if (author.title == undefined)
		document.getElementById("titleorg").style.display = "none";
	else
		document.getElementById("titleorg").innerHTML = "<i>" + author.title + "</i> at <i>" + author.organization + "</i>";

	document.getElementById("bio").innerHTML = author.bio;

	if (author.email == undefined)
		document.getElementById("email").style.display = "none";
	document.getElementById("email").href = "mailto:" + author.email;
	document.getElementById("email").innerHTML += author.email;

	if (author.website == undefined)
		document.getElementById("website").style.display = "none";
	document.getElementById("website").href = author.website;
	document.getElementById("website").innerHTML += author.website;

	if (author.facebook == undefined)
		document.getElementById("facebook").style.display = "none";
	document.getElementById("facebook").href = author.facebook;

	if (author.linkedin == undefined)
		document.getElementById("linkedin").style.display = "none";
	document.getElementById("linkedin").href = author.linkedin;

	if (author.twitter == undefined)
		document.getElementById("twitter").style.display = "none";
	document.getElementById("twitter").href = author.twitter;

	var inner = "";

	for (var i = 0; i < author.books.length; i++) {
		inner += "<a class=\"book\" href=\"" + author.books[i].href + "\"><img class=\"booklink\" src=\"images/" + getParameterByName("id") + "/" + author.books[i].img + "\"></a>";
	}

	document.getElementById("bookstore").innerHTML = inner;
	document.title = name;
}

init();