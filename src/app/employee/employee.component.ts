import { Component } from '@angular/core';
import { EmployeeService } from '../employee/employee.service'
import { Employee } from '../employee/employee'
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

  employees: any[] = [];
  model = new Employee();
  empService: any;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(): void {
    this.employeeService.getStudents().subscribe(
      (data) => {
        this.employees = data;
        console.log(data);
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );

  }

  addEmployee(form: any): void {
    this.employeeService.create(this.model)
      .subscribe(employee => {
        this.model = employee;
        this.getEmployees();
      });
  }
  deleteStudent(id: any) {
    this.employeeService.delete(id)
      .subscribe(() => {
        this.getEmployees();
      })
  }
  editStudent(arg0: any) {
    throw new Error('Method not implemented.');
  }
}

