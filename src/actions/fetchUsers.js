import { urlApi } from '../constant';

export const startFetchUsers = () => ({
  type: 'START_FETCH_USERS',
});
export const fetchSuccessUsers = users => ({
  type: 'FETCH_SUCCESS_USERS',
  users,
});
export const fetchSuccessUser = user => ({
  type: 'FETCH_SUCCESS_USER',
  user,
});
export const fetchErrorUsers = err => ({
  type: 'FETCH_ERROR_USERS',
  err,
});

export const asyncFetchUsers = date => (dispatch) => {
  dispatch(startFetchUsers());
  fetch(`${urlApi}/users`)
    .then(res => res.json())
    .then((apiResponse) => {
      dispatch(fetchSuccessUsers(apiResponse['hydra:member']));
      dispatch(fetchSuccessUser(apiResponse['hydra:member'][12]));
    })
    .catch(() => {
      dispatch(fetchErrorUsers('Erreur lors du chargement des utilisateurs'));
    });
};