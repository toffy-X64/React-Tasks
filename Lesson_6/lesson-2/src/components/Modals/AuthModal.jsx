import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

function AuthModal({onClose, onContinue, ModalType}) {
    const renderModal = () => {
        if (ModalType === 'register')
            return <RegisterModal onClose={onClose} onContinue={onContinue} />

        return <LoginModal onClose={onClose} onContinue={onContinue} />
    };

    return (
        <>
            {renderModal()}
        </>
    );
}

export default AuthModal;