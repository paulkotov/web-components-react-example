import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';

import Card from './Card';

class CardCustomElement extends HTMLElement {
  connectedCallback () {
    const props = Object.values(this.attributes).map(attribute => [attribute.name, attribute.value]);
    const appProps = Object.fromEntries(props);
    render (<Card {...appProps} />, this);
  }

  disconnectedCallback () {
    unmountComponentAtNode(Card);
  }
}

customElements.define('user-card', CardCustomElement);
