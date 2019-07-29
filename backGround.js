backGround = () => {
    var backGroundList = [
    'The local under class or poorest natives',
    'Common laborers or cube workers', 
    'Aspiring bourgeoise or upper class', 
    'The elite of this society', 
    'Minority or foreigners; reroll on 1d4',
    'Offworlders or exotics; reroll on 1d4'];

    let k = Math.floor(Math.random() *6);
    output = backGroundList[k];
    document.getElementById("backGround").innerHTML = output;

}