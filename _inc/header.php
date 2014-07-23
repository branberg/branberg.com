<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php echo $pageTitle; ?> - Branberg</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">

	<meta name="description" content="A designer and developer doing what we love for people who love what they do."/>
	<link rel="canonical" href="http://branberg.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Branberg" />
	<meta property="og:description" content="A designer and developer doing what we love for people who love what they do." />
	<meta property="og:url" content="http://branberg.com/" />
	<meta property="og:site_name" content="Branberg" />
	<meta property="article:publisher" content="https://www.facebook.com/branbergstudios" />

	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="library/css/main.css">

</head>
<body class="<?php echo $pageID; ?>">

<?php if( $pageID == 'homepage' ): ?>
	<div id="homepage_background"></div>
<?php endif; ?>

	<div id="wrapper">

		<header id="main_header" class="clearfix">
			<a href="/" id="logo" rel="home"><img src="/library/img/logo.svg" alt="Branberg Logo" /></a>
			<nav id="main_nav">
				<ul>
					<li<?php echo( $pageID == 'studio' ? ' class="current_page"' : '' ); ?>><a href="/studio">Studio</a></li>
					<li<?php echo( $pageID == 'work' ? ' class="current_page"' : '' ); ?>><a href="/work">Work</a></li>
					<li<?php echo( $pageID == 'contact' ? ' class="current_page"' : '' ); ?>><a href="/contact">Contact</a></li>
				</ul>
			</nav>
		</header>
