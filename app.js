const petImage = document.getElementById('petImg');
const actionBtnsDiv = document.getElementById('actionBtnsDiv');
const wakeUpBtn = document.getElementById('wakeUpBtn');
const goSleepBtn = document.getElementById('goSleepBtn');
const feedBtn = document.getElementById('feedBtn');
const waterBtn = document.getElementById('waterBtn');
const loveBtn = document.getElementById('loveBtn');
const walkBtn = document.getElementById('walkBtn');
const paintBtn = document.getElementById('paintBtn');
const foodInput = document.getElementById('foodInput');
const waterInput = document.getElementById('waterInput');
const loveInput = document.getElementById('loveInput');
const energyInput = document.getElementById('energyInput');
const trainerImg = document.getElementById('trainerImg');
const petStatusInput = document.getElementById('petStatusInput');

class Animal {
    constructor(name) {
        this.name = name;
        this.hunger = 25;
        this.thirst = 30;
        this.happiness = 50;
        this.energy = 10;
        this.isAwake = false;
    }

    decreaseHunger (number) {
        this.hunger -= number;
        if (this.hunger < 0) {
            this.hunger = 0;
        }
    }

    decreaseThirst (number) {
        this.thirst -= number;
        if (this.thirst < 0) {
            this.thirst = 0;
        }
    }

    decreaseHappiness (number) {
        this.happiness -= number;
        if (this.happiness < 0) {
            this.happiness = 0;
        }
    }

    decreaseEnergy (number) {
        this.energy -= number;
        if (this.energy < 0) {
            this.energy = 0;
        }
    }

    increaseEnergy (number) {
        this.energy += number;
        if (this.energy > 100) {
            this.energy = 100;
        }
        
    }

    eat () {
        this.hunger += 20;
        if (this.hunger > 100) {
            this.hunger = 100;
        }
    }

    drink () {
        this.thirst += 20;
        if (this.thirst > 100) {
            this.thirst = 100;
        }
    }

    love () {
        this.happiness += 20;
        if (this.happiness > 100) {
            this.happiness = 100;
        }
    }

    walk () {
        this.happiness += 10;
        this.energy -= 5;
        if (this.happiness > 100) {
            this.happiness = 100;
        }

        if (this.energy < 0) {
            this.energy = 0;
        }
    }

    paint () {
        this.happiness -= 5;
        if (this.happiness < 0) {
            this.happiness = 0;
        }
    }

    awake () {
        this.isAwake = true;
    }

    sleep () {
        this.isAwake = false;
    }
}

let pet;

actionBtnsDiv.addEventListener('click', (event) => {
    if(event.target.tagName == 'BUTTON') {
        // console.log(event.target.id);  
        switch(event.target.id) {
            case 'wakeUpBtn':
                wakeUpPet();
                break;
            case 'goSleepBtn':
                goToSleepPet();
                break;
            case 'feedBtn':
                feedPet();
                break;
            case 'waterBtn':
                waterPet();
                break;
            case 'loveBtn':
                lovePet();
                break;
            case 'walkBtn':
                walkPet();
                break;
            case 'paintBtn':
                paintPet();
                break;
            default:
                break;
        }      
    }
});

document.addEventListener('DOMContentLoaded',(event) => {
    startGame();
});

startGame = () => {
    pet = new Animal('Pikachu');
    displayPetLevels();
    timePassed();
};

timePassed = () => {
    setTimeout(() => {
        if (pet.isAwake) {
            pet.decreaseHunger(10);
            pet.decreaseThirst(10);
            pet.decreaseHappiness(5);
            pet.decreaseEnergy(5);
        } else {
            pet.decreaseHunger(5);
            pet.decreaseThirst(5);
            pet.increaseEnergy(15);
        }
        displayPetLevels();
        timePassed();
    }, 60000);
}

displayPetLevels = () => {
    foodInput.value = pet.hunger;
    waterInput.value = pet.thirst;
    loveInput.value = pet.happiness;
    energyInput.value = pet.energy;
};

wakeUpPet = () => {
    petImage.src = 'Pet/pikachu.png';
    wakeUpBtn.disabled = true;
    goSleepBtn.disabled = false;
    feedBtn.disabled = false;
    waterBtn.disabled = false;
    loveBtn.disabled = false;
    walkBtn.disabled = false;
    paintBtn.disabled = false;
    petStatusInput.value = 'Hi, my name is Pikachu!';
};

goToSleepPet = () => {
    petImage.src = 'Pet/pikachu-sleeping.png';
    wakeUpBtn.disabled = false;
    goSleepBtn.disabled = true;
    feedBtn.disabled = true;
    waterBtn.disabled = true;
    loveBtn.disabled = true;
    walkBtn.disabled = true;
    paintBtn.disabled = true;
    petStatusInput.value = 'zzZZzzZZ...';
};

feedPet = () => {
    goSleepBtn.disabled = true;
    petImage.src = 'Pet/pikachu-eating.png';
    petStatusInput.value = 'Om nom nom nom';
    setTimeout(() => {
        petImage.src = 'Pet/pikachu.png';
        goSleepBtn.disabled = false;
        petStatusInput.value = 'Give me some attention!';
    }, 3000);
    pet.eat();
    displayPetLevels();
};

waterPet = () => {
    goSleepBtn.disabled = true;
    petImage.src = 'Pet/drinking.png';
    petStatusInput.value = 'Slurp slurp';
    setTimeout(() => {
        petImage.src = 'Pet/pikachu.png';
        goSleepBtn.disabled = false;
        petStatusInput.value = 'Give me some attention!';
    }, 3000);
    pet.drink();
    displayPetLevels();
};

lovePet = () => {
    goSleepBtn.disabled = true;
    petImage.src = 'Pet/trainer-loving-pikachu.png';
    trainerImg.src = '';
    petStatusInput.value = 'I love you too!';
    setTimeout(() => {
        petImage.src = 'Pet/pikachu.png';
        trainerImg.src = 'Pet/trainer-ash.png';
        goSleepBtn.disabled = false;
        petStatusInput.value = 'Give me some attention!';
    }, 3000);
    pet.love();
    displayPetLevels();
};

walkPet = () => {
    goSleepBtn.disabled = true;
    petImage.src = '';
    trainerImg.src = 'Pet/pikachu-walking.png';
    petStatusInput.value = 'Alright! Where are we going?';
    setTimeout(() => {
        petImage.src = 'Pet/pikachu.png';
        trainerImg.src = 'Pet/trainer-ash.png';
        goSleepBtn.disabled = false;
        petStatusInput.value = 'Give me some attention!';
    }, 3000);
    pet.walk();
    displayPetLevels();
};

paintPet = () => {
    goSleepBtn.disabled = true;
    petImage.src = 'Pet/pikachu-painted.png';
    petStatusInput.value = 'Really, dude?!';
    setTimeout(() => {
        petImage.src = 'Pet/pikachu.png';
        goSleepBtn.disabled = false;
        petStatusInput.value = 'Give me some attention!';
    }, 3000);
    pet.paint();
    displayPetLevels();
};