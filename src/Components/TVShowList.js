import React, { Component } from 'react';
import {Grid} from 'semantic-ui-react';

import TVShow from './TVShow'

class TVShowList extends Component {

  mapAllShows = () => {
    return this.props.shows
      .filter((s) => s.name.toLowerCase().includes(this.props.searchTerm))
      .map(s => <TVShow show={s} key={s.id} selectShow={this.props.selectShow}/> )
  }

  render() {
    return (
      <div className="TVShowList">
        <Grid>
          {this.mapAllShows()}
        </Grid>
      </div>
    )
  }

}

export default TVShowList;
