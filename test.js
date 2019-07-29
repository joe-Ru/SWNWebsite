eagerness = () => {
    var eagernessList = ["Cautious, but can be convinced to hire",
        "Willing to promise standard rates",
        "Eager, willing to offer a bonus",
        "Desperate, might offer what they can’t pay"];
    
        let k = Math.floor(Math.random() *4);
        output = eagernessList[k];
        document.getElementById("eagerness").innerHTML = "Patron Eagerness to Hire: " + output;
}
eagerness();