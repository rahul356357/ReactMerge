import React from 'react';
import { connect } from 'react-redux';

import { object } from 'prop-types';
import { bindActionCreators } from 'redux';
import Modal from 'react-modal';
import AgtCorporate from './AGTCorporate';

// import SnackBar from '../auxComponents/Snackbar';
import corporateActionCreator from './corporateActionCreator';
import AthenaCorporate from './AthenaCorporate';

const modalStyle = {
  content: {
    top: '50%',
    left: '50%',
    height: '600px',
    width: '600px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const notificationModalStyle = {
  content: {
    top: '50%',
    left: '50%',
    height: '80px',
    width: '600px',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },

};

class CorporateMerge extends React.Component {
  state = {
    isModalOpen: false,
    isAgtModalOpen: false,
    selectedCorporate: {},
    // notificationModal: false,
  }

  onCreateCorporate = () => {
    const { selectedCorporate } = this.state;
    const { legalDetails } = this.props.corporates;
    const payload = {
      ...selectedCorporate,
      ...legalDetails,
    };
    this
      .props
      .corporateActions
      .addToAgtDatabase(payload);
    this.setState((p) => ({
      isModalOpen: !p.isModalOpen,
      selectedCorporate: {},
    }));
  }
  controlModal = () => {
    this.setState((p) => ({
      isModalOpen: !p.isModalOpen,
    }));
  }

  controlAgtModal = () => {
    this.setState((p) => ({
      isAgtModalOpen: !p.isAgtModalOpen,
    }));
  }
  handleCorporateSelect = (corporate, caller) => {
    if (caller === 'athena') {
      const { id } = corporate;
      this
        .props
        .corporateActions
        .getLegalEntity(id);
      this.setState({ isModalOpen: true, selectedCorporate: corporate });
    } else {
      const { corp_id } = corporate;
      this
        .props
        .corporateActions
        .getAgtLegalDetails(corp_id);
      this.setState({ isAgtModalOpen: true, selectedCorporate: corporate });
    }
  }

  handleNotificatiomModal = () => {
    this.props.corporateActions.clearState();
  }
  clearState = () => {
    this.props.corporateActions.clearState();
  }
  render() {
    const { isModalOpen, isAgtModalOpen, selectedCorporate } = this.state;
    const {
      isCorporateLoading,
      isCorporatePopulated,
      isCorporateError,
      dbCorporates,
      isLegalDetailsLoading,
      isLegalDetailsPopulated,
      isLegalDetailsError,
      legalDetails,
      isAGTCorporateLoading,
      isAGTCorporatePopulated,
      isAGTCorporateError,
      agtCorporates,
      agtLegalDetails,
      isAGTLegalDetailsLoading,
      addCorporateSuccess,
      addCorporateError,
      addCorporateMessage,
    } = this.props.corporates;
    const notification = '';

    return (
      <div className="container">
        {notification}
        <div className="row">
          <table className="table  table-light">
            <thead>
              <tr>
                <th className="">
                  <span className="text-center">
                    Athena Corporates
                  </span>
                </th>
                <th className="">
                  <span >
                    AGT Corporates
                  </span>
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="row">
          <AthenaCorporate
            isCorporateLoading={isCorporateLoading}
            isCorporateError={isCorporateError}
            isCorporatePopulated={isCorporatePopulated}
            corporates={dbCorporates}
            isLegalDetailsLoading={isLegalDetailsLoading}
            isLegalDetailsError={isLegalDetailsError}
            isLegalDetailsPopulated={isLegalDetailsPopulated}
            legalDetails={legalDetails}
            addCorporateSuccess={addCorporateSuccess}
            addCorporateError={addCorporateError}
            addCorporateMessage={addCorporateMessage}
            onClick={(corporate) => {
            this.handleCorporateSelect(corporate, 'athena');
          }}
            clearState={this.clearState}
          />
          <AgtCorporate
            isAGTCorporateLoading={isAGTCorporateLoading}
            isAGTCorporateError={isAGTCorporateError}
            isAGTCorporatePopulated={isAGTCorporatePopulated}
            corporates={agtCorporates}
            onClick={(corporate) => this.handleCorporateSelect(corporate, 'agt')}
            clearState={this.clearState}

          />
        </div>
        <div id="modal_merge_tool">

          <Modal
            isOpen={isModalOpen}
            ariaHideApp={false}
            onRequestClose={this.controlModal}
            style={modalStyle}
            contentLabel=" Athena Corporate "
          >
            {isLegalDetailsLoading && <div className="alert alert-danger">
              Loading...
                                      </div>
}

            <div>
              <strong>
                {selectedCorporate.name}
              </strong>
              {!isLegalDetailsLoading && legalDetails.legal_entities.length > 0 && legalDetails
                .legal_entities
                .map((l, i) => (
                  <div key={`legalEntitty${i.toString()}`}>
                    <ul>
                      <li />
                      <ol
                        className="alert"
                        style={{
                        textIndent: 'auto',
                      }}
                      >
                        {l && l
                          .gstins
                          .map((g, gi) => (
                            <li key={`legalEntity${i.toString()}_entity${gi.toString()} `}>
                              {g.gstin}
                            </li>
                          ))
}
                      </ol>
                    </ul>

                  </div>
                ))
}
              <div
                className="text-right"
                style={{
                bottom: '0%',
              }}
              >
                <button className="btn btn-default" onClick={this.controlModal}>
                  Cancel
                </button>
                <button className="btn btn-primary" onClick={this.onCreateCorporate}>
                  ADD TO AGT DATABASE
                </button>
              </div>
            </div>

          </Modal>

          <Modal
            isOpen={isAgtModalOpen}
            ariaHideApp={false}
            onRequestClose={this.controlAgtModal}
            style={modalStyle}
            contentLabel=" AGT Corporate Modal"
          >
            {isAGTLegalDetailsLoading && <div className="alert alert-danger">
              Loading...
                                         </div>
}
            {
              <div>
                <h4>
                  <strong>
                    {agtLegalDetails.name}
                  </strong>
                </h4>
                {
              agtLegalDetails
                .legal_entities
                .map((legal, legalIndex) => (
                  <ol key={`agtlegalentity${legalIndex.toString()}`}>
                    <ol>
                      {legal.gstin && Object
                        .keys(legal.gstin)
                        .map((state, stateIndex) => (
                          <li
                            key={`agtlegalEntity${legalIndex.toString()}_state${stateIndex.toString()}`}
                          >
                            {state}
                            :
                            <strong>
                              {legal.gstin[state][0].id}
                            </strong>
                          </li>
                        ))}
                    </ol>
                  </ol>
                ))
            }
              </div>
            }
          </Modal>

          <Modal
            isOpen={addCorporateError || addCorporateSuccess}
            ariaHideApp={false}
            onRequestClose={this.handleNotificatiomModal}
            style={notificationModalStyle}
            contentLabel=" AGT Corporate Modal"
          >
            {
            addCorporateSuccess ?
              <div className="alert alert-success">
                <strong>
                  {addCorporateMessage.name} Added Successfully
                </strong>
              </div> :
              <div className="alert alert-danger">
                <strong>
                 Something went Wrong Please Retry
                </strong>
              </div>
            }

          </Modal>

        </div>
      </div>
    );
  }
}

CorporateMerge.propTypes = {
  corporates: object,
  corporateActions: object,
};

const mapStateToProps = (state) => ({ corporates: state.corporate });

const mapDispatchToProps = (dispatch) => ({
  corporateActions: bindActionCreators(corporateActionCreator, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(CorporateMerge);
