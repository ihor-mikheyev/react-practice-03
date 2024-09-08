import { Container, CountryInfo, GoBackBtn, Loader, Section } from 'components';
import { useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchCountry } from 'service/countryApi.js';

export const Country = () => {
  const { countryId } = useParams();
  const location = useLocation();

  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!countryId) return;
    async function wrapper() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchCountry(countryId);
        setCountry(response);
        console.log(response);
        setLoading(false);
      } catch (error) {
        setError('Oops!' + error.message);
      } finally {
        setLoading(false);
      }
    }
    wrapper();
  }, [countryId]);

  return (
    <Section>
      <Container>
        {loading && <Loader />}
        {error && <p>{error}</p>}
        <GoBackBtn />
        {country && <CountryInfo data={country} />}
      </Container>
    </Section>
  );
};
