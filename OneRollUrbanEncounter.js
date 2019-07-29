main = () => {
    event = () => {
        var eventList = ["In the middle of the street",
            "In a public plaza",
            "Down a side alley",
            "Inside a local business",
            "Next to or in a public park",
            "At a mass-transit station"];
    
        let k = Math.floor(Math.random() *6);
        output = eventList[k];
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
    var eventList = [];

    let k = Math.floor(Math.random() *10);
    output = eventList[k]
    document.getElementById("natureOfEvent").innerHTML = "The nature of the event is: " + output;
}

conflict = () => {
    var conflictList = [];
    
    let k = Math.floor(Math.random() *4);
    output = conflictList[k]
    document.getElementById("conflict").innerHTML = "The conflict is about: " + output;
}

antagonist = () => {
    var antagonistList = [];

    let k = Math.floor(Math.random() *12);
    output = antagonistList[k];
    document.getElementById("antagonist").innerHTML = "The antagonist(s) involved(ed): " + output;
}

urbanFeatures = () => {
    var urbanFeaturesList = [];
    
    let k = Math.floor(Math.random() *20);
    output = urbanFeaturesList[k];
    document.getElementById("urbanFeatures").innerHTML = "Relevant Urban Features: " + output;
}


event();
pcInvolvement();


}
// export { backGroundRoll, societyRoll, biggestProblemRoll, ageRoll, vargreatestDesire, obviousTraitRoll };

