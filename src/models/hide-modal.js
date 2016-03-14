function hide () {
  const myModal = document.getElementById('myModal')
  const modalBackdrop = document.getElementsByClassName('modal-backdrop fade in')
  if (myModal.className.indexOf('in') > 0) {
    document.body.className = ''
    modalBackdrop[0].parentNode.removeChild(modalBackdrop[0])
    myModal.className = 'modal fade'
    myModal.style.display = 'none'
  }
}

export default hide
