import PropTypes from "prop-types";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./SuggestedAccounts.module.scss";

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('account-item')}>
      <img
        className={cx('avatar')}
        src="https://image.vtc.vn/resize/th/upload/2022/12/13/stream20221212t2030330631-07111086.jpg"
        alt="abc"
      />
      <div className={cx('item-info')}>
        <p className={cx('nickname')}>
            <strong>quocnguyenphu</strong>
            <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
        </p>
        <p className={cx('name')}>Quoc Nguyen Phu</p>
      </div>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
