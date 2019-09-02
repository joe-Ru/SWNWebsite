main = () => {

trust = () => {
    var trustList = ["They intend to totally screw the PCs",
        "They won’t pay unless forced to do so",
        "They’ll pay slowly or reluctantly",
        "They’ll pay, but discount for mistakes",
        "They’ll pay without quibbling",
        "They’ll pay more than they promised"];
    
        let k = Math.floor(Math.random() *6);
        output = trustList[k];
        document.getElementById("trust").innerHTML = "Patron Trustworthiness: " + output;
}

challengeOfJob = () => {
    var challengeList = ["Kill somebody who might deserve it",
        "Kidnap someone dangerous",
        "Steal a well-guarded object",
        "Arson or sabotage on a place",
        "Get proof of some misdeed",
        "Protect someone from an immediate threat",
        "Transport someone through danger",
        "Guard an object being transported"];
    
        let k = Math.floor(Math.random() *8);
        output = challengeList[k];
        document.getElementById("challenge").innerHTML = "Basic Challenge of Job: " + output;
}

counterForce = () => {
    var counterForceList = ["A treacherous employer or subordinate",
        "An open and known enemy of the patron",
        "Official governmental meddling",
        "An unknown rival of the patron",
        "The macguffin itself opposes them",
        "Very short time frame allowed",
        "The job is spectacularly illegal",
        "A participant would profit by their failure",
        "The patron is badly wrong about a thing",
        "The locals are against the pat"];
    
        let k = Math.floor(Math.random() *10);
        output = counterForceList[k];
        document.getElementById("counterForce").innerHTML = "Counter Force: " + output;
}

eagerness = () => {
    var eagernessList = ["Cautious, but can be convinced to hire",
        "Willing to promise standard rates",
        "Eager, willing to offer a bonus",
        "Desperate, might offer what they can’t pay"];
    
        let k = Math.floor(Math.random() *4);
        output = eagernessList[k];
        document.getElementById("eagerness").innerHTML = "Patron Eagerness to Hire: " + output;
}

nonCashRewards = () => {
    var nonCashRewardsList = ["Government official favors owed",
        "Property in the area",
        "An item very valuable on another world",
        "Pretech mod components",
        "Useful pretech artifact",
        "Information the PCs need",
        "Membership in a powerful group",
        "Black market access",
        "Use of restricted facilities or shipyards",
        "Shares in a profitable business",
        "Maps to a hidden or guarded treasure",
        "Illegal but valuable weapons or gear"];
    
        let k = Math.floor(Math.random() *12);
        output = nonCashRewardsList[k];
        document.getElementById("nonCashRewards").innerHTML = "Potential Non-Cash Rewards: " + output;
}

complications = () => {
    var complicationsList = ["An ambush is laid somewhere",
        "PC involvement is leaked to the enemy",
        "The patron gives faulty aid somehow",
        "Failing would be extremely unhealthy",
        "The job IDs them as allies of a local faction",
        "The macguffin is physically dangerous",
        "An important location is hard to get into",
        "Succeeding would be morally distasteful",
        "A supposed ally is very unhelpful or stupid",
        "The patron badly misunderstood the PCs",
        "The job changes suddenly partway through",
        "An unexpected troublemaker is involved",
        "Critical gear will fail partway through",
        "An unrelated accident complicates things",
        "Payment comes in a hard-to-handle form",
        "Someone is turning traitor on the patron",
        "A critical element has suddenly moved",
        "Payment is in avidly-pursued hot goods",
        "The true goal is a subsidiary part of the job",
        "No complications; it’s just as it seems to be"];
    
        let k = Math.floor(Math.random() *20);
        output = complicationsList[k];
        document.getElementById("complications").innerHTML = "Complications to the Job: " + output;
}

trust();
challengeOfJob();
counterForce();
eagerness();
nonCashRewards();
complications();
}