import { useState, useEffect } from 'react';
import { fetchData, FetchState } from '../helpers';

const query = JSON.stringify({
  query: `{
        categories(ids: "156126", locale: de_DE) {
          name
          articleCount
          childrenCategories {
            name
            urlPath
          }
          categoryArticles(first: 50) {
            articles {
              name
              variantName
              prices {
                currency
                regular {
                  value
                }
              }
              images(
                format: WEBP
                maxWidth: 200
                maxHeight: 200
                limit: 1
              ) {
                path
              }
            }
          }
        }
      }`,
});

/**
 * Custom hook required to fetch data from server.
 * @param url Url to fetch data.
 */
export function useProducts(url: string): FetchState {

  const [state, setState] = useState<FetchState>({
    status: 'idle',
    data: null,
    error: null
  });


  useEffect(() => {

    const opts = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: query
    }

    async function getProducts() {
      try {
        setState({
          status: 'idle',
          data: null,
          error: null
        });
        const response = await fetchData(url, opts);
        setState({
          status: 'resolved',
          data: response.data.categories,
          error: null
        });
      } catch (error) {
        setState({
          status: 'rejected',
          data: null,
          error: error
        })
      }
    }

    getProducts();

  }, [url]);

  return { status: state.status, data: state.data, error: state.error };
}