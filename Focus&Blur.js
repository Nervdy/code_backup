// We close the popover on the next tick by using setTimeout.
// This is necessary because we need to first check if
// another child of the element has received focus as
// the blur event fires prior to the new focus event.
onBlurHandler() {
  this.timeOutId = setTimeout(() => {
    this.setState({
      isOpen: false
    });
  });
}

// If a child receives focus, do not close the popover.
onFocusHandler() {
  clearTimeout(this.timeOutId);
}