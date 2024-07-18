import LitWithoutShadowDom from './base/LitWithoutShadowDom';
import { html } from 'lit';
import { msg, updateWhenLocaleChanges } from '@lit/localize';
import Utils from '../utils/utils';
import Config from '../config/config';
import CheckUserAuth from '../pages/auth/check-user-auth';

class NavLinkAuth extends LitWithoutShadowDom {
  constructor() {
    /* ... */
  }

  render() {
    return html`
      <li class="nav-item dropdown">
        <!-- ...kode lainnya disembunyikan... -->

        <ul class="dropdown-menu">
          <a class="dropdown-item" id="userLogOut" @click=${this._userLogOut}> ${msg(`Keluar`)} </a>
        </ul>
      </li>
    `;
  }

  _userLogOut(event) {
    event.preventDefault();
    Utils.destroyUserToken(Config.USER_TOKEN_KEY);
    CheckUserAuth.checkLoginState();
  }
}

customElements.define('nav-link-auth', NavLinkAuth);
