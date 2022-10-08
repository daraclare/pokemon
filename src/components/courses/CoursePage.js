import React, { Component } from "react";
import { connect } from "react-redux";
import * as courseActions from "../../redux/actions/courseActions";
import PropTypes from "prop-types";

class CoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {
        title: "",
      },
    };
  }
  handleChange = (event) => {
    const course = { ...this.state.course, title: event.target.value };
    this.setState({
      course,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createCourse(this.state.course);
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>Courses</h1>
          <h3>Add Course</h3>
          <input
            type="text"
            onChange={this.handleChange}
            value={this.state.course.title}
          />
          <input type="submit" value="Save" />
        </form>

        {this.props.courses &&
          this.props.courses.map((course) => {
            return (
              <div key={course.title}>
                <p>{course.title}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

CoursesPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  courses: PropTypes.array.isRequired,
  createCourse: PropTypes.func.isRequired,
  // courseActions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    courses: state.courses,
  };
};

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
};

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
