// import React, { Component } from 'react'
import React, {Suspense,lazy } from 'react'
import Home1 from './Home1'
const Home1=lazy(()=>import('./Home1'))

export default class LazyLoading extends Component {
  render() {
    return (
      <div>
        <Suspense fallback={<div>please wait page is getting loaded after sometimes</div>}>
        <h1>Lazy Loading</h1>
        <Home1/>
        </Suspense>
      </div>
    )
  }
}
