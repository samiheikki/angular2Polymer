import {Component} from 'angular2/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/example.html',
  directives: []
})
export class AppComponent {
  comboBoxLabel: string;
  items: Array<string>;
  constructor() {
    var self = this;
    this.items = ['2015-02-01', '2012-07-05'];
    this.comboBoxLabel = 'Best dates';
    this.eventListeners();
  }

  eventListeners() {
    var self = this;
    setTimeout(function() {
      var datepicker = document.querySelector('vaadin-date-picker');
      datepicker.addEventListener('value-changed',function() {
        self.items.push(datepicker.value);
        //console.log(datepicker.value);
      });
    },1000);
  }

  getJSON(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.open('GET', url, true);
    xhr.send();
  }
}
