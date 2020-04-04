((d) => {

    let addButton = d.getElementById("addnamebutton"); //this is the add player name button
    let input = d.getElementById("player") // this is the player name input field
    let ul = d.getElementById("list") // this is the list where players will be displayed
    let createButton = d.getElementById("createbutton"); // create team button
    let teamp = d.getElementById("team-list"); // where teams are displayed

    //Add player button function

    const list = [];
    
    addButton.addEventListener("click", () => {
        
        let li = d.createElement('li');
        li.textContent = input.value;
        li.classList.add("list-group-item");
        input.focus(); // adds blue border when clicked
        ul.prepend(li);

        list.push (input.value)

        input.value="";

        // console.log(list);

        return list;
  });


    //Generate team button function

    createButton.addEventListener("click", () => {

    let names = list;

      names.sort(() => 0.5 - Math.random());

      const pairs = [];

      // we need two players to form a pair
      while (names.length >= 2) { 
        const pair = `${names.pop()} ${"vs"} ${names.pop()}`;

        // console.log(pair);

        // below saves and pushes the pair created
        pairs.push(pair);

        // p element below that the teams will go in
        let teamlist = d.createElement('p');
        teamlist.textContent = pair;
        teamlist.classList.add("list-group-item");
        teamp.prepend(teamlist);
      }

    });

})(document);