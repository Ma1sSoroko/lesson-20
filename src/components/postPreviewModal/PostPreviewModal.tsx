import { Modal } from '../modal/Modal';
import { useAppDispatch, useAppSelector } from '../../redux/showModals/store';
import { clearData, hideModal } from '../../redux/showModals/postPreviewSlice';
import type { RootState } from '../../redux/showModals/store';

export function PostPreviewModal() {
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
            <div>
                <h2>{data.title}</h2 >
                <p>{data.text}</p>
                <p className="card-text"><small className="text-body-secondary">{data.date}</small></p>
            </div>
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