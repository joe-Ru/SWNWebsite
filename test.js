backGround = () => {
    var backGroundList = [ 
    ' The local under class or poorest natives ',
    ' Common laborers or cube workers ', 
    ' Aspiring bourgeoise or upper class ', 
    ' The elite of this society ', 
    ' Minority or foreigners; ', //roll 1d4
    ' Offworlders or exotics; ']; //roll 1d4

    rollDice = (numberOfDice) => {
        return Math.floor(Math.random() * numberOfDice);
    }

    let k = rollDice(6);
    output = backGroundList[k];
    
    if (output == (backGroundList[4] || backGroundList[5])) {
        let v = rollDice(4);
        newOutput = backGroundList[v];
        document.getElementById("backGround").innerHTML = "Background: " + output + newOutput;
    }
    else {
        document.getElementById("backGround").innerHTML = "Background: " + output;
    }
}
backGround();