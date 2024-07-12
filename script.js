let name1, name2;

function startGame() {
    name1 = document.getElementById('name1').value;
    name2 = document.getElementById('name2').value;

    if (name1 && name2) {
        document.getElementById('dice').innerText = 'Ready to roll!';
    } else {
        alert('First 2 Name hako Ley!');
    }
}

function rollDice() {
    if (name1 && name2) {
        const result = Math.random() < 0.5 ? name1 : name2;
        document.getElementById('dice').innerText = result;
    } else {
        alert('Please start the game first!');
    }
}

let team1Players = [];
let team2Players = [];

function addPlayer(team) {
    const inputId = team === 'team1' ? 'team1-player' : 'team2-player';
    const listId = team === 'team1' ? 'team1-list' : 'team2-list';
    
    const playerName = document.getElementById(inputId).value;
    if (playerName) {
        if (team === 'team1') {
            team1Players.push(playerName);
        } else {
            team2Players.push(playerName);
        }
        
        const li = document.createElement('li');
        li.textContent = playerName;
        document.getElementById(listId).appendChild(li);
        
        document.getElementById(inputId).value = '';
    }
}

function shareTeams() {
    const team1Players = document.querySelectorAll('#team1-list li');
    const team2Players = document.querySelectorAll('#team2-list li');

    let team1Text = '*Team 1:*%0A';
    team1Players.forEach((player, index) => {
        team1Text += `${index + 1}. ${player.textContent}%0A`;
    });

    let team2Text = '*Team 2:*%0A';
    team2Players.forEach((player, index) => {
        team2Text += `${index + 1}. ${player.textContent}%0A`;
    });

    const message = `${team1Text}%0A${team2Text}`;

    const whatsappUrl = `https://api.whatsapp.com/send?text=${message}`;
    window.open(whatsappUrl, '_blank');
}
