import Head from 'next/head';
import "../scss/main.scss"

const Meta = (props) => {
  const renderPageTitle = () => {
    if (!props.pageTitle) {
      return "Branberg";
    }

    return props.pageTitle;
  }

  // TODO get Google Analytics installed

  return (
    <Head>
      <meta charset="UTF-8" />
      <title>{renderPageTitle()}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/static/images/favicon.png?ver=3" rel="icon" type="image/png" />
      <meta content="A studio that's making an app" name="description" />
      <link href="https://branberg.com" rel="canonical" />

      <meta content="en_US" property="og:locale" />
      <meta content="website" property="og:type" />
      <meta content="Branberg" property="og:site_name" />
      <meta content="Home | Branberg" property="og:title" />
      <meta content="A studio that's making an app" property="og:description" />
      <meta content="https://branberg.com" property="og:url" />
      <meta content="https://branberg.comassets/img/facebook.png" property="og:image" />
      <meta content="https://www.facebook.com/branbergstudios" property="article:publisher" />

      <link href="//fonts.googleapis.com/css?family=Montserrat:300,700,900" rel="stylesheet" type="text/css" />
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
    </Head>
  )
}

export default Meta;
