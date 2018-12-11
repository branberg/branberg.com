import Page from '../components/Page';
import PhotoBlock from '../components/PhotoBlock';

const Career = () => (
  <Page pageTitle="Career | Branberg">
    <div className="site-content">
      <h1 className="page-title">
        Technical Co-Founder Needed
      </h1>
      <p className="copy__subtitle">
        We need a technical co-founder that can burn the midnight oil with us and have a ton of fun making the ideas we all generate come to life.
      </p>
      <h3>
        About Us
      </h3>
      <p>
        We live to make things. We’re a studio  that is deeply passionate about design, product, and ideas.
      </p>
      <p>
        We love ideas, and are addicted to the feeling you get when you’re onto something interesting. We have a lot of product, branding, UI/UX, and design skills which have served us well until recently. It’s time to step up our game, that’s where you come in.
      </p>
      <div className="photo-blocks">
        <PhotoBlock
          name="Sam Brannon"
          photoUrl="/static/images/sam-brannon.jpg"
        />
        <PhotoBlock
          name="Mike Berg"
          photoUrl="/static/images/mike-berg.jpg"
        />
        <PhotoBlock
          name="You"
        />
      </div>
      <h3>About You</h3>
      <p>
        We are looking for an engineer to compliment our design skills.
        <br />
        You should be a skilled engineer/developer, but most importantly, you should get excited about cool products and ideas.
      </p>
      <p>
        You should be able to build a backend that can handle things like user authentication, money processing, emails, etc. You should also be able to tinker with the frontend to help wire things up. Don’t want to touch CSS? No problem! Want to get your hands dirty with React Native and experiment with new stuff? Perfect.
      </p>
      <h3>
        Why Us?
      </h3>
      <p>
        We’re passionate as hell. We love what we do, and we’re hungry to do more. Up until now, we’ve relied on prebuilt frameworks (cough Wordpress cough) to help our clients get what they want. For our day jobs, we’re on teams with insanely skilled people, but we’ve yet to get this same level of talent  on our own team . It’s hard to come by.
      </p>
      <h3>
        What’s in it for you?
      </h3>
      <p>
        If you join us, you’ll be an equal member. You’ll get a 1/3 share of everything and be as involved with all the idea generation and product development as you want. Got your own ideas you’ve been itching to build? We want to help you. Got an itch to work on something new but not sure where to start? We want to help you.
      </p>
      <h3>
        What will you earn?
      </h3>
      <p>
        Nothing.
        <br />
        Neither will we.
        <br />
        That is until we do, of course.
      </p>
      <p>
        We want to make products that people actually care about; Products we see ourselves using. We also very much want to make products that people are willing to pay for. We care a lot about this and want to make a living doing it.
      </p>
      <p>
        We want this to start as a side project that can grow into more. We don’t have much to offer you financially, but we’re hoping the right person will be interested anyway.
      </p>
      <h3>
        What do you do now?
      </h3>
      <p>
        Reach out to us here (<a href="mailto:hello@branberg.com?subject=Hi" target="_blank">hello@branberg.com</a>) or <a href="https://twitter.com/branberg" target="_blank">Tweet us</a>… We’d love to talk with you. Tell us about your past, your cool ideas and what you’re interested in doing. Something in here not sound right? Tell us why we should change it. We’re both super approachable and living/breathing definitions of Minnesota-Nice. If you live in Chicago or Minneapolis even better, we’ll buy you coffee, lunch, dinner, or beer and we can chat that way.
      </p>
      <p>
        <br />
        Looking forward to meeting you,
        <br />
        <br />
        Sam &amp; Mike
      </p>
    </div>
  </Page>
);

export default Career;
