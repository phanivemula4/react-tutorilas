import React, { useReducer, useEffect } from 'react';

const FETCH_INIT = 'FETCH_INIT';
const FETCH_START = 'FETCH_START';
const FETCH_ERROR = 'FETCH_ERROR';

const initialState = {
  loading: true,
  data: null,
  error: null,
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case FETCH_INIT:
      return { ...state, loading: true, error: null };
    case FETCH_START:
      return { ...state, loading: false, data: action.payload };
    case FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const MultiState = () => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const dataHandler = async () => {
    dispatch({ type: FETCH_INIT });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const newData = await response.json();
      dispatch({ type: FETCH_START, payload: newData });
    } catch (error) {
      dispatch({ type: FETCH_ERROR, payload: error.message });
    }
  };

  useEffect(() => {
    dataHandler();
  }, []);

  return (
    <div>
      {state.loading && <p>Loading...</p>}
      {state.data &&
        state.data.map((item) => (
          <div key={item.id}>
            <h2>{item.name}</h2>
          </div>
        ))}
      {state.error && <div>Error: {state.error}</div>}
    </div>
  );
};

export default MultiState;
