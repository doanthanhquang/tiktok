import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://image.vtc.vn/resize/th/upload/2022/12/13/stream20221212t2030330631-07111086.jpg"
          alt="a"
        />
        <div><Button className={cx('follow')} primary>Follow</Button></div>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Quoc Nguyen Phu</p>
        <p className={cx('analytics')}>
            <strong className={cx('value')}>8.2M </strong>
            <span className={cx('label')}>Followers</span>
            <strong className={cx('value')}>8.2M </strong>
            <span className={cx('label')}>Liked</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
