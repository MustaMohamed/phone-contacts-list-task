import actionsConstants from '../../constants/redux';

const { appConstants } = actionsConstants;

export default {
  showLoading: () => {
    return (dispatch) => dispatch({ type: appConstants.SHOW_LOADING, showLoading: true });
  },
  hideLoading: () => {
    return (dispatch) => dispatch({ type: appConstants.HIDE_LOADING, showLoading: false });
  },
  updateContactsPermission: (permissionAccess) => {
    return (dispatch) => dispatch({ type: appConstants.CONTACTS_ACCESS_OK, contactsAccessOk: permissionAccess });

  }
};