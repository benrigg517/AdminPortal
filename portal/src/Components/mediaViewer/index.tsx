import React, { useState } from 'react';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { IconButton, Modal, Fade, Paper, Typography } from '@material-ui/core';

const MediaViewer = () => {
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
                            <img src={'https://i.imgur.com/4AiXzf8.jpg'}></img>
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
