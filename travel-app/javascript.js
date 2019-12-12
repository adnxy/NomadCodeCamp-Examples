function addToFirstAlbum() {
	// Select album
	var albumPhotos = document.querySelector('.first-album-container');
	// Select pictures
	var cityPhotos = document.querySelector('.images-container-chiang-mai');
	// Replace pictures with album
	albumPhotos.parentNode.replaceChild(cityPhotos, albumPhotos);
	// Remove button Add to Album 1
	document.querySelector('.add-button-first-album').style.display = 'none';
}

function addToSecondAlbum() {
	// Select album
	var albumPhotos = document.querySelector('.second-album-container');
	// Select pictures
	var cityPhotos = document.querySelector('.images-container-prague');
	// Replace pictures with album
	albumPhotos.parentNode.replaceChild(cityPhotos, albumPhotos);
	// Remove button Add to Album 2
	document.querySelector('.add-button-second-album').style.display = 'none';
}

function addToThirdAlbum() {
	// Select album
	var albumPhotos = document.querySelector('.third-album-container');
	// Select pictures
	var cityPhotos = document.querySelector('.images-container-medellin');
	// Replace pictures with album
	albumPhotos.parentNode.replaceChild(cityPhotos, albumPhotos);
	// Remove button Add to Album 3
	document.querySelector('.add-button-third-album').style.display = 'none';
}
