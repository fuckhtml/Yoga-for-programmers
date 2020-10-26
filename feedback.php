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

<p>Information you've sent</p>

<ul>
  <li><b>Firstname: </b><?php echo $_REQUEST['firstname']?></li>
  <li><b>Lastname: </b><?php echo $_REQUEST['lastname']?></li>
  <li><b>Email: </b><?php echo $_REQUEST['email']?></li>
  <li><b>Birthmonth: </b><?php echo $_REQUEST['birthmonth']?></li>
  <li><b>Birthday: </b><?php echo $_REQUEST['birthday']?></li>
  <li><b>Level: </b><?php echo $_REQUEST['level']?></li>
  <li><b>Exp: </b><?php echo $_REQUEST['exp']?></li>
  <li><b>Bio: </b><?php echo $_REQUEST['bio']?></li>
</ul>
