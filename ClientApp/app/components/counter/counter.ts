export class Counter {
    food = [
        { id: 0, name: 'Pizza' },
        { id: 1, name: 'Cake' },
        { id: 2, name: 'Steak' },
        { id: 3, name: 'Pasta' },
        { id: 4, name: 'Fries' }
    ];
    selectedMeal = null;
    
    public currentCount = 0;

    public decrementCounter() {
        this.currentCount--;
    }

    public incrementCounter() {
        this.currentCount++;
    }
}
