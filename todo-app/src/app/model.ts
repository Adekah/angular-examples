export class Model {
    user;
    items;
    constructor() {
        this.user = "Adeka";
        this.items = [
            new TodoItem("A", true),
            new TodoItem("B", true),
            new TodoItem("C", false),
            new TodoItem("D", false),
            new TodoItem("E", true)

        ];
    }
}

export class TodoItem {
    description;
    action;

    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}