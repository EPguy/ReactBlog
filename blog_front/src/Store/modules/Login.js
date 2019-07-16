import { createAction, handleActions } from 'redux-actions';

export const handleChange = createAction('Handle_Change');

export default handleActions({
    'Handle_Change': (state, action) => ({
        ...state,
        input: {
            ...state.input,
            [action.payload.name]: action.payload.value
        }
    })
}, {
  input: {
      First_Name: '',
      Last_Name: '',
      Email_Address: '',
      Password: ''
  }  
})