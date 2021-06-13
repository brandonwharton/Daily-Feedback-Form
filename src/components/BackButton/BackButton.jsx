// material-UI components
import Button from '@material-ui/core/Button'

// Render a generic back button to be used by a handful of components
// navigateBack will be passed as props from each, each being a very similar
// navigation function with different routes depending on the component it came from.
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