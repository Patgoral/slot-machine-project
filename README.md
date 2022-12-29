# THE CROCS MACHINE #

## Objective: ##

To create a virtual slot machine where the user can enter a wager, pull the lever, and win or lose based on if they get 3 matching Crocs.

## Game Rules: ##

-The player starts with $500 in their current balance.

-They will enter a wager that is no more than their current balance.

-Once the wager is entered, they will pull the lever to start the game.

-If the player gets 3 Crocs lines up they win.

-If they get 3 camo Crocs in a row they will win their wager times five.

-If they get 3 pink crocs in a row they will win their wager times three.

-If they get 3 orange crocs in a row they will win their wager times two.

-Any other results equal a loss and they will lose their wager amount.

-Once the player's balance equals $0 the game will no longer function.

-The player can cash out at any time which will return the balance to $500


## Wireframe: ##


<img src="CrocsMachineWireframe.jpg" alt="wireframe" width="500" height="650"/>




## Technologies: ##

**This game features the following languages:**

-HTML

-javaScript

-CSS


## MVP: ##

**-As a user, I want to see a basic slot machine consisting of three reels with three options on each**
 
 ```
 <create game> 
 const reelOne = [1,2,3] 
 const reelTwo = [1,2,3] 
 const reelThree = [1,2,3]
 ```

**-As a user, I want to start with a balance of $500**

`const playerBalance = '$500'`

**-As a user, I want to be able to enter a wager**

`let playerWager = ''`

**-As a user, I want to click the lever**

`<button id="leverBtn">Let's Play</button>`

**-As a user, I want to see the three reels return with a center line of random results once lever is clicked**

```
Using Fisher-Yates shuffle algorithm 
let slotOptions = ["crocImg1", "crocImg2", "crocImg3"]
function play() 
{return [shuffle(slotOptions), shuffle(slotOptions), shuffle(slotOptions)];   
}
let [reelOne, reelTwo, reelThree] = play();
```

**-As a user, I want to increase my balance based on if 3 results match**

```
static winningCombos = [[0, 0, 0], [1, 1, 1], [2, 2, 2]]

if (this.winner === winningCombos[0],[1],[2]) {this.playerBalance.innerHTML = playerWager * 2 + playerBalance }
```


**-As a user, I want to subtract my wager from my balance if I lose.**

`else {this.playerBalance.innerHTML = playerBalance - playerWager }`

**-As a user, I want to reset my balance to $500 using the "Cash Out Button"**

`button.addEventListener('click', initialize)`

## Version 2: ##

**-As a user, I want to see three different multipliers based on different matches**

```
if (this.winner === winningCombos[0]) {this.playerBalance.innerText = playerWager * 2 + playerBalance }

else if (this.winner === winningCombos[1]) {this.playerBalance.innerText = playerWager * 3 + playerBalance }

else if (this.winner === winningCombos[2]) {this.playerBalance.innerText = playerWager * 5 + playerBalance }
```

**-As a user, I want the game to end if my balance is $0**

` if (playerBalance === 0) {this.playerBalance.innerText = 'GAME OVER'}`

**-As a user, I want an error to occur if I wager more than my balance**

`else if (playerBalance < playerWager) {this.playerWager.innerText = 'ERROR'}`

**-As a user, I want the slot machine to be styled better.**

`Add CSS Style`

## Version 3: ##

**-As a user I want a sound to play if I win a round.**

`document.getElementById('winSound').play();`

**-As a user I want a sound to play if I lose a round.**

`document.getElementById('lossSound').play();`

**-As a user, I want the reels to be animated once the lever is clicked.**

`I've researched this, but still figuring out how to do it.`

**-As a user, I want the lever to animate when clicked.**

`I've researched this, but still figuring out how to do it.`


