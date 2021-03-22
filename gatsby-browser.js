import 'lazysizes';
import './src/styles/global.css';


export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )

  if (answer === true) {
    window.location.reload()
  }
}

export const onInitialClientRender = () => {
  setTimeout(function() {
    document.getElementById("___loader").style.display = "none"
}, 1000)
}
