import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector     : 'example',
    templateUrl  : './example.component.html',
    encapsulation: ViewEncapsulation.None
})
export class ExampleComponent implements OnInit{
    users:any;
    isList: number;
    table_interact1: boolean = false;
    table_interact2: boolean = false;
    table_interact3: boolean = false;
    table_interact4: boolean = false;
    table_interact5: boolean = false;
    table_interact6: boolean = false;
    table_interact7: boolean = false;

    constructor( private http:HttpClient) {}
    checkAll(value) {
        this.table_interact1 = value;
        this.table_interact2 = value;
        this.table_interact3 = value;
        this.table_interact4 = value;
        this.table_interact5 = value;
        this.table_interact6 = value;
        this.table_interact7 = value;
    }
    ngOnInit(): void {
        this.getUsers()
    }

    getUsers(){
        this.http.get('http://127.0.0.1:8000/api/all_users').subscribe((res:any)=>{
            this.users = res
        })
    }
}
