package com.bjitacademy.main.mockMvcTest;



import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpHeaders;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.util.Base64Utils;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
public class MockMvcTestDemo {

	@Autowired
	private MockMvc mockMvc;
	
	String token = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxNjUxMTA1OCIsInJvbGVzIjpbIlJPTEVfQURNSU4iXSwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgyL2xvZ2luIiwiZXhwIjoxNjU4OTcwMjg0fQ.nPCAb-qDadvuHFEhTqIogmRDisnrygEYXeqeX4W1ifA";

	@Test
	public void testCreateRetrieveWithMockMVC() throws Exception {

	}
	@Test
	public void getTraineeByIdTest() throws Exception{
		this.mockMvc.perform(get("/api/v1/trainees/2").header(HttpHeaders.AUTHORIZATION, 
				token))
				.andDo(print()).andExpect(status().isOk());
	}
	
	@Test
	public void deleteTraineeByIdTest() throws Exception{
		this.mockMvc.perform(delete("/api/v1/trainees/25").header(HttpHeaders.AUTHORIZATION, 
				token))
				.andDo(print()).andExpect(status().isOk());
	}

	@Test
	public void getAllTraineesTest() throws Exception {
		this.mockMvc.perform(get("/api/v1/trainees").header(HttpHeaders.AUTHORIZATION,
				token))
				.andExpect(status().isOk());
	}
}
