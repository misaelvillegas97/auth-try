import { Role } from '../roles/interfaces/role.interface';

export class RoleUtil {
  static hasRole(userRoles: Role[], requiredRole: Role): boolean {
    return userRoles.some(role => role.name === requiredRole.name);
  }

  static hasAnyRole(userRoles: Role[], requiredRoles: Role[]): boolean {
    return requiredRoles.some(requiredRole => this.hasRole(userRoles, requiredRole));
  }
}