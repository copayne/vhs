import { clsx } from 'clsx';
import { useSelectedVideo } from "~/stores/SelectedVideo";
import { type Criteria, useVideos } from "~/stores/Videos";
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import type { Category } from '~/pages';

interface FilteringBy {
  categories: Array<Category>
}

const FilteringBy = ({ categories }: FilteringBy) => {
  const criteria = useVideos(state => state.criteria);
  const setCriteria = useVideos(state => state.setCriteria);
  const setFeatured = useVideos(state => state.setFeatured);
  const category = criteria?.category
    ? categories.find(cat => cat.id === criteria.category)
    : '';

  const handleRemoveFeatured = (name: string) => () => {
    if (criteria.featured.length === 1) {
      setFeatured([]);
    } else {
      const index = criteria.featured.findIndex(n => n === name);

      if (index !== -1) {
        setFeatured(criteria.featured.filter(n => n !== name));
      }
    }
  }

  const handleRemoveCategory = () => {
    setCriteria({
      ...criteria,
      category: null,
    });
  }

  return (
  <div className="flex flex-wrap">
    {
      !!category && (
        <div className="flex items-center pr-2 flex-wrap">
          <Typography
            className="text-default-black mr-1"
            variant="caption"
          >
            Tagged:
          </Typography>
          <Chip
            color="secondary"
            className="mr-1 mb-1"
            label={category.name}
            onDelete={handleRemoveCategory}
            size="small"
          />
        </div>
      )
    }
    {
      !!criteria.featured.length && (
        <div className="flex items-center pr-2 flex-wrap">
          <Typography
            className="text-default-black mr-1"
            variant="caption"
          >
            Featuring:
          </Typography>
          {
            criteria.featured.map(cast => (
              <Chip
                key={cast}
                className="mr-1 mb-1"
                color="success"
                label={cast}
                onDelete={handleRemoveFeatured(cast)}
                size="small"
              />
            ))
          }
        </div>
      )
    }
  </div>
  );
}

export default FilteringBy;
