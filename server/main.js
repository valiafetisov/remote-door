import { FlowRouter } from 'meteor/kadira:flow-router-ssr'
import '/imports/router'

FlowRouter.setPageCacheTimeout(1000 * 10)
FlowRouter.setDeferScriptLoading(true)
