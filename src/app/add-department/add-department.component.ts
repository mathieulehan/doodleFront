import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Department} from '../models/Department';

@Component({
    selector: 'app-add-department',
    templateUrl: './add-department.component.html',
    styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {
    response: any;
    errorMessage: string;
    saved;
    false;
    private department: Department;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.department = {
            name: ''
        };
    }

    addDepartment() {
        this.apiService.save('department', this.department).subscribe(p => {
                this.response = p;
            },
            e => this.errorMessage = e._body,
            () => {
                this.saved = true;
            }
        );
    }

}
