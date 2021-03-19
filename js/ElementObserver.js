class ElementObserver {
    constructor(elementId) {
        //1 property which is refrence to the html element that will be updated
        this.element = document.getElementById(elementId);
    }

    update(model) {
        this.element.innerHTML = model.number;
        this.element.style.backgroundColor = model.color
    }
}

const elementObserver1 = new ElementObserver('elementObserver1')