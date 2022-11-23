import { Modal, Stack, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBillUser } from "src/redux/apiRequest";



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflowY: 'scroll'
};
const ModalViewOrderUser = ({ token, dataUser, openViewOrderModal, handleClose,setValueDate,valueDate }) => {

    const billUser = useSelector((state) => state.bill.billUserActive.userBill)


    const dispatch = useDispatch()
    const handleCloseModal = () => {
        handleClose()
    }

    const handleChangeDate = (e) => {
        setValueDate(e.target.value);
    }

    useEffect(() => {
        const payload = {
            date: valueDate
        }
        if (dataUser) {
            getAllBillUser(token, dispatch, dataUser?._id, payload)
        }
    }, [dataUser, valueDate])
    return (
        <Modal
            open={openViewOrderModal}
            onClose={handleCloseModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div>
                    <h1 style={{ color: '#1f6991' }}>Hóa đơn của {dataUser?.username}</h1>
                </div>
                <Stack component='form' noValidate spacing={3}>
                    <TextField onChange={handleChangeDate} defaultValue={valueDate} id="date" label="time" type="date" InputLabelProps={{ shrink: true }} sx={{ width: 220 }} />
                </Stack>
                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                    <p style={{ fontWeight: 600, color: '#ee7638' }}>Total Bill: {billUser?.total} </p>
                    <p style={{ fontWeight: 600, color: '#ee7638' }}>All Price: {billUser?.price}</p>
                </div>
                <div style={{ flexDirection: 'row', display: 'flex', paddingBottom: 7, borderBottom: '1px solid #bec1c7' }}>
                    <div style={{ width: 150, color: '#A0AEC0', fontWeight: 600 }}>Table</div>
                    <div style={{ width: 150, color: '#A0AEC0', fontWeight: 600 }}>Status</div>
                    <div style={{ width: 200, color: '#A0AEC0', fontWeight: 600 }}>Product</div>
                    <div style={{ width: 150, color: '#A0AEC0', fontWeight: 600 }}>Price</div>

                </div>
                <div >
                    {billUser?.allBill.map((item, index) => {
                        return (
                            <div key={index} style={{ display: 'flex', flexDirection: 'row', borderBottom: '1px solid #bec1c7', paddingBottom: 15, paddingTop: 15 }}>
                                <div style={{ width: 150 }}>{item.numberTable}</div>
                                <div style={{ width: 150 }}>
                                    {
                                        item.status === "DON_MOI"
                                            ? <div style={{ fontWeight: 600, width: 'inherit', color: '#82e8a7' }}>New</div>
                                            : item.status === "DON_DA_XAC_NHAN"
                                                ? <div style={{ fontWeight: 600, width: 'inherit', color: '#facc17' }}>Wait chef</div>
                                                : item.status === "BEP_XAC_NHAN"
                                                    ? <div style={{ fontWeight: 600, width: 'inherit', color: '#fb9948' }}>Wait place</div>
                                                    : item.status === "NHAN_VIEN_NHAN_MON"
                                                        ? <div style={{ fontWeight: 600, width: 'inherit', color: '#1f6991' }}>Done!</div>
                                                        : item.status === "HUY_DON"
                                                            ? <div style={{ fontWeight: 600, width: 'inherit', color: 'red' }}>Drop bill</div>
                                                            : <div>not status</div>
                                    }
                                </div>
                                <div style={{ width: 200 }}>{item.products.map((product, index) => {
                                    return (
                                        <div>{product.name}</div>
                                    )
                                })}</div>
                                <div style={{ width: 150, color: '#1f6991', fontWeight: 600 }}>{item.priceBill} đ</div>
                            </div>


                        )
                    })}
                </div>
            </Box>
        </Modal>
    );
}

export default ModalViewOrderUser;