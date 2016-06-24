const React = require('react');

const BenchIndexItem = React.createClass ({
  render () {
    return (
      <div>
        {this.props.bench.lat}
        {this.props.bench.lng}
        {this.props.bench.description}
        <br/>
      </div>
    );
  }
});

module.exports = BenchIndexItem;
