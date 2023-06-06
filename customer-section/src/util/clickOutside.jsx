const handleClickOutside = (e, ref) => {
  console.log(e.target);
  if (ref?.current && !ref?.current.contains(e.target)) {
    console.log('yes');
    setToggle(false);
  }
};

export default handleClickOutside;
