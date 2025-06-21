import { Modal } from '../../components/modal/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/showModals/store';
import { clearData, hideModal } from '../../redux/showModals/postPreviewSlice';
import type { RootState } from '../../redux/showModals/store';

export function PostPreviewImage() {
    const dispatch = useAppDispatch()
    const { data, isShowModal } = useAppSelector((state: RootState) => state.postPreview)

    function handleClose() {
        dispatch(hideModal())
        dispatch(clearData())
    }

    function renderPost() {
        if (!data) return null

        return (
            <div>
            <img src={data.image} />
        </div>
        )
    }

    return (
        <Modal opened={isShowModal} onClose={handleClose} title={data?.title || ''}>
            {renderPost()}
        </Modal>
    )
}