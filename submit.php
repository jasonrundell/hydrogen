<?php
// fucntions
function sanitize($html,$slashes,$trim){
  if ($html==1) {
    $_POST = array_map('strip_tags', $_POST);
    $_POST = array_map('htmlspecialchars', $_POST);
  }
  if ($slashes==1) $_POST = array_map('stripslashes', $_POST);
  if ($trim==1) $_POST = array_map('trim', $_POST);
}

// sanitize submission data
sanitize($html=1,$slashes=1,$trim=1);

// high-level config
$domain="domain.com";

// email update signup
if ($_POST['event']=="signup" && $_POST['email']){

  // sub config
  $to="to@$domain";
  $reply="reply@$domain";
  $body="The following user has just signed up for email updates from $domain: ".$_POST['email'];
  $subject="$domain: Email Update Subscription";

  // simple headers that are not advisable for AAA solutions
  $headers = 'From: <' . $_POST['email'] . ">\r\n" .
  'Reply-To: ' . $reply . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

  if (mail($to,$subject,$body,$headers)) {
    echo "Thank you"; // simple output
  } else {
    echo "An error occurred. Please try again."; // simple error
  }

// contact form submission
} else if ($_POST['event']=="contact" && $_POST['name'] && $_POST['email'] && $_POST['message']){

  // sub config
  $to="to@$domain";
  $reply="reply@$domain";
  $body="The following user has just signed up for email updates from $domain: ".$_POST['email'];
  $subject="$domain: Contact Submission";

  $body="
The following user has just submitted a contact form from $domain:<br>
<br>
Name: ".$_POST['name']."<br>
Email: ".$_POST['email']."<br>
<br>
Message: ".str_replace("\r\n","<br>",$_POST['message'])."
";

  // simple headers that are not advisable for AAA solutions
  $headers = 'From: '. $_POST['name'] .' <' . $_POST['email'] . ">\r\n" .
  'Reply-To: ' .$reply . "\r\n" .
  'X-Mailer: PHP/' . phpversion();

  if (mail($to,$subject,$body,$headers)) {
    echo "Thank you"; // simple output
  } else {
    echo "An error occurred. Please try again."; // simple error
  }

}

// contact