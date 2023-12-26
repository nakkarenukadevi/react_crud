import React from "react";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    let { name } = this.props;
    let { count } = this.state;
    return (
      <>
        <h1>welcome product class Component:{name}</h1>;<h3>Count:{count}</h3>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          click
        </button>
      </>
    );
  }
}
export default Product;
