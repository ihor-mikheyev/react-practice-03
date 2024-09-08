import { GridItem, Grid } from '..';
import { Link, useLocation } from 'react-router-dom';

export const CountryList = ({ list }) => {
  const location = useLocation();
  return (
    <Grid>
      {list.map(item => {
        return (
          <GridItem key={item.id}>
            <Link to={`/country/${item.id}`} state={location}>
              <img src={item.flag} alt={item.country} />
            </Link>
          </GridItem>
        );
      })}
    </Grid>
  );
};
