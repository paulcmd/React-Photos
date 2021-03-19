import React from 'react';

class SearchBar extends React.Component {

    state = {
        searchTerm: 'cars'
    }

    onInputChange = e => this.setState({ searchTerm: e.target.value })

    onFormSubmit = e => {
        e.preventDefault()
        this.props.onSubmit(this.state.searchTerm)
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Image Search</label>
                        <input
                            type="text"
                            onChange={this.onInputChange}
                            value={this.state.searchTerm}
                        />
                    </div>

                </form>
            </div>
        )
    }
}




export default SearchBar

/*
22- we are taking typed characters into typedValue. typedValue is stored in the stated.
we then push that value back onto the DOM(input box) on 23

3 ways to solve the undefined error. bind(this) , use an arrow function when creating methods
for the class or create the entire function in the render()
eg form onSubmit={e => this.onFormSubmit(e) }

this.onInputChange and this.onFormSubmit are references to the functions above. They are not the
functions themselves.

the child component does not take in props as an argument like a functional component does,
you just say this.props.onSubmit(to reference onSearchSubmit)
*/