import { useState, useEffect, useCallback, useRef } from "react";
import { getProducts } from "../services/productService";
import { Product, ProductQueryParams } from "../types";

export function useProducts(params: ProductQueryParams = {}) {
  const [data, setData] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetchingNextPage, setFetchingNextPage] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [meta, setMeta] = useState<any>(null);
  const [page, setPage] = useState(1);

  // Use a ref to store the previous params to detect resets
  // Sync parameters and reset data on change
  const paramsKey = JSON.stringify(params);
  const prevParamsKey = useRef(paramsKey);

  useEffect(() => {
    if (prevParamsKey.current !== paramsKey) {
      setData([]);
      setPage(1);
      setError(null);
      prevParamsKey.current = paramsKey;
    }
  }, [paramsKey]);

  useEffect(() => {
    async function fetchData() {
      try {
        if (page === 1) setLoading(true);
        else setFetchingNextPage(true);

        const result = await getProducts({ ...params, PageIndex: page });
        
        setData(prev => (page === 1 ? result.data.data : [...prev, ...result.data.data]));
        setMeta(result.data.meta);
        setError(null);
      } catch (err: any) {
        // Fallback Strategy: If any request for the first page fails due to a server error, try client-side fallback
        const isServerError = !err.response || err.response.status >= 500;
        
        if (page === 1 && isServerError) {
          try {
            console.warn("Server error detected, attempting client-side fallback...");
            const fallbackResult = await getProducts({ PageSize: 50 });
            let filteredData = fallbackResult.data.data;

            if (params.HaveOffer) {
              filteredData = filteredData.filter(p => p.haveOffer);
            }
            if (params.Category) {
              filteredData = filteredData.filter(p => 
                p.category.name.toLowerCase() === params.Category?.toLowerCase()
              );
            }

            setData(filteredData.slice(0, params.PageSize || 10));
            setMeta({ ...fallbackResult.data.meta, hasNextPage: false });
            setError(null);
          } catch (fallbackErr: any) {
            console.error("Fallback attempt also failed:", fallbackErr);
            setError(err.message || "Something went wrong. Please try again later.");
          }
        } else {
          setError(err.message || "Something went wrong. Please try again later.");
        }
      } finally {
        setLoading(false);
        setFetchingNextPage(false);
      }
    }

    fetchData();
  }, [paramsKey, page]);

  const loadMore = useCallback(() => {
    if (!loading && !fetchingNextPage && meta?.hasNextPage) {
      setPage(prev => prev + 1);
    }
  }, [loading, fetchingNextPage, meta]);

  return { data, loading, error, meta, loadMore, fetchingNextPage };
}
