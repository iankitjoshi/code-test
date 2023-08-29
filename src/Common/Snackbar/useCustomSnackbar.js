/* eslint-disable */

import { useSnackbar } from 'notistack';

export default () => {
    const { enqueueSnackbar } = useSnackbar()

    return { enqueueSnackbar };
};