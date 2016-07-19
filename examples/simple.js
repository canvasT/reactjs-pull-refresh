import React, {Component, PropTypes} from 'react';
import {render} from 'react-dom';
import PullRefresh from '../src/scripts/index';
import './sass/simple.scss';

class PullRefreshSimple extends Component {
  constructor(props, context) {
    super(props, context);
    this.loadingFunction.bind(this);
  }

  loadingFunction() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const result = true;
        if (result) {
          resolve();
        } else {
          reject();
        }
      }, 500);
    }).then(() => {
      alert.info('刷新成功！');
    });
  }

  render() {
    const hammerOptions = {
      touchAction: 'auto',
      recognizers: {
        pan: {
          threshold: 50
        }
      }
    };

    return (
      <div>
        <PullRefresh loadingFunction={this.loadingFunction}
                     distanceToRefresh={40}
                     hammerOptions={hammerOptions}>
          <p>Pull down to refresh! You need pull over 50px to refresh.</p>
          <p>The details you see hammerOptions.</p>
        </PullRefresh>
      </div>
    );
  }
}

render(
  <PullRefreshSimple />, document.getElementById('layout')
);