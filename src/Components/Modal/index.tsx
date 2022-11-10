import { FC, ReactNode } from "react"
import { Modal as ModalC, View } from "react-native"
import styles from "./styles"

interface ModalProps {
    visible: boolean
    children?: ReactNode
}

const Modal: FC<ModalProps> = ({
    visible,
    children
}) => {
    return (
        <ModalC animationType="slide"
            transparent={true}
            visible={visible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {children}
                    </View>
                </View>
        </ModalC>
    )
}

export default Modal
