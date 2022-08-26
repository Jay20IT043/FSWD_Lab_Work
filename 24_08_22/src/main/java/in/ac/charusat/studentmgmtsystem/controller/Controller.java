package in.ac.charusat.studentmgmtsystem.controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="https://app-dummy123.herokuapp.com")
public class Controller {

    @GetMapping
    public String displayMessage(){
        return "<h1>Hey User</h1>";
    }

    @GetMapping("/hello")
    public String displayHelloMessage(){
        return "<h1>Hello User</h1>";
    }

    // Get the student information
    @GetMapping("/welcome")
    public String displayWelcomeMessage(){
        return "<h1>Welcome User</h1>";
    }


}
