const React = require('react');
const BenchStores = require('../stores/bench_stores');
const BenchIndexItem = require('./bench_index_item');

const BenchIndex = React.createClass ({
  getInitialState () {    
    return { benches: BenchStores.all()};
  },
  componentDidMount () {
    BenchStores.addListener(this._handleChange);
  },
  _handleChange () {
    this.setState(({ benches: BenchStores.all()}));
  },
  render (){
    const benches = this.state.benches;
    const benchKeys = Object.keys(benches);

    return (
      <div>
        <h2>Benches:</h2>
        {
          benchKeys.map( key => {
            return <BenchIndexItem key={benches[key].id} bench={benches[key]} />;
          })
        }
      </div>
    );
  }
});

module.exports = BenchIndex;
