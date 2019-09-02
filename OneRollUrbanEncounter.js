main = () => {
    venue = () => {
        var venueList = ["In the middle of the street",
            "In a public plaza",
            "Down a side alley",
            "Inside a local business",
            "Next to or in a public park",
            "At a mass-transit station"];
    
        let k = Math.floor(Math.random() *6);
        output = venueList[k];
        document.getElementById("venue").innerHTML = "General Venue of the Event: " + output;
    
    }

pcInvolvement = () => {
    var involvementList = ["A sympathetic participant appeals to them",
        "Ways around it are all dangerous/blocked",
        "It happens immediately around them",
        "A valuable thing looks snatchable amid it",
        "A participant offers a reward for help",
        "Someone mistakenly involves the PCs in it",
        "The seeming way out just leads deeper in",
        "Responsibility is somehow pinned on them"]

    let k = Math.floor(Math.random() *8);
    output = involvementList[k]
    document.getElementById("pcInvolvement").innerHTML = "The PC's are involved because: " + output;
}

// <input type= "button" onClick="backGroundRoll()"><input>

natureOfEvent = () => {
    var eventList = ["A parade or festival is being disrupted",
        "Innocents are being assaulted",
        "An establishment is being robbed",
        "A disturbance over local politics happens",
        "Someone is being blamed for something",
        "Fires or building collapses are happening",
        "A medical emergency is happening",
        "Someone’s trying to cheat the PCs",
        "A vehicle accident is happening",
        "A religious ceremony is being disrupted"];

    let k = Math.floor(Math.random() *10);
    output = eventList[k]
    document.getElementById("natureOfEvent").innerHTML = "The nature of the event is: " + output;
}

conflict = () => {
    var conflictList = ["Money, extortion, payment due, debts",
        "Respect, submission to social authority",
        "Grudges, ethnic resentment, gang payback",
        "Politics, religion, or other ideology"];
    
    let k = Math.floor(Math.random() *4);
    output = conflictList[k]
    document.getElementById("conflict").innerHTML = "The conflict is about: " + output;
}

antagonist = () => {
    var antagonistList = ["A local bully and their thugs",
        "A ruthless political boss and their zealots",
        "Violent criminals",
        "Religious fanatics",
        "A blisteringly obnoxious offworlder",
        "Corrupt or over-strict government official",
        "A mob of intoxicated locals",
        "A ranting demagogue and their followers",
        "A stupidly bull-headed local grandee",
        "A very capable assassin or strong-arm",
        "A self-centered local scion of power",
        "A confused foreigner or backwoodsman"];

    let k = Math.floor(Math.random() *12);
    output = antagonistList[k];
    document.getElementById("antagonist").innerHTML = "The antagonist(s) involved(ed): " + output;
}

urbanFeatures = () => {
    var urbanFeaturesList = ["Heavy traffic running through the place",
        "Music blaring at deafening volumes",
        "Two groups present that detest each other",
        "Large delivery taking place right there",
        "Swarm of schoolkids or feral youth",
        "Insistent soapbox preacher here",
        "Several pickpockets working the crowd",
        "A kiosk is tipping over and spilling things",
        "Streetlights are out or visibility is low",
        "A cop patrol is here and reluctant to act",
        "PC-hostile reporters are recording here",
        "Someone’s trying to sell something to PCs",
        "Feral dogs or other animals crowd here",
        "Unrelated activists are protesting here",
        "Street kids are trying to steal from the PCs",
        "GPS maps are dangerously wrong here",
        "Downed power lines are a danger here",
        "Numerous open manholes and utility holes",
        "The street’s blockaded by something",
        "Crowds so thick one can barely move"];
    
    let k = Math.floor(Math.random() *20);
    output = urbanFeaturesList[k];
    document.getElementById("urbanFeatures").innerHTML = "Relevant Urban Features: " + output;
}

venue();
pcInvolvement();
natureOfEvent();
conflict();
antagonist();
urbanFeatures();

}

