import React, {useState, useEffect} from "react";
const Course =()=>{
    const[courses, setCourses]= useState([]);
    const id ="";
    const getCourses =async () => {
        const response = await fetch ("http://localhost:8000/api/course");
        const data =await response.json();
        console.log("All Courses:",data);
        setCourses(data.data);
    };
    const getCourseById =async () => {
        const response = await fetch (`http://localhost:8000/api/course/6a4f7bdd35404960e2e0023d`);
        const data =await response.json();
        console.log("Course By ID:",data);
    };
    const updateCourse =async () => {
        const response = await fetch (`http://localhost:8000/api/course/${id}`,{
            method:"PUT",
            headers:{
                "content-Type":"application/json",
            },
            body:JSON.stringify({
                courseName:"BBA",
                courseCode:"BBA102",
                duration:"4 years",
                description:"Bachelor od business Administration",
            }),
        });
        const data =await response.json();
        console.log("Updated:",data);
    };
    const deleteCourse=async()=>{
        const response = await fetch(`http://localhost:8000/api/course/${id}`,{
            method:"DELETE",
        });
        const data=await response.json();
        console.log("Deleted",data);
        getCourses();
    };
    useEffect(()=>{
        // getCourses();
    },[]);
    return (
        <div>
            <h2>Course List</h2>
            <button onClick={getCourseById}>Get By ID</button>
            <button onClick={updateCourse}>Update</button>
            <button onClick={deleteCourse}>Delete</button>

            {courses.map((course)=>(
                <div key={course._id}>
                    <h3>{course.courseName}</h3>
                    <p>{courese.courseCode}</p>
                    <p>{course.duration}</p>
                    <p>{course.description  }</p>
                    </div>
            ))}
        </div>
    );
};
export default Course;