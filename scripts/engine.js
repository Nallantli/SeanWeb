function getParameterByName(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

loadJSON('info.json', (AUTHORS) => {
	author = AUTHORS[getParameterByName("id")];
	document.getElementById("profile").src = "images/" + getParameterByName("id") + ".jpg";
	name = author.first_name + " " + author.last_name;
	document.getElementById("name").innerHTML = ("<b>" + author.first_name + " </b>" + author.last_name).toUpperCase();
	if (author.title == undefined)
		document.getElementById("titleorg").style.display = "none";
	else
		document.getElementById("titleorg").innerHTML = "<i>" + author.title + "</i> at <i>" + author.organization + "</i>";

	document.getElementById("bio").innerHTML = author.bio;

	if (author.email == undefined)
		document.getElementById("email").style.display = "none";
	else {
		document.getElementById("email").href = "mailto:" + author.email;
		document.getElementById("email").innerHTML += author.email;
	}

	if (author.website == undefined)
		document.getElementById("website").style.display = "none";
	else {
		document.getElementById("website").href = "https://" + author.website;
		document.getElementById("website").innerHTML += author.website;
	}

	if (author.facebook == undefined)
		document.getElementById("facebook").style.display = "none";
	else
		document.getElementById("facebook").href = author.facebook;

	if (author.linkedin == undefined)
		document.getElementById("linkedin").style.display = "none";
	else
		document.getElementById("linkedin").href = author.linkedin;

	if (author.twitter == undefined)
		document.getElementById("twitter").style.display = "none";
	else
		document.getElementById("twitter").href = author.twitter;

	if (author.books.length > 0) {
		var inner = "<h3>LITERATURE BY <b>" + author.last_name.toUpperCase() + "</b></h3>";

		for (var i = 0; i < author.books.length; i++) {
			if (typeof author.books[i] == 'string') {
				var isbn = author.books[i];
				var isbn1 = isbn.substr(isbn.length - 3);
				var isbn2 = isbn.substr(isbn.length - 6).substr(0, 3);
				inner += "<a class=\"book\" target=\"_blank\" href=\"https://www.winchesterbookgallery.com/book/" + isbn + "\"><img class=\"booklink\" src=\"https://images.booksense.com/images/" + isbn1 + "/" + isbn2 + "/" + isbn + ".jpg\"></a>";
			} else {
				inner += "<a class=\"book\" target=\"_blank\" href=\"" + author.books[i].link + "\"><img class=\"booklink\" src=\"" + author.books[i].img + "\"></a>";
			}
		}

		document.getElementById("bookstore").innerHTML = inner;
	} else {
		document.getElementById("bookstore").style.display = "none";
	}
	document.title = name;
});