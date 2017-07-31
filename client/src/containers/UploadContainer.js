import React, { Component } from 'react';
import { connect } from "react-redux";
import Upload from "../components/Upload";
import { getCurrentCard } from "../actions/currentCard";

class UploadContainer extends Component {
  componentDidMount() {
    this.props.getCurrentCard();
  }

  render() {
    return <Upload {...this.props} />;
  }
}

const mapStateToProps = state => {
  return {
    card: state.currentCard.data,
    cardMessage: state.cardMessage || state.currentCard.data.default_greeting
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getCurrentCard: () => {
      dispatch(getCurrentCard(ownProps.match.params.id));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(
  UploadContainer
);