import React, { Component } from 'react';

import BaseLayout from './BaseLayout';

class Layout extends Component {
  state = {
    catalogs: {},
  };

  render() {
    const { children } = this.props;
    return <BaseLayout>{children}</BaseLayout>;
  }
}

export default Layout;
