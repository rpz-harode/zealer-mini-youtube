import React from 'react';

//Class Component always require a render method and should return some jsx ..
class SearchBar extends React.Component {

//Every  Class Component has a state
  constructor(props){
    super(props);

// this.state method is used only inside constructor everywhere else this.setState method is used.
    this.state = { term : ''};
  }
  render() {

//Javascript variable is accessed in jsx inside curly braces.
    return (
      //manipulate state using this.setState
      <div className="search-bar">

        <input
          value = {this.state.term}
          onChange = {event => this.onInputChange(event.target.value)} />
      </div>
      );
    }

      onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
      }



//Event Handler -- triggered when on change event occurs
//event object is used
//  onInputChange(event){
//      console.log(event.target.value);
//  }
}

//to export SearchBar for use in other components
export default SearchBar;
