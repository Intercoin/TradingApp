
const configGlobal = require('./config-global');
const API_BASE_URL = 'http://localhost:3000';

module.exports = {
    NETWORK_URL: configGlobal.NETWORK_URL || '',
    API_BASE_URL
}
