import React, { useState, FunctionComponent } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton, Modal, Fade, Paper, Typography } from '@material-ui/core';

interface MediaProps {
    MediaLink: string;
}

const MediaViewer: FunctionComponent<MediaProps> = (props: MediaProps) => {
    const [showModal, setShowModal] = useState(false)

    const handleClose = (modalShown: boolean) => {
        setShowModal(modalShown);
    };

    const MediaModal = () => {
        return (
            <Modal
                aria-labelledby='Your Media'
                aria-describedby='Image Description'
                open={showModal}
                onClose={() => handleClose(false)}
                closeAfterTransition
                style={{ position: 'absolute', display: 'flex', justifyContent: 'center', alignItems: 'center', borderColor: 'black' }}
            >
                <Fade in={showModal}>
                    <div style={{ minHeight: 200, minWidth: 200, maxHeight: '60%', maxWidth: '60%' }} >
                        <Paper style={{ padding: 20 }} >
                            <Typography>
                                Image
                            </Typography>
                            <img style={{ maxWidth: 1200, maxHeight: 800 }} src={props.MediaLink}></img>
                        </Paper>
                    </div>
                </Fade>
            </Modal>
        )
    }

    return (
        <div>
            <IconButton size='medium' onClick={() => setShowModal(true)} >
                <VisibilityIcon />
            </IconButton>
            <MediaModal />
        </div >
    );
};

export default MediaViewer;
