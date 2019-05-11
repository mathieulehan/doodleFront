import {Component, OnInit} from '@angular/core';
import {ApiService} from '../api.service';
import {Employe} from '../models/Employe';
import {Department} from '../models/Department';

@Component({
    selector: 'app-add-employee',
    templateUrl: './add-employee.component.html',
    styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
    response: any;
    errorMessage: string;
    saved;
    false;
    existingDepartments: Department[];
    selectedDepartment: Department[];
    private employee: Employe;

    constructor(private apiService: ApiService) {
    }

    ngOnInit() {
        this.getDepartments();
        this.employee = {
            firstName: '',
            lastName: '',
            birthDate: ''
        };
    }

    addEmployee() {
        this.apiService.save('employee', this.employee).subscribe(p => {
                this.response = p;
            },
            e => this.errorMessage = e._body,
            () => {
                this.saved = true;
            }
        );
        localStorage.removeItem('employees');
    }

    /**
     * get all employees from the api
     * only if they have not been fetched already
     */
    getDepartments() {
        this.apiService.getDepartments().subscribe(res => {
                localStorage.setItem('departments', JSON.stringify(res));
            },
            this.existingDepartments = JSON.parse(localStorage.getItem('departments')));
    }
}
