import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'app-my-component',
  template: `
    <div>
        <h2>My Component</h2>

    </div>
  `,
  styleUrls: []
})

export class MyComponent implements OnInit {
  ngOnInit(): void {

    console.log("Hi My Component ")
  }


}
