import { useEffect, useState } from "react";

const localCache = {

};

export const useFetch = ( url ) => {

  const [state, setState] = useState({
    data: null,
    isLoading: true,
    hasError: false,
    error: null
  });

  useEffect(() => {
    getFetch();
  }, [url]);

  const setLoadingState = () => {
    setState({
      data: null,
      isLoading: true,
      hasError: false,
      error: null
    });
  }

  const getFetch = async () => {
    if(localCache[url]) {
      console.log('usando cache');
      setState({
        data: localCache[url],
        error: null,
        hasError: false,
        isLoading: false
      });
      return;
    }

    setLoadingState();
    const resp = await fetch(url);

    if( !resp.ok ) {
      setState({
        data: null,
        isLoading: false,
        hasError: true,
        error: {
          code: resp.status,
          message: resp.statusText
        }
      });

      return;
    }

    const data = await resp.json();
    localCache[url] = data;

    setState({
      data,
      isLoading: false,
      hasError: false,
      error: null
    });
  }

  return {
    data: state.data,
    isLoading: state.isLoading,
    hasError: state.hasError
  }
}
