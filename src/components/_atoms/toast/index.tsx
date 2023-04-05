import React, {FC, ReactElement} from "react";
import {toast, Toast as T} from 'react-hot-toast';
import Button from "../buttons/button";
import {IoIosAlert, IoIosClose} from "react-icons/io";
import {IconContext} from "react-icons";
import styles from './toast.module.scss';

interface IToast {
    handleClick?: () => void;
    message: string;
    t: T;
}

interface IHandleToast {
    undoHandleClick?: () => void;
    message: string;
}

/**
 * This component is the molecule element.
 * @param {string} message - image source link
 * @param {function} handleClick - assigned undo button click function
 * @returns toast react component
 */

const Toast: FC<IToast> = ({message, handleClick, t}): ReactElement => {
    return (
        <>
            <IconContext.Provider value={{className: styles.icon}}>
                <div className={styles.container__inner}>
                    <span className={styles.container__inner__icon_box}><IoIosAlert/></span>
                    <span className={styles.container__inner__info_text}>{message}</span>
                    <div className={styles.buttons}>
                        {handleClick &&
                            <Button
                                size={"sm"}
                                onClick={() => {
                                    toast.dismiss(t.id);
                                    handleClick();
                                }}
                                variant={"quaternary"}
                                title={"undo"}/>}
                        {t.type !== 'loading' && (
                            <Button
                                size={"sm"}
                                variant={"quaternary"}
                                iconLeft={<IoIosClose/>}
                                onClick={() => toast.dismiss(t.id)}/>)}
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

/**
 * This function create new toast.
 * @param {string} message - image source link
 * @param {function} undoHandleClick - assigned undo button click function
 * @returns toast trigger function
 */

const HandleToast = ({message, undoHandleClick}: IHandleToast) => {
    toast((t) => (<Toast message={message} handleClick={undoHandleClick} t={t}/>), {
        duration: 3000,
        position: "top-center"
    });
}

export default HandleToast;