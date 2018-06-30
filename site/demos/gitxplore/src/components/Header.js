import React, { Component } from 'react';

import SearchFilters from './SearchFilters';

import Navbar, { title } from '../styles/Navbar';
import Button, { ToggleButton } from '../styles/Button';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false,
		  	swapFilterParent:true
		};
	}

	toggleVisibility = () => {
		const visible = !this.state.visible;
		this.setState({
			visible,
		});
	}

  	toggleFilterParentFlag = () => {
	  const swapFilterParent = !this.state.swapFilterParent;
	  this.setState({
		swapFilterParent,
	  });
  	}

	render() {
		return (
			<Navbar full={this.state.visible}>
				<div className={title}>GitXplore</div>
			  	<Button onClick={this.toggleFilterParentFlag}>Toggle Filter Parent: {this.state.swapFilterParent?"a":"b"}</Button>
				<ToggleButton onClick={this.toggleVisibility}>Toggle Filters</ToggleButton>
				<div>
				  {this.state.swapFilterParent && <div id="parentA">
					<SearchFilters {...this.props} visible={this.state.visible}/>
				  </div>}
				  {!this.state.swapFilterParent && <div id="parentB">
					<SearchFilters {...this.props} visible={this.state.visible}/>
				  </div>}
				</div>
			</Navbar>
		);
	}
}

export default Header;
