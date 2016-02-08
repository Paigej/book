MyComponents.Task = React.createClass({


  render: function() {
    if(this.props.task.priority=='high'){
      return (
        <div className="row">
          <div className="col s12 m20">
            <div className="card red">
              <div className="card-content white-text">
                <span className="card-title">{this.props.task.name}</span>
                  <ul>
                    <li><i className= "tiny material-icons">assignment_ind</i> Assigned To: {this.props.task.assigned}</li>
                    <li><i className="tiny material-icons">assessment</i> Priority: {this.props.task.priority}</li>
                    <li><i className="tiny material-icons">label_outline</i> Type:{this.props.task.type}</li>
                    <li><i className="tiny material-icons">today</i>Due Date:{this.props.task.deadline}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

    } else if(this.props.task.priority=='medium'){
        return (
      <div className="row">
        <div className="col s12 m20">
          <div className="card yellow">
            <div className="card-content white-text">
              <span className="card-title">{this.props.task.name}</span>
                <ul>
                  <li><i className= "tiny material-icons">assignment_ind</i> Assigned To: {this.props.task.assigned}</li>
                  <li><i className="tiny material-icons">assessment</i> Priority: {this.props.task.priority}</li>
                  <li><i className="tiny material-icons">label_outline</i> Type:{this.props.task.type}</li>
                  <li><i className="tiny material-icons">today</i>Due Date:{this.props.task.deadline}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(this.props.task.priority=='completed'){
        return (
      <div className="row">
        <div className="col s12 m20">
          <div className="card blue">
            <div className="card-content white-text">
              <span className="card-title">{this.props.task.name}</span>
                <ul>
                  <li><i className= "tiny material-icons">assignment_ind</i> Assigned To: {this.props.task.assigned}</li>
                  <li><i className="tiny material-icons">assessment</i> Priority: {this.props.task.priority}</li>
                  <li><i className="tiny material-icons">label_outline</i> Type:{this.props.task.type}</li>
                  <li><i className="tiny material-icons">today</i>Completed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );

    } else {
        return (
      <div className="row">
        <div className="col s12 m20">
          <div className="card green">
            <div className="card-content white-text">
              <span className="card-title">{this.props.task.name}</span>
                <ul>
                  <li><i className= "tiny material-icons">assignment_ind</i> Assigned To: {this.props.task.assigned}</li>
                  <li><i className="tiny material-icons">assessment</i> Priority: {this.props.task.priority}</li>
                  <li><i className="tiny material-icons">label_outline</i> Type:{this.props.task.type}</li>
                  <li><i className="tiny material-icons">today</i>Due Date:{this.props.task.deadline}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
});

MyComponents.TaskList = React.createClass({
  render: function() {
    var taskElements = this.props.tasks.map(function(t,i){
      return <MyComponents.Task task={t} key={i}/>
    })
    return (
              <div className="card blue darken-3">{taskElements}</div>
    );
  }
});
