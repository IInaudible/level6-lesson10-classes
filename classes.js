class ZooAnimal {
    static adoptions = 0;
    constructor (animalName, animalType, date) {
        this.animalName = animalName;
        this.animalType = animalType;
        this.date = date;
        ZooAnimal.adoptions++;
    }

    printDetails() {
        console.log(this.animalName, this.animalType, this.date);
    }

    static printAmount() {
        console.log(this.adoptions, 'Animals')
    }
}

class ZooBird extends ZooAnimal {
    static birdAdoptions = 0;
    constructor (animalName, date) {
        super (animalName, 'Bird', date);
        ZooBird.birdAdoptions++;
    }

    static printAmount() {
        console.log(this.birdAdoptions, 'Birds')
    }
}

class ZooMammal extends ZooAnimal {
    static mammalAdoptions = 0;
    constructor (animalName, date) {
        super (animalName, 'Mammal', date);
        ZooMammal.mammalAdoptions++;
    }

    static printAmount() {
        console.log(this.mammalAdoptions, 'Mammals')
    }
}

// Step 5: Run the code with Node.js, and note that the console should print out the following:
// Crocodile / Reptile / Jan 22, 2022
// Flamingo / Bird / Feb 20, 2022
// Tiger / Mammal / Feb 12, 2022
// 3 animals
// 1 birds
// 1 mammals

let crocodile = new ZooAnimal("Crocodile", "Reptile", "Jan 22, 2022");
let flamingo = new ZooBird("Flamingo", "Feb 20, 2022");
let tiger = new ZooMammal("Tiger", "Feb 12, 2022");

crocodile.printDetails();
flamingo.printDetails();
tiger.printDetails();

ZooAnimal.printAmount();
ZooBird.printAmount();
ZooMammal.printAmount();