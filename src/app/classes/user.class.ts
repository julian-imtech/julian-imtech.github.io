/* user types
    1 = Root admin
*/

export class User {
  idUser: number;
  idRole: number;
  idOrganization: number;
  idTown: number;
  email: string;
  firstName: string;
  lastName: string;
  mothersLastName: string;
  phone: string;
  idConektaAccount?: string | null | undefined;
  lastLoginDate: Date;
  active: boolean;
  deleted: boolean;
  createdAt: Date;
  updatedAt: Date;

  town: TownUserTown;
  role: Role;

  constructor() {
    this.idUser = -1;
    this.idOrganization = -1;
    this.idRole = -1;
    this.idTown = -1;
    this.email = "";
    this.firstName = "";
    this.lastName = "";
    this.mothersLastName = "";
    this.phone = "";
    this.lastLoginDate = new Date();
    this.active = true;
    this.deleted = false;
    this.createdAt = new Date();
    this.updatedAt = new Date();

    this.town = new TownUserTown();
    this.role = new Role();
  }
}
export class TownUserTown {
  idTown: number
  idState: number;
  name: string;

  state ?: StateUserTown;

  constructor() {
    this.idTown = -1;
    this.idState = -1;
    this.name = "";
  }
}
export class StateUserTown {
  idState: number;
  name: string;

  constructor() {
    //this.idTown = -1;
    this.idState = -1;
    this.name = "";
  }
}
export class Role {
  idRole: number;
  name: string;
  description: string;

  constructor() {
    this.idRole = -1;
    this.name = '';
    this.description = '';
  }
}

