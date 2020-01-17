import { environment } from '../../environments/environment';
/**
 * Exports all static values
 * @module app/config
 */

export const url = {
registration: environment.apiURL + '/auth/signup',
login: environment.apiURL + '/auth/login',

}