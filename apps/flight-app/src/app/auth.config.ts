import { AuthConfig } from 'angular-oauth2-oidc';
 
export const authConfig: AuthConfig = {
 
  issuer: 'https://idsvr4.azurewebsites.net',
 
  redirectUri: window.location.origin + '/index.html',
 
  clientId: 'spa',
 
  scope: 'openid profile email offline_access api',

  responseType: 'code',

  timeoutFactor: 0.01,

}