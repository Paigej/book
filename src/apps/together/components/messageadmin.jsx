class MessageAdmin extends React.Component {
  render(){
    if (this.props.user) {
      return (
        <div>
          <div className="card blue-grey darken-4">
            <div className="card-content">
              <div className="row">
                <div className="col s1"><i className="small material-icons">queue</i></div>
                <div className="col s6 white-text"><h6>Message The Administrator</h6></div>
                <div className="progress ">
                  <div className="determinate"></div>
                </div>
              </div>
              <ul>
                <div className="row">
                  <div className="input-field col m12 s12">
                    <input placeholder="Message" id="adminMessage" type="text" className="validate"/>
                  </div>
                <div className="card-action">
                  <a className="waves-effect waves-light btn blue-grey">Submit</a>
                </div>
              </div>
              </ul>
            </div>
          </div>
        </div>
      );
    }
    else {
      return(<div></div>)
    }
  }
}
//onClick={this.props.actions.submitMessage

MyComponents.MessageAdmin = MessageAdmin
