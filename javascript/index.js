((d) => {

    let addButton = d.getElementById("addnamebutton"); //this is the add player name button

    let input = d.getElementById("player") // this is the player name input field

    let ul = d.getElementById("list") // this is the list where players will be displayed



    // let players = [];

    // let players = Array.from(document.getElementsByClassName("player"));


    // addButton.addEventListener("click", () => {
    //     let fragment = d.createDocumentFragment();

    //     players.forEach((players) => {
    //         let li = d.createElement("li");
            
    //         li.textContext = players;
    //         fragment.append(li);
    //         ul.prepend(li);
    //     })
   

    // ul.append(fragment);

    // players = [];

    // console.log(players);

    // })




    //WORKING FUNCTION BELOW FOR ADD PLAYER BUTTON BUT IT'S NOT ADDING TO AN ARRAY JUST A LIST ITEM.

    addButton.addEventListener("click", () => {
        
        let li = d.createElement('li');
        li.textContent = input.value;
        li.classList.add("list-group-item");
        player.value = "";
        player.focus();
        ul.prepend(li);

        console.log(li);
  });


    //WORKING FUNCTION BELOW FOR GENERATE TEAM BUTTON BUT I DON'T KNOW HOW TO GET THE VALUES INTO THE ARRAY TO MAP OVER TO THEIR ELEMENTS.


    // let names = ["Ted", "Roger", "Jenny", "Maisie", "Arthur", "Tim"];

    //   names.sort(() => 0.5 - Math.random());

    //   const pairs = [];

    //   // as we need at least 2 players to form a pair
    //   while (names.length >= 2) { 
    //     const pair = [names.pop(), names.pop()];

    //     // Current pair
    //     console.log('Team A', pair);

    //     // Save current pair
    //     pairs.push(pair);
    //   }


})(document);