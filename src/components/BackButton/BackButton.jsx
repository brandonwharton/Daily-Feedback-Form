// material-UI components
import Button from '@material-ui/core/Button'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

// Render a generic back button to be used by a handful of components
// navigateBack will be passed as props from each, each being a very similar
// navigation function with different routes depending on the component it came from.
function BackButton({navigateBack}) {

    return (
        <Button
            variant="contained"
            color="secondary"
            onClick={navigateBack}
            style={{maxWidth: '90px', maxHeight: '90px', minWidth: '90px', minHeight: '90px'}}
        >
            <ArrowBackIosIcon />
        </Button>
    )
}

export default BackButton