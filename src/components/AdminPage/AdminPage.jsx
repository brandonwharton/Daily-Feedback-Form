import axios from "axios";
// hooks
import { useEffect, useState } from "react";
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


function AdminPage() {
    // local state to hold feedback
    const [feedback, setFeedback] = useState([]);

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

    // click listener for delete button
    const handleDelete = (event, id) => {
        // keep page from refreshing on click
        event.preventDefault();
        // axios DELETE request
        axios.delete(`/feedback/${id}`)
            .then(response => {
                // refresh DOM
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
                    <TableCell>Feeling</TableCell>
                    <TableCell>Understanding</TableCell>
                    <TableCell>Supported</TableCell>
                    <TableCell>Comments</TableCell>
                    <TableCell></TableCell>
                    <TableCell></TableCell>
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
                                    onClick={() => handleDelete(event, entry.id)}
                                >
                                    <Delete />
                                </Button>
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