import React from 'react'
import Page from '../components/Page';

export default class Error extends React.Component {
  render() {
    return (
      <Page
        pageTitle="Error | Branberg"
        isHomePage
      >
        <h1 className="page-title page-title--home">
          This is an error page. Oops.
        </h1>
      </Page>
    )
  }
}
