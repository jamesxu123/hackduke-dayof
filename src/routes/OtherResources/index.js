export default (store) => ({
    path: '/otherresources',
    /*  Async getComponent is only invoked when route matches   */
    getComponent (nextState, cb) {
      /*  Webpack - use 'require.ensure' to create a split point
          and embed an async module loader (jsonp) when bundling   */
      require.ensure([], (require) => {
        /*  Webpack - use require callback to define
            dependencies for bundling   */
        const OtherResources = require('components/OtherResources').default
  
        /*  Return getComponent   */
        cb(null, OtherResources)
  
      /* Webpack named bundle   */
      }, 'otherresources')
    }
  })
  