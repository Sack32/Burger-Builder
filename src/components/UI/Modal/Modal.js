import React, {Fragment} from 'react'
import styles from './Modal.module.scss'
import BackDrop from '../BackDrop/BackDrop'

const Modal = props => {
    return (
        <Fragment>
            <BackDrop show={props.show} clicked={props.close}/>
            <div 
                className = {styles.Modal}
                style = {{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}
            >
                {props.children}
            </div>
        </Fragment>
    )
}

export default Modal