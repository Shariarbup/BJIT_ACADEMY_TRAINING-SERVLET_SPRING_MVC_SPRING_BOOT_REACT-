
public class Course {
	Long id;
	String name;
	Integer totalHour;
	public Course(Long id, String name, Integer totalHour) {
		super();
		this.id = id;
		this.name = name;
		this.totalHour = totalHour;
	}
	public Course(String name, Integer totalHour) {
		super();
		this.name = name;
		this.totalHour = totalHour;
	}
	public Course() {
		super();
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Integer getTotalHour() {
		return totalHour;
	}
	public void setTotalHour(Integer totalHour) {
		this.totalHour = totalHour;
	}
	
}
