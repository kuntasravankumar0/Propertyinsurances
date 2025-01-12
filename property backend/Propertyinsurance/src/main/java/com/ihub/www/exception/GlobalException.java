package com.ihub.www.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalException {

	


    @ExceptionHandler(Resourcenotfound.class)
    public ResponseEntity<String> customexception(Resourcenotfound ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.EXPECTATION_FAILED);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleexception(Exception ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.ACCEPTED);
    }
       
}
