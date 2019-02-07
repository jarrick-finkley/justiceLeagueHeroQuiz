var button = document.getElementById('button'); 
var output = document.getElementById('output');




button.onclick = function hero(){
    event.preventDefault();

   var people = document.getElementById('people').value;

   var work = document.getElementById('work').value;

   var world = document.getElementById('world').value;

   var power = document.getElementById('power').value;

   var gender = document.getElementById('gender').value;
   var hero = [];
   var img = document.getElementById('img');


   if (people == 'people'){
       hero.push('Wonder Woman', 'Superman')
   } else if (people == '!people') {
       hero.push('Cyborg', 'The Flash', 'Aquaman')
   } else if (people == 'either') {
       hero.push('Batman')
   }

   if (work == 'gymster'){
       hero.push('Batman', 'Superman', 'Aquaman')
   } else if (work == 'nogym'){
       hero.push('The Flash')
   } else if (work == 'okgym'){
       hero.push('Cyborg', 'Wonder Woman')
   }

   if (world == 'world'){
       hero.push('Superman', 'Wonder Woman')
    } else if (world == 'family') {
       hero.push('Batman', 'The Flash')
    } else if (world == 'neither') {
       hero.push('Cyborg', 'Aquaman')
    }

    if (power == 'flight'){
        hero.push('Superman', 'Cyborg')
    } else if (power == 'strength') {
        hero.push('Superman', 'Wonder Woman', 'Cyborg')
    } else if (power == 'smarts') {
        hero.push('Cyborg', 'Batman')
    } else if (power == 'speed') {
        hero.push('Superman', 'The Flash')
    } else if (power == 'wealth') {
        hero.push('Batman', 'Wonder Woman')
    } 

    if (gender == 'male'){
        hero.push('Superman', 'Batman', 'Cyborg', 'The Flash', 'Aquaman')
    } else if (gender == 'female') {
        hero.push('Wonder Woman')
    }



    var element = 0 
    var count = 0

    for( i = 0; i < hero.length; i++){
        var tempElement = hero[i];
        var tempCount = 0
 
        for(p =0; p < hero.length; p++){
            if (hero[p] == tempElement){
                tempCount++;
            }
        if (tempCount > count){
            element = tempElement;
            count = tempCount;
        }    
        }
    }

    if (element == 'Superman') {

        output.innerHTML = 'You are most like ' + element + '. Welcome to the League!'

        img.innerHTML = "<img src='images/sup.jpg'/>"

    } else if (element == 'Batman') {

        output.innerHTML = 'You are most like ' + element + '. Welcome to the League!'

        img.innerHTML = "<img src='images/bat.jpg'/>"

    } else if (element == 'The Flash') {
        output.innerHTML = 'You are most like ' + element + '. Welcome to the League!'

        img.innerHTML = "<img src='images/flash.jpg'/>"

    } else if (element == 'Wonder Woman') {
        output.innerHTML = 'You are most like ' + element + '. Welcome to the League!'

        img.innerHTML = "<img src='images/won.png'/>"

    } else if (element == 'Cyborg') {
        output.innerHTML = 'You are most like ' + element + '. Welcome to the League!'

        img.innerHTML = "<img src='images/cy.jpg'/>"

    } else if (element == 'Aquaman') {
        output.innerHTML = 'You are most like ' + element + '. Welcome to the League!'

        img.innerHTML = "<img src='images/aqua.jpg'/>"

    } 

   

    console.log(hero)

    console.log(element);
    

   
   
}

