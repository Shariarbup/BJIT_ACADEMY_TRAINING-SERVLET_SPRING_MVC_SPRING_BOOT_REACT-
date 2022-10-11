package com.erp.main.config;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Aspect
@Configuration
@EnableAspectJAutoProxy
public class AspectConfig {
	
	
	Logger logger = LoggerFactory.getLogger(AspectConfig.class);
	
	@Before("execution(* com.erp.main.controller.*.*(..))")
	public void beforeExecution(JoinPoint joinPoint) {
		logger.info("Calling  {}",joinPoint);
	}
	
	@After("execution(* com.erp.main.controller.*.*(..))")
	public void afterExecution(JoinPoint joinPoint) {
		logger.info("Completed {}",joinPoint);
	}
	
	@Around("execution(* com.erp.main.service.*.*(..))")
	public Object aroundExecution(ProceedingJoinPoint joinPoint) throws Throwable {
		
		try {
			Object object = joinPoint.proceed();
			return object;
		}catch (Exception e) {
			logger.info("Exception occurred while executing{}");
		}
		
		return null;
	}
}
