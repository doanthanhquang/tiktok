import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner} from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Propper";
import AccountItem from "~/components/AccountItem";
import styles from "./Search.module.scss";
import { SearchIcon } from "~/components/Icons";
import { useEffect, useRef, useState } from "react";
import { useDebounce } from "~/hooks";
import * as request from "~/utils/request";

const cx = classNames.bind(styles);

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true)
  const [loading, setLoading] = useState(false)

  const debounced = useDebounce(searchValue, 500)

  const inputRef = useRef()

  useEffect(() => {
    if(!debounced.trim()){
      setSearchResult([])
      return
    }

    setLoading(true)

    request
      .get('users/search?', {
      params: {
        q: debounced,
        type: 'less'
      }
    })
      .then(res =>{
        setSearchResult(res.data);
        setLoading(false)
      })
      .catch(() =>{
        setLoading(false)
      })
  }, [debounced]);

  const handleClear = () =>{
    setSearchValue('')
    setSearchResult([])
    inputRef.current.focus()
  }

  const handleHideResult = () =>{
    setShowResult(false)
  }

  const handleChange = (e) =>{
    const searchValue = e.target.value
    if (!searchValue.startsWith(' ')){
      setSearchValue(searchValue)
    }
  }

  return (
    <HeadlessTippy
      interactive
      appendTo={() =>document.body}
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Accounts</h4>
            {searchResult.map((result) => (
              <AccountItem key={result.id} data={result} />
            ))}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
        ref={inputRef}
          value={searchValue}
          placeholder="Search accounts and videos"
          spellCheck={false}
          onChange={handleChange}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />}
        <button className={cx("search-btn")} onMouseDown={e => e.preventDefault()}>
          <SearchIcon />
        </button>
      </div>
    </HeadlessTippy>
  );
}

export default Search;
