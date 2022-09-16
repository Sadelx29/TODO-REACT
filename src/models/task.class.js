import { levels } from "./levels.enum.js";

export class Task {
    name = '';
    descripcion = "";
    level = levels.normal;
    completed = false;

    constructor(name, descripcion, level, completed){
        this.name = name;
        this.completed = completed;
        this.descripcion = descripcion;
        this.level = level;

    }
}

