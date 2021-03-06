import { Box, Typography, Button, Stack } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { useState } from 'react';
import { AlignCenter } from '../../../../../../../_common/utilBoxes';

import useRemoveClassAssignment from '../../../hooks/removeAssignment';

export default function AssignmentDeleteForm({
  assignment, 
  handleClose = () => {}
}) {
  const { id } = assignment;
  const removeClassAssignment = useRemoveClassAssignment();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleDeleteAssignment = () => {
    setIsSubmitting(true);
    removeClassAssignment(id, () => {
      setIsSubmitting(false);
    });
  }

  const onClose = () => {
    handleClose();
  }

  return (
    <Box padding={1}>
      <AlignCenter flexDirection='column'>
        <Box padding={1}>
          <Typography>Xác nhận xóa?</Typography>
        </Box>
        <Stack spacing={2} direction='row'>
          <LoadingButton 
            loading={isSubmitting}
            variant='contained'
            color='error'
            onClick={handleDeleteAssignment}
          >
            Xóa
          </LoadingButton>
          <Button 
            variant='outlined'
            color='defaultColor'
            onClick={onClose}
          >
            Hủy
          </Button>
        </Stack>
      </AlignCenter>
    </Box>
  )
}
