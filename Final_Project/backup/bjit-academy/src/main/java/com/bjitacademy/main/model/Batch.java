package com.bjitacademy.main.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString(
		exclude = "trainers"
		)
@JsonIdentityInfo(
		  generator = ObjectIdGenerators.PropertyGenerator.class, 
		  property = "batchId")
public class Batch implements Serializable{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long batchId;
	private String name;
	private String startDate;
	private String endDate;
	private String description;
	@ManyToMany(
			fetch = FetchType.EAGER,
            cascade = CascadeType.ALL
    )
    @JoinTable(
            name = "trainer_batch_map",
            joinColumns = @JoinColumn(
                    name = "batch_id",
                    referencedColumnName = "batchId"
            ),
            inverseJoinColumns = @JoinColumn(
                    name = "trainer_id",
                    referencedColumnName = "trainerId"
            )
    )
	private List<Trainer> trainers;
	
	public void addTrainer(Trainer trainer){
        if(trainers == null)trainers = new ArrayList<>();
        trainers.add(trainer);
    }
	
}
