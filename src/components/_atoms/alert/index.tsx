import React, {FC, ReactElement} from "react";
import {toast, Toast as T} from 'react-hot-toast';
import Button from "../buttons/button";
import {IoIosAlert, IoIosClose} from "react-icons/io";
import {IconContext} from "react-icons";
import styles from './alert.module.scss';
import Link from "../link";

interface IAlert {
    title: string;
    message: string;
    learnMoreUrl: string;
    t: T;
}

interface IHandleAlert {
    title: string;
    message: string;
    learnMoreUrl: string;
}

/**
 * This component is the molecule element.
 * @param {string} title - alert title
 * @param {string} message - message sentence
 * @param {string} learnMoreUrl - learnMoreUrl source link
 * @param t
 * @returns alert react component
 */

const Alert: FC<IAlert> = ({title, learnMoreUrl, message, t}): ReactElement => {
    return (
        <>
            <IconContext.Provider value={{className: styles.icon}}>
                <div className={styles.container}>
                    <div className={styles.header}>
                        <div className={styles.container__icon_box}><IoIosAlert/></div>
                        <div className={styles.container__info_box}>
                            <div className={styles.container__info_box__title}>{title}</div>
                            <div className={styles.container__info_box__desc}>
                                {message}
                            </div>
                            <div className={styles.container__info_box__foot}>
                                <Link handleClick={() => window.open(learnMoreUrl, "_blank")} iconState={false} title={"learn more"} size={"md"}/>
                                <Button onClick={() => toast.dismiss(t.id)} size={"sm"} title={"dismiss"} variant={"quaternary"}/>
                            </div>
                        </div>
                        <div className={styles.container__button_box}>
                            {t.type !== 'loading' && (
                                <Button
                                    size={"sm"}
                                    variant={"quaternary"}
                                    iconLeft={<IoIosClose/>}
                                    onClick={() => toast.dismiss(t.id)}/>)}
                        </div>
                    </div>
                </div>
            </IconContext.Provider>
        </>
    );
}

/**
 * This function create new alert.
 * @param {string} title - alert title
 * @param {string} message - message sentence
 * @param {string} learnMoreUrl - learnMoreUrl source link
 * @returns alert trigger function
 */

const HandleAlert = ({title, message, learnMoreUrl}: IHandleAlert) => {
    toast((t) => (<Alert message={message} title={title} learnMoreUrl={learnMoreUrl} t={t}/>), {
        position: "bottom-right"
    });
}

export default HandleAlert;