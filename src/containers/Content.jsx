import React from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CFade } from '@coreui/react'

// routes config
import routes from '../routes'
  

const Content = () => {
  return (
    
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>
                      <route.component {...props} />
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/" />
          </Switch>
        
  )
}

export default React.memo(Content)
