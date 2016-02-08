MyComponents.About = React.createClass({

  render: function() {
    return (

      <div className="row blue darken-4">
        <div className="col s1 m3 l3">
        <div className="card white">
          <div className="card-content">
            <img src="profile_pic.jpg" width="190" height="190"/>
          </div>
        </div>
        </div>

          <div className="col s12 m6 l9">
            <div className="card white">
             <div className="card-content">
                <p>My name is Paige and Im a computer science student at the University of Colorado in Boulder. I am fascinated with humans and technology and how they interact.  I have always been passionate about how to improve technology and make it more intuitive.  I am also an aspiring artist and love drawing and sculpting. I was born in Anchorage, Alaska, but I grew up on a cattle ranch in Northeastern Colorado</p>
              </div>
          </div>
        </div>

        <div className="col s4 m6 l3">
          <div className="card white">
           <div className="card-content">
             <a className="blue-text" href= 'https://github.com/Paigej'>Github Account</a>
            </div>
        </div>
      </div>
      <div className="col s12 m6 l3">
        <div className="card white">
         <div className="card-content">
           <a className="blue-text" href= 'http://paigejohnson.me/projects/'>Projects</a>
          </div>
      </div>
    </div>
    <div className="col s12 m6 l3">
      <div className="card white">
       <div className="card-content">
         <a className="blue-text" href= 'https://www.linkedin.com/in/paigel'>Linkedin</a>
        </div>
    </div>
  </div>

      </div>


    );
  }

});
