import Button from '@material-ui/core/Button'

function BackButton({navigateBack}) {

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={navigateBack}
        >
        Back
        </Button>
    )
}

export default BackButton