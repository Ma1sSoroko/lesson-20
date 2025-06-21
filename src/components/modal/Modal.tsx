import { useEffect, useState, useRef } from 'react'
import { Modal as BootstrapModal } from 'bootstrap'

export function Modal(props: { opened: boolean, onClose: () => void, title: string, children: React.ReactNode }) {
  const [modalInstance, setModalInstance] = useState<BootstrapModal | null>(null)
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!modalInstance) return

    if (props.opened) {
      modalInstance.show()
    } else {
      modalInstance.hide()
    }
  }, [props.opened, modalInstance])


  useEffect(() => {
    if (modalRef.current) {
      const modal = BootstrapModal.getOrCreateInstance(modalRef.current)
      setModalInstance(modal)
    }
  }, [modalRef])

  useEffect(() => {
    if (!modalRef.current) return

    modalRef.current.addEventListener('hidden.bs.modal', props.onClose)

    return () => {
      if (modalRef.current) {
        modalRef.current.removeEventListener('hidden.bs.modal', props.onClose)
      }
    }
  }, [modalRef])

  return (
    <>
      <div className="modal" tabIndex={-1} ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{props.title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}