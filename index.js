
/**
 * Module dependencies.
 */

var oauthbutton = require('oauthbutton');

/**
 * Expose `asanabutton`.
 */

module.exports = asanabutton;

/**
 * asanabutton.
 */

function asanabutton(id, alt) {
  var uri = 'https://app.asana.com/-/oauth_authorize'
    , opt = { client_id: id }
    , button = oauthbutton(uri, opt, '&nbsp;');

  button.setAttribute('title', 'Login with Asana');
  button.classList.add('asana');
  if (alt) button.classList.add('alt');

  return button;
}

