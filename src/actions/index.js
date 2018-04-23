
export const SET_VISITORS = 'SET_VISITORS'
export const SET_SHOW = 'SET_SHOW'
export const LOAD_COUNTRIES = 'LOAD_COUNTRIES'

const api_countries = 'https://restcountries.eu/rest/v2/all'

export const setVisitors = payload => ({ type: SET_VISITORS, payload })

export const setShow = payload => ({ type: SET_SHOW, payload })

export const  loadCountries = () => {
    return (dispatch, getState) => {

        dispatch({type : "REQUEST_STARTED"});

        fetch(api_countries).then( data => {
            return data.json()
          }).then(
            response => dispatch({type : "REQUEST_SUCCEEDED", payload : response}),
            error => dispatch({type : "REQUEST_FAILED", error : error})
        );
    };
}