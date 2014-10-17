<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php echo $pageTitle; ?> - Branberg</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="/library/img/favicon.png" />

	<meta name="description" content="<?php echo ( $ogDescription ? $ogDescription : 'A designer and developer doing what we love for people who love what they do.' ); ?>"/>
	<link rel="canonical" href="http://branberg.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Branberg" />
	<meta property="og:title" content="<?php echo $pageTitle; ?> - Branberg" />
	<meta property="og:description" content="<?php echo ( $ogDescription ? $ogDescription : 'A designer and developer doing what we love for people who love what they do.' ); ?>" />
	<meta property="og:url" content="http://branberg.com/" />
	<meta property="og:image" content="<?php echo ( $ogImageURL ? $ogImageURL : 'http://branberg.com/library/img/facebook.png' ); ?>" />
	<meta property="article:publisher" content="https://www.facebook.com/branbergstudios" />
	<?php if( $headExtras ){ echo $headExtras; } ?>

	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" type="text/css" href="library/css/main.css">

	<?php /*<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>*/ ?>

</head>
<body class="<?php echo $pageID; ?>">

<?php if( $pageID == 'homepage' ): ?>
	<div id="homepage_background"></div>
<?php endif; ?>

	<div id="wrapper">

		<header id="main_header" class="clearfix">
			<a href="/" id="logo" rel="home"><div id="branberg_logo"></div></a>
			<nav id="main_nav">
				<ul>
					<li<?php echo( $pageID == 'studio' ? ' class="current_page"' : '' ); ?>><a href="/studio">Studio</a></li>
					<li<?php echo( $pageID == 'work' ? ' class="current_page"' : '' ); ?>><a href="/work">Work</a></li>
					<li<?php echo( $pageID == 'contact' ? ' class="current_page"' : '' ); ?>><a href="#" class="md-trigger" data-modal="modal-1">Contact</a></li>
				</ul>
			</nav>
		</header>
