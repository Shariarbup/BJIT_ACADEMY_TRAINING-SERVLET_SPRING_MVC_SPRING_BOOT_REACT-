package com.main.springdatajpa.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Embeddable
@Data
@AllArgsConstructor
@NoArgsConstructor
@AttributeOverrides({
        @AttributeOverride(
                name = "name",
                column = @Column(name = "gurdian_name")
        ),
        @AttributeOverride(
                name = "email",
                column = @Column(name = "gurdian_email")
        ),
        @AttributeOverride(
                name = "mobile",
                column = @Column(name = "gurdian_mobile")
        )
})
@Builder
public class Gurdian {
    private String name;
    private String email;
    private String mobile;

}
