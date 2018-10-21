import Page from '../components/Page';
import WorkItem from '../components/WorkItem';

const Work = () => (
  <Page pageTitle="Work | Branberg">
    <div className="wrap">
      <h1 className="page-title">
        From concept to creation and beyond, we work with incredible people to make great digital products.
      </h1>
      <div className="client-list">
        <div className="client-list__logo">
          <img alt="TCF Bank" className="client-list__logo-image" src="/static/images/clients/tcf.png" />
        </div>
        <div className="client-list__logo">
          <img alt="University of Minnesota" className="client-list__logo-image" src="/static/images/clients/umn.png" />
        </div>
        <div className="client-list__logo">
          <img alt="Mayo Clinic" className="client-list__logo-image" src="/static/images/clients/mayo.png" />
        </div>
        <div className="client-list__logo">
          <img alt="Delta Dental" className="client-list__logo-image" src="/static/images/clients/deltadental.png" />
        </div>
        <div className="client-list__logo">
          <img alt="Craze Interactive" className="client-list__logo-image" src="/static/images/clients/crazeinteractive.png" />
        </div>
        <div className="client-list__logo">
          <img alt="Hoodie Allen" className="client-list__logo-image" src="/static/images/clients/hoodieallen.png" />
        </div>
        <div className="client-list__logo">
          <img alt="Nexmo" className="client-list__logo-image" src="/static/images/clients/nexmo.png" />
        </div>
        <div className="client-list__logo">
          <img alt="Mike's" className="client-list__logo-image" src="/static/images/clients/mikeshard.png" />
        </div>
      </div>
    </div>

    <div className="work-items">

      <WorkItem
        imgSrc="static/images/work/mayo01.jpg"
        imgAlt="Mayo Clinic iOS App"
        title="Mayo Clinic"
        category="Patient App"
        bgColor="#d9af82"
      />

      <WorkItem
        imgSrc="static/images/work/mikes01.jpg"
        imgAlt="Mike's Hard Lemonade Graphics"
        title="Mike's Hard Lemonade"
        category="Graphics"
        bgColor="#bb224a"
      />

      <WorkItem
        imgSrc="static/images/work/uofm_hockey.jpg"
        imgAlt="University of Minnesota hockey logo"
        title="University of Minnesota"
        category="Graphics"
        bgColor="#3f0f17"
      />

      <WorkItem
        imgSrc="static/images/work/conte-01.jpg"
        imgAlt="Jack Conte tour poster"
        title="Jack Conte"
        category="Tour Poster"
        bgColor="#1f050e"
      />

      <WorkItem
        imgSrc="static/images/work/boombox.jpg"
        imgAlt="Boombox Wordpress Theme"
        title="Boombox"
        category="Wordpress Theme"
        bgColor="#1a1a1a"
        link="https://github.com/branberg/Boombox-WP"
      />

      <WorkItem
        imgSrc="static/images/work/cameraslice01.jpg"
        imgAlt="Camera Slice Web App"
        title="Camera Slice Web App"
        category="Web App"
        bgColor="#222222"
      />
    </div>
  </Page>
);

export default Work;
