import React from "react"

import axios from 'axios'

export default function AddCourse() {
    return (
        <form action="" method="post">
            <div className="head">
                <h2>Add Courses Here......</h2>
            </div>

            <div className="form_row">
                <div className="form_input">
                    <label htmlFor="CourseId">CourseId</label>
                    <input type="text" name="CourseId" id="CourseId"  placeholder="Course Uniqe Id....."/>
                </div>

                <div className="form_input">
                    <label htmlFor="CourseName">Cours Name</label>
                    <input type="text" name="CourseName" id="CourseName" placeholder="Course Name...." />
                </div>
            </div>

            <div className="form_row">
                <div className="form_input">
                    <label htmlFor="Conductor">Conductor</label>
                    <input type="text" name="Conductor" id="Conductor" placeholder="Course Conductor........" />
                </div>

                <div className="form_input">
                    <label htmlFor="CourseName">Cours Name</label>
                    <textarea name="CourseDiscpt" id="CourseDiscpt" cols="30" rows="10" placeholder="Course Discription........."></textarea>
                </div>
            </div>

            <button type="submit">Add Now</button>
            
            
        </form>
    )
}