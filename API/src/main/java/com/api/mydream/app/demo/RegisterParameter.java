package com.api.mydream.app.demo;

import java.util.stream.Stream;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;

import com.api.mydream.app.demo.interfac.IRegisterParameter;

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
	 public String getCid() {
		return cid;
	}
	public void setCid(String cid) {
		this.cid = cid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}

	public  String password;
	
	 @Bean
	    CommandLineRunner init(IRegisterParameter userRepository) {
	        return args -> {
	            Stream.of("John", "Julie", "Jennifer", "Helen", "Rachel").forEach(username -> {
	            	RegisterParameter user = new RegisterParameter(username, username.toLowerCase() + "@domain.com");
	                userRepository.save(user);
	            });
	            userRepository.findAll().forEach(System.out::println);
	        };
	    }
}
