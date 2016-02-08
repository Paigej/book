MyComponents.Skill = React.createClass({

  render: function() {
    return (
      <div className="card blue darken-3">
        <div className="card-content white-text">
          <h5>{this.props.skill.ability}</h5>
          <li className="collection-item">{this.props.skill.type}</li>
        </div>
      </div>
    );
  }

});


MyComponents.SkillList = React.createClass({
  render: function() {

    var skillElements = this.props.skills.map(function(s,i){
      return <MyComponents.Skill skill={s} key={i}/>
    })

    return (
      <div className="card blue darken-4">
        {skillElements}
      </div>
    );
  }
});
