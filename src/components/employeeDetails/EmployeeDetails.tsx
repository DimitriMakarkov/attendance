import './EmployeeDetails.css'
// import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useState } from 'react';

export const EmployeeDetails = () => {
    const [open, setOpen] = useState(false);
    const [dateTime, setDateTime] = useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        console.log('Clock In Date and Time:', dateTime);
        handleClose();
    };


    return (
        <div className="employeeDetails">

            <h2>Employee Detailsssss</h2>

            <span style={{ marginRight: '100px' }}>First Name: </span>
            <span>Last Name:</span><br /><br />
            <span style={{ marginRight: '120px' }}>Manager:</span>
            <span>Role:</span><br /><br /><br />

            <div> 
                <Button variant='contained' onClick={handleClickOpen}>Clock In</Button>

                <Dialog open={open} onClose={handleClose}>
                    <DialogTitle>Clock In</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            label="Enter Date and Time"
                            type="datetime-local"
                            fullWidth
                            variant="outlined"
                            value={dateTime}
                            onChange={(e) => setDateTime(e.target.value)}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={handleSave} color="primary">
                            Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>

        </div>
    );
}

// function EmployeeDetails(): JSX.Element 