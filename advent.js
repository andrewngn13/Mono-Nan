module.exports = {
//Let's go on an adventure!
	adventure: function(message, key){
		switch(key){
			case "start":
			try{
			message.send({embed: {
			color: 3447003,
			title: "Adventure commands",
			timestamp: new Date(),
			fields: [{
				name: "``start``",
				value: "Starts or resumes an adventure."
				},{
				name: "``pause``",
				value: "Pauses an adventure."
				},{
				name: "``end``",
				value: "Ends an adventure."
				}],
			}});
			}catch(e){console.log(e);}
				//auth.journey = true;
			break;
			case "pause":
				message.send("It's time to take a break.!");
			case "end":
				message.send("The adventure has ended..");
				journey = false;
				break;
		}
/*
		while(true){
			message.send("loopy");
		}*/
	}
};
