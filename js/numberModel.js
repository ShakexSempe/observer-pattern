class NumberModel {
    constructor() {
        this.number = 0;
        this.color = 'red';
        this.observers = [];
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