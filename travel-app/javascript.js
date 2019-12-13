function addToAlbum(albumClass, cityClass, buttonClass) {
	// Select album
	var albumPhotos = document.querySelector(albumClass);
	// Select pictures
	var cityPhotos = document.querySelector(cityClass);
	// Replace pictures with album
	albumPhotos.parentNode.replaceChild(cityPhotos, albumPhotos);
	// Remove button Add to Album 
	document.querySelector(buttonClass).style.display = 'none';
}

