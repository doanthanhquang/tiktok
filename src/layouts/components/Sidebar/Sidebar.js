import classNames from "classnames/bind";
import styles from './Sidebar.module.scss'
import config from "~/config";
import Menu, {MenuItem} from '~/layouts/components/Sidebar/Menu'
import { HomeIcon, HomeActiveIcon, UserGroupIcon, UserGroupActiveIcon, LiveIcon, LiveActiveIcon} from "~/components/Icons/Icon";
import SuggestedAccounts from "~/components/SuggestedAccounts/SuggestedAccounts";


const cx = classNames.bind(styles)
function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>} />
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon={<UserGroupActiveIcon/>} />
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/> } />
        </Menu>

        <SuggestedAccounts label="Suggested accounts"/>
        <SuggestedAccounts label="Following accounts"/>
    </aside>
}

export default Sidebar;

