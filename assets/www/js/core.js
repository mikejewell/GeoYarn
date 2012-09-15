
	function getLocation() {
		console.log("Get location");
		navigator.geolocation.getCurrentPosition(function(position) {
			$(".test").html(position.coords.latitude+" "+position.coords.longitude);
		}, function(error) {
			console.log("Error: "+error.message);
			$(".test").html("Wah: "+error.message);
		}, {enableHighAccuracy:true});
	}

	function getStoryList(callback) {
		function onSuccess(fileSystem) {

			fileSystem.root.getFile("stories", {create:true}, function() {
				console.log("Woo");
			});
		    console.log(fileSystem.name);
		    console.log(fileSystem.root.name);
		}

		// request the persistent file system
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
	}

	function launch() {
		$(".locate").click(function() {
			getLocation();
			getStoryList();
		});
	}