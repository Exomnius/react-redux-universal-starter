import React from 'react';
import ReactDOM from 'react-dom';
import { renderIntoDocument } from 'react-addons-test-utils';
import { expect } from 'chai';
import NavBar from 'components/NavBar/NavBar';
import { Provider } from 'react-redux';
import { browserHistory } from 'react-router';
import createStore from 'redux/create';
import ApiClient from 'helpers/ApiClient';
const client = new ApiClient();

describe('InfoBar', () => {
  const mockStore = {
    i18n: {
      locale: 'en',
      locales: ['en', 'nl']
    }
  };
  const store = createStore(browserHistory, client, mockStore);
  const renderer = renderIntoDocument(
    <Provider store={store} key="provider">
      <NavBar locale={mockStore.i18n.locale} locales={mockStore.i18n.locales} onLocaleClick={() => {}}>
        <span/>
        <span/>
      </NavBar>
    </Provider>
  );
  const dom = ReactDOM.findDOMNode(renderer); // TODO replace findDOMNode method

  it('should render correctly', () => expect(renderer).to.be.ok);

  it('should render with correct amount of children', () => {
    const text = dom.getElementsByTagName('strong')[0].textContent;
    expect(text).to.equal(mockStore.info.data.message);
  });

  it('should render with a locale buttons', () => {
    const text = dom.getElementsByTagName('button')[0].textContent;
    expect(text).to.be.a('string');
  });

  it('should render the correct className', () => {
    const styles = require('components/NavBar/NavBar.scss');
    expect(styles.navBar).to.be.a('string');
    expect(dom.className).to.include(styles.navBar);
  });
});
