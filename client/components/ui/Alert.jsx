import { ExclamationTriangleIcon, CheckCircleIcon, InformationCircleIcon, XCircleIcon } from "@heroicons/react/24/outline"

const Alert = ({ message, alertType }) => {
    return (
        <div className={`alert alert-${alertType}`}>

            {alertType === "info" && <InformationCircleIcon className="w-6 h-6" />}
            {alertType === "success" && <CheckCircleIcon className="w-6 h-6" />}
            {alertType === "warning" && <ExclamationTriangleIcon className="w-6 h-6" />}
            {alertType === "error" && <XCircleIcon className="w-6 h-6" />}

            <span>{message}</span>
        </div>
    )
}

export default Alert