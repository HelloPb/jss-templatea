import React from 'react';
import PropTypes from 'prop-types';
import { Placeholder } from '@sitecore-jss/sitecore-jss-react';

const TileContainer = ({ fields, rendering }) => (
  <div class="row">
    <Placeholder name="jssdocs-tiles" rendering={rendering} />
  </div>
);

export default TileContainer;
