import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/fundamentos/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{

  data : any[] = []

  constructor(private dataService : DataService) {}

  ngOnInit(): void {
    this.getUsers()  
  }

  getUsers() {
    this.dataService.getUsers()
      .subscribe((users : any['']) => this.data = users );
  }

}
