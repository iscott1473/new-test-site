
import React from 'react'
import { withRouteData } from 'react-static'
import convert from 'htmr'
//

export default withRouteData(({about}) => (
  <div>
    <h3>This is a website I guess</h3>
    <p>{convert(about.contents)}</p>
  </div>
))
