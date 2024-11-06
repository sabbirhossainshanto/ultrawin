const Dropdown = () => {
  return (
    <div
      className="MuiPaper-root MuiMenu-paper MuiPopover-paper MuiPaper-elevation8 MuiPaper-rounded"
      style={{
        opacity: 1,
        transform: "none",
        transition:
          " opacity 246ms cubic-bezier(0.4, 0, 0.2, 1), transform 164ms cubic-bezier(0.4, 0, 0.2, 1)",
        top: "16px",
        right: "18px",
        transformOrigin: "177.66px -6.12153px",
      }}
    >
      <ul className="MuiList-root MuiMenu-list MuiList-padding" role="menu">
        <li
          className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss21 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
          role="menuitem"
          aria-disabled="false"
        >
          <img
            className="jss22"
            src="/static/media/midnight_aqua.282b3820.svg"
          />
          <span>Midnight Aqua</span>
          <span className="MuiTouchRipple-root"></span>
        </li>
        <li
          className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss21 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
          role="menuitem"
          aria-disabled="false"
        >
          <img
            className="jss22"
            src="/static/media/royal_sunshine.77cc11af.svg"
          />
          <span>Royal Sunshine</span>
          <span className="MuiTouchRipple-root"></span>
        </li>
        <li
          className="MuiButtonBase-root MuiListItem-root MuiMenuItem-root jss21 MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button"
          role="menuitem"
          aria-disabled="false"
        >
          <img
            className="jss22"
            src="/static/media/darkflural_icon.1dcca690.svg"
          />
          <span>Dark Floral Fusion</span>
          <span className="MuiTouchRipple-root"></span>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
