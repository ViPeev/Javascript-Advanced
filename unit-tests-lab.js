function subSum(arr,start,end){
    if(!Array.isArray(arr)){
        return NaN;
    }

    startIndex = Math.max(start,0);
    endIndex = Math.min(end,arr.length-1);
    
    let sum = arr.slice(startIndex,endIndex+1)
    .reduce((a,b) => a+Number(b),0);

    return sum;
}

function playingCards(face,suit){
    let validFaces = ["J", "Q", "K", "A",
    "2", "3", "4", "5", "6", "7", "8", "9", "10"];
    let validSuits = {
        S: "\u2660", 
        H: "\u2665", 
        D: "\u2666", 
        C: "\u2663",
    }

    if(!validFaces.includes(face) || !validSuits[suit]){
        throw new Error("Invalid face or suit");
    }

    return {
        face,
        suit,
        toString(){
            return String(this.face)+validSuits[this.suit];
        }
    }
}

function printDeckOfCards(arrayOfCards){
    function playingCards(face,suit){
        let validFaces = ["J", "Q", "K", "A",
        "2", "3", "4", "5", "6", "7", "8", "9", "10"];
        let validSuits = {
            S: "\u2660", 
            H: "\u2665", 
            D: "\u2666", 
            C: "\u2663",
        }
    
        if(!validFaces.includes(face) || !validSuits[suit]){
            throw new Error(`Invalid card: ${face}${suit}`)
        }
    
        return {
            face,
            suit,
            toString(){
                return String(this.face)+validSuits[this.suit];
            }
        }
    }

    let cards = [];
    arrayOfCards.forEach( card => {
        let currentSuit = card[card.length-1];
        let currentFace = card.slice(0,card.length-1);
        let currentCard;
        try {
            currentCard = playingCards(currentFace,currentSuit);
        } catch(err) {
            cards = [err];
            return
        }
        cards.push(currentCard.toString());
    })

    console.log(cards.join(" "));
}

describe('Sum of Numbers',() => {
    it('Should return the sum of the numbers in the array',() => {
        let numbers = [1,2,3,4,5];
        let expectedSum = 15;

        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    });


    it('Should return the sum with negative number in the array',() => {
        let numbers = [1,2,3,4,-5];
        let expectedSum = 5;

        let actualSum = sum(numbers);

        expect(actualSum).to.equal(expectedSum);
    })

    it('Should return 0 when only zeros are given in the array', () => {
        let numbers = [0,0,0,0];
        let expectedSum = 0;

        let actuamSum = sum(numbers);
        expect(actuamSum).to.equal(expectedSum);
    })
})

describe("Is array symmetrical", () => {
    it("Is input a symmetrical array #1", () => {
        let input = [1,2,3,2,1];
        let test = isSymmetric(input);
        expect(test).to.be.true;
    });

    it("Is input an asymmetrical array #2", () => {
        let input = [3,3,5,3,3,1];
        let test = isSymmetric(input);
        expect(test).to.be.false;
    });

    it("should test incorrect null type", () => {
      	expect(isSymmetric(null)).to.be.false;
    });
  
    it("Is input an object", () => {
        let input = {};
        let test = isSymmetric(input);
        expect(test).to.be.false;
    });

    it("Is input a string", () => {
        let input = "string";
        let test = isSymmetric(input);
        expect(test).to.be.false;
    });

    it("Is input a number", () => {
        let input = 10;
        let test = isSymmetric(input);
        expect(test).to.be.false;
    });
  
    it("should test incorrect bool type", () => {
        expect(isSymmetric(true)).to.be.false;
    });

    it("should test incorrect undefined type", () => {
        expect(isSymmetric(undefined)).to.be.false;
    });

    it("should test empty array", () => {
        expect(isSymmetric([])).to.be.true;
    });

    it("should test different symetric types", () => {
        expect(isSymmetric(["2", 2])).to.be.false;
    });
});

describe("Is rgbtoHexColor properly returning the correct HEX code", () => {
    it("Should return HEXCODE if numbers are integers in the range of 0-255", () => {
        expect(rgbToHexColor(233,242,212)).to.equal("#E9F2D4");
    });
    it("Should return undefined if all numbers are integers above 255", () => {
        expect(rgbToHexColor(270,300,299)).to.be.undefined;
    });
    it("Should return undefined if some numbers are integers above 255", () => {
        expect(rgbToHexColor(170,1,299)).to.be.undefined;
    });
    it("Should return undefined if some numbers are not integers in the range", () => {
        expect(rgbToHexColor(0.0,1.0,255.0)).to.equal("#0001FF");
    });
    it("Should return undefined if all numbers are negative", () => {
        expect(rgbToHexColor(-170,-1,-299)).to.be.undefined;
    });
    it("Should return undefined if some numbers are not integers", () => {
        expect(rgbToHexColor(1.1,1,2)).to.be.undefined;
    });
    it("Should return undefined if all numbers are not integers", () => {
        expect(rgbToHexColor(1.1,1.4,27.7)).to.be.undefined;
    });
    it("Should return undefined if params are not numbers at all", () => {
        expect(rgbToHexColor({},"Hello there",[13,13,1])).to.be.undefined;
    });
    it("Should return undefined if some params are not numbers", () => {
        expect(rgbToHexColor(17,"Hello there",6)).to.be.undefined;
    });
    it("Should return undefined if param are numbers as string", () => {
        expect(rgbToHexColor("10","255","15")).to.be.undefined;
    });
});

describe('Is calculator working correctly', () => {
    it("Should return an object", () => {
        expect(createCalculator()).to.be.a("object");
    });
    it("Should have add property", () => {
        expect(createCalculator()).to.have.property('add');
    });
    it("Should have subtract property", () => {
        expect(createCalculator()).to.have.property('subtract');
    });
    it("Should have get property", () => {
        expect(createCalculator()).to.have.property('get');
    });
    it("Should add integers", () => {
        let calculator = createCalculator();
        calculator.add(5)
        expect(calculator.get()).to.equal(5);
    });
    it("Should add floating numbers", () => {
        let calculator = createCalculator();
        calculator.add(5.3)
        expect(calculator.get()).to.equal(5.3);
    });
    it("Should subtract floating numbers", () => {
        let calculator = createCalculator();
        calculator.subtract(5.3)
        expect(calculator.get()).to.equal(-5.3);
    });
    it("Should subtract integers", () => {
        let calculator = createCalculator();
        calculator.subtract(250)
        expect(calculator.get()).to.equal(-250);
    });
    it("Should return Nan if input cannot be parsed to a number",() => {
        let calculator = createCalculator();
        calculator.add("hello");
        assert.isNaN(calculator.get());
    })
})