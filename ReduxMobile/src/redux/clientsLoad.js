import { setLoading, setError, setCompanyData } from "./clientsSlice";

export const loadCompanyData = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading(true));
      dispatch(setError(null));

      const response = await fetch(
        "https://fe.it-academy.by/Examples/mobile_company.json"
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      const companyData = {
        companyName: data.companyName,
        clients: data.clientsArr || [],
      };

      dispatch(setCompanyData(companyData));
      dispatch(setLoading(false));
    } catch (err) {
      dispatch(setError(err.message));
      dispatch(setLoading(false));
    }
  };
};
