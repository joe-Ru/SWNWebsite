userInput = () => {
    var userInput = document.getElementById("enemy");
    var enemyNPC = userInput.options[userInput.selectedIndex].value;

    rollHitDie = () => {
        let k = Math.floor(Math.random() *8)
        return k;
    }

    if (enemyNPC == "Tier1") {
        var hitDie = rollHitDie();
        var posthitDie = document.getElementById("HP");
        posthitDie.innerHTML = "Hit Points: " + hitDie;

        var postAtkDamage = document.getElementById("Atk");
        postAtkDamage.innerHTML = "Atk bonus: +1";

        var postArmorClass = document.getElementById("Armor Class");
        postArmorClass.innerHTML = "Armor Class: 12";

        var postDamage = document.getElementById("Damage");
        weaponRolled = () => {
            let k = Math.floor(Math.random() *3);
            weaponsList = [
                "Laser Pistol: 1d6", "Semi Auto-Pistol: 1d6 + 1", "Submachine Gun: 1d8"
            ];
            return weaponsList[k];
        }
        postDamage.innerHTML = "By weapon: " + weaponRolled();
    }

}