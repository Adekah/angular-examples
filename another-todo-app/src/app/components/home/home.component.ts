import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  data = {
    todo: [
      'A',
      'B',
      'C'],
    process: [
      'D',
      'E'],
    done: [
      'F',
      'G',
      'W']
  }

  constructor() {
  }

  ngOnInit() {
    this.setItems();
  }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
      Object.keys(this.data).forEach((key => {
        localStorage.setItem(key, JSON.stringify(this.data[key]));
      }));
    }
  }


  addTodo(todo) {
    this.data.todo.push(todo.value);
    todo.value = "";

    localStorage.setItem('todo', JSON.stringify(this.data.todo));
  }


  setItems() {

    Object.keys(this.data).forEach((key => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(this.data[key]));
      } else {
        this.data[key] = JSON.parse(localStorage.getItem(key));
      }
    }));
  }

}
