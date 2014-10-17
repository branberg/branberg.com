<!DOCTYPE html>
<html>
<head>
	<meta charset="UTF-8">
	<title><?php echo $pageTitle; ?> - Branberg</title>

	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="icon" type="image/png" href="/library/img/favicon.png" />

	<meta name="description" content="<?php echo ( $ogDescription ? $ogDescription : 'We craft digital experiences - A studio committed to great ideas.' ); ?>"/>
	<link rel="canonical" href="http://branberg.com/" />
	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="Branberg" />
	<meta property="og:title" content="<?php echo $pageTitle; ?> - Branberg" />
	<meta property="og:description" content="<?php echo ( $ogDescription ? $ogDescription : 'We craft digital experiences - A studio committed to great ideas.' ); ?>" />
	<meta property="og:url" content="http://branberg.com/" />
	<meta property="og:image" content="<?php echo ( $ogImageURL ? $ogImageURL : 'http://branberg.com/library/img/facebook.png' ); ?>" />
	<meta property="article:publisher" content="https://www.facebook.com/branbergstudios" />
	<?php if( $headExtras ){ echo $headExtras; } ?>

	<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
	<link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="library/css/main.css">

	<script type="text/javascript">

	  var _gaq = _gaq || [];
	  _gaq.push(['_setAccount', 'UA-19739952-3']);
	  _gaq.push(['_trackPageview']);

	  (function() {
	    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
	  })();

	</script>

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
					<li<?php echo( $pageID == 'work' ? ' class="current_page"' : '' ); ?>><a href="/work">Work</a></li>
					<li<?php echo( $pageID == 'contact' ? ' class="current_page"' : '' ); ?>><button href="#" class="md-trigger" data-modal="modal-1">Contact</button></li>
				</ul>
			</nav>
		</header>
