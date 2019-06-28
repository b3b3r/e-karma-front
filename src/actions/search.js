import { urlApi } from '../constant';

export const search = () => ({
  type: 'SEARCH',
});

export const StartFetchTopics = () => ({
  type: 'START_FETCH_TOPICS',
});
export const FetchSuccessTopics = topics => ({
  type: 'FETCH_SUCCESS_TOPICS',
  topics,
});
export const FetchErrorTopics = err => ({
  type: 'FETCH_ERROR_TOPICS',
  err,
});

export const asyncFetchTopics = () => (dispatch) => {
  StartFetchTopics();
  fetch(`${urlApi}/topics`)
    .then(res => res.json())
    .then((apiResponse) => {
      dispatch(FetchSuccessTopics(apiResponse['hydra:member']));
    })
    .catch(() => {
      dispatch(FetchErrorTopics('Erreur lors du chargement des topics'));
    });
};

export const StartFetchTags = () => ({
  type: 'START_FETCH_TAGS',
});
export const FetchSuccessTags = tags => ({
  type: 'FETCH_SUCCESS_TAGS',
  tags,
});
export const FetchErrorTags = err => ({
  type: 'FETCH_ERROR_TAGS',
  err,
});

export const asyncFetchTags = () => (dispatch) => {
  StartFetchTags();
  fetch(`${urlApi}/tags`)
    .then(res => res.json())
    .then((apiResponse) => {
      dispatch(FetchSuccessTags(apiResponse['hydra:member']));
    })
    .catch(() => {
      dispatch(FetchErrorTags('Erreur lors du chargement des tags'));
    });
};