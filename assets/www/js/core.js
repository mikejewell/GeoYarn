
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
			fileSystem.root.getDirectory("stories", {create:true}, function(directory) {
				var dirReader = directory.createReader();
				dirReader.readEntries(function(list) {
					callback(list);
				}, function(error) {
					console.log("Failed:");
					console.log(error);
				});
			});
		}

		// request the persistent file system
		window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onSuccess, null);
	}

	function launch() {
		$(".locate").click(function() {
			getLocation();
			getStoryList(function(list) {
				console.log(list);
			});
		});
	}