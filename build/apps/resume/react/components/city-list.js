MyComponents.City = React.createClass({

  render: function() {
    return (

      <div className = "card blue darken-4">
      <div className = "card-content white-text">
      <span className ="card-title">{this.props.city.name}</span>
          <ul>
            <li><b>Summary: </b>{this.props.city.currently.summary} </li>
            <li><b>Current temperature: </b>{this.props.city.currently.temperature} degrees fahrenheit </li>
            <li><b> Wind speed: </b>{this.props.city.currently.windSpeed} mph</li>
            <li><b>Relative humidity: </b>{this.props.city.currently.humidity} </li>
            <li><b>Visibility:</b> {this.props.city.currently.visibility}  miles</li>
        </ul>
        </div>
      </div>

    );
  }

});

MyComponents.CityList = React.createClass({
  render: function() {

    var cityElements = this.props.cities.map(function(c,i){
      return <MyComponents.City city={c} key={i}/>
    })

    return (
      <div className="card blue darken-3">
        <div className="card-content">
          {cityElements}
        </div>
      </div>
    );
  }
});
