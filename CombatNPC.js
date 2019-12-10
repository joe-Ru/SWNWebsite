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

    else if (enemyNPC == "Tier2") {
        var hitDie = rollHitDie() + rollHitDie();
        var posthitDie = document.getElementById("HP");
        posthitDie.innerHTML = "Hit Points: " + hitDie;

        var postAtkDamage = document.getElementById("Atk");
        postAtkDamage.innerHTML = "Atk bonus: +2";

        var postArmorClass = document.getElementById("Armor Class");
        postArmorClass.innerHTML = "Armor Class: 14";

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

    else if (enemyNPC == "Tier3") { //Elite figher
        var hitDie = rollHitDie() + rollHitDie() + rollHitDie();
        var posthitDie = document.getElementById("HP");
        posthitDie.innerHTML = "Hit Points: " + hitDie;

        var postAtkDamage = document.getElementById("Atk");
        postAtkDamage.innerHTML = "Atk bonus: +4";

        var postArmorClass = document.getElementById("Armor Class");
        postArmorClass.innerHTML = "Armor Class: 16";

        var postDamage = document.getElementById("Damage");
        weaponRolled = () => {
            let k = Math.floor(Math.random() *3);
            weaponsList = [
                "Mag Pistol: 2d6 + 2", "Spike Thrower: 3d8", "Rifle: 1d10 + 2"
            ];
            return weaponsList[k];
        }
        postDamage.innerHTML = "By weapon: " + weaponRolled();
    }

    else if (enemyNPC == "Tier4") { // Heroic fighter
        var hitDie = rollHitDie() + rollHitDie() + rollHitDie() + rollHitDie() + rollHitDie() + rollHitDie();
        var posthitDie = document.getElementById("HP");
        posthitDie.innerHTML = "Hit Points: " + hitDie;

        var postAtkDamage = document.getElementById("Atk");
        postAtkDamage.innerHTML = "Atk bonus: +6";

        var postArmorClass = document.getElementById("Armor Class");
        postArmorClass.innerHTML = "Armor Class: 20";

        var postDamage = document.getElementById("Damage");
        weaponRolled = () => {
            let k = Math.floor(Math.random() *3);
            weaponsList = [
                "Modified Mag Pistol: 3d6 + 2", "Spike Thrower: 3d8", "Combat Rifle: 1d12"
            ];
            return weaponsList[k];
        }
        postDamage.innerHTML = "By weapon: " + weaponRolled();
    }

}