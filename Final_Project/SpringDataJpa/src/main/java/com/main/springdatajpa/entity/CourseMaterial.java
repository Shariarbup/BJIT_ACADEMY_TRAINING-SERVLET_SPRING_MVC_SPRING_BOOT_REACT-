package com.main.springdatajpa.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString(
        exclude = "course"
)
public class CourseMaterial {
    @Id
    @SequenceGenerator(
            name="course_material_sequence",
            sequenceName = "course_material_sequence",
            allocationSize = 1
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "course_material_sequence"
    )
    private Long courseMaterialId;
    private String url;
    @OneToOne(
            cascade = CascadeType.ALL,
            // course alada vabe na save kore coursematerial er shathei save kora jai
            fetch = FetchType.LAZY,
            optional = false // course material chara course save kora jabe na
    )
    @JoinColumn(
            name = "course_id",
            referencedColumnName = "courseId"
    )
    private Course course; // eita one directional relationship, ekta course material obossoi kono na kono course er under e thakbe
}
