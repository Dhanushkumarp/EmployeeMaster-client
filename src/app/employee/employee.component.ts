import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee/employee.service'
import { Employee } from '../employee/employee'
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';

interface Designation {
  dname: string;
  dcode: string;
}
interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {

  isActive: boolean = false;
  date: Date | undefined;
  employees: any[] = [];
  model = new Employee();
  empService: any;

  constructor(private employeeService: EmployeeService) { }

  designation: Designation[] | undefined;
  city: City[] | undefined;

  selectedDesignation: Designation | undefined;
  selectedCity: City | undefined;

  ngOnInit(): void {
    this.getEmployees();
    
    this.designation = [
      { dname: 'Developer', dcode: 'DEV'},
      { dname: 'Designer', dcode: 'DES' },
      { dname: 'Analyst', dcode: 'ANL' }
    ];

    this.city = [
      { name: 'Chennai', code: 'CHE' },
      { name: 'Coimbatore', code: 'COI' },
      { name: 'Madurai', code: 'MAD' },
      { name: 'Tiruchirappalli', code: 'TRI' },
      { name: 'Salem', code: 'SAL' },
      { name: 'Tirunelveli', code: 'TIR' },
      { name: 'Erode', code: 'ERO' },
      { name: 'Vellore', code: 'VEL' },
      { name: 'Thanjavur', code: 'THA' },
      { name: 'Kanchipuram', code: 'KAN' },
      { name: 'Karur', code: 'KAR' },
      { name: 'Nagercoil', code: 'NAG' },
      { name: 'Dindigul', code: 'DIN' },
      { name: 'Cuddalore', code: 'CUD' },
      { name: 'Tirupur', code: 'TIR' },
      { name: 'Ramanathapuram', code: 'RAM' },
      { name: 'Kumbakonam', code: 'KUM' },
      { name: 'Nagapattinam', code: 'NAG' },
      { name: 'Pudukkottai', code: 'PUD' },
      { name: 'Tiruvannamalai', code: 'TIR' },
      { name: 'Sivakasi', code: 'SIV' },
    ];

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


