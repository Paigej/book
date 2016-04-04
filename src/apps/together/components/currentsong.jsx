
class CurrentSong extends React.Component {

  render(){

  	var currentSong = this.props.currentSong.map(function(s,i){

      var myJson= "No Artwork Found";
      var myUrl = "https://api.spotify.com/v1/search?q=" + s.artist + "&type=artist";
      $.getJSON(myUrl, function (data) {
          myJson = data;
          console.log(data)

      });


    console.log(myJson)
    return (
		    <li key={i}>
          <div className= "white-text">Song Name: { s.songName } </div>
          <div className= "white-text">Artist: { s.artist }</div>
		    </li>
      )
      })
    return (
      <div>
        <div className="card blue-grey darken-4">
          <div className="card-content">
            <div className="row">
              <div className="col s1"><i className="small material-icons white">play_circle_outline</i></div>
              <div className="col s6 white-text"><h6>Current Song</h6></div>
              <div><img src='http://static.stereogum.com/uploads/2016/03/japanesebreakfast-psychopomp-640x640-640x640-640x640.jpg' alt= "No Artwork Found" width={460} height={460} mode='responsive'/></div>
              <div className="progress ">
                <div className="determinate"></div>
              </div>
            </div>
            <ul>
              { currentSong }
            </ul>

          </div>
        </div>
      </div>
    )
}
}




MyComponents.CurrentSong = CurrentSong
