import classNames from "classnames/bind"
import styles from "./AccountItem.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"


const cx = classNames.bind(styles)

function AccountItem(){
    return(
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/f004db87a0208a4bbd6138e41654e6c6~c5_300x300.webp?x-expires=1681869600&x-signature=TFOsDA50CgC0pqMZLQINzTOsW1Y%3D" alt="Hoaa"/>
            <div className={cx('info')}>
                <p className={cx('name')}>
                    <span>Rồng hấp lá chanh</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </p>
                <span className={cx('username')}>meodillacc</span>
            </div>
        </div>
    )
}

export default AccountItem