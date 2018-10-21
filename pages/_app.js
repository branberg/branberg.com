import App, { Container } from 'next/app';
import Router from "next/router";
import withGA from "next-ga";

class MyApp extends App {
  render() {
    const  { Component } = this.props;

    return (
      <Container>
        <Component />
      </Container>
    );
  }
}

export default withGA("UA-19739952-3", Router)(MyApp);
