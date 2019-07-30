main = () => {

weather = () => {
        var weatherList = ["Takes place in daylight and clear weather",
            "Daylight, but fog, mist, rain or the like",
            "Daylight, but harsh seasonal weather",
            "Night encounter, but clear weather",
            "Night, with rain or other obscuring effects",
            "Night, with terrible weather and wind"];
    
        let k = Math.floor(Math.random() *6);
        output = weatherList[k];
        document.getElementById("weather").innerHTML = "Weather and lighting of the event: " + output;
    
    }

basicNature = () => {
    var basicNatureList = ["Attack by pack of hostiles",
        "Ambush by single lone hostile",
        "Meet people who don’t want to be met",
        "Encounter people in need of aid",
        "Encounter hostile creatures",
        "Nearby feature is somehow dangerous",
        "Nearby feature promises useful loot",
        "Meet hostiles that aren’t immediately so"]

    let k = Math.floor(Math.random() *8);
    output = basicNatureList[k]
    document.getElementById("basicNature").innerHTML = "Basic nature of the encounter: " + output;
}



friendlyCreatures = () => {
    var friendlyCreaturesList = ["Affable but reclusive hermit",
        "Local herd animal let loose to graze",
        "Government ranger or circuit judge",
        "Curious local animal",
        "Remote homesteader and family",
        "Working trapper or hunter",
        "Back-country villager or native",
        "Hiker or wilderness tourist",
        "Religious recluse or holy person",
        "Impoverished social exile"];

    let k = Math.floor(Math.random() *10);
    output = friendlyCreaturesList[k]
    document.getElementById("friendlyCreatures").innerHTML = "Types of friendly creatures: " + output;
}

initialEncounter = () => {
    var initialEncounterList = ["Visible from a long distance away",
        "Noticed 1d4 hundred meters away",
        "Noticed only within 1d6 x 10 meters",
        "Noticed only when adjacent to the event"];
    
    let k = Math.floor(Math.random() *4);
    output = initialEncounterList[k]
    document.getElementById("initialEncounter").innerHTML = "Initial Encounter Range: " + output;
}

hostileCreatures = () => {
    var hostileCreaturesList = ["Bandits in their wilderness hideout",
        "Dangerous locals looking for easy marks",
        "Rabid or diseased large predator",
        "Pack of hungry hunting beasts",
        "Herd of potentially dangerous prey animals",
        "Swarm of dangerous vermin",
        "Criminal seeking to evade the law",
        "Brutal local landowner and their men",
        "Crazed hermit seeking enforced solitude",
        "Friendly-seeming guide into lethal danger",
        "Harmless-looking but dangerous beast",
        "Confidence man seeking to gull the PCs"];

    let k = Math.floor(Math.random() *12);
    output = hostileCreaturesList[k];
    document.getElementById("hostileCreatures").innerHTML = "Types of hostile creatures: " + output;
}

relevantFeature = () => {
    var relevantFeatureList = ["Overgrown homestead",
        "Stream prone to flash-flooding",
        "Narrow bridge or beam over deep cleft",
        "Box canyon with steep sides",
        "Unstable hillside that slides if disturbed",
        "Long-lost crash site of a gravflyer",
        "Once-inhabited cave or tunnel",
        "Steep and dangerous cliff",
        "Quicksand-laden swamp or dust pit",
        "Ruins of a ghost town or lost hamlet",
        "Hunting cabin with necessities",
        "Ill-tended graveyard of a lost family stead",
        "Narrow pass that’s easily blocked",
        "Dilapidated resort building",
        "Remote government monitoring outpost",
        "Illicit substance farm or processing center",
        "Old and forgotten battleground",
        "Zone overrun by dangerous plants",
        "Thick growth that lights up at a spark",
        "Abandoned vehicle"];
    
    let k = Math.floor(Math.random() *20);
    output = relevantFeatureList[k];
    document.getElementById("relevantFeature").innerHTML = "Specific Nearby feature of Relevance: " + output;
}
weather();
basicNature();
friendlyCreatures();
initialEncounter();
hostileCreatures();
relevantFeature();

}

