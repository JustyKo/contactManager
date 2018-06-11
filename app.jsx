class MyButton extends React.Component {
  render() {
    return (
      <button className="ui button" onClick={this.onClickHandler}>Dodaj</button>
    );
  }
  onClickHandler() {
    alert("Dodanie użytkownika wymaga akcji po stronie serwera");
  }
}

class AppHeader extends React.Component {
  render() {
    var props = this.props;
    return (
      <header className="ui fixed menu">
        <nav className="ui container">
          <a href="#" className="header item">
            <img className="logo" src="ju.png"/>
            Lista kontaktów
          </a>
          <div className="header item">
            <MyButton/>
          </div>
        </nav>
      </header>
    );
  }
}

class UserAvatar extends React.Component {
  render() {
    var {val} = this.props;
    const url = `https://api.adorable.io/avatars/55/${val.login}.png`;
    const urlGrav = `https://s.gravatar.com/avatar/da895414dcc6e6c135ad6f6fe505005c?s=80`;
    const pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (val.login.match(pattern)
      ? <img src={urlGrav} className="ui mini rounded image"/>
      : <img src={url} className="ui mini rounded image"/>);

  }
}

class ContactItem extends React.Component {
  render() {
    var {val} = this.props;
    return (
      <li className="item">
        <UserAvatar val={val}/>
        <div className="content">
          <h4 className="header">{val.header}</h4>
          <div className="description">{val.description}</div>
        </div>
      </li>
    );
  }
}

class ContactsList extends React.Component {
  render() {
    var {usersData} = this.props;
    return (
      <ul className="ui relaxed divided list selection">
        {usersData.map(function (val) {
            return <ContactItem val={val} key={val.id}/>
          })}
      </ul>
    );
  }
}

class App extends React.Component {
  render() {
    var {usersData} = this.props;
    return (
      <div>
        <AppHeader usersData = {usersData}/>
        <main className="ui main text container">
          <ContactsList usersData={usersData}/>
        </main>
      </div>
    );
  }
}

ReactDOM.render(
  <App usersData={usersData}/>, document.getElementById("app"));