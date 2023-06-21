const { GoogleSocialLogin } = require('cypress-social-logins').plugins;

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: any, config: any) => {
    on('task', {
        GoogleSocialLogin: GoogleSocialLogin,
    });
};
