import React from "react";

const Collapsible = WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isOpen: false,
        title: this.props.title
      };
    }

    toggleOpen = () => {
      this.state.isOpen ? this.setState({ isOpen: false }) : this.setState({ isOpen: true });
    };

    render() {
      return (
        <section id={this.props.id} className="collapsible">
          <h3
            onClick={this.toggleOpen}
            className={this.state.isOpen ? "collapsible__title collapsible__title--open" : "collapsible__title"}
          >
            {this.props.title}
          </h3>
          <div
            className={this.state.isOpen ? "collapsible__wrapper collapsible__wrapper--open" : "collapsible__wrapper"}
          >
            {this.state.isOpen && <WrappedComponent {...this.props} />}
          </div>
        </section>
      );
    }
  };
};

export default Collapsible;
