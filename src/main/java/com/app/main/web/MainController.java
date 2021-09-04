package com.app.main.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class MainController {

    @RequestMapping(value="/test.do")
    public String index() {
        return "test";
    }


    @RequestMapping(value="/login.do")
    public String login() {
        return "login";
    }
}
