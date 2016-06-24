const React = require('react');
const ReactDOM = require('react-dom');
const BenchStores = require("../stores/bench_stores");
const BenchActions = require('../actions/bench_actions');

const BenchMap = React.createClass ({
  listenForMove (){
    google.maps.event.addListener(this.map, 'idle', () => {
      console.log("test");
      let benches = BenchStores.all();
      let benchKey = Object.keys(benches);
      benchKey.map( key => {
        new google.maps.Marker({
          position: {lat: benches[key].lat, lng: benches[key].lng},
          map: this.map,
          title: `${benches[key].id}`
        });
      });

      BenchActions.fetchAllBenches();

    });
  },

  componentDidMount (){
    const mapDOMNode = ReactDOM.findDOMNode(this.refs.map);
    const mapOptions = {
      center: {lat: 37.7758, lng: -122.435},
      zoom: 13
    };
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.listenForMove();
  },
  render (){
    return(
      <div className='map' ref='map'></div>
    );
  }
});

module.exports = BenchMap;
