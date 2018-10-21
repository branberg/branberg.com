const ContactModal = (props) => {
  const classes = 'md-modal';

  const renderModalClasses = () => {
    if (props.modalOpen) {
      return `${classes} md-show`
    }

    return classes;
  }

  return (
    <div>
      <div className={renderModalClasses()}>
        <div className="md-content">
          <div className="main_contact">
            <div className="email">
              <a href="mailto:&#104;&#101;&#108;&#108;&#111;&#64;&#98;&#114;&#97;&#110;&#98;&#101;&#114;&#103;&#46;&#99;&#111;&#109;">
                &#104;&#101;&#108;&#108;&#111;&#64;&#98;&#114;&#97;&#110;&#98;&#101;&#114;&#103;&#46;&#99;&#111;&#109;
              </a>
            </div>
          </div>
          <div className="secondary_contact">
            <p className="address">Minneapolis, MN</p>
            <div className="social">
              <a href="https://twitter.com/branberg" target="_blank">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="https://dribbble.com/mikberg" target="_blank">
                <i className="fa fa-dribbble"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className="md-overlay"
        onClick={props.onModalBGClick}
      />
    </div>
  )
};

export default ContactModal;
