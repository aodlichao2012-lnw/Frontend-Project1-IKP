package RestController;

import java.util.List;
import java.util.stream.Stream;

import javax.persistence.Entity;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.mydream.app.demo.RegisterParameter;
import com.api.mydream.app.demo.interfac.IRegisterParameter;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	public   IRegisterParameter Repository;
	
@GetMapping(path = "/token")
public List<RegisterParameter> getUesr()
{
	return (List<RegisterParameter>) Repository.findAll();
}
	
@PostMapping(path = "/api/user/register")
void addUser(@RequestBody RegisterParameter resgister)
{
	Repository.save(resgister);
}




}
