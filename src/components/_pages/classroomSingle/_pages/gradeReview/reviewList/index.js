import {
  Box,
  Grid,
  Typography,
} from '@mui/material';
import {
  LoadingButton,
} from '@mui/lab';
import { useContext, useState, useEffect } from 'react';

import Loader from '../../../../../_common/loader';

import { ReviewListContext } from '../_context/reviewContext';
import useLoadReviews from '../_hooks/useLoadReviews';

import ReviewListItem from './reviewListItem';
import { getErrorMessage } from '../../../../../../helpers/error';

export default function GradeReviewList() {
  const { reviews, isFinalPage } = useContext(ReviewListContext);
  const loadReviews = useLoadReviews();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [error, setError] = useState(null);
  const [isLoadedOnce, setIsLoadedOnce] = useState(false);

  useEffect(() => {
    if (!isLoadedOnce) {
      setIsLoadedOnce(true);
      _loadReview(loadReviews, setIsLoading);
    }
  }, [loadReviews, isLoadedOnce]);

  const _loadReview = (loadReviews = () => {}, loadIndicate = () => {}) => {
    loadIndicate(true);
    loadReviews()
    .then(() => {
    })
    .catch((err) => {
      setError(err);
    })
    .finally(() => {
      loadIndicate(false);
    })
  }

  const loadMore = () => {
    _loadReview(loadReviews, setIsLoadingMore);
  }

  if (isLoading) {
    return <Loader/>;
  }

  if (error) {
    return (
      <Box sx={{
        marginTop: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
      }}>
        <Typography align='center'>{`Lỗi - ${getErrorMessage(error)}`}</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{marginTop: 2}}>
      <Grid container spacing={2}>
        {reviews.map(review => (
          <Grid
            key={review.id}
            item
            xs={12}
          >
            <ReviewListItem review={review}/>
          </Grid>
        ))}
      </Grid>
      {isFinalPage ? (
        <Box sx={{
          marginTop: 2,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}>
          <Typography align='center'>Đã tới cuối danh sách</Typography>
        </Box>
      ) : (
        <Box mt={2}>
          <LoadingButton 
            loading={isLoadingMore}
            fullWidth
            onClick={loadMore}>
              Tải thêm
          </LoadingButton>
        </Box>
      )}
    </Box>
  )
}
