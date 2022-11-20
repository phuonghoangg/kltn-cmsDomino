import { Modal, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from 'src/theme/overrides/Typography';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

 const ModalCreateProduct = ({setOpenCreateProductModal,openCreateModal}) => {
    console.log(openCreateModal);
  return (
    <Modal
      open={openCreateModal}
      onClose={()=>setOpenCreateProductModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      </Box>
    </Modal>
  );
}

export default ModalCreateProduct
