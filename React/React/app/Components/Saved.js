'use strict';

import React from 'react'

import SavedArticle from './SavedArticle'

module.exports = React.createClass({
  render() {
    return (
      <div className="container">
        <div className="section">
          <h3 className="header center pad-top-bot-med grey white-text">Saved Articles</h3>
          <div className="row">
            <div className="col s12">
              {this.props.articles.map(article =>
                <SavedArticle key={article._id} article={article} setSaved={this.props.setSaved}/>
              )}
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    )
  }
});