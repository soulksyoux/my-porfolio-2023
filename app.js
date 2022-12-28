const turnCard = function(card) {
    const lastChar = card.slice(-1);
    let card2;
    if(lastChar == 1) {
        card2 = card.slice(0, -1) + '2';
    }else{        
        card2 = card.slice(0, -1) + '1';
    }

    document.getElementById(card).addEventListener("click", function(event){
        document.getElementById(card2).classList.remove("hidden");
        this.classList.add("hidden");
    });

}

const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    turnCard(card.id);
});


