<?php

  //set variables to be used for dynamic pages
  $pageTitle = "Work";
  $pageID = 'work';

  //OG tag vars
  $ogDescription  = "From concept to creation and beyond, we work with incredible people to make amazing digital products.";
  $ogImageURL     = "";

  //any head extras
  $headExtras = "";

?>
<?php include_once('_inc/header.php'); ?>

  <div id="content">
    <div class="wrap">

      <h1>From concept to creation and beyond, we work with incredible people to make amazing digital products.</h1>

      <ul id="client_list" class="clearfix">
        <li><img src="library/img/clients/tcf.png" alt="TCF Bank" /></li>
        <li><img src="library/img/clients/umn.png" alt="University of Minnesota" /></li>
        <li><img src="library/img/clients/mayo.png" alt="Mayo Clinic" /></li>
        <li><img src="library/img/clients/deltadental.png" alt="Delta Dental" /></li>
        <li><img src="library/img/clients/crazeinteractive.png" alt="Craze Interactive" /></li>
        <li><img src="library/img/clients/hoodieallen.png" alt="Hoodie Allen" /></li>
        <li><img src="library/img/clients/nexmo.png" alt="Nexmo" /></li>
        <li><img src="library/img/clients/mikeshard.png" alt="Mike's" /></li>
      </ul>

    </div>

    <div id="work_container">
      <ul class="clearfix">
        <li>
          <img src="library/img/work/mayo01.jpg" alt="Mayo Clinic iOS App" />
          <div class="work_label" style="background-color:#d9af82;color:#ffffff;"><div class="label"><span>Mayo Clinic</span> Patient App</div></div>
        </li>
        <li>
          <img src="library/img/work/mikes01.jpg" alt="Mike's Hard Lemonade Graphics" />
          <div class="work_label" style="background-color:#bb224a;color:#ffffff;"><div class="label"><span>Mike's Hard Lemonade</span> Graphics</div></div>
        </li>
        <li>
          <img src="library/img/work/uofm_hockey.jpg" alt="University of Minnesota hockey logo" />
          <div class="work_label" style="background-color:#3f0f17;color:#ffffff;"><div class="label"><span>University of Minnesota</span> Graphics</div></div>
        </li>
        <li>
          <img src="library/img/work/cameraslice01.jpg" alt="Camera Slice Web App" />
          <div class="work_label" style="background-color:#222222;color:#ffffff;"><div class="label"><span>Camera Slice</span> Web App</div><a href="http://cameraslice.com/" target="_blank" class="button">website</a></div>
        </li>
        <li>
          <img src="library/img/work/tcf.jpg" alt="TCF Facebook App" />
          <div class="work_label" style="background-color:#4c4149;color:#ffffff;"><div class="label"><span>TCF Bank</span> Facebook App</div></div>
        </li>
        <li>
          <img src="library/img/work/boombox.jpg" alt="Boombox Wordpress Theme" />
          <div class="work_label" style="background-color:#1a1a1a;color:#ffffff;"><div class="label"><span>Boombox</span> Premium Wordpress Theme</div><a href="http://demos.branberg.com/?theme=Boombox" target="_blank" class="button">website</a></div>
        </li>
      </ul>
    </div>

  </div>

<?php include_once('_inc/footer.php'); ?>