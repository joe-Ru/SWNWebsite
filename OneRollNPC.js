main = () => {
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
        
        if ((output == backGroundList[4]) || (output == backGroundList[5])) {
            let v = rollDice(4);
            newOutput = backGroundList[v];
            document.getElementById("backGround").innerHTML = "Background: " + output + newOutput;
        }
        else {
            document.getElementById("backGround").innerHTML = "Background: " + output;
        }
    }

society = () => {
    var societyRollList = [
    'Criminal, thug, thief, swindler',
    'Menial, cleaner, retail worker, servant',
    'Unskilled heavy labor, porter, construction',
    'Skilled trade, electrician, mechanic, pilot',
    'Idea worker, programmer, writer',
    'Merchant, business owner, trader, banker',
    'Official, bureaucrat, courtier, clerk',
    'Military, soldier, enforcer, law officer',
    ]

    let k = Math.floor(Math.random() *8);
    output = societyRollList[k]
    document.getElementById("society").innerHTML = "Role in society: " + output;
}

// <input type= "button" onClick="backGroundRoll()"><input>

biggestProblem = () => {
    var biggestProblemList = [
    'They have significant debt or money woes',
    'A loved one is in trouble; reroll for it',
    'Romantic failure with a desired person',
    'Drug or behavioral addiction',
    'Their superior dislikes or resents them',
    'They have a persistent sickness',
    'They hate their job or life situation',
    'Someone dangerous is targeting them',
    'They’re pursuing a disastrous purpose',
    'They have no problems worth mentioning',
    ];

    let k = Math.floor(Math.random() *10);
    output = biggestProblemList[k]
    document.getElementById("biggestProblem").innerHTML = "Biggest Problem: " + output;
}

age = () => {
    var ageList = [
    'Unusually young or old for their role',
    'Young adult',
    'Mature prime',
    'Middle-aged or elderly'];

    let k = Math.floor(Math.random() *4);
    output = ageList[k];

    document.getElementById("age").innerHTML = "Age: " + output;

}

greatestDesire = () => {
    var greatestDesireList = [
    'They want a particular romantic partner',
     'They want money for them or a loved one',
     'They want a promotion in their job',
     'They want answers about a past trauma',
     'They want revenge on an enemy',
     'They want to help a beleaguered friend',
     'They want an entirely different job',
     'They want protection from an enemy',
     'They want to leave their current life',
     'They want fame and glory',
     'They want power over those around them',
     'They have everything they want from life',
    ];

    let k = Math.floor(Math.random() *12);
    output = greatestDesireList[k];
    document.getElementById("greatestDesire").innerHTML = "Greatest Desire: " + output;
}

obviousTrait = () => {
    var obviousTraitList = [
    'Ambition',
    'Avarice',
    'Bitterness',
    'Courage',
    'Cowardice',
    'Curiosity',
    'Deceitfulness',
    'Determination',
    'Devotion to a cause',
    'Filiality',
    'Hatred',
    'Honesty',
    'Hopefulness',
    'Love of a person',
    'Nihilism',
    'Paternalism',
    'Pessimism',
    'Protectiveness',
    'Resentment',
    'Shame'
    ];
    
    let k = Math.floor(Math.random() *20);
    output = obviousTraitList[k];
    document.getElementById("obviousTrait").innerHTML = "Obvious Trait: " + output;
}


backGround();   
society();
biggestProblem();
age();
greatestDesire();
obviousTrait();

}
