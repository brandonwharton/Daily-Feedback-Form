import axios from "axios";
// hooks
import { useEffect, useState } from "react";
import { withStyles } from '@material-ui/core/styles'
// material-UI components
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


// change color of table head
const DarkTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.success.dark,
        color: theme.palette.common.white,
    },
}))(TableCell);



function AdminPage() {
    // local state to hold feedback
    const [feedback, setFeedback] = useState([]);
    // local state for alert dialogue
    const [open, setOpen] = useState(false);
    const [deleteId, setDeleteId] = useState('');
    const [isFlagged, setIsFlagged] = useState(false);

    useEffect(() => {
        getFeedback();
    }, [])

    // GET data from DB to display on DOM
    const getFeedback = () => {
        // axios GET request
        axios.get('/feedback')
            .then(response => {
                // set local state with data from DB
                setFeedback(response.data)
            })
            .catch(err => {
                alert('Problem getting data');
                console.log(err);
            })
    }

    // opens confirmation dialog when clicking on delete button
    const handleDeleteOpen = (id) => {
        // save id of clicked delete button and open delete confirmation dialog
        setDeleteId(id);
        setOpen(true);
    }

    // closes delete confirmation dialog after making a selection
    const handleDeleteClose = () => {
        // set state to close confirmation dialog
        setOpen(false);
    }


    // click listener for delete button
    const deleteEntry = (event) => {
        // keep page from refreshing on click
        event.preventDefault();

        // axios DELETE request
        axios.delete(`/feedback/${deleteId}`)
            .then(response => {
                // refresh DOM
                setOpen(false);
                getFeedback();
            })
            .catch(err => {
                alert('Problem with delete request, please try again');
                console.log(err);
            });
    }


    console.log(feedback);
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <DarkTableCell>Feeling</DarkTableCell>
                    <DarkTableCell>Understanding</DarkTableCell>
                    <DarkTableCell>Supported</DarkTableCell>
                    <DarkTableCell>Comments</DarkTableCell>
                    <DarkTableCell></DarkTableCell>
                    <DarkTableCell></DarkTableCell>
                </TableHead>
                <TableBody>
                    {feedback.map(entry => (
                        <TableRow key={entry.id}>
                            <TableCell>{entry.feeling}</TableCell>
                            <TableCell>{entry.understanding}</TableCell>
                            <TableCell>{entry.support}</TableCell>
                            <TableCell>{entry.comments}</TableCell>
                            <TableCell>
                                <Button
                                    variant="contained"
                                    onClick={() => handleDeleteOpen(entry.id)}
                                    // onClick={() => handleDelete(event, entry.id)}
                                >
                                    <Delete />
                                </Button>
                                <Dialog
                                    open={open}
                                    onClose={handleDeleteClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                        {"Delete this feedback entry?"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-description">
                                            This cannot be undone.
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={handleDeleteClose}>
                                            Cancel
                                        </Button>
                                        <Button onClick={deleteEntry}>
                                            Delete
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default AdminPage;