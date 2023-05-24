import classNames from "classnames/bind";
import Tippy from "@tippyjs/react/headless";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Propper";
import styles from "./SuggestedAccounts.module.scss";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function AccountItem() {
  const renderPreview = (props) => {
    return (
      <div tabIndex="-1" {...props}>
        <PopperWrapper>
          <AccountPreview />
        </PopperWrapper>
      </div>
    );
  };

  return (
    <Tippy
      interactive
      delay={[1000, 0]}
      offset={[-20, 0]}
      placement="bottom"
      render={renderPreview}
    >
      <div className={cx("account-item")}>
        <img
          className={cx("avatar")}
          src="https://image.vtc.vn/resize/th/upload/2022/12/13/stream20221212t2030330631-07111086.jpg"
          alt="abc"
        />
        <div className={cx("item-info")}>
          <p className={cx("nickname")}>
            <strong>quocnguyenphu</strong>
            <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
          </p>
          <p className={cx("name")}>Quoc Nguyen Phu</p>
        </div>
      </div>
    </Tippy>
  );
}


export default AccountItem;
