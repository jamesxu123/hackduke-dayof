// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/CoreLayout/CoreLayout'
import EventInfoRoute from './EventInfo'
import ScheduleRoute from './Schedule'
import DatasetsRoute from './Datasets'
import TravelInfoRoute from './TravelInfo'
import MapsRoute from './Maps'
import SpeakersRoute from './Speakers'
import OtherResources from './OtherResources'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: EventInfoRoute(store),
  childRoutes: [
    ScheduleRoute(store),
    EventInfoRoute(store),
    DatasetsRoute(store),
    MapsRoute(store),
    TravelInfoRoute(store),
    SpeakersRoute(store),
    OtherResources(store)
  ]
})

/*  Note: childRoutes can be chunked or otherwise loaded programmatically
    using getChildRoutes with the following signature:

    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          // Remove imports!
          require('./Counter').default(store)
        ])
      })
    }

    However, this is not necessary for code-splitting! It simply provides
    an API for async route definitions. Your code splitting should occur
    inside the route `getComponent` function, since it is only invoked
    when the route exists and matches.
*/

export default createRoutes
