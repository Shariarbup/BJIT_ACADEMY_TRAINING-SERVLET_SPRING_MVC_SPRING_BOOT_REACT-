package com.main.springdatajpa.repository;

import com.main.springdatajpa.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {
    public List<Student> findByFirstName(String firstName);
    public List<Student> findByFirstNameContaining(String name);

    public List<Student> findByLastNameNotNull();

    public List<Student> findByGurdianName(String name);

    public Student findByFirstNameAndLastName(String firstName, String Lastname);

    //JPQL
    @Query("select s from Student  s where s.emailId=?1")
    public Student getStudentEmailAddress(String emailId);

    //JPQL
    @Query("select s.firstName from Student s where  s.emailId=?1")
    public String getStudentFirstNameByEmailAddress(String emailId);

    @Query(
            value = "select * from tbl_student s where s.email_address=?1",
            nativeQuery = true
    )
    Student getStudentEmailAddressNative(String emailId);

    @Query(
            value = "select * from tbl_student s where s.email_address=:emailId",
            nativeQuery = true
    )
    Student getStudentEmailAddressNativeNameParam(@Param("emailId") String emailId);


    @Modifying
    @Transactional // basically eita service e add kora lage --- eita CRUD operation er por commit korte use kora hoi
    @Query(
            value = "update tbl_student set first_name=?1 where email_address=?2",
            nativeQuery = true
    )
    void updateStudentNameByEmailId(String firstName, String emailId);
}
