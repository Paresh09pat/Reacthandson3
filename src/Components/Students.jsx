import React from "react";

function Students(props) {
    return (
        <div>

            <div className="StudentsHead">
                <h1>Students Details</h1>
                <p className="AddStudentsButton">Add New Student</p>
            </div>

            <table className="table">
                <tr className="tableRow">
                    <th>Name</th>
                    <th>Age </th>
                    <th>Course </th>
                    <th>Batch</th>
                    <th>Change Details</th>
                </tr>

                <tr>
                    <td>Parth</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>March</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Jayesh</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>November</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Lalit</td>
                    <td>25</td>
                    <td>MERN</td>
                    <td>April</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Umesh</td>
                    <td>24</td>
                    <td>MERN</td>
                    <td>June</td>
                    <td>Edit</td>
                </tr>
                <tr>
                    <td>Bhushan</td>
                    <td>26</td>
                    <td>MERN</td>
                    <td>February</td>
                    <td>Edit</td>
                </tr>

            </table>
        </div>
    )
}

export default Students;