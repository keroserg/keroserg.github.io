<?php
    $option = array("options" => array("regexp" =>'/^\(?([0-9]{3})\)?[-.●]?([0-9]{3})[-.●]?([0-9]{4})$/'));
    $error = false;

    if (isset($_POST['name']) && filter_input(INPUT_POST, 'name', FILTER_SANITIZE_FULL_SPECIAL_CHARS)) 
    {
        $name = $_POST['name'];
    }
    else
    {
        $error = true;
    }

    if (isset($_POST['subject']) && filter_input(INPUT_POST, 'subject', FILTER_SANITIZE_FULL_SPECIAL_CHARS)) 
    {
        $content = $_POST['subject'];
    }
    else
    {
        $error = true;
    }

    if (filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL))
    {
        $email = $_POST['email'];
    }

    if (filter_input(INPUT_POST, 'number', FILTER_VALIDATE_REGEXP, $option))
    {
        $number = $_POST['number'];
    }

    if ($error == false)
    {
        ini_set("SMTP","ssl://smtp.gmail.com");
        ini_set("smtp_port","465");

        if (mail('sergioscaramuzzi@gmail.com', $name, "$content email: {$email} phone#: {$number}"))
        {
            header('location: index.html');
            exit();
        }
        else
        {
            $error == true;
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<title>Contact</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="p3styles.css">
</head>
    <body>
        <main>
            <header>
                <img id="Icon" src="images/Icon.png" alt="Sergio Scaramuzzi Custom Logo.">   
                <nav>
                    <a href="index.html">Home</a>
                    <a href="projects.html">Projects</a>
                    <a href="contact.html">Contact Me</a>
                    <a href="about.html">About Me</a>
                </nav>
            </header>
            <?php if ($error): ?>
                <h3>You entered invalid data and have javascript disabled. Please enter valid data.</h3>
            <?php endif?>
            <footer>
                <div id="logos">
                    <a href="https://github.com/keroserg"><img src="images/git.png" alt="Github logo."></a>  
                    <a href="https://www.linkedin.com/in/sergio-scaramuzzi-86aa191b6/"><img id="Li-in" src="images/LI-In.png" alt="linkedin logo."></a> 
                </div> 
                <nav>
                    <a href="index.html">Home</a>
                    <a href="projects.html">Projects</a>
                    <a href="contact.html">Contact Me</a>
                    <a href="about.html">About Me</a>
                </nav>
            </footer>
        </main>
    </body>
</html>