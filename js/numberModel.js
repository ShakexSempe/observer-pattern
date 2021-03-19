
class NumberModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
    }

    increment() {
        const colors = ['orange', 'red','green', 'blue'];
        
        this.number++;
        //select a random element in the colors array
        this.color = colors[Math.floor(Math.random() * colors.length)];
        //notify each observer of changes through the 'this' parameneter in the update method in notifyObserver() 
        this.notifyObservers()
    }

    //accept observer as a parameter then add that observer to array of observers
    addObserver(o) {
        this.observers.push(o)
    }

    //loop through observers and notify changes
    notifyObservers() {
        for(let o of this.observers){
            o.update(this);
        }
    }

}

const model = new NumberModel;