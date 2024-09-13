export class Employee {
  id?: number;
  name?: string;
  age?: number;
  designation?: string;
  dob?: Date;
  email?: string;
  gender?: string;
  address?: string;
  city?: string;
  region?: string;
  isActive?: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
