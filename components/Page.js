import React, { Component } from 'react';
import Meta from './Meta';
import Nav from './Nav';
import Footer from './Footer';
import ContactModal from './ContactModal';

import "../scss/main.scss"

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }

    this.onModalButtonClick = this.onModalButtonClick.bind(this);
    this.closeModalOnEsc = this.closeModalOnEsc.bind(this);
    this.onModalBGClick = this.onModalBGClick.bind(this);
  }

  openModal() {
    this.setState({
      modalOpen: true
    });
  }

  closeModal() {
    this.setState({
      modalOpen: false
    });
  }

  onModalButtonClick() {
    this.openModal();
  }

  closeModalOnEsc(event) {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  }

  onModalBGClick() {
    this.closeModal();
  }

  componentDidMount(){
    document.addEventListener("keydown", this.closeModalOnEsc, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.closeModalOnEsc, false);
  }

  render() {
    const bodyClasses = `body ${this.props.className}`;

    return (
      <div className={bodyClasses}>
        <Meta pageTitle={this.props.pageTitle} />
        <Nav onModalButtonClick={this.onModalButtonClick} />
        <section className="content-wrapper">
          {this.props.children}
        </section>
        <Footer />
        <ContactModal
          modalOpen={this.state.modalOpen}
          onModalBGClick={this.onModalBGClick}
        />
      </div>
    );
  }
}

export default Page;
