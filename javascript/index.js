((d) => {

    let addButton = d.getElementById("addnamebutton"); //this is the add player name button

    let input = d.getElementById("player") // this is the player name input field

    let ul = d.getElementById("list") // this is the list where players will be displayed

    let createButton = d.getElementById("createbutton");

    let teamp = d.getElementById("team-list");


    //WORKING FUNCTION BELOW FOR ADD PLAYER BUTTON 

    
    const list = [];
    
    addButton.addEventListener("click", () => {
        
        
        let li = d.createElement('li');
        li.textContent = input.value;
        li.classList.add("list-group-item");
        // player.value = "";
        input.focus(); // adds blue border when clicked
        ul.prepend(li);

        list.push (input.value)

        input.value="";

        console.log(list);

        return list;
  });


    //WORKING FUNCTION BELOW FOR GENERATE TEAM BUTTON 

    createButton.addEventListener("click", () => {

    let names = list;

      names.sort(() => 0.5 - Math.random());

      const pairs = [];

      // as we need at least 2 players to form a pair
      while (names.length >= 2) { 
        // const pair = [names.pop() , names.pop()];
        const pair = `${names.pop()} ${"vs"} ${names.pop()}`;

        // Current pair
        console.log(pair);

        // Save current pair
        pairs.push(pair);

        //THIS IS CREATING A P ELEMENT CONTAINING THE SHUFFLED NAMES

        let teamlist = d.createElement('p');
        teamlist.textContent = pair;
        teamlist.classList.add("list-group-item");
        teamp.prepend(teamlist);
      }

    });


})(document);