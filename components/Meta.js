import Head from 'next/head';
import "../scss/main.scss"

const Meta = () => (
  <Head>
    <meta charset="UTF-8" />
    <title>Home | Branberg</title>
    <meta content="width=device-width, initial-scale=1" name="viewport" />
    <link href="static/images/favicon.png" rel="icon" type="image/png" />
    <meta content="We craft digital experiences - A studio committed to great ideas." name="description" />
    <link href="https://branberg.com" rel="canonical" />

    <meta content="en_US" property="og:locale" />
    <meta content="website" property="og:type" />
    <meta content="Branberg" property="og:site_name" />
    <meta content="Home | Branberg" property="og:title" />
    <meta content="We craft digital experiences - A studio committed to great ideas." property="og:description" />
    <meta content="https://branberg.com" property="og:url" />
    <meta content="https://branberg.comassets/img/facebook.png" property="og:image" />
    <meta content="https://www.facebook.com/branbergstudios" property="article:publisher" />

    <link href="//fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" type="text/css" />
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet" />
  </Head>
)

export default Meta;
