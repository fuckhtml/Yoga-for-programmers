<!DOCTYPE html>
<html>

  <head>
    <meta charset="utf-8">
  	<title>Yoga for Programmers</title>
  </head>

  <body>
    <div id="wrapperOuter">

      <div id="wrapperInner">
        <h1>Yoga for Programmers</h1>

        <ul id="navigation">
        	<li><a id="beginner" href="beginner.html">Beginner</a></li>
        	<li><a id="intermediate" href="intermediate.html">Intermediate</a></li>
        	<li><a id="advanced" href="advanced.html">Advanced</a></li>
        </ul>

        <div id="content">
        	<h2>Thank you</h2>
        	<h3>
            You have been enrolled in our 
            <?php 
              if ($_REQUEST['level'] != 'default') {
                echo $_REQUEST['level'];
              }
            ?> 
            class.
          </h3>
        </div>
      </div>

    </div>
  </body>

</html>
