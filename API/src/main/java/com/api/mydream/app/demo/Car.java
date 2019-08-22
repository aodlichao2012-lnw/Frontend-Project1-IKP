package com.api.mydream.app.demo;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import io.micrometer.core.lang.NonNull;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
public class Car {
	 @Id @GeneratedValue
	    private Long id;
	    private @NonNull String name;
		public void setName(String name2) {
			this.name = name2;
			
		}
		public Object getName() {
			// TODO Auto-generated method stub
			return name;
		}
	    

}
