export default class SettingsService{

  constructor() {
    'ngInject';
  }

  getApiUrl() {
    return 'http://time5.dantas.cloud:8080';
  }

  getApiUrlWithEndpoint(endpoint) {
    return `${this.getApiUrl()}/${endpoint}`;
  }
}