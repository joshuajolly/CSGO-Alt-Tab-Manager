http = require('http');
fs = require('fs');

port = 3000;
host = '127.0.0.1';


server = http.createServer( function(req, res) {

	if (req.method == 'POST') {
		res.writeHead(200, {'Content-Type': 'text/html'});

		var body = '';
		req.on('data', function (data) {
			body += data;
		});
		req.on('end', function() {
			update(JSON.parse(body));
			res.end('');
		});

	} else {
		res.writeHead(200, {'Content-Type': 'text/html'});
		var html = '<html><body>HTTP Server at http://' + host + ':' + port + '</body></html>';
		res.end(html);
	}

});

var phase = '';

var playerdeaths = 0;
check = false;
firstrun = true;
dontrun = false;

function update(json) {

	if (firstrun == true) {
		try {
			playerdeaths = json.player.match_stats.deaths;
		} catch(err) {
			dontrun = true;
			playerdeaths = 0;
		}
		firstrun = false;
	}

	try {
		if ("freezetime" === json.round.phase && !(phase === json.round.phase)) {
			console.log("Game is in " + json.round.phase);
			phase = json.round.phase;
			check = true;
		} else {
			if (!(phase === json.round.phase)) {
				console.log("Round is " + json.round.phase);
			}
			phase = json.round.phase;
		}
	} catch(err) {
	}

	try {
		if (check == true) {
			if (!(playerdeaths == json.player.match_stats.deaths) && dontrun == false) {
				console.log("Died previous round, playing sound.");
				playerdeaths = json.player.match_stats.deaths;
				var theJobType = 'FOO';
				var exec = require('child_process').exec;
				var start = exec('playsong.bat ' + theJobType, function( error, stdout, stderr) 
						{
					if ( error != null ) {
						console.log(stderr);
					}
						});
			} else {
				if (dontrun == false) {
					console.log("Didn't die previous round.");
				} else {
					console.log("Wait a round for it to start working.");
					try {
						playerdeaths = json.player.match_stats.deaths;
					} catch(err) {
						playerdeaths = 0;
					}
				}
			}
			dontrun = false;
			check = false;
		}
	} catch(err) {

	}

}

server.listen(port, host);
console.log('\nListening at http://' + host + ':' + port + "\n");
console.log("Program setup successfully.\n");
console.log("Volume too loud? Click sound > mixer > [your music player] and drag it down some\n");

