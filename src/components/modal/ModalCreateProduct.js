import { MenuItem, Modal, Select, TextField,Button } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState } from 'react';
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
const styleButton = {

}
const ModalCreateProduct = ({ setOpenCreateProductModal, openCreateModal }) => {
  console.log(openCreateModal);
  const [type, setType] = useState('pizza');

  const handleCreate = () => {};
  const handleChange = (e) =>{
    setType(e.target.value)
  }
  return (
    <Modal
      open={openCreateModal}
      onClose={() => setOpenCreateProductModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div>
          <h1>Create Product</h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <TextField
            style={{ paddingBottom: 20 }}
            id="outlined-basic"
            label="Product name"
            variant="outlined"
            placeholder="Enter product name"
          />
          <TextField
            style={{ paddingBottom: 20 }}
            id="outlined-basic"
            label="Description"
            variant="outlined"
            placeholder="Enter "
          />
          <TextField
            style={{ paddingBottom: 20 }}
            id="outlined-basic"
            label="Ingredient"
            variant="outlined"
            placeholder="Enter ingredient"
          />
          <TextField
            style={{ paddingBottom: 20 }}
            id="outlined-basic"
            label="Image link"
            variant="outlined"
            placeholder="Enter "
          />
          <TextField
            style={{ paddingBottom: 20 }}
            id="outlined-basic"
            label="Price"
            variant="outlined"
            placeholder="Enter price"
          />
          <TextField
            style={{ paddingBottom: 20 }}
            id="outlined-basic"
            label="priceCount"
            variant="outlined"
            placeholder="Enter priceC"
          />
          <Select style={{marginBottom:20}} value={type} label="Type" onChange={handleChange}>
            <MenuItem value={'pizza'}>pizza</MenuItem>
            <MenuItem value={'pasta'}>pasta</MenuItem>
            <MenuItem value={'sides'}>sides</MenuItem>
            <MenuItem value={'drinks'}>drinks</MenuItem>
            <MenuItem value={'dessert'}>dessert</MenuItem>
          </Select>

            <Button variant='outlined'>Create</Button>
        </div>
      </Box>
      
    </Modal>
  );
};

export default ModalCreateProduct;
