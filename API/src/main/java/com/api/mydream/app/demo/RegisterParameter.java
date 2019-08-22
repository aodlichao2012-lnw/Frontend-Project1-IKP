package com.api.mydream.app.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class RegisterParameter {

	 public RegisterParameter(String username, String password) {
		 
		 this.username = username;
		 this.password = password;
		
	}
	
	@Id
	 @GeneratedValue(strategy = GenerationType.AUTO)
	 public String  cid;
	 public  String  username;
	 public  String password;
	
}
