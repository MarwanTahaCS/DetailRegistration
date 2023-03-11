import React from "react";
import AddIcon from "@material-ui/icons/Add";
import { useState } from "react";
import Fab from "@material-ui/core/Fab";
import { Container, Zoom } from "@material-ui/core";

export default function Form(props) {
  const [note, setNote] = useState({
    organizationName: "",
    classes: {
      numberOfClasses: 0,
      classes: [
        // {
        //   className: "",
        //   teachers: [
        //     {
        //       name: "",
        //       phoneNumber: ""
        //     }
        //   ],
        //   assistants: [
        //     {
        //       name: "",
        //       phoneNumber: ""
        //     }
        //   ],
        //   daysOfTeaching: {
        //     sunday: true,
        //     monday: true,
        //     tuesday: true,
        //     wednesday: true,
        //     thursday: true,
        //     friday: false,
        //     saturday: false
        //   },
        //   attendanceHours: "8:00-15:00"
        // }
      ]
    }
  });

  const [showtextarea, setShowtextarea] = useState(false);
  function changeHandler(event) {
    const { value, name } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }
  function updateClassName(event) {
    const { value, name } = event.target;
    let newClasses = note.classes;
    newClasses.classes[name].className = value;
    setNote((prevValue) => {
      return {
        ...prevValue,
        ["classes"]: newClasses,
      };
    });
  }
  function updateTeacherName(event) {
    const { value, name } = event.target;
    let newClasses = note.classes;
    newClasses.classes[name[0]].staff.teachers[name[1]].name = value;
    setNote((prevValue) => {
      return {
        ...prevValue,
        ["classes"]: newClasses,
      };
    });
  }
  function clickHandler() {
    // if (note.title !== "" || note.content !== "") {
    //   props.onsubmit(note);
    //   setNote({
    //     title: "",
    //     content: "",
    //   });
    // } else {
    //   alert("Title and Content feilds are empty");
    // }
  }
  function textAreaHandler() {
    setShowtextarea(true);
  }
  const arrayRange = (start, stop, step) =>
    Array.from(
      { length: (stop - start) / step + 1 },
      (value, index) => start + index * step
    );
  function addClass(event) {
    const { value } = event.target;
    let newClasses = note.classes;
    newClasses.classes.push({
      className: "",
      staff: {
        teachers: [],
        assistants: []
      },
    });
    setNote((prevValue) => {
      return {
        ...prevValue,
        ["numberOfClasses"]: ++note.classes.numberOfClasses,
        ["classes"]: newClasses
      };
    });
  }

  function addTeacher(index) {
    // const { value } = event.target;
    let newStaffMember = note.classes;
    newStaffMember.classes[index].staff.teachers.push({
      name: "",
      phoneNumber: ""
    });
    setNote((prevValue) => {
      return {
        ...prevValue,
        ["classes"]: newStaffMember
      };
    });
  }

  return (
    <div className="container">{/*className="form">*/}
      <div className="mb-3">
        <label for="organizationName" className="form-label">Please enter your organization name</label>
        <input
          className="form-control"
          onChange={changeHandler}
          type="text"
          name="organizationName"
          placeholder="Organization Name"
          autoComplete="off"
          id="organizationName"
          value={note.organizationName}
        />
      </div>
      <div className="mb-3">
        <p className="form-label">Classes</p>
        {note.numberOfClasses != 0 && (
          arrayRange(1, note.numberOfClasses, 1).map((currentValue, index) => {
            return (<ul class="list-group mb-3">
              <li class="list-group-item d-flex justify-content-between lh-sm">
                <input
                  className="form-control"
                  onChange={updateClassName}
                  type="text"
                  name={`${index}`}
                  placeholder={"Class name " + `${index + 1}`}
                  autoComplete="off"
                value={note.classes.classes[index].className}
                />
              </li>

              <li class="list-group-item d-flex justify-content-between lh-sm">
                {arrayRange(1, note.classes.classes[index].staff.teachers.length, 1).map((teacher, teacherIndex) => {
                  return <input
                    className="form-control"
                    onChange={updateTeacherName}
                    type="text"
                    name={[index, teacherIndex]}
                    placeholder={"Teacher name " + `${teacherIndex + 1}`}
                    autoComplete="off"
                  value={note.classes.classes[index].staff.teachers[teacherIndex].name}
                  />;
                })}
                {/* <input
                  className="form-control"
                  onChange={updateClassName}
                  type="text"
                  name={`${index}`}
                  placeholder={"Class name " + `${index + 1}`}
                  autoComplete="off"
                // value={note.classes.classes[index].className}
                />
                <input
                  className="form-control"
                  onChange={updateClassName}
                  type="text"
                  name={`${index}`}
                  placeholder={"Class name " + `${index + 1}`}
                  autoComplete="off"
                // value={note.classes.classes[index].className}
                /> */}
                <div class="mb-3">
                  <Zoom in={true}>
                    <Fab onClick={() => { addTeacher(index) }}>
                      <AddIcon />
                    </Fab>
                  </Zoom>
                </div>
              </li>

            </ul>
            );
          })
        )}
        <div class="mb-3">
          <button className="btn btn-primary" onClick={addClass} value={note.classes.numberOfClasses}>
            Add Class
          </button>
        </div>
      </div>
      <div>

      </div>
      <div>

      </div>
      {/* <input
        onChange={changeHandler}
        type="number"
        name="numberOfClasses"
        placeholder="Enter number of Classes"
        autoComplete="off"
        value={note.numberOfClasses}
      /> */}

      {/* <textarea
        onChange={changeHandler}
        name="content"
        placeholder="Take a note..."
        rows={showtextarea ? "3" : "1"}
        value={note.content}
        onClick={textAreaHandler}
      /> */}
      {/* <Zoom in={showtextarea}>
        <Fab onClick={clickHandler}>
          <AddIcon />
        </Fab>
      </Zoom> */}
    </div>
  );
}

{/* <div className="form">
  <input
    onChange={changeHandler}
    type="text"
    name="title"
    placeholder="title"
    autoComplete="off"
    value={note.title}
  />
  <textarea
    onChange={changeHandler}
    name="content"
    placeholder="Take a note..."
    rows={showtextarea ? "3" : "1"}
    value={note.content}
    onClick={textAreaHandler}
  />
  <Zoom in={showtextarea}>
    <Fab onClick={clickHandler}>
      <AddIcon />
    </Fab>
  </Zoom>
</div> */}
