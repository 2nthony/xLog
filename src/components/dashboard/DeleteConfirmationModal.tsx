import { useTranslation } from "react-i18next"
import { Modal } from "../ui/Modal"
import { Button } from "../ui/Button"

export const DeleteConfirmationModal: React.FC<{
  open: boolean
  setOpen: (open: boolean) => void
  onConfirm: () => void
  isPost?: boolean
}> = ({ open, setOpen, onConfirm, isPost }) => {
  const { t } = useTranslation("dashboard")

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className="px-5 py-4 space-y-4">
        <p>{t("delete_confirmation", { context: isPost ? "post" : "page" })}</p>
        <div className="flex justify-end space-x-2">
          <Button variant="secondary" onClick={() => setOpen(false)}>
            <span className="truncate">{t("Cancel")}</span>
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              setOpen(false)
              onConfirm()
            }}
          >
            <span className="truncate">{t("Confirm")}</span>
          </Button>
        </div>
      </div>
    </Modal>
  )
}
